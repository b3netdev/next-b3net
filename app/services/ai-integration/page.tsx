

import Contact from "@/components/client/Contact";
import { GetPageData } from "@/lib/getdata";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AiSlider from "./AiSlider";
import { BASE_URL } from "@/lib/url";
import Link from "next/link";
import { cache } from "react";
import { Metadata } from "next";
import { buildMetadata, getSeoFromPageData } from "@/lib/seo";
import { getServicePath } from "@/lib/servicePath";
import StructuredData from "@/components/server/StructuredData";


const getPageData = cache(async () => {

  const data = await GetPageData("ai-integration-services", "page");
  return data?.page ?? data;
});


export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData();
  const seo = getSeoFromPageData(pageData);

  return buildMetadata(seo);
}




const AiIntregation = async ({ params }: { params: { slug: string } }) => {

  const data = await getPageData();

  const pageData = data?.page ?? data;
  const schemaData = pageData?.schema || pageData?.yoast_head_json?.schema || null;



  return (
    <main className="page_content">
      <StructuredData data={schemaData} />
      <div className="ai-integration-page ai-landing-wrap">
        <AiSlider />

        <div className="ai-col-1">
          <div className="container">
            <div className="row align-items-center gy-3">
              <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                <div className="ai-content-1">
                  <h1>
                    Leverage the Transformative Power of{" "}
                    <span>AI Integration to Reshape Your Business</span>
                  </h1>
                  <p className="primary-bodyText font-bold">
                    At{" "}
                    <Link className="site-logo font-bold" href="/">
                      B3NET Inc.
                    </Link>
                    , we understand the unique challenges faced by small and
                    medium-sized businesses in the digital age. The business world moves quickly, but with our AI solutions, you can stay ahead of the curve. We provide sophisticated, easy-to-implement AI tools such as
                  </p>
                  <p className="primary-bodyText font-bold">
                    <span className="site-logo" >
                      ChatGPT,{" "}
                    </span>
                    designed to streamline your operations, improve customer engagement, and propel your business towards exponential growth.
                  </p>
                  <Link href={getServicePath("ai-integration-services")} className="unq-free-cons">
                    Get a FREE Consultation{" "}
                    <i
                      className="fa-arrow-right fa-solid"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 order-lg-1 text-center">
                <div className="ai-img">
                  <img
                    src={`${BASE_URL}/wp-content/uploads/2025/03/left-img.png`}
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
              <p className="nitro-offscreen primary-bodyText">
                At{" "}
                <Link className="site-logo" href="/">
                  B3NET Inc.
                </Link>
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
                        src={`${BASE_URL}/wp-content/uploads/2025/03/icon-1.png`}
                      />
                    </div>
                    <div className="text">
                      <h3>
                        Automate Your <span>Marketing Funnels</span>
                      </h3>
                    </div>
                  </div>
                  <p className="primary-bodyText">
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
                        src={`${BASE_URL}/wp-content/uploads/2025/03/icon-2.png`}
                      />
                    </div>
                    <div className="text">
                      <h3>
                        AI-Powered <span>Chat Systems</span>
                      </h3>
                    </div>
                  </div>
                  <p className="primary-bodyText">
                    Upgrade your customer service with <Link href="ai-chatbot-development-services" >AI-driven chat solutions.</Link> From answering queries to providing personalized support,
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
                        src={`${BASE_URL}/wp-content/uploads/2025/03/icon-3.png`}
                      />
                    </div>
                    <div className="text">
                      <h3>
                        Increase <span>Conversions with AI</span>
                      </h3>
                    </div>
                  </div>
                  <p className="primary-bodyText">
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
                        src={`${BASE_URL}/wp-content/uploads/2025/03/icon-4.png`}
                      />
                    </div>
                    <div className="text">
                      <h3>
                        Custom <span>Integrations</span>
                      </h3>
                    </div>
                  </div>
                  <p className="primary-bodyText">
                    Every business has unique needs. Our experts integrate AI
                    seamlessly into your existing systems, ensuring smooth
                    functionality tailored specifically for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center ai-content-3 nitro-offscreen">
              <p className="primary-bodyText">
                Whether you're looking to enhance customer interaction,
                streamline your operations, or unlock new avenues for growth,
                our tailor-made AI solutions have got you covered. Transform
                your business with{" "}
                <Link href="/" className="site-logo">
                  B3NET Inc.
                </Link>
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
                <p className="primary-bodyText">
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
                      src={`${BASE_URL}/wp-content/uploads/2025/03/chat-gpt-on-laptop.gif`}
                      decoding="async"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="development-col primary-bodyText">
                    <h3>
                      <span>AI</span> Deployment
                    </h3>
                    <div className="d-flex gap-4 flex-wrap">
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

        <section className="row align-items-center gy-5 ">
          <div className="col-md-6 order-md-last mb-20">
            <img
              src={`${BASE_URL}/wp-content/uploads/2025/03/left-img2.png`}
              alt="AI Solutions"
              decoding="async"
            />
          </div>

          <div className="col-md-6 order-md-first">
            <div className="ai-content-5 ps-5">
              <h2>
                Unlock the <span>Power of AI</span>
              </h2>
              <p className="primary-bodyText">
                Imagine a business model delivering precision, agility, and
                intelligence simultaneously. At
                <br />
                <Link className="site-logo" href="/">
                  B3NET Inc.
                </Link>
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

        <div className="ai-col-4 nitro-offscreen"
          style={{ backgroundImage: `url(${BASE_URL}/wp-content/themes/perfecti/assets/assets-ai-landing/images/ai-bg-2.jpg)` }}
        >
          <div className="container"

          >
            <div className="row align-items-center gy-5"

            >
              <div className="col-md-5">
                <div className="advantages-img">
                  <img src={`${BASE_URL}/wp-content/uploads/2025/03/img-3.png`}
                    alt="AI microchip icon connected to a digital network"
                  />
                </div>
              </div>
              <div className="col-md-7"

              >
                <div className="ai-content-6">
                  <h2>
                    Advantages of <span>B3NET's AI Solutions</span>
                  </h2>
                </div>
                <div className="advantages-lists"

                >
                  <div className="d-flex">
                    <div className="icon">
                      <img src={`${BASE_URL}/wp-content/uploads/2025/03/icon-add-1.png`} />
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
                      <img src={`${BASE_URL}/wp-content/uploads/2025/03/icon-add-2.png`} />
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
                      <img src={`${BASE_URL}/wp-content/uploads/2025/03/icon-add-3.png`} />
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
                      <img src={`${BASE_URL}/wp-content/uploads/2025/03/icon-add-4.png`} />
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
                  <img src={`${BASE_URL}/wp-content/uploads/2025/03/img-4.jpg`}
                    alt="Robotic hand and human hand pointing at glowing AI interface icons"
                  />
                </div>
              </div>
              <div className="col-md-6 order-md-first">
                <div className="ai-content-7 ">
                  <h2 className="primary-bodyText">
                    Ready to Take the <span>Next Step?</span>
                  </h2>
                  <p className="primary-bodyText">
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
        <Contact />
      </div>
    </main>
  );
};

export default AiIntregation;
