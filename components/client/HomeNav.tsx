"use client";

import React from "react";
import { Link } from "react-scroll";

const HomeNav = () => {
    const offsetvariable = -150
    return (
        <div className="d-flex justify-content-center pt-2">
            <nav
                id="pillNav"
                className="click-tab-added d-flex"
                style={{ position: "sticky", zIndex: 999 }}
            >
                <Link to="services" spy smooth offset={offsetvariable} duration={100} activeClass="active">
                    Our Services
                </Link>

                <Link to="ai-integration-model" spy smooth offset={offsetvariable} duration={100} activeClass="active">
                    Ai Integration Model
                </Link>

                <Link to="portfolio" spy smooth offset={offsetvariable} duration={100} activeClass="active">
                    Our Portfolio
                </Link>

                <Link to="testimonials" spy smooth offset={offsetvariable} duration={100} activeClass="active">
                    Our Testimonials
                </Link>

                <Link to="expertise-service" spy smooth offset={offsetvariable} duration={100} activeClass="active">
                    Our Expertise
                </Link>

                <Link to="case-studies" spy smooth offset={offsetvariable} duration={100} activeClass="active">
                    Case Studies
                </Link>

                <Link to="contact" spy smooth offset={offsetvariable} duration={100} activeClass="active">
                    Contact Us
                </Link>
            </nav>
        </div>
    );
};

export default HomeNav;
