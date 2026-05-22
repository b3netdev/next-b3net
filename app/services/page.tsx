

import { GetPageData } from "@/lib/getdata";
import Link from "next/link";
import ServiceContact from "./[slug]/ServiceContact";
import Workslider from "./[slug]/Workslider";
import { BASE_URL } from "@/lib/url";
import { cache } from "react";
import { Metadata } from "next";
import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from "@/lib/seo";
import { notFound } from "next/navigation";
import StructuredData from "@/components/server/StructuredData";
import ServiceTestimonial from "./ServiceTestimonial";
import { url } from "inspector/promises";




const getPageData = cache(async () => {

    const data = await GetPageData("services", "page");
    return data?.page ?? data;
});

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getPageData();
    const seo = getSeoFromPageData(pageData);

    return buildMetadata(seo);
}


const Services = async () => {


    const pageData = await getPageData();
    const schemaData = getSchemaFromPageData(pageData);



    if (!pageData) notFound();





    return (
        <main className="page_content services-design-page">
            {/* HERO */}
            <StructuredData data={schemaData} />
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
                        <Link className="btn btn-orange"
                            style={{ marginTop: "20px" }}
                            href="/request-for-proposal"

                        >
                            <span className="btn_label_1">Get My Free Proposal</span>
                            <span className="btn_icon">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* SERVICES */}
            <div className="related-post py-5">
                <div className="container">
                    <div className="row gy-4">
                        {pageData?.acf?.data?.services_page_section_3_card?.map(
                            (service: any, i: any) => (
                                <div className=" col-md-6 col-lg-4 col-sm-6 " key={i}>
                                    <div className="Servicecard rounded-xl " style={{height:"630px"}}>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="serviceImages"
                                        />
                                        <div className="card-body !justify-start gap-2">
                                            <h4>{service.title}</h4>
                                            <div
                                            className="primary-bodyText"
                                                dangerouslySetInnerHTML={{
                                                    __html: service?.description,
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

            {/* OUR WORK */}

            <Workslider pageData={pageData} />


            {pageData?.acf?.data?.service_page_section_6_title && (
                <ServiceTestimonial pageData={pageData} />
            )}

            <div className="our-work Challenges outerwrap related-post related-post-1 py-3 py-sm-5 mt-1 mt-sm-5">
                <div className="our-work-section  lazyloaded">
                    <div className="container">
                        <div className="heading-blocks text-center mb-5">
                            <h2 className="sec-heading">
                                {pageData?.acf?.data?.service_page_section_7_title}
                            </h2>
                            <p className="primary-bodyText"> {pageData?.acf?.data?.service_page_section_7_title}</p>
                        </div>
                        <div className="ServiceKeyChanges">
                            {pageData?.acf?.data?.service_page_section_7_card?.map(
                                (item: any, index: any) => {
                                    const slug = item?.cta?.url
                                    .split("/")
                                    .pop()
                                    .replace(".html", "");
                                    return (
                                        <div
                                            className="item"
                                            style={{ cursor: "pointer" }}
                                            key={index}
                                        >
                                            <div className="card-parts-1 card-parts-2">
                                                <div className="card">

                                                    <img
                                                        src={item?.image}
                                                        className="card-img-top"
                                                        alt="..."
                                                    />

                                                    <div className="card-body heading5 p-4">

                                                        <h4 className="card-title mb-2">
                                                            {item?.title}
                                                        </h4>

                                                        <p className="card-text primary-bodyText">
                                                            {item?.description}
                                                        </p>

                                                        <div className="mt-4">
                                                            <Link
                                                                href={`/${slug}`}
                                                                className="btn btn-orange"
                                                            >
                                                                <span className="btn_label_1">
                                                                    {item?.cta?.title}
                                                                </span>

                                                                <span className="btn_icon">
                                                                    <i className="fa-solid fa-arrow-right"></i>
                                                                </span>

                                                            </Link>
                                                        </div>

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
            <ServiceContact />
        </main >
    );
};

export default Services;
