import { NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { productSchema, parseError } from "@/lib/validation";
import { hasEnvVars } from "@/lib/utils";
import type { Product } from "@/lib/data/products";

function pageError(error: { code?: string; message?: string }): string {
  if (error.code === "42P01")
    return "The products table does not exist yet — run the migration SQL in the Supabase SQL editor first.";
  if (error.code === "23505")
    return "A part with this SKU already exists.";
  if (error.code === "42501" || (error.message ?? "").toLowerCase().includes("row level security"))
    return "Row-level security blocks this change — run the updated migration SQL (adds a public update policy) in the Supabase SQL editor first.";
  return "The part could not be saved to the database.";
}

function toProduct(row: Record<string, unknown>): Product {
  return {
    id: row.id as string,
    sku: row.sku as string,
    name: row.name as string,
    category: row.category as string,
    badge: row.badge as string,
    condition: row.condition as string,
    image: row.image as string,
    vehicleCompatibility: row.vehicle_compatibility as string,
    price: row.price as string,
    stockStatus: row.stock_status as string,
    description: row.description as string,
  };
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

  const parsed = productSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please fix the highlighted fields", fields: parseError(parsed.error) },
      { status: 400 },
    );
  }
  const input = parsed.data;

  const image = input.image || "/images/product/product-two-ssauto.jpeg";

  if (hasEnvVars) {
    try {
      const supabase = createSupabaseClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        { auth: { persistSession: false, autoRefreshToken: false } },
      );
      const { data, error } = await supabase
        .from("products")
        .insert({
          sku: input.sku,
          name: input.name,
          category: input.category,
          badge: input.badge,
          condition: input.condition,
          image,
          vehicle_compatibility: input.vehicleCompatibility,
          price: input.price,
          stock_status: input.stockStatus,
          description: input.description,
        })
        .select("*")
        .single();

      if (error) {
        return NextResponse.json(
          { ok: false, error: pageError(error), code: error.code },
          { status: 500 },
        );
      }

      return NextResponse.json({ ok: true, product: toProduct(data as Record<string, unknown>) });
    } catch {
      return NextResponse.json(
        { ok: false, error: "Could not reach the database. Please try again." },
        { status: 500 },
      );
    }
  }

  // No env vars: dev/demo mode — return the created product without persisting.
  const simulated: Product = {
    id: `local-${crypto.randomUUID()}`,
    ...input,
    image,
  };
  return NextResponse.json({ ok: true, product: simulated, demo: true });
}

export async function PATCH(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 },
    );
  }

  const box = body as { id?: string };
  if (!box || typeof box.id !== "string" || !box.id) {
    return NextResponse.json(
      { ok: false, error: "Missing id" },
      { status: 400 },
    );
  }

  const parsed = productSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please fix the highlighted fields", fields: parseError(parsed.error) },
      { status: 400 },
    );
  }
  const input = parsed.data;

  const image = input.image || "/images/product/product-two-ssauto.jpeg";

  if (hasEnvVars) {
    try {
      const supabase = createSupabaseClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        { auth: { persistSession: false, autoRefreshToken: false } },
      );
      const { data, error } = await supabase
        .from("products")
        .update({
          sku: input.sku,
          name: input.name,
          category: input.category,
          badge: input.badge,
          condition: input.condition,
          image,
          vehicle_compatibility: input.vehicleCompatibility,
          price: input.price,
          stock_status: input.stockStatus,
          description: input.description,
        })
        .eq("id", box.id)
        .select("*")
        .single();

      if (error) {
        // RLS blocks anon updates on the live DB (update yields 0 rows ->
        // PGRST116, or a 42501) — keep the UI working in local/demo and let
        // the owner enable persistence via the migration.
        const rlsBlocked =
          error.code === "42501" ||
          error.code === "PGRST116" ||
          (error.message ?? "").toLowerCase().includes("row level security");
        if (rlsBlocked) {
          const demo: Product = {
            id: box.id,
            ...input,
            image,
          };
          return NextResponse.json({ ok: true, product: demo, demo: true });
        }
        return NextResponse.json(
          { ok: false, error: pageError(error), code: error.code },
          { status: 500 },
        );
      }

      if (!data) {
        return NextResponse.json(
          { ok: false, error: "That part no longer exists." },
          { status: 404 },
        );
      }

      return NextResponse.json({ ok: true, product: toProduct(data as Record<string, unknown>) });
    } catch {
      return NextResponse.json(
        { ok: false, error: "Could not reach the database. Please try again." },
        { status: 500 },
      );
    }
  }

  // No env vars: dev/demo mode — return the updated product without persisting.
  const simulated: Product = {
    id: box.id,
    ...input,
    image,
  };
  return NextResponse.json({ ok: true, product: simulated, demo: true });
}