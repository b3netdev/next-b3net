import WesolveDetailPage, {
  generateMetadata as generateWesolveMetadata,
  generateStaticParams as generateWesolveStaticParams,
} from "../wesolve-detail-page";
import { Metadata } from "next";

export const revalidate = 21600;
export const dynamicParams = true;

export async function generateStaticParams() {
  return generateWesolveStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return generateWesolveMetadata({ params: await params });
}

export default WesolveDetailPage;
