import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const base = process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().slice(0, 10);
  const routes = [
    { route: "", loc: `${base}/` },
    ...["/about", "/products", "/payment", "/gallery", "/feedback", "/enquire", "/share", "/privacy", "/terms", "/warranty"].map(
      (route) => ({ route, loc: `${base}${route}` }),
    ),
  ];
  return routes.map(({ loc }) => ({
    url: loc,
    lastModified,
  }));
}