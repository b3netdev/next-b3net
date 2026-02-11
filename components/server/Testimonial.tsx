import React from "react";
import Link from "next/link";
import TestimonoalCard from "../client/TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="testimonial-page-sec sp new-gap" id="testimonials">
      <div className="container">
        <div style={{ display: "flex", flexDirection: "row" }}>
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
              <Link className="btn" href="/testimonials">
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

      {/* ✅ ONLY slider is client */}
      <TestimonoalCard />

      <div className="space30"></div>

      <div className="as-seen-on">
        <div className="container">
          <h3 className="text-center mb-4">As Seen On</h3>
          <div className="row g-4 d-flex align-items-center justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space">
              <a target="_blank" rel="noreferrer">
                <img
                  src="https://www.b3net.com/wp-content/uploads/2025/03/forbes.webp"
                  alt="Forbes"
                />
              </a>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space">
              <a target="_blank" rel="noreferrer">
                <img
                  src="https://www.b3net.com/wp-content/uploads/2025/03/social-media-today.webp"
                  alt="Social Media Today"
                />
              </a>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space">
              <a target="_blank" rel="noreferrer">
                <img
                  src="https://www.b3net.com/wp-content/uploads/2025/03/whats-up-orange-county.webp"
                  alt="What's Up Orange County"
                />
              </a>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space">
              <a target="_blank" rel="noreferrer">
                <img
                  src="https://www.b3net.com/wp-content/uploads/2025/03/time-warner-cable.webp"
                  alt="Time Warner Cable"
                />
              </a>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space">
              <a target="_blank" rel="noreferrer">
                <img
                  src="https://www.b3net.com/wp-content/uploads/2025/03/b2c.webp"
                  alt="B2C"
                />
              </a>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space">
              <a target="_blank" rel="noreferrer">
                <img
                  src="https://www.b3net.com/wp-content/uploads/2025/03/small-business-trends.webp"
                  alt="Small Business Trends"
                />
              </a>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space">
              <a target="_blank" rel="noreferrer">
                <img
                  src="https://www.b3net.com/wp-content/uploads/2025/03/wikipedia.webp"
                  alt="Wikipedia"
                />
              </a>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space">
              <a target="_blank" rel="noreferrer">
                <img
                  src="https://www.b3net.com/wp-content/uploads/2025/03/tweak-your-biz.webp"
                  alt="Tweak Your Biz"
                />
              </a>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space">
              <a target="_blank" rel="noreferrer">
                <img
                  src="https://www.b3net.com/wp-content/uploads/2025/03/small-biz-club.webp"
                  alt="Small Biz Club"
                />
              </a>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space">
              <a target="_blank" rel="noreferrer">
                <img
                  src="https://www.b3net.com/wp-content/uploads/2025/03/cox.webp"
                  alt="Cox"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
