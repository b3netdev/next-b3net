"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import Upgrade from "../../assets/images/up-grade-icon.png";



type Props = {
    data: any;
};

export default function CaseStudiesSlider({ data }: Props) {
    return (
        <div className="w-full">

            <Swiper
                spaceBetween={24}
                slidesPerView={4}
                autoplay
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
            >
                {data.map((item: any, index: number) => {

                    const href = `/casestudy/${item.id}`;

                    return (
                        <SwiperSlide key={index}>

                            <div className="item size-100" key={index}>
                                <div className="portfolio-list">
                                    <div className="image image-anime reveal">
                                        <div className="case-studier-image">
                                            <Image src={item.img} alt="" />
                                        </div>

                                        <div className="solutions-hover-box">
                                            <div className="solution-hover text-center">

                                                <Link href={href}>
                                                    <div className="up-icon">
                                                        <Image src={Upgrade} alt="" />
                                                    </div>
                                                    <h3>{item.title}</h3>
                                                    <div className="percent">{item.percent}</div>
                                                    <p style={{ color: "white" }}>{item.desc}</p>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    );

                })}
            </Swiper>

        </div>
    );
}