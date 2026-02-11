import React from "react";
import Link from "next/link";

import Analytics from "../../assets/images/analyics.png";
import Statergy from "../../assets/images/statergy.png";
import DataEngneering from "../../assets/images/data-engineering.png";
import Image from "next/image";

const Services = () => {
    const portfolioItems = [
        {
            title: (
                <>
                    AI Empowered <br /> Website Design & Development
                </>
            ),
            img: "https://www.b3net.com/wp-content/uploads/2025/12/expertise-img-1.webp",
            desc: "Smart, AI-driven websites that enhance user experience, automate tasks, and drive business growth.",
            link: null,
        },
        {
            title: "AI-Driven Marketing",
            img: "https://www.b3net.com/wp-content/uploads/2025/12/expertise-img-2.webp",
            desc: "Leverage AI to analyze data, personalize campaigns, and optimize marketing strategies for higher engagement and conversions.",
            link: null,
        },
        {
            title: "AI-Powered Search Engine Optimization (SEO)",
            img: "https://www.b3net.com/wp-content/uploads/2025/12/expertise-img-3.webp",
            desc: "Advanced AI tools boost rankings, optimize content, and enhance visibility with data-driven SEO strategies for lasting results.",
            link: "/seo-services",
        },
        {
            title: (
                <>
                    AI-Powered <br /> Social Media Marketing
                </>
            ),
            img: "https://www.b3net.com/wp-content/uploads/2025/12/expertise-img-4.webp",
            desc: "AI-driven insights and automation maximize engagement, reach, and conversions across social media platforms.",
            link: null,
        },
        {
            title: "Pay-Per-Click Advertising (PPC)",
            img: "https://www.b3net.com/wp-content/uploads/2025/12/expertise-img-5.webp",
            desc: "Targeted PPC campaigns with AI optimization to maximize ROI, drive traffic, and convert leads efficiently.",
            link: "/ppc-services",
        },
        {
            title: "Custom Web Applications",
            img: "https://www.b3net.com/wp-content/uploads/2025/12/expertise-img-6.webp",
            desc: "Tailor-made web apps designed to streamline operations, enhance user experience, and scale your business seamlessly.",
            link: "/custom-web-apps",
        },
        {
            title: "Data Engineering and Analytics",
            img: DataEngneering,
            desc: "Design and deploy modern data pipelines that move fast, scale effortlessly, and empower your team with reliable, analytics-ready data.",
            link: "https://www.b3net.com/data-engineering-services.html",
        },
        {
            title: "Data Strategy and Governance",
            img: Statergy,
            desc: "Build a rock-solid foundation for your data—align your data strategy with business goals while ensuring security, quality, and compliance.",
            link: "https://www.b3net.com/data-governance.html",
        },
        {
            title: "Data Analytics and Insights",
            img: Analytics,
            desc: "Transform raw data into powerful stories—discover trends, predict outcomes, and make confident decisions backed by real-time insights.",
            link: "https://www.b3net.com/data-solutions.html",
        },
    ];

    return (
        <div className="service home-services new-gap">
            <div
                className="service-items service-items1 home-services-item-1 sp new-gap"
                id="services"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center text-white">
                            <div className="heading-title">
                                <p className="title">Our Services</p>
                                <h2>
                                    Actionable Intelligence.
                                    <span> Exceptional Outcomes.</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-sec-images solutions-list-images">
                        <div className="row align-items-center">
                            {portfolioItems.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="portfolio-list">
                                        <div className="image image-anime reveal reveal-move">
                                            <Link href={item.link || "#"}>
                                                <img src={item.img} alt="" />
                                            </Link>

                                            <div className="solutions-hover-box">
                                                <h4>{item.title}</h4>

                                                <div className="solution-hover">
                                                    <p style={{ color: "white" }}>{item.desc}</p>

                                                    <Link href={item.link || "#"}>
                                                        Read More
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;
