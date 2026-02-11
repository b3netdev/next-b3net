import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Upgrade from "../../assets/images/up-grade-icon.png";
import CaseStudies from "../../assets/images/case-studies-img-1.jpg";
import CaseStudies4 from "../../assets/images/case-studies-img-4.jpg";
import CaseStudies3 from "../../assets/images/case-studies-img-3.jpg";
import CaseStudies5 from "../../assets/images/case-studies-img-5.jpg";
import ExpertIcon1 from "../../assets/images/expert-icon-1.png";
import ExpertIcon2 from "../../assets/images/expert-icon-2.png";
import Why from "../../assets/images/why-image.jpg";
import ExpertIcon3 from "../../assets/images/expert-icon-3.png";

import Process from "../client/Process";
import TechStacks from "../client/TechStacks";

type CaseStudyItem = {
  img: StaticImageData;
  link: string;
  title: string;
  percent: string;
  desc: string;
  path: string;
  id: number;
};

const CaseStudy = () => {
  const caseStudiesData: CaseStudyItem[] = [
    {
      img: CaseStudies,
      link: "https://www.b3net.com/case-study-mattress-company-website-digital-marketing.html",
      title: "Mattress Manufacturing Company",
      percent: "95%",
      desc: "Increase in Average Website Visitors",
      path: "/services/casestudies/",
      id: 13074,
    },
    {
      img: CaseStudies4,
      link: "https://www.b3net.com/case-study-tech-hardware-service-web-design-digital-marketing.html",
      title: "Viage Solutions",
      percent: "370%",
      desc: "Increase in Average Monthly Sale",
      path: "/services/casestudies1/",
      id: 13037,
    },
    {
      img: CaseStudies3,
      link: "https://www.b3net.com/case-study-automobile-parts-website-design-seo.html",
      title: "Motorcycle Parts Manufacturer",
      percent: "275%",
      desc: "Increase In Average Monthly Sales",
      path: "/services/casestudies2/",
      id: 13121,
    },
    {
      img: CaseStudies5,
      link: "https://www.b3net.com/case-study-tree-care-service-web-design-digital-marketing.html",
      title: "Tree Care Company",
      percent: "103%",
      desc: "Increase In Average Monthly Sales",
      path: "/services/casestudies3/",
      id: 12949,
    },
  ];

  return (
    <>
      <div className="case-studies-service sp pb-0 new-gap" id="case-studies">
        <div className="container">
          <div className="row mb-4 mb-md-5">
            <div className="col-lg-12 text-center">
              <div className="heading-title heading-big-uppercase text-white">
                <h2>Case Studies</h2>
              </div>
              <div className="heading-title text-white">
                <h2>Proven Success in Action</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="case-studies-slider owl-carousel owl-theme d-flex">
          {caseStudiesData.map((item, index) => {
            const slug = new URL(item.link).pathname.split("/").pop()!.replace(".html", "");
            const href = `${item.path}${slug}`;

            return (
              <div className="item" key={index}>
                <div className="portfolio-list">
                  <div className="image image-anime reveal">
                    <div className="case-studier-image">
                      <Image src={item.img} alt="" />
                    </div>

                    <div className="solutions-hover-box">
                      <div className="solution-hover text-center">
                        {/* Next.js Link (server component safe). No router "state" in Next. */}
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
            );
          })}
        </div>
      </div>

      <div className="about1 client-sec sp new-gap" id="clients-sec">
        <div className="container">
          <div className="row mb-4 mb-md-5">
            <div className="col-lg-12 text-center">
              <div className="heading-title">
                <p>Scalable. Dependable. Strategic.</p>
                <h2>
                  Built for the Bold.
                  <span>Engineered for Growth.</span>
                </h2>
                <p style={{ textAlign: "justify" }}>
                  B3NET Inc. is a premier Digital Marketing, Web Design, Web Development,
                  and Mobile App Development company, proudly serving businesses from our
                  offices in Dallas, TX, Orange County, CA, and New York. With over 25
                  years of experience, we have helped hundreds of local and national
                  businesses across diverse industries achieve their digital transformation goals.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="image-wrapper">
                {/* Keeping your existing remote image exactly */}
                <img
                  id="dynamicImage"
                  src="https://www.b3net.com/wp-content/uploads/2025/12/why-image.webp"
                  className="fixed-image img-fluid"
                  alt="Dynamic Image"
                />
              </div>
            </div>

            <div className="col-md-6 ps-lg-5">
              <div className="why-slide-sec position-relative">
                <div className="why-slide-sec-inner">
                  <div id="textSections">
                    <div className="content-section" data-image={Why as any}>
                      <div className="expert-icon">
                        <Image src={ExpertIcon1} alt="" />
                      </div>
                      <div className="expert-text">
                        <h3 className="section-title">Expertise Backed by Experience</h3>
                        <p>
                          Since 1999, B3NET has delivered innovative, data-driven solutions
                          to enhance customer experiences, boost efficiency, and maximize ROI.
                          From startups to enterprises, we craft tailored strategies for growth and success.
                        </p>
                      </div>
                    </div>

                    <div className="content-section" data-image={Why as any}>
                      <div className="expert-icon">
                        <Image src={ExpertIcon2} alt="" />
                      </div>
                      <div className="expert-text">
                        <h3 className="section-title">Staying Ahead with Technology</h3>
                        <p>
                          We leverage the latest tools and trends to keep your business ahead,
                          creating future-ready solutions that adapt to the ever-changing digital landscape.
                        </p>
                      </div>
                    </div>

                    <div className="content-section" data-image={Why as any}>
                      <div className="expert-icon">
                        <Image src={ExpertIcon3} alt="" />
                      </div>
                      <div className="expert-text">
                        <h3 className="section-title">Commitment to Driving Transformation</h3>
                        <p>
                          At B3NET, we empower businesses to thrive with Al-driven strategies that
                          boost visibility, streamline operations, and drive revenue. Partner with us
                          to embrace innovation, stay ahead, and redefine success in the Al era.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Process />
      <TechStacks />
    </>
  );
};

export default CaseStudy;
