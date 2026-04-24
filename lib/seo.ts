import type { Metadata } from "next";
import { SITE_URL } from "./siteurl";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export function buildMetadata(seo?: any): Metadata {
  if (!seo) return {};

  return {
    title: seo.title || "",
    description: seo.description || "",
    alternates: {
      canonical: seo.canonical || siteUrl,
    },
    robots: seo.robots
    ? {
        index: seo.robots.index !== "noindex",
        follow: seo.robots.follow !== "nofollow",
        googleBot: {
          index: seo.robots.index !== "noindex",
          follow: seo.robots.follow !== "nofollow",
          "max-snippet": seo.robots["max-snippet"],
          "max-image-preview": seo.robots["max-image-preview"],
          "max-video-preview": seo.robots["max-video-preview"],
        },
      }
    : {
        index: true,
        follow: true,
      },
    openGraph: {
      title: seo.og_title || seo.title || "",
      description: seo.og_description || seo.description || "",
      url: seo.og_url || seo.canonical || undefined,
      siteName: seo.og_site_name || "",
      locale: seo.og_locale || "en_US",
      type: (seo.og_type as "website" | "article") || "website",
      images:
        seo.og_image?.map((img: any) => ({
          url: img.url || "",
          width: img.width,
          height: img.height,
          type: img.type,
        })) || [],
    },
    twitter: {
      card:
        (seo.twitter_card as
          | "summary"
          | "summary_large_image"
          | "app"
          | "player") || "summary_large_image",
      site: seo.twitter_site || undefined,
      title: seo.og_title || seo.title || "",
      description: seo.og_description || seo.description || "",
      images: seo.og_image?.map((img: any) => img.url || "") || [],
    },
  };
}

export function getSchemaFromPageData(pageData: any) {
  return pageData?.schema || pageData?.yoast_head_json?.schema || null;
}

export function getSeoFromPageData(pageData: any) {
  return pageData?.yoast_head_json ?? pageData ?? null;
}