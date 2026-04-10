import type { Metadata } from "next";

import CaseStudyDetailPage, {
  generateMetadata as generateCaseStudyMetadata,
  generateStaticParams as generateCaseStudyStaticParams,
} from "../case-study-detail-page";

export const revalidate = 21600;
export const dynamicParams = true;

export async function generateStaticParams() {
  return generateCaseStudyStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return generateCaseStudyMetadata({ params: await params });
}

export default CaseStudyDetailPage;
