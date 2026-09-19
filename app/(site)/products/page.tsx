import type { Metadata } from "next";
import { connection } from "next/server";
import { fetchProducts } from "@/lib/data-access";
import { hasEnvVars } from "@/lib/utils";
import { ProductsContent } from "@/components/pages/products-content";

export const metadata: Metadata = {
  title: "Products & Spare Parts | SSS Auto Spares Chennai",
  description:
    "Browse car spare parts, body parts, replacement components, and quality used spares at SSS Auto Spares Chennai. Enquire with part number for fitment-matched quotes.",
};

export const instant = false;

export default async function ProductsPage() {
  await connection();
  const products = await fetchProducts();
  const canRefresh = hasEnvVars;

  return <ProductsContent products={products} canRefresh={canRefresh} />;
}