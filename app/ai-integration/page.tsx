import { GetPageData } from "@/lib/getdata";
import { buildMetadata, getSeoFromPageData } from "@/lib/seo";
import { BASE_URL } from "@/lib/url";
import type { Metadata } from "next";
import { cache } from "react";

export { default } from "../services/ai-integration/page";

const getPageData = cache(async () => {
  const data = await GetPageData("ai-integration", "page");
  return data?.page ?? data;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData();
  const seo = getSeoFromPageData(pageData);
  const canonical = BASE_URL ? new URL("/ai-integration", BASE_URL).toString() : "/ai-integration";

  return buildMetadata({
    ...seo,
    canonical,
    og_url: canonical,
  });
}