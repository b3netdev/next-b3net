import ServiceDetailPage, {
  generateMetadata as generateServiceDetailMetadata,
  generateStaticParams as generateServiceDetailStaticParams,
} from "../service-detail-page";

export const revalidate = 21600;
export const dynamicParams = true;

export async function generateStaticParams() {
  return generateServiceDetailStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return generateServiceDetailMetadata({ params: await params });
}

export default ServiceDetailPage;