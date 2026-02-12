"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Contact from "@/components/client/Contact";

import CaseStudies from "@/assets/images/case-studies-img-1.jpg";
import CaseStudies4 from "@/assets/images/case-studies-img-4.jpg";
import CaseStudies3 from "@/assets/images/case-studies-img-3.jpg";
import CaseStudies5 from "@/assets/images/case-studies-img-5.jpg";
import Upgrade from "@/assets/images/up-grade-icon.png";

type Props = {
  pageData: any;
};

export default function AboutUsClient({ pageData }: Props) {

  useEffect(() => {
    const containers = document.querySelectorAll<HTMLDivElement>(".progress-container");

    containers.forEach((container) => {
      const progress = parseInt(container.getAttribute("data-progress") || "0", 10);
      const circle = container.querySelector<SVGCircleElement>(".circle-progress");
      const text = container.querySelector<HTMLDivElement>(".progress-text");

      if (!circle || !text) return;

      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;

      let current = 0;
      const interval = setInterval(() => {
        if (current >= progress) {
          clearInterval(interval);
          return;
        }
        current++;
        const offset = circumference - (current / 100) * circumference;
        circle.style.strokeDashoffset = `${offset}`;
        text.textContent = `${current}%`;
      }, 15);
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Patrick McNamee",
      designation: "Broker Associate, REALTOR, SRES",
      company: "Evergreen Realty, HomeSmart",
      image:
        "https://www.b3net.com/wp-content/uploads/2015/06/PatrickMcNamee.png",
      rating: 5,
      message:
        "It was a pleasure working with B3NET on my new custom blog on the WordPress platform. I am very pleased with the result!",
    },
    {
      id: 2,
      name: "David Schnieder",
      designation: "Founder",
      company: "American Real Estate and Mortgage School",
      image:
        "https://www.b3net.com/wp-content/uploads/2015/06/David-Schnieder.png",
      rating: 5,
      message:
        "No matter how much complex applications had in our project, B3NET team implemented all those smoothly. B3NET is indeed Orange County’s #1 web development firm.",
    },
    {
      id: 3,
      name: "Gina B",
      designation: "CEO",
      company: "Encore Staffing",
      image: "https://www.b3net.com/wp-content/uploads/2015/06/gina.png",
      rating: 5,
      message:
        "B3NET INC. did our website and they were very good, professional and a great value. I have already recommended them to other businesses.",
    },
    {
      id: 4,
      name: "Gina B",
      designation: "CEO",
      company: "Encore Staffing",
      image: "https://www.b3net.com/wp-content/uploads/2015/06/gina.png",
      rating: 5,
      message:
        "B3NET INC. did our website and they were very good, professional and a great value. I have already recommended them to other businesses.",
    },
    {
      id: 5,
      name: "Gina B",
      designation: "CEO",
      company: "Encore Staffing",
      image: "https://www.b3net.com/wp-content/uploads/2015/06/gina.png",
      rating: 5,
      message:
        "B3NET INC. did our website and they were very good, professional and a great value. I have already recommended them to other businesses.",
    },
  ];
  const caseStudiesData = [
    {
      img: CaseStudies,
      link: "https://www.b3net.com/case-study-mattress-company-website-digital-marketing.html",
      title: "Mattress Manufacturing Company",
      percent: "95%",
      desc: "Increase in Average Website Visitors",
      path: "/services/casestudies",
      id: 13074,
    },
    {
      img: CaseStudies4,
      link: "https://www.b3net.com/case-study-tech-hardware-service-web-design-digital-marketing.html",
      title: "Viage Solutions",
      percent: "370%",
      desc: "Increase in Average Monthly Sale",
      path: "/services/casestudies1",
      id: 13037,
    },
    {
      img: CaseStudies3,
      link: "https://www.b3net.com/case-study-automobile-parts-website-design-seo.html",
      title: "Motorcycle Parts Manufacturer",
      percent: "275%",
      desc: "Increase In Average Monthly Sales",
      path: "/services/casestudies2",
      id: 13121,
    },
    {
      img: CaseStudies5,
      link: "https://www.b3net.com/case-study-tree-care-service-web-design-digital-marketing.html",
      title: "Tree Care Company",
      percent: "103%",
      desc: "Increase In Average Monthly Sales",
      path: "/services/casestudies3",
      id: 12949,
    },
  ];

  return (
    <>

      <div className="video-section we-offer">
        <div className="container">
          <h2 className="text-center text-b">
            {pageData?.acf?.data?.second_section_heading}
          </h2>

          <div className="row gy-4">
            {pageData?.acf?.data?.second_section_content_repeater?.map((d: any,index:any) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="video-card p-3">
                  <div className="video-thumbnail">
                    <img src={d?.second_section_image} alt="" />
                  </div>

                  <div className="video-card-text">
                    <div dangerouslySetInnerHTML={{ __html: d?.content ?? "" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="ceo-speaks">
        <div className="container">
          <div className="row gy-5 text-center">
            <div className="col-lg-6">
              <h2
                dangerouslySetInnerHTML={{
                  __html: pageData?.acf?.data?.ceo_speaks_heading ?? "",
                }}
              />
              <div className="video-thumbnail">
                <div
                  dangerouslySetInnerHTML={{
                    __html: pageData?.acf?.data?.ceo_speaks_video ?? "",
                  }}
                />
                <a href="https://www.youtube.com/watch?v=video3">
                  <img src={pageData?.acf?.data?.image} alt="Video" />
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="mb-4">
                {pageData?.acf?.data?.measuring_by_parameters_heading}
              </h2>

              {/* progress circles (DOM animation) */}
              <div className="row justify-content-center align-items-start gy-1">
                <div className="col-sm-4 col-6 mb-4 v-flex">
                  <div className="progress-container" data-progress="95">
                    <svg width="120" height="120">
                      <circle className="circle-bg" cx="60" cy="60" r="50" />
                      <circle className="circle-progress" cx="60" cy="60" r="50" />
                    </svg>
                    <div className="progress-text">0%</div>
                  </div>
                  <p className="mt-2">Web Development</p>
                </div>
                <div className="col-sm-4 col-6 mb-4 v-flex">
                  <div className="progress-container" data-progress="90">
                    <svg width="120" height="120">
                      <circle
                        className="circle-bg"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                      <circle
                        className="circle-progress"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                    </svg>
                    <div className="progress-text">0%</div>
                  </div>
                  <p className="mt-2">Ecommerce Development</p>
                </div>
                <div className="col-sm-4 col-6 mb-4 v-flex">
                  <div className="progress-container" data-progress="95">
                    <svg width="120" height="120">
                      <circle
                        className="circle-bg"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                      <circle
                        className="circle-progress"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                    </svg>
                    <div className="progress-text">0%</div>
                  </div>
                  <p className="mt-2">Digital Marketing</p>
                </div>
                <div className="col-sm-4 col-6 mb-4 v-flex">
                  <div className="progress-container" data-progress="95">
                    <svg width="120" height="120">
                      <circle
                        className="circle-bg"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                      <circle
                        className="circle-progress"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                    </svg>
                    <div className="progress-text">0%</div>
                  </div>
                  <p className="mt-2">Responsive Web Design</p>
                </div>
                <div className="col-sm-4 col-6 mb-4 v-flex">
                  <div className="progress-container" data-progress="80">
                    <svg width="120" height="120">
                      <circle
                        className="circle-bg"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                      <circle
                        className="circle-progress"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                    </svg>
                    <div className="progress-text">0%</div>
                  </div>
                  <p className="mt-2">Mobile Apps Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper testimonials */}
      <div className="testimonial-page-sec sp">
        <div className="container">
          <div className="testimonial-slider-col">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{ delay: 1000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="item">
                    <div className="tes-box">
                      <div className="bottom mb-2">
                        <div className="image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="content">
                          <strong>{item.name}</strong>
                          <div>
                            {item.designation}, {item.company}
                          </div>
                        </div>
                      </div>
                      <div className="testi-text pt-2 pt-md-4">
                        <p>{item.message}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Case studies links - use next/link */}
      <div className="case-studies-service sp pb-0">
        <div className="container">
          <div className="case-studies-slider owl-carousel owl-theme d-flex">
            {caseStudiesData.map((item, index) => {
              const slug = new URL(item.link).pathname.split("/").pop()?.replace(".html", "") || "";
              return (
                <div className="item" key={index}>
                  <div className="portfolio-list">
                    <div className="image image-anime reveal">
                      <div className="case-studier-image">
                        <img src={(item.img as any).src ?? item.img} alt="" />
                      </div>

                      <div className="solutions-hover-box">
                        <div className="solution-hover text-center">
                          <Link href={`${item.path}/${slug}`}>
                            <div className="up-icon">
                              <img src={(Upgrade as any).src ?? Upgrade} alt="" />
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
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact (client) */}
      <div className="row justify-content-center mb-5" style={{ padding: "50px" }}>
        <div className="col-lg-8 text-center">
          <div className="heading-title">
            <p className="title">Request for a Service</p>
            <h2>
              GET YOUR FREE CONSULTATION <span>+ PROPOSAL</span>
            </h2>
          </div>
        </div>
        <Contact data={true} />
      </div>
    </>
  );
}
