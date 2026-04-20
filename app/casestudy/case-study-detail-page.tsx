import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";

import CaseStudy from "./[slug]/CaseStudy";
import CaseStudy1 from "./[slug]/CaseStudy1";
import CaseStudy2 from "./[slug]/CaseStudy2/CaseStudy2";
import CaseStudy3 from "./[slug]/CaseStudy3/CaseStudy3";

import { getcaseStudiesData,GetPageData } from "@/lib/getdata";
import { buildMetadata, getSeoFromPageData } from "@/lib/seo";



const CANONICAL_CASE_STUDY_SLUGS = [
  "case-study-mattress-company-website-digital-marketing",
  "case-study-tech-hardware-service-web-design-digital-marketing",
  "case-study-automobile-parts-website-design-seo",
  "case-study-tree-care-service-web-design-digital-marketing",
];


export function isCaseStudySlug(slug: string) {
  return CANONICAL_CASE_STUDY_SLUGS.includes(slug);

}

export async function generateStaticParams() {
  return CANONICAL_CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

const getCaseStudyDataById = cache(async (slug: any) => {
  const data = await GetPageData(slug);
  return data?.page ?? data;
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  
  const pageData = await getCaseStudyDataById(slug);

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


  const pageData = await getCaseStudyDataById(slug);

  if (!pageData) {
    notFound();
  }

  if (slug === "case-study-mattress-company-website-digital-marketing") {
    return <CaseStudy1 pageData={pageData} />;
  }

  if (slug === "case-study-tech-hardware-service-web-design-digital-marketing") {
    return <CaseStudy pageData={pageData} />;
  }

  if (slug === "case-study-automobile-parts-website-design-seo") {
    return <CaseStudy2 pageData={pageData} />;
  }

  if (slug === "case-study-tree-care-service-web-design-digital-marketing") {
    return <CaseStudy3 pageData={pageData} />;
  }

  notFound();
}
