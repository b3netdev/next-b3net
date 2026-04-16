"use client";

import React from "react";
import ScrollLink from "./ScrollLink";

const HomeNav = () => {
    const offsetvariable = -150
    return (
        <div className="d-flex justify-content-center pt-2">
            <nav
                id="pillNav"
                className="click-tab-added d-flex "
                style={{ position: "sticky", zIndex: 999 }}
            >
                <ScrollLink targetId="services" className="font-bold text-base"   >
                    Our Services
                </ScrollLink>

                <ScrollLink targetId="ai-integration-model" className="font-bold text-base"   >
                    Ai Integration Model
                </ScrollLink>

                <ScrollLink targetId="portfolio" className="font-bold text-base"   >
                    Our Portfolio
                </ScrollLink>

                <ScrollLink targetId="testimonials" className="font-bold text-base"   >
                    Our Testimonials
                </ScrollLink>

                <ScrollLink targetId="expertise-service" className="font-bold text-base"   >
                    Our Expertise
                </ScrollLink>

                <ScrollLink targetId="case-studies" className="font-bold text-base"   >
                    Case Studies
                </ScrollLink>

                <ScrollLink targetId="contact" className="font-bold text-base"   >
                    Contact Us
                </ScrollLink>
            </nav>
        </div>
    );
};

export default HomeNav;
