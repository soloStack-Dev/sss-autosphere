import { createClient as createSupabaseClient, type SupabaseClient } from "@supabase/supabase-js";
import { hasEnvVars } from "@/lib/utils";
import { sampleProducts, productCategories } from "@/lib/data/products";
import { sampleGallery, galleryCategories } from "@/lib/data/gallery";
import { homeCategories, services, trustMetrics, trustPoints } from "@/lib/data/home";

/**
 * Public read-only REST client. Only created when env vars are present —
 * module scope is fine because it never reads cookies and is safe to
 * instantiate once per serverless process.
 */
function dataClient(): SupabaseClient | null {
  if (!hasEnvVars) return null;
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      auth: { persistSession: false, autoRefreshToken: false },
    },
  );
}

type Row = Record<string, unknown>;

function pick<T>(row: Row, key: string, fallback: T): T {
  const value = row[key];
  return value === null || value === undefined || value === "" ? fallback : (value as T);
}

export async function fetchProducts() {
  const client = dataClient();
  if (!client) return sampleProducts;
  try {
    const { data, error } = await client
      .from("products")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data || data.length === 0) return sampleProducts;
    return data.map((row) => ({
      id: pick(row, "id", crypto.randomUUID()),
      sku: pick(row, "sku", "—"),
      name: pick(row, "name", "Part"),
      category: pick(row, "category", "GENERAL"),
      badge: pick(row, "badge", "Verified"),
      condition: pick(row, "condition", "New"),
      image: pick(row, "image", "/images/product/product-img-two.png"),
      vehicleCompatibility: pick(row, "vehicle_compatibility", "[Confirm Fitment]"),
      price: pick(row, "price", "Contact for Price"),
      stockStatus: pick(row, "stock_status", "Enquire for Availability"),
      description: pick(row, "description", ""),
    }));
  } catch {
    return sampleProducts;
  }
}

export async function fetchGalleryItems() {
  const client = dataClient();
  if (!client) return sampleGallery;
  try {
    const { data, error } = await client
      .from("gallery_items")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data || data.length === 0) return sampleGallery;
    return data.map((row) => ({
      id: pick(row, "id", crypto.randomUUID()),
      category: pick(row, "category", "Products"),
      title: pick(row, "title", "Gallery item"),
      description: pick(row, "description", ""),
      metadata: pick(row, "metadata", ""),
      image: pick(row, "image", "/images/gallery/gallery-img-one.png"),
      alt: pick(row, "alt", "SSS Auto Spares gallery item"),
    }));
  } catch {
    return sampleGallery;
  }
}

export const staticCatalog = {
  productCategories,
  galleryCategories,
  homeCategories,
  services,
  trustMetrics,
  trustPoints,
} as const;

export type CataloguePayload = {
  products: Awaited<ReturnType<typeof fetchProducts>>;
  gallery: Awaited<ReturnType<typeof fetchGalleryItems>>;
};

export async function fetchCatalogue(): Promise<CataloguePayload> {
  const [products, gallery] = await Promise.all([
    fetchProducts(),
    fetchGalleryItems(),
  ]);
  return { products, gallery };
}