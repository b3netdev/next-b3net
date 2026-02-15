

import { GetPageData } from "@/lib/getdata";
import Link from "next/link";
import ServiceContact from "./[slug]/ServiceContact";
import Workslider from "./[slug]/Workslider";
// import "swiper/css";
// import "swiper/css/navigation";
// import usePage from "../../../hooks/usePage";



const Services = async () => {


    const pageData = await GetPageData("services", "page")

    // console.log(pageData, "PAGE CDATA")



    // const OurWorkSlider = () => (
    //     <Swiper
    //         modules={[Autoplay]}
    //         autoplay={{ delay: 2000, disableOnInteraction: false }}
    //         loop
    //         navigation
    //         spaceBetween={20}
    //         breakpoints={{
    //             320: { slidesPerView: 1 },
    //             576: { slidesPerView: 2 },
    //             768: { slidesPerView: 3 },
    //             1024: { slidesPerView: 4 },
    //         }}
    //         className="our-work-swiper"
    //     >
    //         {pageData?.acf?.data?.service_page_section_5_images?.map((item) => (
    //             <SwiperSlide key={item.id}>
    //                 <div className="work-slide">
    //                     <img src={item.image} alt="service" loading="lazy" />
    //                 </div>
    //             </SwiperSlide>
    //         ))}
    //     </Swiper>
    // );

    return (
        <main className="page_content services-design-page">
            {/* HERO */}
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
                            href="/proposal"

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
                                <div className="col-lg-4 col-sm-6" key={i}>
                                    <div className="Servicecard">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="serviceImages"
                                        />
                                        <div className="card-body">
                                            <h4>{service.title}</h4>
                                            <div
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


            <div className="our-work-section sec-pad lazyloaded">
                <div className="container">
                    <div className="heading-blocks text-center mb-5">
                        <h2 className="sec-heading">
                            {pageData?.acf?.data?.service_page_section_6_title}
                        </h2>
                        <p>
                            We are immensely grateful for our clients’ kind words. Here is
                            what they want to say about our overall services.
                        </p>
                    </div>

                    <div className="servicetestimonial">
                        {pageData?.acf?.data?.service_page_section_6_testimonial?.map(
                            (item: any, index: any) => (
                                <div className="item clientTesticard " key={index}>
                                    <div className="border-testi">
                                        <div className="testimonial-wrapper lazyloaded">
                                            <div className="quote-icon">
                                                <img
                                                    src="https://www.b3net.com/wp-content/themes/perfecti/assets/seo-assets/images/tetimonial-quote-icon.png"
                                                    alt="quotes"
                                                />
                                            </div>
                                            <span>
                                                {item?.post_content}
                                                <Link
                                                    href="/"
                                                    className="ms-1" style={{ color: "#FF4F02" }}>
                                                    Read More
                                                </Link>
                                            </span>
                                            <div
                                                className="testi-icon-wrap"
                                                style={{ paddingTop: "50px" }}
                                            >
                                                <div className="testi-icon">
                                                    {" "}
                                                    <img src={item?.featured_image?.url} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className="our-work Challenges outerwrap related-post related-post-1 py-3 py-sm-5 mt-1 mt-sm-5">
                <div className="our-work-section sec-pad lazyloaded">
                    <div className="container">
                        <div className="heading-blocks text-center mb-5">
                            <h2 className="sec-heading">
                                {pageData?.acf?.data?.service_page_section_7_title}
                            </h2>
                            <p>{pageData?.acf?.data?.service_page_section_7_title}</p>
                        </div>
                        <div className="ServiceKeyChanges">
                            {pageData?.acf?.data?.service_page_section_7_card?.map(
                                (item: any, index: any) => {

                                    const slug = item?.cta?.url
                                        ? item?.cta?.url.replace(/\/$/, "").split("/").pop()
                                        : "";

                                    const url =
                                        item?.page_info == 13074
                                            ? `${13074}`
                                            : "";

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

                                                        <p className="card-text">
                                                            {item?.description}
                                                        </p>

                                                        <div className="mt-4">
                                                            <Link
                                                                href={`/casestudy/${url}`}
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
