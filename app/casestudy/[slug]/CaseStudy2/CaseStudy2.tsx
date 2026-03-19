import { getcaseStudiesData } from "@/lib/getdata";
import Link from "next/link";
import ServiceContact from "@/app/services/[slug]/ServiceContact";
 
import styles from "./CaseStudy2.module.css";
import Slider from "./Slider";
import { BASE_URL } from "@/lib/url";
import CountUp from "@/components/client/CountUp";

const CaseStudy2 = async ({ slug }: any) => {
  const data = await getcaseStudiesData(slug)
  const pageData = data?.page

  return (
    <main className={styles.pageContent}>
      <div className={styles.caseStudy4}>
        {/* Banner */}
        <section
          className={styles.casebannerSection}
          style={{
            backgroundImage: `url(${BASE_URL}/wp-content/themes/perfecti/case-4-assets/images/banner-bg.jpg)`,
          }}
        >
          <div className={styles.bannerwrap}>
            <div className="container">
              <div className={styles.casebannerWrap}>
                <div className={styles.bannerCaption}>
                  <div
                    className={styles.bannerContent}
                    dangerouslySetInnerHTML={{ __html: pageData?.content }}
                  />

                  <div className={styles.threeBlocks}>
                    {pageData?.acf?.data?.banner_number_section?.map(
                      (data: any, index: any) => {
                        return (
                          <div className={styles.organicBlock} key={index}>
                            <h4>
                              <span className="count" data-target="275">
                              <CountUp value={data?.number} duration={3000} />%
                              </span>
                            </h4>
                            <p>{data?.text}</p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services used */}
        <section className={`${styles.servicesUsedSection} ${styles.secPad}`}>
          <div className="container">
            <div className={styles.caseSecTtl}>
              <h2>{pageData?.acf?.data?.first_section_heading}</h2>
            </div>

            <div className={styles.usedServiceWrap}>
              {pageData?.acf?.data?.first_section_box_repeater?.map(
                (data: any, index: any) => {
                  return (
                    <div className={styles.servicesBlock} key={index}>
                      <div className={styles.serviceIcon}>
                        <img src={data?.image} alt="Website Redesign" />
                      </div>
                      <div className={styles.serviceDesc}>
                        <div dangerouslySetInnerHTML={{ __html: data?.text }} />
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            {/* Hire us */}
            <div className={styles.hireUsSection}>
              <div className={styles.hireLeft}>
                <div className={styles.sectitl}>
                  <h2>
                    {pageData?.acf?.data?.first_section_box_content_heading}
                  </h2>
                  <p></p>
                </div>
                <p>
                  {pageData?.acf?.data?.first_section_box_content_sub_heading}
                </p>
              </div>

              <div className={styles.hireRight}>
                <a
                  href="#caserequest-qoute"
                  className={`btn btn-primary ${styles.hireusBtn} ${styles.btnPrimaryIconFix}`}
                >
                  {pageData?.acf?.data?.first_section_box_content_button_name}{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Testimonial */}
            <div className={styles.caseTesti}>
              <div className={styles.caseSecTtl}>
                <h2>{pageData?.acf?.data?.testimonial_heading}</h2>
              </div>
              <Slider pageData={pageData} />


            </div>
          </div>
        </section>

        {/* Client section */}
        <section
          className={styles.clientSec}
          style={{
            backgroundImage: `url(${BASE_URL}/wp-content/themes/perfecti/case-4-assets/images/client-bg.jpg)`,
          }}
        >
          <div className="container">
            <div className={styles.ourClientSec}>
              <div className={`${styles.twoBlocks} ${styles.fBlock}`}>
                <div className={styles.clientImgwrap}>
                  <img
                    src={`${BASE_URL}/wp-content/uploads/2023/08/bike-img.jpg`}
                    alt="ARC Levers"
                  />
                  <div className={styles.playBtn}>
                    <img
                      src={`${BASE_URL}/wp-content/themes/perfecti/case-4-assets/images/play-icon.png`}
                      alt="Play"
                    />
                  </div>
                </div>
              </div>

              <div className={`${styles.twoBlocks} ${styles.sBlock}`}>
                <div className={styles.caseSecTtlV1}>
                  <h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: pageData?.acf?.data?.second_section_heading,
                      }}
                    />
                  </h2>
                  <p></p>
                </div>

                <div
                  dangerouslySetInnerHTML={{
                    __html: pageData?.acf?.data?.second_section_content,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Identifying Challenges */}
        <section className={`${styles.secPad}`}>
          <div className="container">
            <div className={styles.identifyText}>
              <div className={styles.caseSecTtlV1}>
                <h2>{pageData?.acf?.data?.third_section_heading}</h2>
                <p></p>
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: pageData?.acf?.data?.third_section_content,
                }}
              />
              <h4>{pageData?.acf?.data?.points_heading}</h4>

              <ul className={`${styles.arrows} ${styles.listHalf}`}>
                {pageData?.acf?.data?.points_repeater?.map((data: any, index: any) => {
                  return <li key={index}>{data?.text}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Old design */}
        <section>
          <div className="container">
            <div className={styles.caseImgWrap}>
              <img
                src={`${BASE_URL}/wp-content/uploads/2023/08/old-website-design.jpg`}
                alt="Old website design"
              />
            </div>
          </div>
        </section>

        {/* Value driven */}
        <section className={`${styles.valueDrivenSec} ${styles.secPad}`}>
          <div className="container">
            <div className={styles.caseSecTtlV1}>
              <h2>{pageData?.acf?.data?.fourth_section_heading}</h2>
              <p></p>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: pageData?.acf?.data?.fourth_section_content,
              }}
            />
          </div>
        </section>

        {/* Web planning */}
        <section className={`${styles.webPlanningSec} ${styles.secPad}`}>
          <div className="container">
            <div className={styles.caseSecTtlV1}>
              <h2>{pageData?.acf?.data?.fifth_section_heading}</h2>
              <p></p>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: pageData?.acf?.data?.fifth_section_content,
              }}
            />

            <div className={styles.caseImgWrap}>
              <img
                src={pageData?.acf?.data?.fifth_section_first_image}
                alt="New website design"
              />
            </div>

            <div className={styles.caseImgWrap2}>
              <h4>
                {pageData?.acf?.data?.ifth_section_heading_between_images}
              </h4>
              <img
                src={`${BASE_URL}/wp-content/uploads/2023/08/new-website-design2.png`}
                alt="New website design improvements"
              />
            </div>
          </div>
        </section>

        {/* Digital planning */}
        <section className={styles.digitalPlaningSec}>
          <div className="container">
            <div className={styles.caseSecTtlV1}>
              <h2>{pageData?.acf?.data?.sixth_section_heading}</h2>
              <p></p>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: pageData?.acf?.data?.sixth_section_top_content,
              }}
            />

            <div className={styles.stepProcessCol}>
              <div className={styles.stepProcessMain}>
                <div className={styles.stepProcess}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        pageData?.acf?.data?.sixth_section_left_box_content,
                    }}
                  />
                </div>
              </div>

              <div className={styles.stepProcessMain}>
                <div className={styles.stepProcess}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        pageData?.acf?.data?.sixth_section_right_box_content,
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: pageData?.acf?.data?.sixth_section_bottom_content,
              }}
            />
          </div>
        </section>

        {/* Success */}
        <section className={styles.successSec}>
          <div className="container">
            <div className={styles.caseSecTtlV1}>
              <h2>{pageData?.acf?.data?.seventh_section_heading}</h2>
              <p></p>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: pageData?.acf?.data?.seventh_section_content,
              }}
            />

            <div className={styles.salesGraphWrap}></div>

            <div className={styles.seoEffortSec}>
              <div className={styles.stepProcessMain}>
                <div className={styles.seoBlock1}>
                  <img
                    src={pageData?.acf?.data?.seventh_section_image_1}
                    alt="SEO demo 1"
                  />
                </div>
              </div>
              <div className={styles.stepProcessMain}>
                <div className={styles.seoBlock1}>
                  <img
                    src={pageData?.acf?.data?.seventh_section_image_2}
                    alt="SEO demo 2"
                  />
                </div>
              </div>
            </div>

            <div className={styles.vitalP}>
              It’s interesting to note that organic SEO played a vital role in
              driving this accomplishment.
            </div>
          </div>
        </section>

        <section className="request-quote-sec sec-pad" id="caserequest-qoute">
          <div className="container">
            <div className="case-sec-ttl">
              <h2 style={{ color: "#26b77c" }}>Request For Quote</h2>
            </div>
            <ServiceContact showTitle={false} />
          </div>
           
        </section>
      </div>
    </main>
  )
}

export default CaseStudy2