import React from "react";
import Link from "next/link";
import { BASE_URL } from "@/lib/url";

type PortfolioItem = {
  title: string;
  img: string;
  href: string;
  size: "big" | "small";
  featured?: boolean; 
};

type TileProps = {
  item: PortfolioItem;
};

const PortFolio: React.FC = () => {
  const items: PortfolioItem[] = [
    {
      title: "Bio Sleep Concept",
      img: `${BASE_URL}/wp-content/uploads/2025/12/expertise-img-1.webp`,
      href: "/portfolio/bio-sleep-concept-magento",
      size: "big",
    },
    {
      title: "Arc Levers",
      img: `${BASE_URL}/wp-content/uploads/2025/12/expertise-img-2.webp`,
      href: "/portfolio/arc-levers",
      size: "small",
    },
    {
      title: "Arrendaria",
      img: `${BASE_URL}/wp-content/uploads/2025/12/expertise-img-3.webp`,
      href: "/portfolio/arrendaria-real-estate-service",
      size: "small",
    },
    {
      title: "Tim Henson’s Unique Lighting",
      img: `${BASE_URL}/wp-content/uploads/2025/12/expertise-img-4.webp`,
      href: "/portfolio/tim-hensons-unique-lighting-wordpress",
      size: "big",
    },
    {
      title: "The Fifth OC",
      img: `${BASE_URL}/wp-content/uploads/2025/12/expertise-img-5.webp`,
      href: "/portfolio/the-fifth-oc-wordpress",
      size: "big",
    },
    {
      title: "Maya Stone",
      img: `${BASE_URL}/wp-content/uploads/2025/12/expertise-img-6.webp`,
      href: "/portfolio/maya-stone-inc-wordpress",
      size: "small",
    },
  ];

  const columns: PortfolioItem[][] = [
    [items[0], items[1]],
    [items[2], items[3]],
    [items[4], items[5]],
  ];

  const Tile: React.FC<TileProps> = ({ item }) => (
    <div className="portfolio-list">
      <div
        className={`image image-anime reveal ratio ${
          item.featured ? "" : "ratio-1x1"
        }`}
        style={
          item.featured ? ({ ["--bs-aspect-ratio" as any]: "140%" } as any) : undefined
        }
      >
        <Link href={item.href}>
          <img
            src={item.img}
            alt=""
            className="w-100 h-100 object-fit-cover rounded-4"
          />
        </Link>
      </div>

      <div className="portfolio-details mt-2">
        <Link
          href={item.href}
          className="d-flex align-items-center justify-content-between"
        >
          {item.title}
          <span>
            <i
              className="fa-solid fa-arrow-right"
              style={{ transform: "rotate(300deg)" }}
            ></i>
          </span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="service">
      <div className="service-items service-items2 sp portfolio" id="portfolio">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-5">
            <div className="col-lg-6 pe-lg-5">
              <div className="heading-title heading-big-uppercase text-white">
                <p className="title">Our Portfolio</p>
                <h2>
                  Our Work,
                  <span> Your Growth</span>
                </h2>
              </div>
            </div>

            <div className="col-lg-6">
              <p style={{ color: "white", opacity: "0.6" }}>
                At B3NET, our portfolio showcases the results of over 25 years
                of ex- pertise in digital marketing, web design, development,
                and Al-driven solutions. From startups to established
                enterprises, we've empow- ered businesses across industries to
                achieve remarkable growth and digital transformation.
              </p>

              <div className="mt-4">
                
                <Link
                  className="btn btn-orange"
                  href="/testimonial.html"
                >
                  <span className="btn_label" data-text="Discover More">
                    Discover More
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="portfolio-sec-images">
            <div className="row g-4 align-items-stretch">
              {columns.map((colItems, colIndex) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={colIndex}>
                  <div className="d-flex flex-column gap-4">
                    {colItems.map((item) => (
                      <Tile item={item} key={item.title} />
                    ))}
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

export default PortFolio;
