import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Upgrade from "../../assets/images/up-grade-icon.webp";

import ExpertIcon1 from "../../assets/images/expert-icon-1.png";
import ExpertIcon2 from "../../assets/images/expert-icon-2.png";
import Why from "../../assets/images/why-image.webp";
import ExpertIcon3 from "../../assets/images/expert-icon-3.png";
import CaseStudiesSlider from "../client/CaseStudySlider";
import Process from "../client/Process";
import TechStacks from "../client/TechStacks";
import { BASE_URL } from "@/lib/url";

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
 
  return (
    <>
      <div className="case-studies-service pt-5 mb-4 mt-0  new-gap" id="case-studies">
        <div className="container">
          <div className="row mb-4 mb-md-5">
            <div className="col-lg-12 text-center   py-">
              <div className="heading-title heading-big-uppercase">
                <h2 className="caseStudyHeading">Case Studies</h2>
              </div>
              <div className="heading-title text-white">
                <h2>Proven Success in Action</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="case-studies-slider owl-carousel owl-theme d-flex justify-between">
          <CaseStudiesSlider  />
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
                  src={`${BASE_URL}/wp-content/uploads/2025/12/why-image.webp`}
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
                        <Image src={ExpertIcon1} alt="expert-icon" />
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
                        <Image src={ExpertIcon2} alt="expert-icon" />
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
                        <Image src={ExpertIcon3} alt="expert-icon" />
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
