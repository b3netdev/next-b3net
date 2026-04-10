import { GetPageData } from "@/lib/getdata";
import { buildMetadata, getSeoFromPageData } from "@/lib/seo";
import { BASE_URL } from "@/lib/url";
import type { Metadata } from "next";
import { cache } from "react";

export { default } from "../services/ai-video/page";

const getPageData = cache(async () => {
  const data = await GetPageData("ai-video", "page");
  return data?.page ?? data;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData();
  const seo = getSeoFromPageData(pageData);
  const canonical = BASE_URL ? new URL("/ai-video", BASE_URL).toString() : "/ai-video";

  return buildMetadata({
    ...seo,
    canonical,
    og_url: canonical,
  });
}