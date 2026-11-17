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
            },
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What industries does B3NET work with?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "At B3NET, we collaborate with businesses across a wide range of industries, including healthcare, eCommerce, fintech, education, logistics, SaaS, real estate, travel, and startups. Our team adapts technology and strategy based on each industry’s unique challenges, ensuring scalable and future-ready digital solutions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What web development services does B3NET provide?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "B3NET offers end-to-end web development services, including custom website development, responsive web applications, CMS-based websites, eCommerce platforms, and enterprise web solutions. Our focus is on building secure, scalable, and high-performance websites tailored to your business goals."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What makes B3NET different from other digital agencies?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "B3NET stands out through a consultative, results-driven approach. We don’t just build solutions—we understand your business goals, analyze user behavior, and align technology with growth outcomes. Transparent communication, agile execution, and long-term partnership mindset set us apart from traditional agencies."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does B3NET ensure project quality?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Quality is built into every stage of our process. We follow proven development standards, conduct regular code reviews, perform multi-level testing, and maintain continuous client feedback loops. Our dedicated QA team ensures every solution meets performance, security, and usability benchmarks before launch."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does B3NET approach website design?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our web design process is user-first and data-driven. We combine modern UI/UX principles with brand strategy to create visually appealing, intuitive, and conversion-focused designs. Every design is optimized for usability, accessibility, and consistent performance across all devices."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you provide support after project completion?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. B3NET offers post-launch support and maintenance to ensure your product runs smoothly. Depending on your needs, this may include performance monitoring, security updates, feature enhancements, and technical support—so your digital solution continues to evolve with your business."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does a typical project take?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Project timelines depend on scope, complexity, and requirements. A standard website may take 4 to 6 weeks, while larger web or software solutions may take several months. We provide a detailed timeline and milestones before the project begins to ensure clear expectations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What software development services does B3NET offer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We provide end-to-end software development services, including custom software development, web and mobile application development, SaaS product development, API integration and system modernization, and cloud solutions and DevOps support. Each solution is tailored to meet your operational and scalability requirements."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does B3NET offer web development services?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. B3NET specializes in high-performance, user-centric web development, including corporate websites, enterprise platforms, custom portals, and eCommerce solutions. Our websites are designed for speed, security, SEO, and seamless user experience across all devices."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can B3NET work with startups as well as enterprises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We partner with early-stage startups, growing businesses, and large enterprises alike. Whether you’re validating an idea, building an MVP, or scaling an existing platform, we tailor our engagement model to fit your stage and budget."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do you manage communication during a project?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We maintain clear and consistent communication through regular updates, scheduled meetings, and collaboration tools. A dedicated project manager acts as your single point of contact, ensuring transparency, accountability, and timely delivery."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does B3NET offer custom solutions or ready-made packages?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "B3NET primarily focuses on custom-built solutions designed around your specific business goals. However, we also leverage proven frameworks and accelerators where appropriate to reduce development time without compromising quality."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does B3NET build SEO-friendly and performance-optimized websites?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. All websites developed by B3NET follow SEO best practices and performance optimization standards. We ensure clean code structure, fast load times, mobile responsiveness, and technical SEO readiness—helping your website rank better and deliver a seamless user experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I get started with B3NET?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Getting started is simple. Share your requirements with us, and our experts will analyze your needs, suggest the right approach, and provide a clear roadmap with timelines and cost estimates—no obligations, just clarity."
                        }
                    }
                ]
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
                        <span className="btn_label" data-text="GET YOUR FREE AI SEARCH AUDIT">
                            GET YOUR FREE AI SEARCH AUDIT
                        </span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                    <div className="space30"></div>

                    <div style={{ color: "white", fontSize: "0.9em", }}>Find out how your business appears in ChatGPT, Gemini, and other AI search tools</div>
                </div>
            </div>

            {/* RATINGS */}
            <div className="industry-sec sp pb-0 w-full">
                <div className="container">
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {[
                            { img: "/images/google-logo.png", rating: "4.9 Out of 5" },
                            { img: "/images/facebook-logo.png", rating: "4.4 Out of 5" },
                            {
                                img: `${BASE_URL}/wp-content/uploads/2026/08/Clutch_idM2mb6_Cx_1.png`,
                                height: 60,
                                width: 60,
                                rating: "5 out of 5",
                            },
                            {
                                img: `${BASE_URL}/wp-content/uploads/2025/11/goodfirms-logo.png`,
                                height: 60,
                                width: 60,
                                rating: "5 out of 5",
                            },
                            { img: "/images/dbest-logo.png", rating: "Our Rating: A+" },
                        ].map((item, i) => (
                            <div key={i} className="min-w-0">
                                <div className="flex items-center justify-center gap-3 ">
                                    <div className="shrink-0">
                                        <Image
                                            src={item.img}
                                            unoptimized
                                            alt="rating"
                                            width={item.width || 90}
                                            height={item.height || 90}
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
