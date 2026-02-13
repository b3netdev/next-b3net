"use client";

import React, { useEffect } from "react";
import Contact from "@/components/client/Contact";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { setStickyNavMenu } from "@/redux/slicers/menuSlicer";



const Proposal = () => {
    const dispatch = useAppDispatch();

      useEffect(() => {
        dispatch(setStickyNavMenu(true))
    
        return () => {
          dispatch(setStickyNavMenu(false))
        }
      }, [])
    
  return (
    <section className="product-details-sec shop-sec page_content default_content_class">
      <div className="port-landing-wrap details-page default-img">
        <div className="menu-design"></div>

        <div className="banner-img">
          <div className="container">
            <div className="banner-caption">
              <h2>Get A Free Proposal</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-sec">
        <div className="container new-bg-sec">
          <div className="breadcrumb-left">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Get A Free Proposal
                </li>
              </ol>
            </nav>
          </div>

          <div className="span12">
            <div className="eva-title-container">
              <h1 className="eva-title left">
                Start your Project by Requesting a Proposal
              </h1>
            </div>

            <div className="eva-column-wrap" style={{ paddingBottom: "0px" }}>
              <p>
                B3NET INC. will provide you with a free, no obligation price
                quote.
                <br />
                (For RFP via email, please send it to{" "}
                <a href="mailto:info@b3net.com">info@b3net.com</a> or call us at{" "}
                <a href="tel:7149360208">714.936.0208</a>)
              </p>
            </div>
          </div>
          <Contact data={true} />
        </div>
      </div>
    </section>
  );
};

export default Proposal;
