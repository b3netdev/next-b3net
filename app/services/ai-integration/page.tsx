

import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper/modules";
import Contact from "@/components/client/Contact";
import { GetPageData } from "@/lib/getdata";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AiSlider from "./AiSlider";

const AiIntregation = async ({ params }: { params: { slug: string } }) => {

     const data = await GetPageData("ai-integration", "page");
     const pageData = data?.page ?? data;
     console.log(pageData, "PAGE DATA")


  

  return (
    <main className="page_content">
      <div className="ai-integration-page ai-landing-wrap">
        <AiSlider  />
        {/* rest of your page unchanged */}
        <div className="ai-col-1">
          <div className="container">
            <div className="row align-items-center gy-3">
              <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                <div className="ai-content-1">
                  <h1>
                    Leverage the Transformative Power of{" "}
                    <span>AI Integration to Reshape Your Business</span>
                  </h1>
                  <p>
                    At{" "}
                    <a className="site-logo" href="https://www.b3net.com/">
                      B3NET Inc.
                    </a>
                    , we understand the unique challenges faced by small and
                    medium-sized businesses in the digital age...
                  </p>
                  <a href="" className="unq-free-cons">
                    Get a FREE Consultation{" "}
                    <i
                      className="fa-arrow-right fa-solid"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 order-lg-1 text-center">
                <div className="ai-img">
                  <img
                    src="https://www.b3net.com/wp-content/uploads/2025/03/left-img.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-col-2">
          <div className="container">
            <div className="text-center ai-content-2 mb-5">
              <h2>
                <span>AI Solutions</span> Customized for You
              </h2>
              <p className="nitro-offscreen">
                At{" "}
                <a className="site-logo" href="https://www.b3net.com/">
                  B3NET Inc.
                </a>
                , our expertise goes beyond basic AI integrations. We offer a
                comprehensive suite of services designed to fuel your business
                growth. Here&#8217;s what we can do for you:
              </p>
            </div>

            <div className="row gy-5 nitro-offscreen">
              <div className="col-md-6">
                <div className="solutions-col">
                  <div className="d-flex align-items-center">
                    <div className="icon">
                      <img
                        decoding="async"
                        src="https://www.b3net.com/wp-content/uploads/2025/03/icon-1.png"
                      />
                    </div>
                    <div className="text">
                      <h3>
                        Automate Your <span>Marketing Funnels</span>
                      </h3>
                    </div>
                  </div>
                  <p>
                    With our Al, your marketing efforts become more efficient
                    and effective. From lead generation to customer retention,
                    our Al systems can automate and optimize each stage of your
                    marketing funnel, ensuring no opportunity slips through the
                    cracks.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="solutions-col">
                  <div className="d-flex align-items-center">
                    <div className="icon">
                      <img
                        decoding="async"
                        src="https://www.b3net.com/wp-content/uploads/2025/03/icon-2.png"
                      />
                    </div>
                    <div className="text">
                      <h3>
                        AI-Powered <span>Chat Systems</span>
                      </h3>
                    </div>
                  </div>
                  <p>
                    Upgrade your customer service with AI-driven chat solutions.
                    From answering queries to providing personalized support,
                    our AI chats are available 24/7, increasing customer
                    satisfaction.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="solutions-col">
                  <div className="d-flex align-items-center">
                    <div className="icon">
                      <img
                        decoding="async"
                        src="https://www.b3net.com/wp-content/uploads/2025/03/icon-3.png"
                      />
                    </div>
                    <div className="text">
                      <h3>
                        Increase <span>Conversions with AI</span>
                      </h3>
                    </div>
                  </div>
                  <p>
                    Leverage AI to deeply understand customer behavior and
                    preferences. Use predictive insights to refine marketing
                    strategies and personalize offerings for higher conversions.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="solutions-col">
                  <div className="d-flex align-items-center">
                    <div className="icon">
                      <img
                        decoding="async"
                        src="https://www.b3net.com/wp-content/uploads/2025/03/icon-4.png"
                      />
                    </div>
                    <div className="text">
                      <h3>
                        Custom <span>Integrations</span>
                      </h3>
                    </div>
                  </div>
                  <p>
                    Every business has unique needs. Our experts integrate AI
                    seamlessly into your existing systems, ensuring smooth
                    functionality tailored specifically for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center ai-content-3 nitro-offscreen">
              <p>
                Whether you're looking to enhance customer interaction,
                streamline your operations, or unlock new avenues for growth,
                our tailor-made AI solutions have got you covered. Transform
                your business with{" "}
                <a href="https://www.b3net.com/" className="site-logo">
                  B3NET Inc.
                </a>
                , and experience the difference that intelligent automation can
                make.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="ai-col-3 nitro-offscreen">
          <div className="container">
            <div className="ai-content-4">
              <section className="text-center mb-5">
                <h2>
                  <span>Generative AI</span> Development Services
                </h2>
                <p>
                  Our team of experts specializes in creating advanced AI tools
                  to support your digital projects. If you&#8217;re seeking
                  top-notch generative AI services, we provide customized
                  solutions for your business.
                </p>
              </section>

              <section className="row align-items-center gy-5">
                <div className="col-md-6 pe-0 pe-md-4">
                  <div className="development-video">
                    <img
                      src="https://www.b3net.com/wp-content/uploads/2025/03/chat-gpt-on-laptop.gif"
                      decoding="async"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="development-col">
                    <h3>
                      <span>AI</span> Deployment
                    </h3>
                    <div className="d-flex gap-3">
                      <div className="devcoldiv">
                        <div>
                          <i className="fa-solid fa-check"></i>
                          <span>Marketing Funnel</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-check"></i>
                          <span>Human Voice Generation</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-check"></i>
                          <span>Creative Iteration</span>
                        </div>
                      </div>

                      <div className="devcoldiv">
                        <div>
                          <i className="fa-solid fa-check"></i>
                          <span>Marketing Funnel</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-check"></i>
                          <span>Human Voice Generation</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-check"></i>
                          <span>Creative Iteration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <section className="row align-items-center gy-5">
          <div className="col-md-6 order-md-last">
            <img
              src="https://www.b3net.com/wp-content/uploads/2025/03/left-img2.png"
              alt="AI Solutions"
              decoding="async"
            />
          </div>

          <div className="col-md-6 order-md-first">
            <div className="ai-content-5 ps-5">
              <h2>
                Unlock the <span>Power of AI</span>
              </h2>
              <p>
                Imagine a business model delivering precision, agility, and
                intelligence simultaneously. At
                <br />
                <a className="site-logo" href="https://www.b3net.com/">
                  B3NET Inc.
                </a>
                , our AI-powered solutions transform your daily operations,
                enhance decision-making, and set the stage for a profitable
                future.
              </p>
              <a href="" className="unq-free-cons">
                Get a FREE Consultation{" "}
                <i className="fa-arrow-right fa-solid" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>

        <div className="ai-col-4 nitro-offscreen">
          <div className="container">
            <div className="row align-items-center gy-5">
              <div className="col-md-5">
                <div className="advantages-img">
                  <img src="https://www.b3net.com/wp-content/uploads/2025/03/img-3.png" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="ai-content-6">
                  <h2>
                    Advantages of <span>B3NET's AI Solutions</span>
                  </h2>
                </div>
                <div className="advantages-lists">
                  <div className="d-flex">
                    <div className="icon">
                      <img src="https://www.b3net.com/wp-content/uploads/2025/03/icon-add-1.png" />
                    </div>
                    <div className="text">
                      <h3>Efficiency and Productivity</h3>
                      <p>
                        Automate your routine tasks and free up your resources
                        for more strategic objectives.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="icon">
                      <img src="https://www.b3net.com/wp-content/uploads/2025/03/icon-add-2.png" />
                    </div>
                    <div className="text">
                      <h3>Improved Decision Making</h3>
                      <p>
                        Utilize advanced analytics and insights to make
                        informed, data-driven decisions.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="icon">
                      <img src="https://www.b3net.com/wp-content/uploads/2025/03/icon-add-3.png" />
                    </div>
                    <div className="text">
                      <h3>Enhanced Customer Experience</h3>
                      <p>
                        Provide personalized services and foster stronger
                        relationships with your clients.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="icon">
                      <img src="https://www.b3net.com/wp-content/uploads/2025/03/icon-add-4.png" />
                    </div>
                    <div className="text">
                      <h3>Scalability</h3>
                      <p>
                        Our solutions grow with you. As your business evolves,
                        so does our AI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-col-5 nitro-offscreen">
          <div className="container">
            <div className="row align-items-center gy-5">
              <div className="col-md-6 order-md-last mb-sm-30">
                <div className="ready-img">
                  <img src="https://www.b3net.com/wp-content/uploads/2025/03/img-4.jpg" />
                </div>
              </div>
              <div className="col-md-6 order-md-first">
                <div className="ai-content-7">
                  <h2>
                    Ready to Take the <span>Next Step?</span>
                  </h2>
                  <p>
                    Your journey towards digital transformation begins here. Get
                    in touch with our team of experts today for a free
                    consultation. Let&#8217;s explore the incredible potential
                    of AI for your business together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact/>
      </div>
    </main>
  );
};

export default AiIntregation;
