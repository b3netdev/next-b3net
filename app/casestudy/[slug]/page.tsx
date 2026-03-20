import type { Metadata } from "next";
import { cache } from "react";

import CaseStudy from "./CaseStudy";
import CaseStudy1 from "./CaseStudy1";
import CaseStudy2 from "./CaseStudy2/CaseStudy2";
import CaseStudy3 from "./CaseStudy3/CaseStudy3";

import { getcaseStudiesData } from "@/lib/getdata";
import { buildMetadata, getSeoFromPageData } from "@/lib/seo";


const sluglist = [
  "case-study-flexus-comfort",
  "case-study-viage",
  "case-study-arc-lever",
  "case-study-treecarearborists",
];

export const revalidate = 21600;
export const dynamicParams = true;

export async function generateStaticParams() {
  return sluglist.map((item) => ({
    slug: item,
  }));
}

const getPageIdFromSlug = (slug: string) => {
  if (slug === "case-study-flexus-comfort") return 13074;
  if (slug === "case-study-viage") return 13037;
  if (slug === "case-study-arc-lever") return 13121;
  if (slug === "case-study-treecarearborists") return 12949;
  return null;
};

const getCaseStudyDataById = cache(async (id: number) => {
  const data = await getcaseStudiesData(id);
  return data?.page ?? data;
});

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
    const {slug} = await params;
  const pageId = getPageIdFromSlug(slug);

  if (!pageId) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    };
  }

  const pageData = await getCaseStudyDataById(pageId);
  const seo = getSeoFromPageData(pageData);

  return buildMetadata(seo);
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const pageId = getPageIdFromSlug(slug);

  if (!pageId) {
    return <div>Case study not found</div>;
  }

  const pageData = await getCaseStudyDataById(pageId);

  return (
    <>
      {slug === "case-study-flexus-comfort" ? (
        <CaseStudy pageData={pageData} />
      ) : slug === "case-study-viage" ? (
        <CaseStudy1 pageData={pageData} />
      ) : slug === "case-study-arc-lever" ? (
        <CaseStudy2 pageData={pageData} />
      ) : slug === "case-study-treecarearborists" ? (
        <CaseStudy3 pageData={pageData} />
      ) : null}
    </>
  );
};

export default Page;