import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";

import CaseStudy from "./[slug]/CaseStudy";
import CaseStudy1 from "./[slug]/CaseStudy1";
import CaseStudy2 from "./[slug]/CaseStudy2/CaseStudy2";
import CaseStudy3 from "./[slug]/CaseStudy3/CaseStudy3";

import { getcaseStudiesData } from "@/lib/getdata";
import { buildMetadata, getSeoFromPageData } from "@/lib/seo";

const CASE_STUDY_SLUG_TO_PAGE_ID: Record<string, number> = {
  "case-study-mattress-company-website-digital-marketing": 13074,
  "case-study-tech-hardware-service-web-design-digital-marketing": 13037,
  "case-study-automobile-parts-website-design-seo": 13121,
  "case-study-tree-care-service-web-design-digital-marketing": 12949,
  // Legacy aliases kept for backward compatibility after URL migration.
  "case-study-viage": 13074,
  "case-study-flexus-comfort": 13037,
  "case-study-arc-lever": 13121,
  "case-study-treecarearborists": 12949,
};

const CANONICAL_CASE_STUDY_SLUGS = [
  "case-study-mattress-company-website-digital-marketing",
  "case-study-tech-hardware-service-web-design-digital-marketing",
  "case-study-automobile-parts-website-design-seo",
  "case-study-tree-care-service-web-design-digital-marketing",
];

const getPageIdFromSlug = (slug: string) => CASE_STUDY_SLUG_TO_PAGE_ID[slug] ?? null;

export function isCaseStudySlug(slug: string) {
  return slug in CASE_STUDY_SLUG_TO_PAGE_ID;
}

export async function generateStaticParams() {
  return CANONICAL_CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

const getCaseStudyDataById = cache(async (id: number) => {
  const data = await getcaseStudiesData(id);
  return data?.page ?? data;
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const pageId = getPageIdFromSlug(slug);

  if (!pageId) {
    notFound();
  }

  const pageData = await getCaseStudyDataById(pageId);

  if (!pageData) {
    notFound();
  }

  const seo = getSeoFromPageData(pageData);
  return buildMetadata(seo);
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const pageId = getPageIdFromSlug(slug);

  if (!pageId) {
    notFound();
  }

  const pageData = await getCaseStudyDataById(pageId);

  if (!pageData) {
    notFound();
  }

  if (pageId === 13074) {
    return <CaseStudy pageData={pageData} />;
  }

  if (pageId === 13037) {
    return <CaseStudy1 pageData={pageData} />;
  }

  if (pageId === 13121) {
    return <CaseStudy2 pageData={pageData} />;
  }

  if (pageId === 12949) {
    return <CaseStudy3 pageData={pageData} />;
  }

  notFound();
}
