"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Skeleton from "@mui/material/Skeleton";

import useBlog from "@/hooks/useBlog";

type TabItem = {
  id: any;
  target: string;
  controls: string;
  selected: boolean;
  name: string;
  count?: number;
};

export default function BlogClient() {
  const { getBlogCategories, getBlogItems, loading } = useBlog();

  const [category, setCategory] = useState<TabItem[]>([]);
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const [selectTab, setSelectTab] = useState<TabItem>({
    id: 1,
    target: "#pills-home",
    controls: "pills-home",
    selected: true,
    name: "All",
  });

  const [blogItems, setBlogItems] = useState<any[]>([]);
  const [pagenumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const getPageData = async () => {
      const data = await getBlogCategories();

      let allIdList: string = "";
      if (Array.isArray(data) && data.length > 0) {
        allIdList = data.map((item: any) => item.id).join(",");
      }

      const allobj: TabItem = {
        id: allIdList,
        target: "#pills-home",
        controls: "pills-home",
        selected: true,
        name: "All",
      };

      setSelectTab(allobj);
      setCategory([allobj, ...(data || [])]);
    };

    getPageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getblogitems = async () => {
      const params = new URLSearchParams({
        categories: String(selectTab?.id ?? ""),
        per_page: String(6),
        page: String(pagenumber),
      });

      const data = await getBlogItems(params);
      setBlogItems(Array.isArray(data) ? data : []);
    };

    getblogitems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectTab, pagenumber]);

  useEffect(() => {
    if (blogItems?.length > 0 && tabsRef?.current) {
      const yOffset = -220;
      const y =
        tabsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [blogItems]);

  const HandleSelectnumbox = (num: number) => {
    setPageNumber(num);
  };

  const HandleSelectTab = (tab: TabItem) => {
    setSelectTab(tab);
    setPageNumber(1);
  };

  const popularReads = [
    {
      id: 1,
      wrapClass: "blog-about",
      container: true,
      rowClass: "row gy-4 justify-content-center align-items-center",
      img: "https://b3net.com/wp-content/uploads/2026/01/Content-Marketing-in-the-Age-of-AI.jpg",
      imgAlt: "",
      buttonWrapClass: "mb-0 text-start pt-md-4 aos-init aos-animate",
      buttonWrapAttrs: { "data-aos": "fade-up", "data-aos-duration": "800" },
      h4: "Popular Reads",
      h2: (
        <>
          How AI Is Transforming Patient Engagement In <span> Healthcare?</span>
        </>
      ),
      p: (
        <>
          AI or Artificial Intelligence is not just about robots or drones, it’s
          silently transforming our everyday lives, touching upon core necessities
          in a way that is otherwise humanly difficult.
        </>
      ),
      btnText: "Read More",
      href: "#",
    },
    {
      id: 2,
      wrapClass: "item",
      container: false,
      rowClass: "row gy-4 justify-content-center align-items-center",
      img: "https://b3net.com/wp-content/uploads/2025/11/AI-as-a-Co-Pilot.jpg",
      imgAlt: "",
      buttonWrapClass: "mb-0 text-lg-start text-center pt-md-4 aos-init aos-animate",
      buttonWrapAttrs: { "data-aos": "fade-up", "data-aos-duration": "800" },
      h4: "Popular Reads",
      h2: (
        <>
          What Are the Top <span>Social Media Trends</span> to Watch in 2025?
        </>
      ),
      p: (
        <>
          Whether you’re a small business or an individual creator creating online
          content for monetary gains, you must stay informed of...
        </>
      ),
      btnText: "Read More",
      href: "#",
    },
    {
      id: 3,
      wrapClass: "item",
      container: false,
      rowClass: "row gy-4 justify-content-center align-items-center",
      img: "https://b3net.com/wp-content/uploads/2026/01/Brand-Trust-to-Drive-Sales.jpg",
      imgAlt: "",
      buttonWrapClass: "mb-0 text-lg-start text-center pt-md-4 aos-init aos-animate",
      buttonWrapAttrs: { "data-aos": "fade-up", "data-aos-duration": "800" },
      h4: "Popular Reads",
      h2: (
        <>
          Top 6 <span>Shopify Apps</span> for Businesses to Boost Your Sales in 2025
        </>
      ),
      p: (
        <>
          If you have an online store on Shopify, you must be looking for ways to
          increase your sales this year....
        </>
      ),
      btnText: "Read More",
      href: "#",
    },
  ];

  const showNoData = !loading && blogItems?.length === 0;

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        loop={true}
      >
        {popularReads.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={item.wrapClass} style={{ padding: "40px" }}>
              <div className={item.container ? "container" : undefined}>
                <div className={item.rowClass}>
                  <div className="col-lg-6">
                    <div className="blog-about-img">
                      <img src={item.img} alt={item.imgAlt} />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="left-side">
                      <h4>{item.h4}</h4>
                      <h2>{item.h2}</h2>
                      <p>{item.p}</p>

                      <div className={item.buttonWrapClass} {...item.buttonWrapAttrs}>
                        <Link href={item.href} className="btn btn-primary orange-1">
                          {item.btnText} <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="portfolio-content blog-content">
        <div className="container blogContainer">
        <ul
            className="nav nav-pills mb-3 justify-content-center "
            id="pills-tab"
            role="tablist"
          >
            {category.map((tab, index) => (
              <li className="nav-item" role="presentation" key={index}>
                <button
                  className={`nav-link${selectTab.id == tab.id ? " active" : ""
                    } blognavlink`}
                  id={tab.id}
                  data-bs-toggle="pill"
                  data-bs-target={tab.target}
                  type="button"
                  onClick={() => HandleSelectTab(tab)}
                  role="tab"
                  aria-controls={tab.controls}
                  aria-selected={tab.selected ? "true" : "false"}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>


          <div className="tab-content" id="pills-tabContent">
            <div className="portfolio-imgs blog-data" id="content-section">
              <div ref={tabsRef} className="row gy-4 blogcontainer">
                {loading ? (
                  Array.from({ length: 6 }, (_, index) => (
                    <div className="col-lg-4 col-sm-6 col-12 content1 blogItem" key={index}>
                      <div className="card-parts-1">
                        <div className="card">
                          <Skeleton variant="rectangular" height={200} animation="wave" />
                          <div className="card-body heading5">
                            <Skeleton width="40%" height={20} sx={{ mb: 1 }} />
                            <Skeleton width="80%" height={28} sx={{ mb: 1 }} />
                            <Skeleton width="60%" height={28} sx={{ mb: 2 }} />
                            <Skeleton width="100%" height={18} />
                            <Skeleton width="95%" height={18} />
                            <Skeleton width="90%" height={18} sx={{ mb: 2 }} />
                            <Skeleton width={120} height={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : blogItems?.length > 0 ? (
                  blogItems.map((post: any, index: number) => (
                    <div className="col-lg-4 col-sm-6 col-12 content1 blogItem" key={post?.id || index}>
                      <div className="card-parts-1">
                        <div className="card">
                          {/* IMPORTANT: use post.slug instead of title.rendered for url */}
                          <Link href={`/blog/${post?.slug || post?.id}`}>
                            <img src={post?.featured_image_url || ""} alt="Blog" loading="lazy" />
                          </Link>

                          <div className="card-body heading5">
                            <div className="calender d-flex justify-content-between">
                              <div className="mb-2 mb-sm-3 calender-size">
                                <i className="fa-solid fa-calendar-days"></i>{" "}
                                {new Date(post?.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </div>
                            </div>

                            <Link className="card-title mb-2 card-text-a" href={`/blog/${post?.slug || post?.id}`}>
                              <span dangerouslySetInnerHTML={{ __html: post?.title?.rendered || "" }} />
                            </Link>

                            <div dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered || "" }} />

                            <Link className="d-flex align-items-center gap-2 clr-blk" href={`/blog/${post?.slug || post?.id}`}>
                              READ MORE <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  showNoData && (
                    <div className="loadingContainer">
                      <span style={{ marginRight: "150px" }}>No data found</span>
                    </div>
                  )
                )}
              </div>

              
              {selectTab?.count && selectTab.count > 6 && (
                <div className="paginationContainer">
                  {Array.from(
                    { length: Math.ceil(selectTab.count / 6) || 0 },
                    (_, index) => (
                      <div
                        key={index}
                        className={pagenumber === index + 1 ? "paginationactive" : "paginationbox"}
                        onClick={() => HandleSelectnumbox(index + 1)}
                      >
                        {index + 1}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
