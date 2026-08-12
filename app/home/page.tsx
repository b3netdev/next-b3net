import Image from "next/image";
import Link from "next/link";
import heroBg from "@/assets/images/hero-bg.webp";
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
import { cache } from "react";
import { GetPageData } from "@/lib/getdata";
import { Metadata } from "next";
import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from "@/lib/seo";
import StructuredData from "@/components/server/StructuredData";




export default async function Home() {


    const homeSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://b3net.com/",
                "url": "https://b3net.com/",
                "name": "Top Web Design & AI Digital Marketing Company | B3NET",
                "isPartOf": {
                    "@id": "https://b3net.com/#website"
                },
                "datePublished": "2025-03-04T09:15:06+00:00",
                "dateModified": "2026-03-16T08:48:52+00:00",
                "description": "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
                "breadcrumb": {
                    "@id": "https://b3net.com/#breadcrumb"
                },
                "inLanguage": "en-US",
                "potentialAction": [
                    {
                        "@type": "ReadAction",
                        "target": [
                            "https://b3net.com/"
                        ]
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://b3net.com/#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://b3net.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Home"
                    }
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://b3net.com/#website",
                "url": "https://b3net.com/",
                "name": "B3NET",
                "description": "Think Digital!",
                "publisher": {
                    "@id": "https://b3net.com/#organization"
                },
                "alternateName": "B3net",
                "potentialAction": [
                    {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "https://b3net.com/?s={search_term_string}"
                        },
                        "query-input": {
                            "@type": "PropertyValueSpecification",
                            "valueRequired": true,
                            "valueName": "search_term_string"
                        }
                    }
                ],
                "inLanguage": "en-US"
            },
            {
                "@type": "Organization",
                "@id": "https://b3net.com/#organization",
                "name": "B3NET",
                "alternateName": "B3net",
                "url": "https://b3net.com/",
                "logo": {
                    "@type": "ImageObject",
                    "inLanguage": "en-US",
                    "@id": "https://b3net.com/#/schema/logo/image/",
                    "url": "https://www.b3net.com/wp-content/uploads/2025/12/B3NET-Square-Logo-New.png",
                    "contentUrl": "https://www.b3net.com/wp-content/uploads/2025/12/B3NET-Square-Logo-New.png",
                    "width": 800,
                    "height": 800,
                    "caption": "B3NET"
                },
                "image": {
                    "@id": "https://b3net.com/#/schema/logo/image/"
                },
                "sameAs": [
                    "https://www.facebook.com/B3NET",
                    "https://x.com/b3net",
                    "https://www.linkedin.com/company/b3net-inc/",
                    "https://www.youtube.com/@b3netinc",
                    "https://www.instagram.com/b3netinc/"
                ],
                "description": "B3NET helps businesses grow smarter. With 25+ years of experience, we use cutting-edge AI to power marketing, web development, mobile apps, and CRM strategies that deliver real results.",
                "email": "info@b3net.com",
                "telephone": "(214) 586-0650",
                "legalName": "B3NET Inc."
            }
        ]
    };

    return (
        <main className="page_content relative">
            <StructuredData data={homeSchemaData} />

            <div className="video-container relative">
                <Image
                    src={`${BASE_URL}/wp-content/uploads/2026/07/B3net-Home-Banner.webp`}
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="background-image"
                />

                <div className="overlay-content text-center">
                    <h1 className="!font-medium !text-md">
                        Innovate. Adapt. Succeed with <strong className="" >B3NET</strong>
                    </h1>

                    <p style={{ color: "white", fontSize: "1em", }}>
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
            <div className="industry-sec sp pb-0 w-full">
                <div className="container">
                   <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {[
                            { img: "/images/google-logo.png", rating: "4.9 Out of 5" },
                            { img: "/images/facebook-logo.png", rating: "4.4 Out of 5" },
                            { img: "/images/dbest-logo.png", rating: "Our Rating: B+" },
                            {
                                img: `${BASE_URL}/wp-content/uploads/2025/11/goodfirms-logo.png`,
                                height: 60,
                                width: 60,
                                rating: "Our Rating: B+",
                            },
                            {
                                img: `${BASE_URL}/wp-content/uploads/2026/08/Clutch_idM2mb6_Cx_1.png`,
                                height: 60,
                                width: 60,
                                rating: "5 out of 5",
                            },
                        ].map((item, i) => (
                            <div key={i} className="min-w-0">
                                <div className="flex items-center justify-center gap-3">
                                    <div className="shrink-0">
                                        <Image
                                            src={item.img}
                                            unoptimized
                                            alt="rating"
                                            width={item.width || 100}
                                            height={item.height || 100}
                                            className="h-auto max-w-[60px] sm:max-w-[75px]"
                                        />
                                    </div>

                                    <div className="min-w-0 text-left">
                                        <div className="whitespace-nowrap text-yellow-400">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <p className="rating-text whitespace-nowrap">
                                            {item.rating}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container mt-md-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-title heading-big-uppercase text-center">
                                <p className="title">About Us</p>
                                <h2>What <span style={{ color: "#3b58a1" }}>B3NET</span> Delivers for Your Business</h2>
                                <p className="primary-bodyText" >B3NET helps businesses increase qualified leads, improve conversion rates, and operate more
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
                                        <img src={`${BASE_URL}/wp-content/themes/b3net/assets/images/delivered-icon.png`} alt="Delivered-Icon" />
                                    </div>
                                    <div className="abt-heading">
                                        <h4>We deliver end-to-end digital solutions, including:</h4>
                                    </div>
                                </div>
                                <div className="abt-content common-content">
                                    <ul className="primary-bodyText">
                                        <li>Custom website design and development</li>
                                        <li>eCommerce platforms and online stores</li>
                                        <li>Search engine optimization (SEO) and answer engine optimization (AEO)</li>
                                        <li>Mobile application design and development</li>
                                        <li>CRM implementation, automation, and optimization</li>
                                    </ul>
                                    <p className="primary-bodyText">These foundations are then enhanced with AI-driven marketing, automation, and analytics
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
                                    <ul className="primary-bodyText">
                                        <li>Generate more inbound leads and demand</li>
                                        <li>Convert more website and eCommerce traffic into revenue</li>
                                        <li>Automate marketing and sales workflows</li>
                                        <li>Improve customer engagement across digital channels</li>
                                        <li>Scale digital operations without increasing complexity</li>
                                    </ul>
                                    <p className="primary-bodyText">With over 25 years of execution experience, B3NET combines proven digital
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
            <section id="contact" className="contact-sec"><Contact /></section>
        </main>
    );
}
