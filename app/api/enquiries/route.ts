import { NextResponse } from "next/server";
import {
  enquirySchema,
  partEnquirySchema,
  paymentEnquirySchema,
  feedbackSchema,
  parseError,
} from "@/lib/validation";
import { hasEnvVars } from "@/lib/utils";
import { createClient } from "@supabase/supabase-js";

const schemas = {
  enquiry: enquirySchema,
  part: partEnquirySchema,
  payment: paymentEnquirySchema,
  feedback: feedbackSchema,
} as const;

export type EnquiryType = keyof typeof schemas;

function adminClient() {
  if (!hasEnvVars) return null;
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    { auth: { persistSession: false } },
  );
}

export async function POST(request: Request) {
  const url = new URL(request.url);
  const type = (url.searchParams.get("type") ?? "enquiry") as EnquiryType;
  const schema = schemas[type] ?? enquirySchema;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON request body" },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parseError(parsed.error) },
      { status: 422 },
    );
  }

  const client = adminClient();
  if (client) {
    const { error } = await client.from("enquiries").insert({
      enquiry_type: type,
      payload: parsed.data,
      status: "new",
    });
    if (error) {
      return NextResponse.json(
        { ok: false, error: "Failed to record the enquiry" },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({
    ok: true,
    reference: `SSS-${crypto.randomUUID().slice(0, 6).toUpperCase()}`,
  });
}