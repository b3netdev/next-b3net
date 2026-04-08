import React from "react";
import Link from "next/link";
import TestimonoalCard from "../client/TestimonialSlider";
import { BASE_URL } from "@/lib/url";

const Testimonial = () => {
  return (
    <div className="testimonial-page-sec sp new-gap" id="testimonials">
      <div className="container">
        <div style={{ display: "flex", flexDirection: "row" }} className="flex-wrap">
          <div className="col-lg-6 pe-lg-5">
            <div className="heheading-big-uppercase ading-title pe-lg-5">
              <p className="title">Testimonials</p>
              <h2>
                Trusted by <span> Businesses </span> Like Yours
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <p>
              Our clients trust us to deliver results that matter. Hear how our
              AI-powered solutions have helped businesses grow, innovate, and
              stay ahead of the competition.
            </p>
            <div className="mt-4">
              <Link className="btn"
                href="/about-company/testimonial"
              >
                <span className="btn_label" data-text="Discover More">
                  Discover More
                </span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="space20"></div>
      </div>


      <TestimonoalCard />

      <div className="space30"></div>

      
    </div>
  );
};

export default Testimonial;
