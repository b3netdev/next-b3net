import {
  getportfoliodetail,
  getPortFloioRelatedPost,
} from "@/lib/getdata";
import Link from "next/link";
import Contact from "@/components/client/Contact";
import ShowNav from "@/components/client/ShowNav";
import Expertise from "@/components/server/Expertise";
import StructuredData from "@/components/server/StructuredData";
import { cache } from "react";
import type { Metadata } from "next";
import {
  buildMetadata,
  getSchemaFromPageData,
  getSeoFromPageData,
} from "@/lib/seo";
import { BASE_URL } from "@/lib/url";
import { redirect } from "next/navigation";

type PortfolioPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function isInvalidSlug(value: unknown): boolean {
  if (typeof value !== "string") return true;

  let slug: string;

  try {
    slug = decodeURIComponent(value).trim().toLowerCase();
  } catch {
    return true;
  }

  return (
    !slug ||
    ["undefined", "null", "false", "nan"].includes(slug)
  );
}

const getPortfolioPageData = cache(async (slug: string) => {
  // No API call for reserved invalid values.
  if (isInvalidSlug(slug)) {
    return null;
  }

  try {
    const data = await getportfoliodetail(slug);
    const pageData = data?.page ?? data;

    return pageData?.id ? pageData : null;
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Fetch error 404")
    ) {
      return null;
    }

    throw error;
  }
});

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isInvalidSlug(slug)) {
    redirect("/portfolio");
  }

  const pageData = await getPortfolioPageData(slug);

  if (!pageData) {
    redirect("/portfolio");
  }

  return buildMetadata(getSeoFromPageData(pageData));
}

const PortfolioDetailPage = async ({
  params,
}: PortfolioPageProps) => {
  const { slug } = await params;

  if (isInvalidSlug(slug)) {
    redirect("/portfolio");
  }

  const pageData = await getPortfolioPageData(slug);

  if (!pageData) {
    redirect("/portfolio");
  }

  const schemaData = getSchemaFromPageData(pageData);

  const relatedpost = await getPortFloioRelatedPost(
    pageData.portfolio_category,
    pageData.id
  );

  return (
    <main className="page_content">
      <StructuredData data={schemaData} />

      {/* Keep your existing JSX here */}
    </main>
  );
};

export default PortfolioDetailPage;