import Image from "next/image";
import Link from "next/link";
import { GetPageData } from "@/lib/getdata";
import BlogheroBanner from "@/assets/images/blog-hero-banner.jpg";
import BlogClient from "./BlogClient";
import { BASE_URL } from "@/lib/url";
import { Metadata } from "next";
import { buildMetadata, getSeoFromPageData, getSchemaFromPageData } from "@/lib/seo";
import { cache } from "react";
import StructuredData from "@/components/server/StructuredData";

const getBlogPageData = cache(async () => {
  
  const data = await GetPageData("blog", "page");
  return data?.page ?? data;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getBlogPageData();
  const seo = getSeoFromPageData(pageData);

  return buildMetadata(seo);
}

export default async function BlogPage() {
  const pageData = await getBlogPageData();
    const schemaData = getSchemaFromPageData(pageData);


  return (
    <main className="page_content blogContainer">
      <StructuredData data={schemaData} />
      <div className="portfolio-page blog ">
        <div className="port-landing-wrap gpp">
          <div className="banner-img">
            <img src={`${BASE_URL}/wp-content/themes/b3net/assets/images/blog-hero-banner.jpg`} alt="blog-hero-banner" />
            <div className="container">
              <div className="banner-caption new-banner-caption">
                <h1>Web Design & <br />
                  Digital Marketing Blog</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-color-part">
          <div className="breadcrum py-3 py-4 py-sm-5">
            <div className="container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb d-flex align-items-center">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <BlogClient />
      </div>
    </main>
  );
}
