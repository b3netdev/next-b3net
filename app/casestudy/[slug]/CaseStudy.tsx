import React from "react";
import { GetPageData } from "@/lib/getdata";
import Link from "next/link";


// import ContactFooter from "../../../../common/ContactFooter";
// import "../../../../assets/css/caseStudy-inner-3.css"
// import { CaseStudyContact } from "./CaseStudyContact";

const CaseStudy = async (slug: any) => {
    console.log(slug, "SLUg")

    const pageData = await GetPageData(slug.slug, "page")
    console.log(pageData, "PAGE DATA")



    return (
        <main className="page_content">
            <div className="case-study-3">
                <section className={`casebanner-section `}>
                    <div className="bannerwrap">
                        <div className="container">
                            <div className="casebanner-wrap">
                                <div className="banner-caption order-sec">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: pageData?.content }}
                                    />

                                    <div className="three-blocks">
                                        {pageData?.acf?.data?.case_study_number_repeater?.map(
                                            (data: any, index: any) => {
                                                return (
                                                    <div className="organic-block">
                                                        <h4>
                                                            <span className="count" data-target="176" style={{ color: "#35d1bd" }}>
                                                                {data?.number}
                                                                %
                                                            </span>
                                                        </h4>
                                                        <p style={{ color: "white" }}>{data?.text}</p>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                <div className="bnr-img order-sec-2">
                                    <img
                                        width="810"
                                        height="706"
                                        src="https://b3net.com/wp-content/uploads/2023/07/viage-banner-img.png"
                                        className="attachment-full size-full wp-post-image"
                                        alt=""
                                        decoding="async"
                                        fetchpriority="high"
                                        srcset="https://b3net.com/wp-content/uploads/2023/07/viage-banner-img.png 810w, https://b3net.com/wp-content/uploads/2023/07/viage-banner-img-300x261.png 300w, https://b3net.com/wp-content/uploads/2023/07/viage-banner-img-768x669.png 768w"
                                        sizes="(max-width: 810px) 100vw, 810px"
                                    />{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services-used-section sec-pad p-block">
                    <div className="container">
                        <div className="case-sec-ttl title-color" >
                            <h2 style={{ color: "#1b76be" }}>{pageData?.acf?.data?.first_section_heading}</h2>
                        </div>
                        <div className="used-service-wrap">
                            {pageData?.acf?.data?.first_section_content_repeater?.map(
                                (item: any, index: any) => (
                                    <div className="services-block" key={index}>
                                        <div className="service-icon">
                                            <img src={item?.logo} />
                                        </div>

                                        <div className="service-desc">
                                            <div dangerouslySetInnerHTML={{ __html: item?.text }} />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="hire-us-section">
                            <div className="hire-left">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: pageData?.acf?.data?.first_section_box_content,
                                    }}
                                />
                            </div>
                            <div className="hire-right">
                                <a
                                    href="https://www.b3net.com/get-a-free-proposal.html"
                                    className="hireus-btn btn btn-primary"
                                >
                                    {pageData?.acf?.data?.first_section_box_button_name}{" "}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="our-client-sec">
                            <div className="two-blocks f-block">
                                <div className="client-imgwrap">
                                    <img src="https://b3net.com/wp-content/uploads/2023/07/hear-from-client.png" />
                                    <div className="play-btn">
                                        <img src="https://www.b3net.com/old-site-2025/wp-content/themes/perfecti/case-3-assets/images/play-icon.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="two-blocks s-block">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: pageData?.acf?.data?.second_section_content_1,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ecofriendly-sec sec-pad">
                    <div className="container">
                        <div className="innerwrap">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: pageData?.acf?.data?.second_section_content_2,
                                }}
                            />
                        </div>
                    </div>
                </section>

                <section className="old-design-pattern">
                    <div className="case-img-wrap">
                        <img src={pageData?.acf?.data?.second_section_image_3} />
                    </div>
                </section>

                <section className="value-driven-sec sec-pad">
                    <div className="container">
                        <div className="innerwrap">
                            <div
                                className="valueDrivenArc"
                                dangerouslySetInnerHTML={{
                                    __html: pageData?.acf?.data?.second_section_content_4,
                                }}
                            />
                        </div>
                    </div>
                </section>

                <section className="web-planning-sec sec-pad">
                    <div className="container">
                        <div className="innerwrap">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: pageData?.acf?.data?.third_section_top_content,
                                }}
                            />
                            <div className="case-img-wrap">
                                <img src={pageData?.acf?.data?.third_section_image} />
                            </div>

                            <p></p>
                            <p style={{ textAlign: "center" }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: pageData?.acf?.data?.third_section_bottom_content,
                                    }}
                                />
                            </p>
                            <p></p>
                        </div>
                    </div>
                </section>

                <section className="digital-planing-sec sec-pad">
                    <div className="container">
                        <div className="innerwrap">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: pageData?.custom_fields?.fourth_section_top_content,
                                }}
                            />

                            {pageData?.acf?.data?.fourth_section_content_repeater?.map(
                                (data: any, index: any) => {
                                    return (
                                        <div className="step-process first-step">
                                            <div
                                                className="d-flex"
                                                dangerouslySetInnerHTML={{ __html: data?.content }}
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </section>

                <section className="sec-pad">
                    <div className="container">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: pageData?.custom_fields?.fifth_section_top_content,
                            }}
                        />

                        <div className="sales-graph-wrap">
                            {pageData?.custom_fields?.fifth_section_number_repeater?.map(
                                (data: any, index: any) => {
                                    return (
                                        <div className="sales-rectangle bg-blue" key={index}>
                                            <div className="sales-count" data-target="370" style={{ color: "white" }}>
                                                {data?.number}%
                                            </div>
                                            <div className="sales-text" style={{ color: "white" }}>{data?.text}</div>
                                        </div>
                                    );
                                }
                            )}
                        </div>

                        <div className="seo-effort-sec">
                            {pageData?.custom_fields?.fifth_section_image_repeater?.map(
                                (data: any, index: any) => {
                                    return (
                                        <div className="seo-block-1">
                                            <p>{data?.content}</p>
                                            <img src={data?.image?.url} />
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </section>

                <section className="value-driven-sec sec-pad">
                    <div className="container">
                        <div className="innerwrap">
                            <div
                                className="fifthButtomContent"
                                dangerouslySetInnerHTML={{
                                    __html: pageData?.acf?.data?.fifth_section_bottom_content,
                                }}
                            />
                        </div>
                    </div>
                </section>

                <section className="seo-result-sec sec-pad">
                    <div className="container">
                        <div className="seo-result-wrap">
                            <div className="two-blocks s-block">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: pageData?.acf?.data?.sixth_section_content,
                                    }}
                                />

                                <Link
                                    href="https://www.b3net.com/request-for-proposal.html"
                                    className="get-result-btn btn btn-primary"
                                >
                                    Get Results <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                            <div className="two-blocks f-block">
                                <div className="seo-imgwrap">
                                    <img src={pageData?.acf?.data?.sixth_section_image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="request-quote-sec sec-pad" id="caserequest-qoute">
                    <div className="container">
                        <div className="case-sec-ttl">
                            <h2>Request For Quote</h2>
                        </div>
                        {/* <CaseStudyContact /> */}
                        {/* <ContactFooter /> */}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default CaseStudy;
