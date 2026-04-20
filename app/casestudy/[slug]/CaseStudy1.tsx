import { getcaseStudiesData } from "@/lib/getdata";
import Link from "next/link";
import ServiceContact from "@/app/services/[slug]/ServiceContact";
import CountUp from "@/components/client/CountUp";
import { BASE_URL } from "@/lib/url";



const CaseStudy1 = async ({ pageData }: any) => {


  return (
    <div className="case-study-2">
      <section className={`casebanner-section `}>
        <div className="bannerwrap">
          <div className="container">
            <div className="casebanner-wrap">
              <div className="banner-caption order-part-1">
                <div
                  className="casestudy1content"
                  dangerouslySetInnerHTML={{ __html: pageData?.content || "" }}
                />

                <div className="three-blocks">
                  {pageData?.acf?.data?.case_study_number_repeater?.map(
                    (data: any, index: any) => {
                      return (
                        <div className="organic-block" key={index}>
                          <h4>
                            <span className="count" data-target="176">
                              <CountUp value={data?.number} duration={3000} />
                            </span>
                            %
                          </h4>
                          <p>{data?.text}</p>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="bnr-img order-part-2">
                <img
                  width="710"
                  height="710"
                  src={`${BASE_URL}/wp-content/uploads/2025/04/flexus-banner-img.png`}
                  className="attachment-full size-full wp-post-image"
                  alt="bnr-img "
                  decoding="async"
                  fetchPriority="high"
                  srcSet={`${BASE_URL}/wp-content/uploads/2025/04/flexus-banner-img.png 710w, 
                  ${BASE_URL}/wp-content/uploads/2025/04/flexus-banner-img-300x300.png 300w, 
                  ${BASE_URL}/wp-content/uploads/2025/04/flexus-banner-img-150x150.png 150w, 
                  ${BASE_URL}/wp-content/uploads/2025/04/flexus-banner-img-24x24.png 24w, 
                  ${BASE_URL}/wp-content/uploads/2025/04/flexus-banner-img-48x48.png 48w, 
                  ${BASE_URL}/wp-content/uploads/2025/04/flexus-banner-img-96x96.png 96w`}
                  sizes="(max-width: 710px) 100vw, 710px"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-used-section sec-pad p-block">
        <div className="container">
          <div className="case-sec-ttl title-color">
            <h2>{pageData?.acf?.data?.first_section_heading}</h2>
          </div>
          <div className="used-service-wrap">
            {pageData?.acf?.data?.first_section_content_repeater?.map(
              (item: any, index: any) => (
                <div className="services-block" key={index}>
                  <div className="service-icon">
                    <img src={item?.logo} alt="service-icon" />
                  </div>

                  <div className="service-desc">
                    <div dangerouslySetInnerHTML={{ __html: item?.text || " " }} />
                  </div>
                </div>
              )
            )}
          </div>
          <div className="hire-us-section">
            <div className="hire-left">
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData?.acf?.data?.first_section_box_content || "",
                }} 
              />
            </div>
            <div className="hire-right">
              <Link
                href="/"
                className="hireus-btn btn btn-primary">
                {pageData?.acf?.data?.first_section_box_button_name}{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="our-client-sec">

            <div className="two-blocks s-block">
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData?.acf?.data?.second_section_content_1 || " ",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flexus-eco-sec sec-pad">
        <div className="container">
          <div className="innerwrap">
            <div
              className="custom-html-content"
              dangerouslySetInnerHTML={{
                __html: pageData?.acf?.data?.second_section_content_1 || " ",
              }}
            />
          </div>
        </div>
      </section>

      <section className="flexus-challenge-sec sec-pad">
        <div className="container">
          <div className="innerwrap">
            <div
              className="custom-html-content"
              dangerouslySetInnerHTML={{
                __html: pageData?.acf?.data?.second_section_content_2 || " ",
              }}
            />
          </div>
        </div>
      </section>

      <section className="crafting-custom-sec sec-pad">
        <div className="container">
          <div className="innerwrap">
            <div className="case-sec-ttl-v1">
              <p>&nbsp;</p>
              <div
                className="second_section_content_3"
                dangerouslySetInnerHTML={{
                  __html: pageData?.acf?.data?.second_section_content_3 || " ", 
                }}
              />
            </div>
          </div>
        </div>

        <section className="methodical-planing">
          <div className="container">
            <div className="methodical-wrapper">
              <div className="case-sec-ttl-v1">
                <div
                  className="second_section_content_4"
                  dangerouslySetInnerHTML={{
                    __html: pageData?.acf?.data?.second_section_content_4 || " ",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="remarkable-result-section sec-pad">
        <div className="container">
          <div className="remarkable-wrapper">
            <div
              className="third_section_top_content"
              dangerouslySetInnerHTML={{
                __html: pageData?.acf?.data?.third_section_top_content || " ",
              }}
            />

            <div className="sales-graph-wrap">
              {pageData?.acf?.data?.third_section_number_repeater?.map(
                (data: any, index: any) => {
                  return (
                    <div className="sales-rectangle" key={index}>
                      <div className="sales-count" data-target="60">
                        {data?.number}%
                      </div>
                      <div className="sales-text">
                        <div
                          dangerouslySetInnerHTML={{ __html: data?.text || " " }}
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData?.acf?.data?.third_section_bottom_content || " ",
                }}
              />
            </p>
          </div>
        </div>
      </section>

      <section className="pandemic-section sec-pad">
        <div className="container">
          <div className="pandemic-wrapper">
            <div
              className="fourth_section_top_content"
              dangerouslySetInnerHTML={{
                __html: pageData?.acf?.data?.fourth_section_top_content || " ",
              }}
            />

            <div className="sales-graph-wrap">
              {pageData?.acf?.data?.fourth_section_number_repeater?.map(
                (data: any, index: any) => {
                  return (
                    <div className="sales-rectangle" key={index}>
                      <div className="sales-count" data-target="140">
                        {data?.number}%
                      </div>
                      <div className="sales-text">
                        <div
                          dangerouslySetInnerHTML={{ __html: data?.text || " " }}
                        />
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="support-partnership-sec sec-pad">
        <div className="container">
          <div className="innerwrap">
            <div
              className="fifth_section_content"
              dangerouslySetInnerHTML={{
                __html: pageData?.acf?.data?.fifth_section_content || " ",
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
                  __html: pageData?.acf?.data?.sixth_section_content || " ",
                }}
              />

              <Link
                href="/request-for-proposal"
                className="get-result-btn btn btn-primary"
              >
                Get Results <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="two-blocks f-block">
              <div className="seo-imgwrap">
                <img src={pageData?.acf?.data?.sixth_section_image}
                  alt="seo-imgwrap"
                />
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
          <ServiceContact showTitle={false} />

        </div>
      </section>
    </div>
  )
}

export default CaseStudy1