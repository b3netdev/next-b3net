    import Link from "next/link";
    import { GetPageData } from "@/lib/getdata";
    import FaqClient from "./FaqClient";
    import ContactFooter from "@/components/server/ContactFooter";

    export default async function FaqPage() {
        // use your real WP slug for FAQ page:
        const data = await GetPageData("faq", "page");
        const pageData = data?.page ?? data;

        return (

            <>
                <header>
                    <main className="page_content faqWrapper">
                        <div className="portfolio-page faq-page">
                            <div className="port-landing-wrap gpp">
                                <div className="banner-img">
                                    <img
                                        src="https://www.b3net.com/wp-content/uploads/2025/12/faq-banner.webp"
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
