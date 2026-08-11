"use client";

import React, { useEffect } from "react";
import Link from "next/link";


import Contact from "@/components/client/Contact";


import Upgrade from "@/assets/images/up-grade-icon.webp";
import { BASE_URL } from "@/lib/url";
import CaseStudiesSlider from "@/components/client/CaseStudySlider";
import Expertise from "@/components/server/Expertise";

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



  return (
    <>


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
                  <img src={pageData?.acf?.data?.image} alt="Video" 
                  />
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
                  <p className="mt-2 primary-bodyText">Web Development</p>
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
                  <p className="mt-2 primary-bodyText ">Ecommerce Development</p>
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
                  <p className="mt-2 primary-bodyText">Digital Marketing</p>
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
                  <p className="mt-2 primary-bodyText">Responsive Web Design</p>
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
                  <p className="mt-2 primary-bodyText">Mobile Apps Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
