import Image from "next/image";
import Link from "next/link";

import HomeNav from "@/components/client/HomeNav";
import Services from "@/components/server/Services";
import AiModel from "@/components/server/AiModel";
import PortFolio from "@/components/server/PortFolioHome";
import Testimonial from "@/components/server/Testimonial";
import Expertise from "@/components/server/Expertise";
import CaseStudy from "@/components/server/CaseStudy";
import Contact from "@/components/client/Contact";
import { BASE_URL } from "@/lib/url";
import FrequentQuestion from "@/components/client/FrequentQuestion";







export default async function Home() {
    
    return (
        <main className="page_content">
           
            <div className="video-container">
                <Image
                    src={`${BASE_URL}/wp-content/uploads/2025/10/B3NET-bg-image.webp`}
                    alt="Background"
                    fill
                    priority
                    className="background-image"
                />

                <div className="overlay-content text-center">
                    <h1>
                        Innovate. Adapt. Succeed with <strong>B3NET</strong>
                    </h1>

                    <p style={{ color: "white", fontSize: "1em", fontWeight: "bold" }}>
                        B3NET Empowers Businesses with AI-Driven Digital Marketing, Web
                        Development, & CRM Optimization.
                    </p>

                    <div className="space30"></div>

                    <a className="btn" href="https://seoaudit.b3net.com">
                        <span className="btn_label" data-text="Get Your Free Audit">
                            Get Your Free Audit
                        </span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>

            {/* RATINGS */}
            <div className="industry-sec sp pb-0">
                <div className="container">
                    <div className="row align-items-center justify-content-center rating-section gy-md-4 gy-xl-0">

                        {[
                            { img: "/images/google-logo.png", rating: "4.9 Out of 5", stars: 5 },
                            { img: "/images/facebook-logo.png", rating: "4.4 Out of 5", stars: 4.5 },
                            { img: "/images/dbest-logo.png", rating: "Our Rating: B+", stars: 4.5 },
                        ].map((item, i) => (
                            <div key={i} className="col-lg-3 col-sm-6 rating-box">
                                <div className="d-flex align-items-center">
                                    <div className="rating-logo pe-3">
                                        <Image src={item.img} alt="rating" width={100} height={100} />
                                    </div>
                                    <div className="rating-content ps-3 text-left">
                                        <div className="stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p className="rating-text">{item.rating}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-3 col-sm-6 rating-box">
                            <div className="d-flex align-items-center">
                                <div className="rating-logo pe-3 goodsfirms">
                                    <Image
                                        src={`${BASE_URL}/wp-content/uploads/2025/11/goodfirms-logo.png`}
                                        alt="GoodFirms"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className="rating-content ps-3 text-left">
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p className="rating-text">5 Out of 5</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container mt-md-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-title heading-big-uppercase text-center">
                                <p className="title">About Us</p>
                                <h2>What <span style={{ color: "#3b58a1" }}>B3NET</span> Delivers for Your Business</h2>
                                <p>B3NET helps businesses increase qualified leads, improve conversion rates, and operate more
                                    efficiently by building and optimizing digital platforms that are designed to drive
                                    measurable growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space30"></div>
                    <div className="row g-md-4">
                        <div className="col-lg-6 mb-4 mb-md-0">
                            <div className="border p-4 abt-shadow-blog">
                                <div className="d-md-flex align-items-center g-2 mb-3">
                                    <div className="abt-img mb-3 mb-md-0">
                                        <img src={`${BASE_URL}/wp-content/themes/b3net/assets/images/delivered-icon.png`} alt="Delivered Icon" />
                                    </div>
                                    <div className="abt-heading">
                                        <h4>We deliver end-to-end digital solutions, including:</h4>
                                    </div>
                                </div>
                                <div className="abt-content common-content">
                                    <ul>
                                        <li>Custom website design and development</li>
                                        <li>eCommerce platforms and online stores</li>
                                        <li>Search engine optimization (SEO) and answer engine optimization (AEO)</li>
                                        <li>Mobile application design and development</li>
                                        <li>CRM implementation, automation, and optimization</li>
                                    </ul>
                                    <p>These foundations are then enhanced with AI-driven marketing, automation, and analytics
                                        to reduce manual effort, accelerate sales response, and improve visibility into
                                        performance and ROI.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4 mb-md-0">
                            <div className="border p-4 abt-shadow-blog">
                                <div className="d-md-flex align-items-center g-2 mb-3">
                                    <div className="abt-img mb-3 mb-md-0">
                                        <img src={`${BASE_URL}/wp-content/themes/b3net/assets/images/partners-icon.png`} alt="Partners Icon" />
                                    </div>
                                    <div className="abt-heading">
                                        <h4>Businesses work with <span style={{ color: "#3b58a1", fontWeight: 'bold' }}>B3NET</span> to:</h4>
                                    </div>
                                </div>
                                <div className="abt-content common-content">
                                    <ul>
                                        <li>Generate more inbound leads and demand</li>
                                        <li>Convert more website and eCommerce traffic into revenue</li>
                                        <li>Automate marketing and sales workflows</li>
                                        <li>Improve customer engagement across digital channels</li>
                                        <li>Scale digital operations without increasing complexity</li>
                                    </ul>
                                    <p>With over 25 years of execution experience, B3NET combines proven digital
                                        fundamentals with modern AI-powered systems to deliver results that are practical,
                                        trackable, and aligned with your business goals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="btns_group unordered_list p-0 justify-content-center mt-3 mt-md-5">
                            <Link className="btn" href="/about-company">
                                <span className="btn_label" data-text="Learn More">Learn More</span>
                                <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>




            <div className="tab-section-click d-lg-block d-none">
                <HomeNav />
            </div>

            <section id="services"><Services /></section>
            <section id="ai-integration-model"><AiModel /></section>
            <section id="portfolio"><PortFolio /></section>
            <section id="testimonials"><Testimonial /></section>
            <section id="expertise-service"><Expertise /></section>
            <section id="case-studies"><CaseStudy /></section>
            <FrequentQuestion />
            <section id="contact"><Contact /></section>
        </main>
    );
}
