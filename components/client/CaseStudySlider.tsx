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
                spaceBetween={0}
                slidesPerView={4}
                autoplay
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
            >
                {data.map((item: any, index: number) => {

                    const href = `/casestudy/${item.id}`;

                    return (
                        <SwiperSlide key={index} className="w-full">
                            <div className="item w-full h-full">
                                <div className="portfolio-list w-full">
                                    <div className="image image-anime reveal w-full">
                                        <div className="case-studier-image w-full">
                                            <Image
                                                src={item.img}
                                                alt=""
                                                className="w-full h-auto"
                                                width={600}
                                                height={400}
                                            />
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