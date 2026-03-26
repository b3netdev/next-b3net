// app/about/[slug]/page.tsx
import { notFound } from "next/navigation";
import { GetPageData } from "@/lib/getdata";
import AboutUsClient from "./AboutUsClient";
import { BASE_URL } from "@/lib/url";
import Link from "next/link";
import CaseStudiesSlider from "@/components/client/CaseStudySlider";
import Expertise from "@/components/server/Expertise";
import Contact from "@/components/client/Contact";
import TestimonialSwiper from "./TestimonialSwiper";
import { cache } from "react";
import { Metadata } from "next";
import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from "@/lib/seo";
import StructuredData from "@/components/server/StructuredData";

type PageProps = {
  params: { slug: string };
};

const getPageData = cache(async () => {
  
  const data = await GetPageData("about-company", "page");
  return data?.page ?? data;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData();
  const seo = getSeoFromPageData(pageData);

  return buildMetadata(seo);
}


export default async function AboutUsPage({ params }: PageProps) {

  const data = await getPageData();

  const pageData = data?.page ?? data;
    const schemaData = getSchemaFromPageData(pageData);


  if (!pageData) notFound();

  return (
    <div className="about-page portfolio-page">
      <StructuredData data={schemaData} />
      <div className="port-landing-wrap gpp">
        <div className="banner-img">
          <img
            src={`${BASE_URL}/wp-content/uploads/2025/12/about-banner.webp`}
            alt="about-banner"
          />
          <div className="container">
            <div className="banner-caption">
              <h1>Are You Digital?</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="industry-sec sp">
        <div className="breadcrum pb-3 pb-md-4 pb-lg-5">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-flex align-items-center">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 pe-lg-4">
              <div className="heading-title heading-big-uppercase int-className">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: pageData?.acf?.data?.heading ?? "",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="space30" />

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <img
                src={`${BASE_URL}/wp-content/uploads/2025/12/ai-image.webp`}
                alt="ai-image"
              />
            </div>

            <div className="col-lg-8 col-md-6 mb-4 common-content new-colr">
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData?.acf?.data?.content ?? "",
                }}
              />
            </div>
          </div>
        </div>
      </div>


      <div className="video-section we-offer">
        <div className="container">
          <h2 className="text-center text-b">
            {pageData?.acf?.data?.second_section_heading}
          </h2>
          <div className="row gy-4">
            {pageData?.acf?.data?.second_section_content_repeater?.map(
              (data: any, index: any) => {
                return (
                  <div
                    className="col-md-6 col-lg-4 "
                    key={index}
                  >
                    <div className="video-card p-3  ">
                      <div className="video-thumbnail">
                        <img
                          src={data?.second_section_image}
                          alt={data?.image?.id}
                        />
                      </div>

                      <div className="video-card-text">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data?.second_section_content || " ",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <AboutUsClient pageData={pageData} />
      <div
        className="d-flex w-100 justify-content-between"
        style={{ backgroundColor: "red" }}
      >
        <div className="leadership testimonials-items">
          <div className="container">
            <h2>LEADERSHIP</h2>
            <div className="row gy-4 mb-3">
              {pageData?.acf?.data?.leadership_details_repeater?.map(
                (leader: any, index: any) => (
                  <div className="col-lg-6 " key={index}>
                    <div className="item">
                      <div className="tes-box">
                        <div className="bottom mb-2">
                          <div className="image-leader">
                            <img src={leader?.image} alt="leader" />
                          </div>

                          <div className="content leadershipBox ">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: leader?.leader_details || " ",
                              }}
                            />
                          </div>
                        </div>
                        <div className="testi-text pt-2 pt-md-4"></div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: leader?.leader_content || "",
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


      <div className="service about-services">
        <div className="service-items service-items2 sp">
          <div className="container">
            <div className="row align-items-center justify-content-between mb-5">
              <div className="col-lg-6 pe-lg-5">
                <div className="heading-title heading-big-uppercase text-white">
                  <p className="title">
                    <span
                      className="text-xl font-semibold uppercase tracking-wider text-white"
                      data-aos="fade-left"
                      data-aos-duration="800"
                    >
                      Our Portfolio
                    </span>
                    <h2>
                      Our Work,
                      <br />
                      <span> Your Growth</span>
                    </h2>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <p style={{ color: "white" }}>
                  At B3NET, our portfolio showcases the results of over 25 years
                  of ex- pertise in digital marketing, web design, development,
                  and Al-driven solutions. From startups to established
                  enterprises, we've empow- ered businesses across industries to
                  achieve remarkable growth and digital transformation.
                </p>
                <div className="mt-4">
                  <Link href="/about-company/testimonial"
                    className="btn btn-orange"


                  >
                    <span className="btn_label" data-text="Discover More">
                      Discover More
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="portfolio-sec-images">
              <div className="row align-items-center">
                <div className="row">
                  {[0, 1, 2].map((colIndex) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 gap-5" key={colIndex}>
                      {pageData?.acf?.data?.portfolio_repeater
                        ?.slice(colIndex * 2, colIndex * 2 + 2)
                        ?.map((item: any, index: any) => (
                          <div className="portfolio-list !mt-7 !p-4" key={index}>
                            <div className="image image-anime reveal">
                              <Link href={item.url}>
                                <img src={item.image} alt={item.url} />
                              </Link>
                            </div>

                            <div className="portfolio-details">
                              <Link
                                href={item.url}
                                className="d-flex align-items-center justify-content-between"
                              >
                                {item.title}{" "}
                                <span>
                                  <i className="fa-solid fa-arrow-right -rotate-45"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="testimonial-page-sec sp">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-3">
            <div className="col-lg-6 pe-lg-5">
              <div className="heading-title heading-big-uppercase pe-lg-5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: pageData?.acf?.data?.testimonial_heading,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p>{pageData?.acf?.data?.testimonial_content}</p>
              <div className="mt-4">
                <Link
                  className="btn btn-orange"
                  href="/about-company/testimonial"
                >
                  <span className="btn_label" ata-text="Discover More">
                    Discover More
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="space20"></div>
        </div>
        <TestimonialSwiper />

      </div>



      <Expertise />
      <div className="case-studies-service pt-5 mb-4  new-gap" id="case-studies">
        <div className="container">
          <div className="row mb-4 mb-md-5">
            <div className="col-lg-12 text-center">
              <div className="heading-title heading-big-uppercase text-white">
                <h2>Case Studies</h2>
              </div>
              <div className="heading-title text-white">
                <h2>Proven Success in Action</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="case-studies-slider owl-carousel owl-theme d-flex">
          <CaseStudiesSlider />
        </div>
      </div>


      {/* Contact (client) */}
      <div className="row justify-content-center mb-5 pt-4 pt-md-5"  >
        <div className="col-lg-8 text-center">
          <div className="heading-title">
            <p className="title">Request for a Service</p>
            <h2>
              GET YOUR FREE CONSULTATION <span>+ PROPOSAL</span>
            </h2>
          </div>
        </div>
        <Contact data={true} />
      </div>
    </div>
  );
}
