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
                <main className="page_content">
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

                            <div className="accordian-part">
                                <div className="faq-part">
                                    <div className="container">
                                        <div className="accordion" id="faqAccordion">
                                            <div className="row">
                                                <div className="col-md-6 pe-md-4">
                                                    {pageData?.acf?.data?.faq_left?.map(
                                                        (data: any, index: number) => {
                                                            const headingId = `heading-left-${index}`;
                                                            const collapseId = `collapse-left-${index}`;

                                                            return (
                                                                <div className="accordion-item" key={index}>
                                                                    <h2 className="accordion-header" id={headingId}>
                                                                        <button
                                                                            className="accordion-button"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target={`#${collapseId}`}
                                                                            aria-expanded="true"
                                                                            aria-controls={collapseId}
                                                                        >
                                                                            <i className="fa-solid fa-minus icon"></i>
                                                                            <span className="text">{data?.question}</span>
                                                                        </button>
                                                                    </h2>

                                                                    <div
                                                                        id={collapseId}
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby={headingId}
                                                                        data-bs-parent="#faqAccordion"
                                                                    >
                                                                        <div className="accordion-body">
                                                                            {data?.answer}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>

                                                <div className="col-md-6">
                                                    {pageData?.acf?.data?.Faq_Right?.map(
                                                        (data: any, index: number) => {
                                                            const headingId = `heading-right-${index}`;
                                                            const collapseId = `collapse-right-${index}`;

                                                            return (
                                                                <div className="accordion-item" key={index}>
                                                                    <h2 className="accordion-header" id={headingId}>
                                                                        <button
                                                                            className="accordion-button"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target={`#${collapseId}`}
                                                                            aria-expanded="false"
                                                                            aria-controls={collapseId}
                                                                        >
                                                                            <i className="fa-solid fa-minus icon"></i>
                                                                            <span className="text">{data?.question}</span>
                                                                        </button>
                                                                    </h2>

                                                                    <div
                                                                        id={collapseId}
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby={headingId}
                                                                        data-bs-parent="#faqAccordion"
                                                                    >
                                                                        <div className="accordion-body">
                                                                            {data?.answer}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </header>

            <div className="webiner-video">
                <div className="video-section">
                    <div className="container">
                        <h2 className="text-md-start text-center">
                            Webinar <span>Help</span>
                        </h2>

                        <div className="row gy-4">
                            {pageData?.acf?.data?.video_repeater?.map(
                                (video: any, index: number) => (
                                    <div className="col-md-6 col-lg-4" key={index}>
                                        <div className="video-card text-center">
                                            <div className="video-thumbnail">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: video?.video_link ?? "",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ContactFooter />
        </>
    );
}
