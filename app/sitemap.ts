import { MetadataRoute } from "next";
import { SITE_URL, API_URL } from "@/lib/siteurl";

// ⏱ cache for 1 hour
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  //  Ensure no trailing slash issue
  const BASE = SITE_URL.replace(/\/$/, "");

  // ✅ STATIC ROUTES (ONLY CANONICAL)
  const staticRoutes = [
    "",
    "/about-company",
    "/contact",
    "/portfolio",
    "/blog",
    "/services"
  ];

  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));



  return [
    ...staticUrls,

  ];
}