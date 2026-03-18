"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import Upgrade from "../../assets/images/up-grade-icon.png";
import CaseStudies from "@/assets/images/case-studies-img-1.jpg";
import CaseStudies4 from "@/assets/images/case-studies-img-4.jpg";
import CaseStudies3 from "@/assets/images/case-studies-img-3.jpg";
import CaseStudies5 from "@/assets/images/case-studies-img-5.jpg";
import { BASE_URL } from "@/lib/url";



// const caseStudiesData: any = [
//     {
//         img: CaseStudies,
//         link: `${BASE_URL}/case-study-mattress-company-website-digital-marketing.html`,
//         title: "Mattress Manufacturing Company",
//         percent: "95%",
//         desc: "Increase in Average Website Visitors",
//         path: "/services/casestudies/",
//         id: 13074,
//     },
//     {
//         img: CaseStudies4,
//         link: `${BASE_URL}/case-study-tech-hardware-service-web-design-digital-marketing.html`,
//         title: "Viage Solutions",
//         percent: "370%",
//         desc: "Increase in Average Monthly Sale",
//         path: "/services/casestudies1/",
//         id: 13037,
//     },
//     {
//         img: CaseStudies3,
//         link: `${BASE_URL}/case-study-automobile-parts-website-design-seo.html`,
//         title: "Motorcycle Parts Manufacturer",
//         percent: "275%",
//         desc: "Increase In Average Monthly Sales",
//         path: "/services/casestudies2/",
//         id: 13121,
//     },
//     {
//         img: CaseStudies5,
//         link: `${BASE_URL}/case-study-tree-care-service-web-design-digital-marketing.html`,
//         title: "Tree Care Company",
//         percent: "103%",
//         desc: "Increase In Average Monthly Sales",
//         path: "/services/casestudies3/",
//         id: 12949,
//     },
// ];

const caseStudiesData: any = [
    {
      img: CaseStudies,
      link: `${BASE_URL}/case-study-mattress-company-website-digital-marketing.html`,
      title: "Mattress Manufacturing Company",
      percent: "95%",
      desc: "Increase in Average Website Visitors",
      path: "/services/casestudies/",
      id: 13074,
      slug: "case-study-flexus-comfort",
    },
    {
      img: CaseStudies4,
      link: `${BASE_URL}/case-study-tech-hardware-service-web-design-digital-marketing.html`,
      title: "Viage Solutions",
      percent: "370%",
      desc: "Increase in Average Monthly Sale",
      path: "/services/casestudies1/",
      id: 13037,
      slug: "case-study-viage",
    },
    {
      img: CaseStudies3,
      link: `${BASE_URL}/case-study-automobile-parts-website-design-seo.html`,
      title: "Motorcycle Parts Manufacturer",
      percent: "275%",
      desc: "Increase In Average Monthly Sales",
      path: "/services/casestudies2/",
      id: 13121,
      slug: "case-study-arc-lever",
    },
    {
      img: CaseStudies5,
      link: `${BASE_URL}/case-study-tree-care-service-web-design-digital-marketing.html`,
      title: "Tree Care Company",
      percent: "103%",
      desc: "Increase In Average Monthly Sales",
      path: "/services/casestudies3/",
      id: 12949,
      slug: "case-study-treecarearborists",
    },
  ];


export default function     CaseStudiesSlider() {
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
                {caseStudiesData.map((item: any, index: number) => {

                    const href = `/casestudy/${item.slug}`;

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
                                                    <div className="percent mt-4">{item.percent}</div>
                                                    <p style={{ color: "white" }} className="mt-4">{item.desc}</p>
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