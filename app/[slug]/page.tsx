import ServiceDetailPage, {
  generateMetadata as generateServiceDetailMetadata,
  generateStaticParams as generateServiceDetailStaticParams,
  isDynamicServiceSlug,
} from "../services/service-detail-page";
import BlogDetailPage, {
  generateMetadata as generateBlogDetailMetadata,
} from "../blog/blog-detail-page";
import WesolveDetailPage, {
  generateMetadata as generateWesolveDetailMetadata,
  generateStaticParams as generateWesolveDetailStaticParams,
  isWesolveSlug,
} from "../wesolve/wesolve-detail-page";
import CaseStudyDetailPage, {
  generateMetadata as generateCaseStudyDetailMetadata,
  generateStaticParams as generateCaseStudyDetailStaticParams,
  isCaseStudySlug,
} from "../casestudy/case-study-detail-page";

export const revalidate = 21600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const [serviceSlugs, wesolveSlugs, caseStudySlugs] = await Promise.all([
    generateServiceDetailStaticParams(),
    generateWesolveDetailStaticParams(),
    generateCaseStudyDetailStaticParams(),
  ]);
  return [...serviceSlugs, ...wesolveSlugs, ...caseStudySlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (isDynamicServiceSlug(slug)) {
    return generateServiceDetailMetadata({ params: { slug } });
  }
  if (isWesolveSlug(slug)) {
    return generateWesolveDetailMetadata({ params: { slug } });
  }
  if (isCaseStudySlug(slug)) {
    return generateCaseStudyDetailMetadata({ params: { slug } });
  }
  return generateBlogDetailMetadata({ params: { slug } });
}

export default async function RootSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (isDynamicServiceSlug(slug)) {
    return <ServiceDetailPage params={{ slug }} />;
  }
  if (isWesolveSlug(slug)) {
    return <WesolveDetailPage params={{ slug }} />;
  }
  if (isCaseStudySlug(slug)) {
    return <CaseStudyDetailPage params={{ slug }} />;
  }
  return <BlogDetailPage params={{ slug }} />;
}