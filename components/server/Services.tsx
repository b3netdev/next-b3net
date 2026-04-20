import React from "react";
import Link from "next/link";
import { getServicePath } from "@/lib/servicePath";

import Analytics from "../../assets/images/analyics.png";
import Statergy from "../../assets/images/statergy.png";
import DataEngneering from "../../assets/images/data-engineering.png";
import Image from "next/image";
import { BASE_URL } from "@/lib/url";

const Services = () => {

    // https://b3net.com/wp-content/uploads/2026/02/Website-Design-Development.webp

    const solutionsList = [
        {
          title: "Website Design & Development",
          description: "High-conversion to generate leads",
          image: `${BASE_URL}/wp-content/uploads/2026/02/Website-Design-Development.webp`,
          link: `${BASE_URL}/texas/dallas-web-development-agency.html`,
          slug: "web-design-services"
        },
        {
          title: "Digital Marketing & Demand Generation",
          description: "Attract, engage, and convert consistently",
          image: `${BASE_URL}/wp-content/uploads/2026/02/Digital-Marketing-Demand-Generation.webp`,
          link: `${BASE_URL}/digital-marketing-agency-services.html`,
          slug: "digital-marketing-agency-services"
        },
        {
          title: "Search Engine & Answer Engine Optimization (SEO/AEO)",
          description: "Increase visibility on Google, ChatGPT",
          image: `${BASE_URL}/wp-content/uploads/2026/02/SEO-AEO.webp`,
          link: `${BASE_URL}/seo-services.html`,
          slug: "seo-services"
        },
        {
          title: "Social Media Marketing",
          description: "Turn attention into engagement",
          image: `${BASE_URL}/wp-content/uploads/2026/02/Social-Media-Marketing.webp`,
          link: `${BASE_URL}/social-media-marketing-services.html`,
          slug: "social-media-marketing-services"
        },
        {
          title: "Pay-Per-Click Advertising (PPC)",
          description: "Capture high-intent demand and track ROI with precision.",
          image: `${BASE_URL}/wp-content/uploads/2026/02/Pay-Per-Click-Advertising.webp`,
          link: `${BASE_URL}/ppc-management-services.html`,
          slug: "ppc-management-services"
        },
        {
          title: "Custom Web & Mobile Applications",
          description: "Build scalable tools. Streamline operations and growth",
          image: `${BASE_URL}/wp-content/uploads/2026/02/Custom-Web-Mobile-Applications.webp`,
          link: `${BASE_URL}/custom-web-application-development.html`,
          slug: "custom-web-application-development"
        },  
        {
            title: "Data Engineering & Analytics",
            description: "Clean data pipelines. Power smarter decisions",
            image: `${BASE_URL}/wp-content/uploads/2026/02/Data-Engineering-Analytics.webp`,
            link: `${BASE_URL}/data-engineering-services.html`,
            slug: "#"
          },
          {
            title: "Data Strategy & Governance",
            description: "Structured data. Secure and scale",
            image: `${BASE_URL}/wp-content/uploads/2026/02/Data-Strategy-Governance.webp`,
            link: `${BASE_URL}/data-governance.html`,
            slug: "#"
          },
        {
          title: "Analytics & Business Insights",
          description: "Transform data into clear, actionable growth insights",
          image: `${BASE_URL}/wp-content/uploads/2026/02/Analytics-Business-Insights.webp`,
          link: `${BASE_URL}/data-solutions.html`,
          slug: "data-solutions"
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

                    <div className="solutions-list-images">
                        <div className="row align-items-center">
                            {solutionsList?.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-md-5" key={index}>
                                    <div className="portfolio-list">
                                        <div className="image image-anime reveal reveal-move">
                                            <Link href={getServicePath(item?.slug)}>
                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    width={400}
                                                    height={300}
                                                    className="w-full h-auto"
                                                />
                                            </Link>

                                            <div className="solutions-hover-box">
                                                <h4>{item.title}</h4>

                                                <div className="solution-hover">
                                                    <p style={{ color: "white" }}>{item.description}</p>

                                                    <Link href={getServicePath(item?.slug)}>
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
