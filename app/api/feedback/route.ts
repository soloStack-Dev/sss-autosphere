import { NextResponse } from "next/server";
import { connection } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { feedbackSchema, parseError } from "@/lib/validation";
import { hasEnvVars } from "@/lib/utils";
import { fetchFeedback } from "@/lib/data-access";
import type { Feedback } from "@/lib/data/feedback";

/**
 * True when Postgres/PostgREST reports a missing table or a table absent from
 * the schema cache (`42P01`, `PGRST205`) — i.e. the migration has not run yet.
 */
function isMissingTable(error: { code?: string; message?: string } | null) {
  if (!error) return false;
  if (error.code === "42P01" || error.code === "PGRST205") return true;
  return /could not find the table|relation .* does not exist/i.test(
    error.message ?? "",
  );
}

export async function GET() {
  await connection();
  const feedback = await fetchFeedback();
  return NextResponse.json(
    { ok: true, feedback },
    { headers: { "cache-control": "no-store" } },
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 },
    );
  }

  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please fix the highlighted fields", fields: parseError(parsed.error) },
      { status: 400 },
    );
  }
  const input = parsed.data;
  const reference = `SSS-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;

  const entry: Feedback = {
    id: `local-${crypto.randomUUID()}`,
    name: input.name,
    rating: input.rating,
    message: input.message,
    createdAt: new Date().toISOString(),
  };

  if (hasEnvVars) {
    try {
      const supabase = createSupabaseClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        { auth: { persistSession: false, autoRefreshToken: false } },
      );

      const { data, error } = await supabase
        .from("feedback")
        .insert({ name: input.name, rating: input.rating, message: input.message })
        .select("id,name,rating,message,created_at")
        .single();

      if (error || !data) {
        // Schema not migrated yet: keep the visitor experience working and
        // let the UI show the new review optimistically.
        if (isMissingTable(error)) {
          return NextResponse.json({
            ok: true,
            reference,
            feedback: entry,
            demo: true,
            warning:
              "The feedback table does not exist yet — run the feedback migration in Supabase.",
          });
        }
        return NextResponse.json(
          { ok: false, error: "Your feedback could not be saved. Please try again." },
          { status: 500 },
        );
      }

      const saved: Feedback = {
        id: data.id,
        name: data.name,
        rating: data.rating,
        message: data.message,
        createdAt: data.created_at,
      };

      // Best-effort private copy (with contact details) for the shop inbox.
      // Never let this secondary write fail the visitor's submission.
      try {
        await supabase.from("enquiries").insert({
          enquiry_type: "feedback",
          payload: input,
          status: "new",
        });
      } catch {
        /* ignored — the public review is already stored */
      }

      return NextResponse.json({ ok: true, reference, feedback: saved });
    } catch {
      return NextResponse.json(
        { ok: false, error: "Could not reach the database. Please try again." },
        { status: 500 },
      );
    }
  }

  // No env vars: dev/demo mode — return the entry without persisting.
  return NextResponse.json({ ok: true, reference, feedback: entry, demo: true });
}
