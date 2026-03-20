import React, { cache } from "react";
import ContactUsForm from "./Contactusform";
 
import { BASE_URL } from "@/lib/url";
import Link from "next/link";
import { GetPageData } from "@/lib/getdata";
import { Metadata } from "next";
import { buildMetadata, getSeoFromPageData } from "@/lib/seo";

type SubOffice = {
  title: string;
  address: string;
  location: string;
};

type AddressItem = {
  id: number;
  title: string;
  subOffices?: SubOffice[];
  address?: string;
  phone: string;
  email: string;
};


const getBlogPageData = cache(async () => {
  
  const data = await GetPageData("contact", "page");
  return data?.page ?? data;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getBlogPageData();
  const seo = getSeoFromPageData(pageData);

  return buildMetadata(seo);
}


export default function ContactUs() {
  const offices: any = [
    {
      title: "Texas Offices:",
      locations: [
        {
          label: "Dallas Office:",
          address: `13601 Preston Rd, Ste W706, 
  Dallas, TX 75240`,
        },
        {
          label: "Austin Office:",
          address: `701 Tillery St #12, Unit 213 
  Austin, TX 78702`,
        },
      ],
      phone: "(214) 586-0650",
      email: "info@b3net.com",
    },
    {
      title: "California Office:",
      locations: [
        {
          address: `1570 E. Edinger Ave., Ste 3, 
  Santa Ana, CA 92705`,
        },
      ],
      phone: "(714) 936-0208",
      email: "info@b3net.com",
    },
    {
      title: "New York Office:",
      locations: [
        {
          address: `30 Wall Street, 8th Floor, 
  New York City, NY 10005`,
        },
      ],
      email: "info@b3net.com",
    },
    {
      title: "India Office:",
      locations: [
        {
          address: `Sector III, Salt Lake, Kolkata, 
  West Bengal 700106`,
        },
      ],
      email: "info@b3net.com",
    },
  ];

  return (
    <div className="portfolio-page testimonials contact-page">
      <div className="port-landing-wrap gpp">
        <div className="banner-img">
          <img
            src={`${BASE_URL}/wp-content/uploads/2025/10/contact-banner-1.webp`}
            alt=""
          />
          <div className="container">
            <div className="banner-caption">
              <h1>Request for a Service</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-color-part">
        <div className="breadcrum py-3 py-4 py-sm-5">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-flex align-items-center">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Contact</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="contact-part-sec">
          <div className="container">
            <div className="row gy-5 new-con">
              <div className="col-lg-8 pe-lg-5 pe-0 orger-2">
                <ContactUsForm />

                <div style={{ marginTop: "20px" }}>
                  *The information you provide through this Contact Form will be
                  used solely for its intended purpose.
                </div>
              </div>

              {/* RIGHT: CHAT BOX (server) */}
              <div className="col-lg-4 col-md-6 orger-1">
                <div className="chat-box">
                  <div className="chat-box-img">
                    <img
                      src={`${BASE_URL}/wp-content/uploads/2025/12/chatbox-img.webp`}
                      alt=""
                    />
                  </div>
                  <div className="chat-box-text">
                    <div className="icon-img">
                      <img
                        src={`${BASE_URL}/wp-content/uploads/2025/06/message-img.png`}
                        alt=""
                      />
                    </div>
                    <h5>Need Immediate Assistance?</h5>
                    <ul className="header_btns_group unordered_list justify-content-center">
                      <li>
                        <div className="mb-0 text-md-end text-center pt-md-5">
                          <button
                            type="button"
                            className="btn btn-primary clr-white"
                          >
                            CHAT WITH AI VERA{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* OPTIONAL: Address list rendering if you want it on UI */}
                {/* (You didn’t render it in your JSX earlier, so I’m not forcing it) */}
              </div>
            </div>

            {/* Logo */}
            <div className="contct-img my-5 my-md-5">
              <img
                src={`${BASE_URL}/wp-content/uploads/2025/06/logo-2.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-address-sec">
        <div className="container">
          <div className="row gy-4">
            {offices.map((office: any, index: any) => (
              <div key={index} className="col-xxl-3 col-xl-4 col-md-6 addresssboxContainer">
                <div className="address-box">
                  <div className="address-box-heading">
                    <h4>{office.title}</h4>
                  </div>

                  <ul className="address-ftr">
                    <li>
                      {office.locations.map((loc: any, i: any) => (
                        <div key={i}>
                          <i className="fa-solid fa-location-dot"></i>
                          {loc.label && <strong>{loc.label} </strong>}
                          {loc.address.split("\n").map((line: any, idx: any) => (
                            <span key={idx} className="font-semibold opacity-70" >
                              {line} 
                              <br />
                            </span>
                          ))}
                        </div>
                      ))}
                    </li>

                    {office.phone && (
                      <li>
                        <a href={`tel:${office.phone}`} className="font-semibold">
                          <i className="fa-solid fa-phone"></i>
                          {office.phone}
                        </a>
                      </li>
                    )}

                    {office.email && (
                      <li>
                        <a href={`mailto:${office.email}`} className="font-semibold">
                          <i className="fa-solid fa-envelope"></i>
                          info (@) b3net (dot) com
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       
    </div>
  );
}
