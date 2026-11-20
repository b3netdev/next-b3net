import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteurl";
import { BASE_URL } from "@/lib/url";

//  Revalidate every hour
export const revalidate = 3600;

interface SitemapEntry {
  url: string;
  lastmod: string;
}

async function fetchSitemapUrls(): Promise<SitemapEntry[]> {
  try {
    const res = await fetch(`${BASE_URL}/wp-json/custom/v1/full-sitemap`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Sitemap API failed: ${res.status} ${res.statusText}`);
      return [];
    }

    const data: SitemapEntry[] = await res.json();


    if (!Array.isArray(data)) {
      console.error("Sitemap API did not return an array");
      return [];
    }

    return data;
  } catch (err) {
    console.error("Failed to fetch sitemap from API:", err);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Ensure no trailing slash
  const BASE = SITE_URL.replace(/\/$/, "");

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about-company", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/ai-instructions", priority: 0.7, changeFrequency: "monthly" },
  ];

  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }),
  );

  const apiEntries = await fetchSitemapUrls();

  const dynamicUrls: MetadataRoute.Sitemap = apiEntries
    .filter((entry) => entry.url && entry.url.startsWith("http")) // guard bad entries
    .map((entry) => ({
      url: entry.url.replace(/\/+$/, ""),
      lastModified: new Date(entry.lastmod),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  return [...staticUrls, ...dynamicUrls];
}
