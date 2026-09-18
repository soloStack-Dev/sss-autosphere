import { NextResponse } from "next/server";
import { fetchCatalogue } from "@/lib/data-access";

export async function GET() {
  try {
    const catalogue = await fetchCatalogue();
    return NextResponse.json(catalogue);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to load catalogue" },
      { status: 500 },
    );
  }
}