"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { BASE_URL } from "@/lib/url";
import Link from "next/link";

type ServiceTestimonialProps = {
    pageData: any;
};

export default function ServiceTestimonial({
    pageData,
}: ServiceTestimonialProps) {
    const testimonials =
        pageData?.acf?.data?.service_page_section_6_testimonial || [];

    return (
        <div className="client-testimonials outerwrap">
            <div className="our-work-section lazyloaded">
                <div className="container">
                    <div className="heading-blocks text-center mb-5">
                        <h2 className="sec-heading">
                            {pageData?.acf?.data?.service_page_section_6_title}
                        </h2>
                        <p className="primary-bodyText">
                            {pageData?.acf?.data?.service_page_section_6_short_title}
                        </p>
                    </div>

                    <div className="new-slider-2 d-flex flex-wrap gap-5 justify-center mx-auto">
                        <Swiper
                           modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: testimonials.length <= 2 ? 2 : 2,
                                },
                                1024: {
                                    slidesPerView: testimonials.length <= 2 ? 3 : 3,
                                },
                            }}
                            centerInsufficientSlides={true}
                            className="w-full service-testimonial-swiper"
                        >
                            {testimonials.map((data: any, index: any) => {
                                return (
                                    <SwiperSlide key={index} className="h-auto flex justify-center">
                                        <div className="item">
                                            <div className="border-testi">
                                                <div className="testimonial-wrapper lazyloaded">
                                                    <div className="quote-icon">
                                                        <img
                                                            src={`${BASE_URL}/wp-content/themes/perfecti/assets/seo-assets/images/tetimonial-quote-icon.png`}
                                                            alt="quotes"
                                                        />
                                                    </div>

                                                    <p className="clamp-3 primary-bodyText">
                                                        {data?.post_content.slice(0, 160)}{" "}
                                                        {data?.post_content?.length > 180 && (
                                                            <span>...</span>
                                                        )}
                                                        <Link
                                                            href={`/testimonial`}
                                                            className="read-more"
                                                        >
                                                            <span className="read-more"> Read More</span>
                                                        </Link>
                                                    </p>

                                                    <div className="testi-icon-wrap">
                                                        <div className="testi-icon">
                                                            <img
                                                                src={data?.featured_image_url}
                                                                alt="testi-icon"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="testi-client-desc">
                                                        <div className="testiclient-name"> </div>
                                                        <div className="testiclient-project"> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}