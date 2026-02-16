"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./CaseStudy2.module.css";
interface SliderProps {
    pageData: any; // You can type this properly later
  }
  const Slider: React.FC<SliderProps> = ({ pageData }) => {
  return (
    <div className={styles.caseTestiCol}>
              
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
              >
                {pageData?.acf?.data?.testimonials?.map((data:any, index:any) => (
                  <SwiperSlide key={index}>
                    <div className="item">
                      <div className={styles.clientSays}>
                        <h2>{data?.content}</h2>
                      </div>

                      <div className={styles.testDetails}>
                        <div className={styles.testLeft}>
                          <h4>{data?.author_name}</h4>
                          <p>{data?.author_company}</p>
                        </div>

                        <div className={styles.rating}>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
  )
}

export default Slider