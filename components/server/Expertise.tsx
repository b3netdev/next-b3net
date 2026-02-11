import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Expertise1 from "../../assets/images/expertise-img-1.jpg";
import Expertise2 from "../../assets/images/expertise-img-2.jpg";
import Expertise3 from "../../assets/images/expertise-img-3.jpg";
import Expertise4 from "../../assets/images/expertise-img-4.jpg";
import Expertise5 from "../../assets/images/expertise-img-5.jpg";
import Expertise6 from "../../assets/images/expertise-img-6.jpg";

type ExpertiseItem = {
  title: string;
  img: StaticImageData;
  desc: string;
  link: string;
};

const Expertise: React.FC = () => {
  const expertiseItems: ExpertiseItem[] = [
    {
      title: "Real Estate",
      img: Expertise1,
      desc: "SEO-driven websites for realtors, brokers, and property managers to attract buyers, sellers, and investors effortlessly.",
      link: "#",
    },
    {
      title: "Financial Services",
      img: Expertise2,
      desc: "Custom web solutions for insurance agencies, notaries, and financial institutions to enhance credibility and client acquisition.",
      link: "#",
    },
    {
      title: "Medical & Healthcare",
      img: Expertise3,
      desc: "HIPAA-compliant, fast, and SEO-friendly websites for clinics, hospitals, and healthcare providers to improve patient engagement.",
      link: "#",
    },
    {
      title: "Small Businesses",
      img: Expertise4,
      desc: "Affordable, high-performing websites designed to help small businesses grow, attract customers, and increase online visibility.",
      link: "#",
    },
    {
      title: "Automotive",
      img: Expertise5,
      desc: "Custom automotive websites with SEO and e-commerce features to help dealerships, repair shops, and auto parts businesses thrive.",
      link: "#",
    },
    {
      title: "Professional Service",
      img: Expertise6,
      desc: "Sleek, conversion-focused websites for lawyers, consultants, and agencies to showcase expertise and attract more clients.",
      link: "#",
    },
  ];

  return (
    <div className="expertise-service sp pb-0 new-gap" id="expertise-service">
      <div className="container">
        <div className="row mb-4 mb-md-5">
          <div className="col-lg-12 text-center">
            <div className="heading-title">
              <h2>
                Our Digital Expertise Across
                <span> Industries </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-sec-images solutions-list-images expertise-list-images">
        <div className="row m-0 align-items-center">
          {expertiseItems.map((item, index) => (
            <div className="col-lg-4 col-md-6 p-0" key={index}>
              <div className="portfolio-list">
                <div className="image image-anime reveal">
                  <Link href={item.link}>
                    <Image src={item.img} alt={item.title} />
                  </Link>

                  <div className="solutions-hover-box">
                    <h3>{item.title}</h3>

                    <div className="solution-hover">
                      <p style={{ color: "white" }}>{item.desc}</p>

                      <Link href={item.link}>
                        Request A Quote
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
  );
};

export default Expertise;
