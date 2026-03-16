import Link from "next/link";
import { GetPageData } from "@/lib/getdata";
import FaqClient from "./FaqClient";
import ContactFooter from "@/components/server/ContactFooter";
import { BASE_URL } from "@/lib/url";
import Expertise1 from "../../assets/images/expertise-img-1.jpg";
import Expertise2 from "../../assets/images/expertise-img-2.jpg";
import Expertise3 from "../../assets/images/expertise-img-3.jpg";
import Expertise4 from "../../assets/images/expertise-img-4.jpg";
import Expertise5 from "../../assets/images/expertise-img-5.jpg";
import Expertise6 from "../../assets/images/expertise-img-6.jpg";


export default async function FaqPage() {
    // use your real WP slug for FAQ page:
    const data = await GetPageData("faq", "page");
    const pageData = data?.page ?? data;


    const expertiseItems:any = [
        {
          title: "Real Estate",
          img: Expertise1,
          desc: "SEO-driven websites for realtors, brokers, and property managers to attract buyers, sellers, and investors effortlessly.",
          link: "/proposal",
        },
        {
          title: "Financial Services",
          img: Expertise2,
          desc: "Custom web solutions for insurance agencies, notaries, and financial institutions to enhance credibility and client acquisition.",
          link: "/proposal",
        },
        {
          title: "Medical & Healthcare",
          img: Expertise3,
          desc: "HIPAA-compliant, fast, and SEO-friendly websites for clinics, hospitals, and healthcare providers to improve patient engagement.",
          link: "/proposal",
        },
        {
          title: "Small Businesses",
          img: Expertise4,
          desc: "Affordable, high-performing websites designed to help small businesses grow, attract customers, and increase online visibility.",
          link: "/proposal",
        },
        {
          title: "Automotive",
          img: Expertise5,
          desc: "Custom automotive websites with SEO and e-commerce features to help dealerships, repair shops, and auto parts businesses thrive.",
          link: "/proposal",
        },
        {
          title: "Professional Service",
          img: Expertise6,
          desc: "Sleek, conversion-focused websites for lawyers, consultants, and agencies to showcase expertise and attract more clients.",
          link: "/proposal",
        },
      ];

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
