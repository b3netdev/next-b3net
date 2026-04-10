import BlogDetailPage, {
  generateMetadata as BlogDetailMetadata,
} from "../blog-detail-page";
import { Metadata } from "next";

export const revalidate = 21600;
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return BlogDetailMetadata({ params: await params });
}

export default BlogDetailPage;
