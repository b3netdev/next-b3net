import React from 'react'
import { BASE_URL } from '@/lib/url'
import Link from 'next/link'

const DataGoverence = () => {
    return (
        <main className="page_content">
            <div className="data-goveranance">
                <div className="seo-landing-wrap"
                    style={{ background: `url(${BASE_URL}//wp-content/uploads/2024/09/data-governance-and-data-strategy.jpg)` }}
                >
                    <div className="container">
                        <div className="banner-caption">
                            <h1>Transform Your Business with Robust Data Governance and Strategy Solutions</h1>
                            <p>Ensure Data Quality, Compliance, and Value with Our Expert Services</p>
                            <div className="mt-4">
                                <Link className="btn btn-orange"
                                    href="/request-for-proposal"
                                >
                                    <span className="btn_label_1">Get Started Today</span>
                                    <span className="btn_icon">
                                        <i className="fa-arrow-right fa-solid"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="landing-intro-sec py-5 sec-pad why-choose-seo">
                    <div className="container">
                        <div className="row align-items-start gy-4 why-b3netseo-sec">

                            {/* Left Column */}
                            <div className="col-lg-6 left-column pe-lg-4">
                                <h1 className="border-botom pb-2 sec-heading-2">
                                    Data Governance and Data Strategy Services
                                </h1>
                                <p>
                                    In today's data-driven world, organizations must manage their data assets effectively to gain a competitive edge. At B3NET, we offer comprehensive Data Governance and Data Strategy services that ensure data quality, compliance, security, and accessibility across your enterprise.
                                </p>
                                <p className="lazyloaded">
                                    Partner with us to transform your data into a strategic asset.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div className="col-lg-6 text-center right-column">
                                <div className="imgwrapper">
                                    <img
                                        src="https://old.b3net.com/wp-content/uploads/2024/09/Data-as-a-Strategic-Asset.jpg"
                                        className="rounded img-fluid lazyloaded"
                                        decoding="async"
                                        alt="Data as a Strategic Asset"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="landing-services-sec nitro-offscreen py-5 sec-pad why-choose-seo">
                    <div className="container">
                        <div className="row align-items-start gy-4 why-b3netseo-sec">

                            {/* Right Column */}
                            <div className="col-lg-6 text-center pe-lg-4 right-column">
                                <div className="imgwrapper">
                                    <img
                                        src="https://old.b3net.com/wp-content/uploads/2024/09/Data-Governance-Strategy-3.jpg"
                                        className="rounded img-fluid lazyloaded"
                                        style={{ border: "2px solid #004aad" }}
                                        decoding="async"
                                        alt="Data Governance Strategy"
                                    />
                                </div>
                            </div>

                            {/* Left Column */}
                            <div className="col-lg-6 left-column">
                                <h2 className="border-botom pb-2 sec-heading-2">
                                    Our Comprehensive Data Governance and Strategy Services
                                </h2>
                                <p>
                                    In today's data-driven world, organizations must manage their data assets effectively to gain a competitive edge. At B3NET, we offer comprehensive Data Governance and Data Strategy services that ensure data quality, compliance, security, and accessibility across your enterprise. Partner with us to transform your data into a strategic asset.
                                </p>

                                <div className="strategy-services-list">
                                    <h3>Data Governance Framework Development</h3>
                                    <p>
                                        We develop robust data governance frameworks that align with your business objectives and regulatory requirements, ensuring consistent data management practices across your organization.
                                    </p>
                                </div>

                                <div className="strategy-services-list">
                                    <h3>Data Quality Management</h3>
                                    <p>
                                        Implement data quality management practices that help maintain accurate, complete, and reliable data for improved decision-making.
                                    </p>
                                </div>

                                <div className="strategy-services-list">
                                    <h3>Data Compliance and Security</h3>
                                    <p>
                                        Ensure your data meets regulatory standards and is protected against breaches and unauthorized access.
                                    </p>
                                </div>

                                <div className="strategy-services-list">
                                    <h3>Data Architecture and Strategy</h3>
                                    <p>
                                        Design and implement data architecture strategies that optimize data flow and storage, enabling better analytics and insights.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="nitro-offscreen py-5 sec-pad strategy-needs why-b3netseo-sec">
                    <div className="container">
                        <div className="row align-items-start gy-4">

                            {/* Left Column */}
                            <div className="col-lg-6 left-column pe-lg-4">
                                <h2 className="border-botom pb-2 sec-heading-2">
                                    Why Choose B3NET for Your Data Strategy Needs?
                                </h2>
                                <p>
                                    Our team of experts brings a wealth of experience in data governance, strategy, and compliance across various industries. We collaborate with you to understand your unique business challenges and provide customized solutions that drive value from your data. With our data governance and strategy services, you get:
                                </p>
                                <ul className="list-tyle">
                                    <li>Tailored Solutions</li>
                                    <li>Proven Methodologies</li>
                                    <li>End-to-End Implementation</li>
                                    <li>Ongoing Support and Optimization</li>
                                </ul>
                            </div>

                            {/* Right Column */}
                            <div className="col-lg-6 text-center right-column">
                                <div className="imgwrapper">
                                    <img
                                        src="https://old.b3net.com/wp-content/uploads/2024/06/Why-B3net-1.jpg"
                                        className="rounded img-fluid lazyloaded"
                                        decoding="async"
                                        alt="Why B3NET"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </main>
    )
}

export default DataGoverence