import React from "react";
import { GetPageData } from "@/lib/getdata";
import ServiceSlider from "./ServiceSlider";
import ServiceContact from "./ServiceContact";
import Link from "next/link";
import ServiceContact1 from "./ServiceContact1";
import FrequentQuestion from "./FrequentQuestion";
import Scroll from "@/components/client/Scroll";

const ServiceSubpage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    console.log(slug, "SLUG")
    const data = await GetPageData(slug, "page");

    const pageData = data?.page ?? data;
    console.log(pageData, "PAGE DATA")

    return (
        <main className="page_content services-design-page">
            <div
                className="seo-landing-wrap"
                style={{
                    backgroundImage: `url(${pageData?.acf?.data?.banner_image})`,
                }}
            >
                <div className="container">
                    <div className="banner-caption">
                        <h1>{pageData?.acf?.data?.banner_heading}</h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: pageData?.acf?.data?.banner_description,
                            }}
                        />
                        <div className="mt-4">
                            <span className="btn btn-orange">
                                <Scroll
                                    to="contact-form"
                                    className="btn btn-orange"

                                >
                                    <span className="btn_label_1">
                                        {pageData?.acf?.data?.banner_call_to_action?.title}
                                    </span>
                                </Scroll>
                                <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dallas-seo-agency">
                <div className="container">
                    <div className="dallasSeo-sec">
                        <div className="row gy-4">
                            <div className="col-lg-6">
                                <h2 className="sec-heading border-btom">
                                    {pageData?.acf?.data?.services_page_section_2_heading}
                                </h2>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            pageData?.acf?.data?.services_page_section_2_description,
                                    }}
                                />
                                <Link
                                    href={`/contact`}
                                    className="get-intouch-btn nitro-offscreen">
                                    Get in Touch{" "}
                                    <span className="btn_icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>{" "}
                                </Link>
                            </div>
                            <div className="col-lg-6" id="request-proposal">
                                <div className="form-part">
                                    <div className="heading-blocks">
                                        <h3 className="blue-heading font-color-bl text-center">
                                            Request a Free Proposal
                                        </h3>
                                    </div>

                                    <div
                                        role="form"
                                        className="wpcf7"
                                        id="wpcf7-f12066-o2"
                                        lang="en-US"
                                        dir="ltr"
                                    >
                                        <div className="screen-reader-response">
                                            <p
                                                role="status"
                                                aria-live="polite"
                                                aria-atomic="true"
                                            ></p>{" "}
                                            <ul></ul>
                                        </div>
                                        <ServiceContact1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {pageData?.acf?.data?.services_page_section_9_additional_section ? (
                <div className="additional_content">
                    <div className="container">
                        <div className="Comprehensive">
                            <div className="container">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            pageData?.acf?.data
                                                ?.services_page_section_9_additional_section,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            {pageData?.acf?.data?.services_page_section_3_title && (
                <div className="related-post py-5 ">
                    <div className="container">
                        <div className="heading5 mb-4 text-center services-card-solution">
                            <h2>{pageData?.acf?.data?.services_page_section_3_title}</h2>
                            <p>{pageData?.acf?.data?.services_page_section_3_title_2}</p>
                        </div>
                        <div className="row gy-4">
                            {pageData?.acf?.data?.services_page_section_3_card?.map(
                                (item: any, index: any) => (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <div className="card-parts-1">
                                            <div className="card">
                                                <img
                                                    src={item.image}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                                <div className="card-body heading5">
                                                    <h4 className="card-title mb-3">{item.title}</h4>
                                                    <p className="card-text py-3">
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: item?.description,
                                                            }}
                                                        ></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
            {pageData?.acf?.data?.services_page_section_4_title && (
                <div className="outerwrap-1">
                    <div className="digital-agency-section sec-pad lazyloaded">
                        <div className="container">
                            <div className="why-choose-seo">
                                <div className="heading-blocks">
                                    <h2 className="sec-heading text-center mb-3 mb-sm-5 ">
                                        {pageData?.acf?.data?.services_page_section_4_title}
                                    </h2>
                                </div>
                                <div className="row align-items-center gy-5">
                                    <div className="col-md-6">
                                        <div className="outerwrap-text">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        pageData?.acf?.data
                                                            ?.services_page_section_4_description,
                                                }}
                                            />

                                            <div className="mt-4">
                                                <Scroll
                                                    to="contact-form"
                                                    className="btn btn-orange"
                                                >
                                                    <span className="btn_label_1">
                                                        {
                                                            pageData?.acf?.data?.services_page_section_4_link
                                                                ?.title
                                                        }
                                                    </span>
                                                    <span className="btn_icon">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </span>
                                                </Scroll>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-center ">
                                        <div className="outerwrap-img">
                                            <img src="https://www.b3net.com/wp-content/uploads/2025/03/WEBSITE-1.webp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* {pageData?.acf?.data?.service_page_section_5_images && (
                <div className="our-work outerwrap py-2 py-sm-5">
                    <div className="our-work-section sec-pad lazyloaded">
                        <div className="container">
                            <div className="heading-blocks text-center mb-5">
                                <h2 className="sec-heading">
                                    {pageData?.acf?.data?.service_page_section_5_title}
                                </h2>
                                <p>{pageData?.acf?.data?.service_page_section_5_description}</p>
                            </div>
                            <div className="new-slider-1 owl-carousel owl-theme">
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={4}
                                    spaceBetween={36}
                                    loop={true}
                                    speed={4000}
                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                    }}
                                    grabCursor={true}
                                    style={{ width: "100%", maxWidth: "100vw" }}
                                >
                                    {pageData?.acf?.data?.service_page_section_5_images?.map(
                                        (item, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="item">
                                                    <img src={item.image} alt="" />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    )}
                                </Swiper>
                            </div>
                            <div className="mt-5 text-center">
                                <a
                                    className="btn btn-orange"
                                    target=""
                                    href="https://www.b3net.com/portfolio.html"
                                >
                                    <span className="btn_label_1">Discover More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}

            {pageData?.acf?.data?.service_page_section_6_title && (
                <div className="client-testimonials outerwrap">
                    <div className="our-work-section sec-pad lazyloaded">
                        <div className="container">
                            <div className="heading-blocks text-center mb-5">
                                <h2 className="sec-heading">
                                    {pageData?.acf?.data?.service_page_section_6_title}
                                </h2>
                                <p>{pageData?.acf?.data?.service_page_section_6_short_title}</p>
                            </div>

                            <div className=" new-slider-2 owl-carousel owl-theme d-flex ">
                                {pageData?.acf?.data?.service_page_section_6_testimonial?.map(
                                    (data: any, index: any) => {
                                        return (
                                            <div className="item" key={index}>
                                                <div className=" border-testi">
                                                    <div className="testimonial-wrapper lazyloaded">
                                                        <div className="quote-icon">
                                                            <img
                                                                src="https://www.b3net.com/wp-content/themes/perfecti/assets/seo-assets/images/tetimonial-quote-icon.png"
                                                                alt="quotes"
                                                            />
                                                        </div>

                                                        <p style={{ fontWeight: "500" }}>
                                                            {data?.excerpt
                                                                ? data.excerpt
                                                                    .replace(/\[\s*&hellip;\s*\]/gi, "")
                                                                    .replace(/\[\s*…\s*\]/gi, "...")
                                                                    .replace(/&hellip;/gi, "...")
                                                                : ""}
                                                            <a> Read More</a>
                                                        </p>

                                                        <div className="testi-icon-wrap">
                                                            <div className="testi-icon">
                                                                {" "}
                                                                <img src={data?.featured_image?.url} />
                                                            </div>
                                                        </div>
                                                        <div className="testi-client-desc">
                                                            <div className="testiclient-name"> </div>
                                                            <div className="testiclient-project"> </div>
                                                        </div>
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
            )}

            {pageData?.acf?.data?.service_page_section_7_title && (
                <div className="our-work Challenges outerwrap related-post related-post-1 py-3 py-sm-5 mt-1 mt-sm-5">
                    <div className="our-work-section sec-pad lazyloaded">
                        <div className="container">
                            <div className="heading-blocks text-center mb-5">
                                <h2 className="sec-heading">
                                    {pageData?.acf?.data?.service_page_section_7_title}
                                </h2>
                                <p>
                                    Generating growth, improving ROI, and driving results for our
                                    clients. Check out our case studies to discover the value we
                                    add.
                                </p>
                            </div>
                            <ServiceSlider pageData={pageData} />
                        </div>
                    </div>
                </div>
            )}
            <ServiceContact />
            {
                pageData?.acf?.data?.faq_repeater &&
                <FrequentQuestion pageData={pageData} />
            }
        </main>
    );
};

export default ServiceSubpage;
