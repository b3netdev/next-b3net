import React from "react";
import { GetPageData } from "@/lib/getdata";
import ServiceSlider from "./ServiceSlider";
import ServiceContact from "./ServiceContact";
import Link from "next/link";
import ServiceContact1 from "./ServiceContact1";
import FrequentQuestion from "./FrequentQuestion";
import Scroll from "@/components/client/Scroll";
import Workslider from "./Workslider";
const ServiceSubpage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    console.log(slug, "SLUG")
    const data = await GetPageData(slug, "page");

    const pageData = data?.page ?? data;


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
            {
                pageData?.acf?.data?.common_section_content_1 && ( 
 <section className="section-second sec-pad pb-0">
                <div className="container nitro-offscreen">
                  <div className="row dallasSeo-sec align-items-center">
                    <div className="col-lg-6 left-column">
                    	<div
                        dangerouslySetInnerHTML={{__html: pageData?.acf?.data?.common_section_content_1 || ""}}
                        />
                      
                    </div>
                    <div className="col-lg-6 right-column text-center">
                      <img src={pageData?.acf?.data?.common_section_image_1} className="img-fluid" alt="Data Cleansing Image" />
                    </div>
                  </div>
                </div>
              </section>
                )
                
            }

             
               {
                pageData?.acf?.data?.services_page_section_2_heading &&
               

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
                                            pageData?.acf?.data?.services_page_section_2_description || "",
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
            
}



{pageData?.acf?.data?.common_repeater_heading_1 && (
    <div className="wp-services-include-sec sec-pad pb-0 nitro-offscreen my-5 py-0 my-sm-5 py-sm-5">
                <div className="container">
                  <div className="services-wrap">
                    <div className="heading-blocks text-center mb-5">
                      <h2 className="sec-heading-blue">
                      	{pageData?.acf?.data?.common_repeater_heading_1}                  
                      </h2>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        {
                            pageData?.acf?.data?.common_repeater_1?.map((item: any, index: any) => {
                                return(
                                     <div className=" col-sm-6 col-md-4  col-lg-3 dataCleansing-blocks" key={index}>
                        <div className="include-services-imgwrap text-center mb-3">
                          <img src={item?.logo} className="img-fluid" alt="Data Quality Audit" />
                        </div>
                        <div className="include-services-desc text-center">
                          <h4 style={{color: "#F9764A"}}>{item?.title}</h4>
                          <p>{item?.content}</p>
                        </div>
                      </div>
                                )
                            })
                        }
                                   
                              
                                  
              
                    </div>
                  </div>
                </div>
              </div>
)}


{
    pageData?.acf?.data?.unique_section_image_title &&(
<section className="tech-stacks-sec sec-pad nitro-offscreen my-5 py-0 my-sm-5 py-sm-5">
                <div className="container">
                  <div className="row dallasSeo-sec align-items-center">
                    
                    
                    <div className="col-md-6 left-column text-center mb-4 mb-md-0">
                      <div className="imgwrap">
                        <img src={pageData?.acf?.data?.unique_section_image}className="img-fluid" alt="Data Health Insight" />
                      </div>
                      <p className="img-desc mt-3">
                        {pageData?.acf?.data?.unique_section_image_title}                      </p>
                    </div>
              
                  
                    <div className="col-md-6 right-column">
                      <h3 className="sec-heading mb-4"></h3>
                      <div className="tech-stacks-lists d-flex flex-wrap gap-2">
                       <div className="row">
  {pageData?.acf?.data?.unique_section_content_repeater?.map(
    (item: any, index: number) => (
      <div className="col-sm-6 mb-3" key={index}>
        <div className="techlist-btn btn btn-outline-primary w-100 p-4">
          {item?.text}
        </div>
      </div>
    )
  )}
</div>

                      </div>
                    </div>
              
                  </div>
                </div>
              </section>
    )
}

   
{
    pageData?.acf?.data?.common_section_content_2 && (

         <section className="section-second sec-pad pb-0">
                <div className="container nitro-offscreen">
                  <div className="row dallasSeo-sec align-items-center">
                    <div className="col-lg-6 left-column">
                    	<div 
                        
                        dangerouslySetInnerHTML={{__html: pageData?.acf?.data?.common_section_content_2 || ""}}
                        />
                     
                    </div>
                    <div className="col-lg-6 right-column text-center">
                      <img src="https://2026.b3net.info/b3net-com/wp-content/uploads/2024/06/Why-B3NET-3.jpg" className="img-fluid" alt="Data Cleansing Image" />
                    </div>
                  </div>
                </div>
              </section>
    )
}

