import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/payment",
    "/gallery",
    "/feedback",
    "/enquire",
    "/share",
    "/privacy",
    "/terms",
    "/warranty",
  ] as const;
  return staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: (route === "" || route === "/products" ? "daily" : "weekly") as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.7,
  }));
}