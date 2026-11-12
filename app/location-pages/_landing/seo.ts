import { cache } from "react";
import type { Metadata } from "next";

import { GetPageData } from "@/lib/getdata";
import { buildMetadata, getSeoFromPageData } from "@/lib/seo";

/*
 * Static landing pages keep their content in code, but still read SEO
 * (Yoast title/description/schema) from the matching WordPress page.
 */

export const getLandingPageData = cache(async (slug: string) => {
  try {
    const data = await GetPageData(slug);
    return data?.page ?? data ?? null;
  } catch {
    return null;
  }
});

export async function landingMetadata(slug: string, fallback: Metadata): Promise<Metadata> {
  const pageData = await getLandingPageData(slug);
  if (!pageData) return fallback;
  return buildMetadata(getSeoFromPageData(pageData));
}

export async function landingSchema(slug: string) {
  const pageData = await getLandingPageData(slug);
  return pageData?.schema || pageData?.yoast_head_json?.schema || null;
}

export function faqSchema(faqs: string[][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
