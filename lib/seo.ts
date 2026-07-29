import type { Metadata } from "next";
import { SITE_URL } from "./siteurl";
import { BASE_URL } from "./url";


const BACKEND = (BASE_URL ?? "").replace(/\/$/, "");
const FRONTEND = (process.env.NEXT_PUBLIC_SITE_URL || "https://b3net.com").replace(/\/$/, "");

function isMediaUrl(url: string) {
  return url.includes("/wp-content/");
}

function toFrontendUrl(url?: string) {
  if (!url || typeof url !== "string") return url;
  if (!BACKEND) return url;

  if (isMediaUrl(url)) return url;

  return url
    .replace(BACKEND, FRONTEND)
    .replace(/\.html$/, "");
}

function normalizeFrontendUrl(url?: string) {
  if (!url || typeof url !== "string") return FRONTEND;

  if (isMediaUrl(url)) return url;

  let finalUrl = url.replace(BACKEND, FRONTEND);

  // fix missing slash issue
  finalUrl = finalUrl.replace("https://b3net.com", "https://b3net.com/");

  // remove double slash after domain
  finalUrl = finalUrl.replace("https://b3net.com//", "https://b3net.com/");

  return finalUrl;
}


function cleanSchema(data: any): any {
  if (!data) return data;

  if (typeof data === "string") {
    return toFrontendUrl(data);
  }

  if (Array.isArray(data)) {
    return data.map(cleanSchema);
  }

  if (typeof data === "object") {
    const newObj: any = {};

    for (const key in data) {
      const value = data[key];
      if (
        (key === "url" || key === "contentUrl") &&
        typeof value === "string" &&
        isMediaUrl(value)
      ) {
        newObj[key] = value;
      } else {
        newObj[key] = cleanSchema(value);
      }
    }

    return newObj;
  }

  return data;
}


function cleanFrontendUrl(url?: string): string {
  if (!url) return "";

  return normalizeFrontendUrl(url)
    .replace(/\.html(?=\/?(?:[?#]|$))/i, "")
    .replace(/\/(?=[?#]|$)/, "");
}

export function buildMetadata(seo?: any): Metadata {
  if (!seo) return {};

   const finalUrl = cleanFrontendUrl(
    seo.og_url || seo.canonical
  );
  return {
    title: seo.title || "",
    description: seo.description || "",

    alternates: {
      canonical: finalUrl || FRONTEND,
    },

    robots: seo?.robots
      ? {
        index: seo.robots.index !== "index",
        follow: seo.robots.follow !== "nofollow",
        googleBot: {
          index: seo.robots.index !== "index",
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

      url: toFrontendUrl(seo.og_url || seo.canonical),

      siteName: seo.og_site_name || "",
      locale: seo.og_locale || "en_US",
      type: (seo.og_type as "website" | "article") || "website",

      images:
        seo.og_image?.map((img: any) => ({
          url: img.url,
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
      images: seo.og_image?.map((img: any) => img.url) || [],
    },
  };
}


export function getSchemaFromPageData(pageData: any) {
  const rawSchema =
    pageData?.schema || pageData?.yoast_head_json?.schema || null;

  return cleanSchema(rawSchema);
}


export function getSeoFromPageData(pageData: any) {
  return pageData?.yoast_head_json ?? pageData ?? null;
}