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
  const items: any = [
    {
      "image": `${BASE_URL}/wp-content/uploads/2025/03/portfolio-img-1.jpg`,
      "title": "Bio Sleep Concept",
      "slug": "bio-sleep-concept-magento"
    },
    {
      "image": `${BASE_URL}/wp-content/uploads/2025/03/portfolio-img-2.jpg`,
      "title": "Arc Levers",
      "slug":'arc-levers-store'
    },
    {
      "image": `${BASE_URL}/wp-content/uploads/2025/03/portfolio-img-3.jpg`,
      "title": "Arrendaria",
      "slug":"arrendaria"
    },
    {
      "image": `${BASE_URL}/wp-content/uploads/2025/03/portfolio-img-4.jpg`,
      "title": "Tim’s Unique Lighting",
      "slug" :"tim-hensons-unique-lighting-wordpress"
    },
    {
      "image": `${BASE_URL}/wp-content/uploads/2025/03/portfolio-img-5.jpg`,
      "title": "The Fifth OC",
      "slug":"the-fifth-oc-wordpress"
    },
    {
      "image": `${BASE_URL}/wp-content/uploads/2025/03/portfolio-img-6.jpg`,
      "title": "Maya Stone",
      "slug" :"maya-stone-inc-wordpress"
    }
  ]



  return (
    <div className="service">
      <div className="service-items service-items2 sp portfolio" id="portfolio">
        <div className="container">
          <div className="row flex  justify-content-between mb-5">
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

                  href="/portfolio"
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
            <div className="row align-items-center">

              <div className="d-none d-lg-block">

                <div className="row">
                  {[0, 1, 2].map((colIndex) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 gap-5" key={colIndex}>
                      {items
                        ?.slice(colIndex * 2, colIndex * 2 + 2)
                        ?.map((item: any, index: any) => (
                          <div className="portfolio-list !mt-7 !p-4" key={index}>
                            <div className="image image-anime reveal">
                              <Link href={`/portfolio/${item?.slug}`}>
                                <img src={item.image} alt={item.title} />
                              </Link>
                            </div>

                            <div className="portfolio-details">
                              <Link
                                href={`/portfolio/${item?.slug}`}
                                className="d-flex align-items-center justify-content-between"
                              >
                                {item.title}{" "}
                                <span>
                                  <i className="fa-solid fa-arrow-right -rotate-45"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-block d-lg-none">
                <div className="row">


                  {items
                    ?.map((item: any, index: any) => (
                      <div className="col-12 col-sm-6" key={index}>
                        <div className="portfolio-list !mt-7 !p-4">
                          <div className="image image-anime reveal">
                            <Link href={`/portfolio/${item?.about_portfolio_slug}`}>
                              <img src={item.image} alt={item.title} />
                            </Link>
                          </div>

                          <div className="portfolio-details">
                            <Link
                              href={`/portfolio/${item?.about_portfolio_slug}`}
                              className="d-flex align-items-center justify-content-between"
                            >
                              {item.title}{" "}
                              <span>
                                <i className="fa-solid fa-arrow-right -rotate-45"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}


                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PortFolio;
