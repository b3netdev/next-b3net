
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function TestimonialsClientsSlider({ pageData }: { pageData: any }) {
  return (
    <>
      <div className="full-tech-list-1 ps-4">
        <div className="tech-list-slider2 mb-4 owl-carousel owl-theme">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={2500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={true}
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 12 },
              576: { slidesPerView: 3, spaceBetween: 14 },
              768: { slidesPerView: 4, spaceBetween: 16 },
              992: { slidesPerView: 5, spaceBetween: 18 },
              1200: { slidesPerView: 6, spaceBetween: 20 },
            }}
          >
            {pageData?.acf?.data?.image_repeater_1?.map((item: any, index: number) => (
              <SwiperSlide key={index} className="item">
                <div className="tech-list-col">
                  <img src={item.image} alt={item.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="full-tech-list-2 mt-4 pe-4">
        <div className="tech-list-slider3 owl-carousel owl-theme">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={2500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: true,
            }}
            allowTouchMove={true}
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 12 },
              576: { slidesPerView: 3, spaceBetween: 14 },
              768: { slidesPerView: 4, spaceBetween: 16 },
              992: { slidesPerView: 5, spaceBetween: 18 },
              1200: { slidesPerView: 6, spaceBetween: 20 },
            }}
          >
            {pageData?.acf?.data?.image_repeater_2?.map((item: any, index: number) => (
              <SwiperSlide key={index} className="item">
                <div className="tech-list-col">
                  <img src={item.image} alt={item.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
