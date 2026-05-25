"use client";

import Link from 'next/link';
import React from 'react'
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  pageData: any;
};

const ServiceSlider: React.FC<Props> = ({ pageData }) => {
  const cards = pageData?.acf?.data?.service_page_section_7_card ?? [];
  const caseStudySlugs = [
    "case-study-tech-hardware-service-web-design-digital-marketing",
    "case-study-mattress-company-website-digital-marketing",
    "case-study-tree-care-service-web-design-digital-marketing",
    "case-study-automobile-parts-website-design-seo",
  ];
  if (!cards.length) return null;
  return (
    <div>

      <div className="new-slider-3 owl-carousel owl-theme flex">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 18,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 34,
            },
          }}
          style={{ width: "100%", }}
        >
          {cards.map(
            (item: any, index: any) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <div
                    className="card-parts-1 card-parts-2 serviceCardSlider"
                    style={{ height: "550px" }}
                  >
                    <div className="card h-100">
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="card-img-top"
                      />
                      <div className="card-body heading5 p-4">
                        <h4 className="card-title mb-2">
                          {item.title}
                        </h4>
                        <p className="card-text" >
                          {item.description}
                        </p>

                        <div className="mt-4">
                          <Link
                            className="btn btn-orange"
                            href={`/${caseStudySlugs[index] ?? caseStudySlugs[0]}`}
                          >
                            <span className="btn_label_1">
                              Read More
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
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

    </div>
  )
}

export default ServiceSlider