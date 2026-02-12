"use client";

import React from 'react'
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ServiceSlider = (pageData:any) => {
  return (
    <div>
         {pageData?.acf?.data?.service_page_section_7_card && (
              <div className="new-slider-3 owl-carousel owl-theme">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  grabCursor={true}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  style={{ width: "100%" }}
                >
                  {pageData?.acf?.data?.service_page_section_7_card?.map(
                    (item:any, index:any) => (
                      <SwiperSlide key={index}>
                        <div className="item">
                          <div
                            className="card-parts-1 card-parts-2"
                            style={{ height: "650px" }}
                          >
                            <div className="card h-100">
                              <img
                                src={item.image}
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body heading5 p-4">
                                <h4 className="card-title mb-2">
                                  {item.title}
                                </h4>
                                <p className="card-text" py-3>
                                  {item.description}
                                </p>

                                <div className="mt-4">
                                  <a
                                    className="btn btn-orange"
                                    target="_blank"
                                    href={item.link}
                                    rel="noreferrer"
                                  >
                                    <span className="btn_label_1">
                                      Read More
                                    </span>
                                    <span className="btn_icon">
                                      <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                  </a>
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
            )}
    </div>
  )
}

export default ServiceSlider