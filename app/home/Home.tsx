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

import { ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <main className="page_content">
            {/* HERO */}
            <div className="video-container">
                <Image
                    src="https://www.b3net.com/wp-content/uploads/2025/10/B3NET-bg-image.webp"
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
                                        <Image src={item.img} alt="rating" width={60} height={60} />
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
                                        src="https://www.b3net.com/wp-content/uploads/2025/11/goodfirms-logo.png"
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

                {/* ABOUT */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 pe-lg-4">
                            <div className="heading-title heading-big-uppercase">
                                <p className="title">About Us</p>
                                <h2>
                                    Leverage AI Innovation To <span>Empower</span> Your Business
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="space30"></div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <Image
                                src="https://www.b3net.com/wp-content/uploads/2025/12/ai-image.webp"
                                alt="AI"
                                width={500}
                                height={400}
                            />
                        </div>

                        <div className="col-lg-8 col-md-6 mb-4 common-content">
                            <p>
                                With 25+ years of expertise, B3NET helps small and medium-sized
                                businesses thrive using cutting-edge AI solutions.
                            </p>

                            <p>
                                Our AI-powered strategies streamline operations, amplify online
                                visibility, and create personalized automated marketing campaigns.
                            </p>

                            <h4>Let’s turn your vision into measurable success.</h4>

                            <div className="space40"></div>

                            <ul className="btns_group unordered_list p-0 justify-content-start">
                                <li>
                                    <Link href="/about-company">
                                        <span className="btn">
                                            <span className="btn_label" data-text="Learn More">
                                                Learn More
                                            </span>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTIONS */}
            <div className="tab-section-click d-lg-block d-none">
                <HomeNav />
            </div>

            <section id="services"><Services /></section>
            <section id="ai-integration-model"><AiModel /></section>
            <section id="portfolio"><PortFolio /></section>
            <section id="testimonials"><Testimonial /></section>
            <section id="expertise-service"><Expertise /></section>
            <section id="case-studies"><CaseStudy /></section>
            <section id="contact"><Contact /></section>

        </main>
    );
}
