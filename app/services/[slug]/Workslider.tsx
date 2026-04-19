"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

type WorkSliderProps = {
  pageData: any;
};

const Workslider: React.FC<WorkSliderProps> = ({ pageData }) => {
  return (
    <>
      {pageData?.acf?.data?.service_page_section_5_images && (
        <div className="our-work outerwrap py-2 py-sm-5">
          <div className="our-work-section  lazyloaded">
            <div className="container">
              <div className="heading-blocks text-center mb-5">
                <h2 className="sec-heading">
                  {pageData?.acf?.data?.service_page_section_5_title}
                </h2>
                <p className="primary-bodyText">{pageData?.acf?.data?.service_page_section_5_description}</p>
              </div>

              <div className="new-slider-1 owl-carousel owl-theme">
                <Swiper
                  modules={[Autoplay]}

                  spaceBetween={36}
                  loop={true}
                  speed={4000}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  style={{ width: "100%", maxWidth: "100vw" }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                  }}
                >
                  {pageData?.acf?.data?.service_page_section_5_images?.map(
                    (item: any, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="item">
                          <img src={item.image} alt={`item-${index}`} />
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>

              <div className="mt-5 text-center">
                <Link
                  className="btn btn-orange"
                  target=""
                  href="/portfolio"
                >
                  <span className="btn_label_1">Discover More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Workslider;
