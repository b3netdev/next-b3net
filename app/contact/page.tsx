import React from "react";
import ContactUsForm from "./Contactusform";

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

export default function ContactUs() {
  const addressList: AddressItem[] = [
    {
      id: 1,
      title: "Texas Offices:",
      subOffices: [
        {
          title: "Dallas Office",
          address: "13601 Preston Rd, Ste W706,",
          location: "Dallas, TX 75240",
        },
        {
          title: "Austin Office: ",
          address: "701 Tillery St #12, Unit 213",
          location: "Austin, TX 78702",
        },
      ],
      phone: "+1 234 567 890",
      email: "info@b3net.com",
    },
    {
      id: 2,
      title: "California Office:",
      address: "1570 E. Edinger Ave., Ste 3,Santa Ana, CA 92705",
      phone: "(714) 936-0208",
      email: "info (@) b3net (dot) com",
    },
    {
      id: 3,
      title: "New York Office:",
      address: "456 Market Road, Los Angeles, USA",
      phone: "+1 987 654 321",
      email: "info (@) b3net (dot) com",
    },
    {
      id: 4,
      title: "India Office",
      address: "Sector III, Salt Lake, Kolkata,West Bengal 700106",
      phone: "+91 98765 43210",
      email: "info (@) b3net (dot) com",
    },
  ];

  return (
    <div className="portfolio-page testimonials contact-page">
      <div className="port-landing-wrap gpp">
        <div className="banner-img">
          <img
            src="https://www.b3net.com/wp-content/uploads/2025/10/contact-banner-1.webp"
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
                  <a href="/">Home</a>
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
                      src="https://www.b3net.com/wp-content/uploads/2025/12/chatbox-img.webp"
                      alt=""
                    />
                  </div>
                  <div className="chat-box-text">
                    <div className="icon-img">
                      <img
                        src="https://www.b3net.com/wp-content/uploads/2025/06/message-img.png"
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
                src="https://www.b3net.com/wp-content/uploads/2025/06/logo-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
