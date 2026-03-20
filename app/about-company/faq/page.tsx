import Link from "next/link";
import { GetPageData } from "@/lib/getdata";
import FaqClient from "./FaqClient";
 
import { BASE_URL } from "@/lib/url";
import { cache } from "react";
import { buildMetadata, getSeoFromPageData } from "@/lib/seo";
import { Metadata } from "next";



const getBlogPageData = cache(async () => {
  
    const data = await GetPageData("faq", "page");
    return data?.page ?? data;
  });
  
  export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getBlogPageData();
    const seo = getSeoFromPageData(pageData);
  
    return buildMetadata(seo);
  }
  

export default async function FaqPage() {
    const pageData = await getBlogPageData();



    return (

        <>
            <header>
                <main className="page_content faqWrapper">
                    <div className="portfolio-page faq-page">
                        <div className="port-landing-wrap gpp">
                            <div className="banner-img">
                                <img
                                    src={`${BASE_URL}/wp-content/uploads/2025/12/faq-banner.webp`}
                                    alt=""
                                />
                                <div className="container">
                                    <div className="banner-caption">
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: pageData?.content ?? "",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-color-part">
                            <div className="breadcrum py-3 py-4 py-sm-4">
                                <div className="container">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb d-flex align-items-center">
                                            <li className="breadcrumb-item">
                                                <Link href="/">Home</Link>
                                            </li>

                                            <li className="breadcrumb-item active" aria-current="page">
                                                FAQ
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>


                            <FaqClient
                                pageData={pageData}

                            />

                        </div>
                    </div>
                </main>
            </header>
        </>
    );
}