{
    pageData?.acf?.data?.common_repeater_heading_4 && (

        <div className="wp-services-include-sec sec-pad pb-0 nitro-offscreen my-5 py-0 my-sm-5 py-sm-5">
                <div className="container">
                  <div className="services-wrap">
                    <div className="heading-blocks text-center mb-5">
                      <h2 className="sec-heading-blue">
                       {pageData?.acf?.data?.common_repeater_heading_4}                     </h2>
                    </div>
                    <div className="row g-4 justify-content-between">
                        {
                            pageData?.acf?.data?.common_repeater_4?.map((item:any,index:any)=>{
                                return(
                                     <div className="col-sm-6 col-md-4 col-lg-3 dataCleansing-blocks" key={index}>
                        <div className="include-services-imgwrap text-center mb-3">
                          <img src={item?.logo} className="img-fluid" alt="Data Quality Audit" />
                        </div>
                        <div className="include-services-desc text-center">
                          <h4 style={{color: "#F9764A"}}>{item?.title}</h4>
                          <p></p>
                        </div>
                      </div>
                                )
                            })
   
                        }
                    </div>
                  </div>
                </div>
              </div>

    )
}





    

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

{
    pageData?.acf?.data?.common_section_content_2 &&(

             <section className="section-second sec-pad pb-0">
                <div className="container nitro-offscreen">
                  <div className="row dallasSeo-sec align-items-center">
                    <div className="col-lg-6 left-column">
                    	<div 
                        dangerouslySetInnerHTML={{__html:pageData?.acf?.data?.common_section_content_2 || ""}}
                        
                        />
<div className="data-dashboarding">
<ul>
<li>PowerBI</li>
<li>Tableau</li>
<li>OBIEE</li>
</ul>
</div>
                     
                    </div>
                    <div className="col-lg-6 right-column text-center">
                      <img src={pageData?.acf?.data?.common_section_image_2} className="img-fluid" alt="Data Cleansing Image" />
                    </div>
                  </div>
                </div>
              </section>
    )
}

{
    pageData?.acf?.data?.common_section_content_3 &&(
<section className="section-second sec-pad pb-0">
                <div className="container nitro-offscreen">
                  <div className="row dallasSeo-sec align-items-center">
                    <div className="col-lg-6 left-column">
                    	<div 
                        dangerouslySetInnerHTML={{__html:pageData?.acf?.data?.common_section_content_3}}
                        />


                     
                    </div>
                    <div className="col-lg-6 right-column text-center">
                      <img src={pageData?.acf?.data?.common_section_image_3} className="img-fluid" alt="Data Cleansing Image" />
                    </div>
                  </div>
                </div>
              </section>
    )
}



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



{
    pageData?.acf?.data?.common_repeater_2 && (
<div className="wp-services-include-sec sec-pad pb-0 nitro-offscreen my-5 py-0 my-sm-5 py-sm-5">
                <div className="container">
                  <div className="services-wrap">
                    <div className="heading-blocks text-center mb-5">
                      <h2 className="sec-heading-blue">
                        HERE’S WHAT YOU CAN EXPECT FROM OUR CUSTOMER SEGMENTATION SERVICES:                      </h2>
                    </div>
                    <div className="row g-4 justify-content-between">
                        {
                            pageData?.acf?.data?.common_repeater_2?.map((data:any,index:any) => {
                                return(
<div className=" col-sm-6 col-md-4  col-lg-2 dataCleansing-blocks">
                        <div className="include-services-imgwrap text-center mb-3">
                          <img src={data?.logo} className="img-fluid" alt="Data Quality Audit" />
                        </div>
                        <div className="include-services-desc text-center">
                          <h4 style={{color:'#FB6C47'}}>{data?.title}</h4>
                          <p>{data?.content}.
</p>
                        </div>
                      </div>
                                )
                            }
                        )
                        }
                                    
                                         
                                         
                                            
              
                    </div>
                  </div>
                </div>
              </div>
    )
}

  

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

           <Workslider pageData={pageData} />

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
                                                            {data?.post_content}
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
            <ServiceContact
            title={pageData?.acf?.data?.service_page_section_8_title || "Request a FREE Consultation"}
            />
            {
                pageData?.acf?.data?.faq_repeater &&
                <FrequentQuestion pageData={pageData} />
            }
        </main>
    );
};

export default ServiceSubpage;
