import type { Metadata } from "next";
import { connection } from "next/server";
import { fetchGalleryItems } from "@/lib/data-access";
import { GalleryContent } from "@/components/pages/gallery-content";

export const metadata: Metadata = {
  title: "Gallery | SSS Auto Spares Chennai",
  description:
    "Inside SSS Auto Spares — showroom displays, warehousing, bench-testing workstations, and verified brake & performance parts from our Chennai hub.",
};

export const instant = false;

export default async function GalleryPage() {
  await connection();
  const items = await fetchGalleryItems();

  return <GalleryContent items={items} />;
}