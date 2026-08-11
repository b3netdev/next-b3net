import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from "@/lib/seo";
import CategoryClient from "./CategoryClient";
import { getCategoryData } from "@/lib/getdata";
import StructuredData from "@/components/server/StructuredData";
import { Metadata } from "next";
import { cache } from "react";
import ShowNav from "@/components/client/ShowNav";

type CategoryData = {
  id: number;
  slug: string;
  name?: string;
  [key: string]: unknown;
};

const getPageData = cache(
  async (slug: string): Promise<CategoryData | null> => {
    const data = await getCategoryData(slug);

    // If API returns an array, select the category matching the URL slug.
    if (Array.isArray(data)) {
      return data.find((item: CategoryData) => item.slug === slug) ?? null;
    }

    return data ?? null;
  }
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const pageData = await getPageData(slug);
  const seo = getSeoFromPageData(pageData);

  return buildMetadata(seo);
}

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const pageData = await getPageData(slug);
  const schemaData = getSchemaFromPageData(pageData);

  return (
    <>
      <StructuredData data={schemaData} />
      <ShowNav />
      <div style={{ marginTop: "90px" }} />
      <div className="default-img flex justify-center items-center" style={{ background: "darkblue" }}>
        <div className="banner-img" >
          <div className="container">
            <div className="banner-caption category-banner-sec" style={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <h1 className="!text-4xl" >{pageData?.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <CategoryClient
        categoryid={String(pageData?.id ?? "")}
      />
    </>
  );
};

export default CategoryPage;