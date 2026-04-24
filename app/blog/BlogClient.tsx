"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Skeleton from "@mui/material/Skeleton";
import useBlog from "@/hooks/useBlog";
import { BASE_URL } from "@/lib/url";
import { useDispatch } from "react-redux";
import { setCategoryId, addPageCount } from "@/redux/slicers/idSlicer";
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
  const dispatch = useDispatch()

  const [category, setCategory] = useState<any>([]);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [categoryloading, setCategoryLoading] = useState(false)
  const [pageCount, setPageCount] = useState<any>(null)
  const [scroll, setScroll] = useState(true)

  const [selectTab, setSelectTab] = useState<any>({
    id: "",
    target: "#pills-home",
    controls: "pills-home",
    selected: true,
    name: "All",
  });

  const [blogItems, setBlogItems] = useState<any>([]);
  const [pagenumber, setPageNumber] = useState<any>(1);



  useEffect(() => {
    const getPageData = async () => {
      setCategoryLoading(true)
      const data = await getBlogCategories();

      const allobj = {
        id: [],
        target: "#pills-home",
        controls: "pills-home",
        selected: true,
        name: "All",
      };

      setSelectTab(allobj)
      setCategory([allobj, ...data]);
      setCategoryLoading(false)
    };

    getPageData();
  }, []);


  useEffect(() => {
    if (!selectTab?.id) return;
    const getblogitems = async () => {
      const params = new URLSearchParams({
        per_page: "6",
        page: String(pagenumber),
      });
      if (selectTab?.name !== "All") {
        params.append("categories", String(selectTab?.id));
      }
      const res: any = await getBlogItems(params);
      setBlogItems(res.data);
      setPageCount(res.totalPosts)
    };

    getblogitems();
  }, [selectTab, pagenumber]);




  useEffect(() => {
    if (blogItems?.length > 0 && tabsRef?.current && scroll == false) {
      console.log("calling")
      const yOffset = -220;

      const y =
        tabsRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [blogItems]);



  const setCategoryID = (id: any) => {
    dispatch(setCategoryId(id))

  }


  const HandleSelectnumbox = (num: number) => {
    setScroll(false) 
    setPageNumber(num);
  };

  const HandleSelectTab = (tab: TabItem) => {
    setSelectTab(tab);
    setPageNumber(1);
  };


  const popularReads = [
    // {
    //   category: "Popular Reads",
    //   title: "Designing Intelligence: How AI Is Transforming Digital Design, Navigation, and Experience in the Internet Age",
    //   excerpt: "From Pretty Pages to Intelligent Journeys In the early days of the internet, website design was little more than digital...",
    //   image: `${BASE_URL}/wp-content/uploads/2026/02/Designing-Intelligence.jpg`,
    //   url: `${BASE_URL}/how-ai-is-transforming-digital-design-navigation-and-experience/`,
    //   slug:"how-ai-is-transforming-digital-design-navigation-and-experience"
    // },
    {
      category: "Popular Reads",
      title: "CRM, AI, and the Future of Intelligent Customer Experience",
      excerpt: "A New Era of Customer Relationships Customer Relationship Management (CRM) has always been about one thing—building and nurturing meaningful relationships...",
      image: `${BASE_URL}/wp-content/uploads/2026/01/CRM-AI.jpg`,
      url: `${BASE_URL}/crm-ai-and-the-future-of-intelligent-customer-experience/`,
      slug: "crm-ai-and-the-future-of-intelligent-customer-experience"
    },
    // {
    //   category: "Popular Reads",
    //   title: "Dark Mode in Web Design: The Complete UX & Implementation Guide",
    //   excerpt: "View this. It's late at night, the lights are dim, you pick up your phone to open Link website, and...",
    //   image: `${BASE_URL}/wp-content/uploads/2026/01/Dark-Mode-in-Web-Design.png`,
    //   url: `${BASE_URL}/the-complete-ux-implementation-guide-to-dark-mode-in-web-design/`,
    //   slug:"the-complete-ux-implementation-guide-to-dark-mode-in-web-design"
    // },
    // {
    //   category: "Popular Reads",
    //   title: "The Role of Branding in E-commerce Web Design: Building Brand Trust to Drive Sales",
    //   excerpt: "Most of us prefer shopping online, and to be Link bit precise around 33% of the world population shops online....",
    //   image: `${BASE_URL}/wp-content/uploads/2026/01/Brand-Trust-to-Drive-Sales.jpg`,
    //   url: `${BASE_URL}/the-role-of-branding-in-e-commerce-web-design/`,
    //   slug:"the-role-of-branding-in-e-commerce-web-design"
    // },
    {
      category: "Popular Reads",
      title: "Content Marketing in the Age of AI: Why the Human Edge Still Wins",
      excerpt: "A Shift We Can’t Ignore Every decade in marketing has its buzzword. In the 2000s, it was SEO. In the...",
      image: `${BASE_URL}/wp-content/uploads/2026/01/Content-Marketing-in-the-Age-of-AI.jpg`,
      url: `${BASE_URL}/content-marketing-in-the-age-of-ai-why-the-human-edge-still-wins/`,
      slug: "content-marketing-in-the-age-of-ai-why-the-human-edge-still-wins"
    }
  ];

  const showNoData = !loading && blogItems?.length === 0;


  return (
    <>
      <div className="blog-banner-slide ">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {popularReads.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item p-10">
                <div className="row gy-4 justify-content-center align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-about-img">
                      <Link href={`/${item?.slug}`}> <img src={item?.image} alt="blog-about-img" /></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="left-side">
                      <h4 className="!text-[#8c92a1]">{item?.category}</h4>
                      <Link href={`/${item?.slug}`}><h2 className="blogbannerheading">{item.title}</h2></Link>
                      <p className="primary-bodyText">{item?.excerpt}</p>
                      <div className="mb-0 text-lg-start pt-md-4 " data-aos="fade-up" data-aos-duration="800">
                        <Link href={`/${item?.slug}`} className="btn btn-primary orange-1">
                          Read More
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div 
      ref={tabsRef}
      className="blog-banner-slide owl-carousel owl-theme mt-10 pb-10">
        <ul 
        
        className="nav nav-pills mb-3 justify-content-center gap-2">
          {categoryloading
            ? Array.from({ length: 15 }).map((_, index) => (
              <li key={index}>
                <Skeleton
                  variant="rounded"
                  height={45}
                  width={150}
                  animation="wave"
                  sx={{ borderRadius: "7px" }}
                />
              </li>
            ))
            : category.map((tab: any, index: number) => (
              <li key={index}>
                <button
                  className={`nav-link category-navlink ${selectTab.id == tab.id ? "active" : ""
                    }`}
                  onClick={() => HandleSelectTab(tab)}
                >
                  {tab.name}
                </button>
              </li>
            ))}
        </ul>



        <div className="tab-content  d-flex justify-center" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="portfolio-imgs blog-data " id="content-section">
              <div className="blog-container-box" id="jar1">
                {loading ? (
                  Array.from({ length: 6 }, (_, index) => (
                    <div className="blogItem" key={index}>
                      <div className="card-parts-1 blog-box">
                        <div className="card blog-box-card">
                          <Skeleton
                            variant="rectangular"
                            height={300}
                            width="100%"
                            sx={{ borderRadius: '10px' }}
                            animation="wave"
                          />
                          <div className="card-body heading5">
                            <Skeleton width="50%" height={30} sx={{ mb: 1 }} />
                            <Skeleton width="90%" height={28} sx={{ mb: 1 }} />
                            <Skeleton width="70%" height={28} sx={{ mb: 2 }} />
                            <Skeleton width="100%" height={18} />
                            <Skeleton width="100%" height={18} />
                            <Skeleton width="100%" height={18} sx={{ mb: 2 }} />
                            <Skeleton width={120} height={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : blogItems.length > 0 ? (

                  blogItems.map((post: any, index: any) => (

                    <div className="blogItem" key={index}>
                      <div className="card-parts-1 blog-box">
                        <div className="card blog-box-card">
                          <Link href={`/${post?.slug}`}
                            onClick={() => setCategoryID(post?.categories)}
                          >

                            <img
                              src={post?.featured_image_url || ""}
                              className="card-img-top"
                              alt="blogItem-image"

                            />
                          </Link>

                          <div className="card-body heading5">
                            <div className="calender d-flex justify-content-between">
                              <div className="mb-2 mb-sm-3 calender-size">
                                <i className="fa-solid fa-calendar-days"></i> {new Date(post?.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                              </div>
                            </div>

                            <Link href={`/${post?.slug}`}
                              className="card-title mb-2 card-text-Link "
                              onClick={() => setCategoryID(post?.categories)}
                            >
                              <span className="text-[#3b58a2] font-extrabold">
                                {post?.title?.rendered}

                              </span>
                            </Link>

                            <div
                              className="primary-bodyText"
                              dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
                            />

                            <Link href={`/${post?.slug}`}
                              className="d-flex align-items-center gap-2 clr-blk"
                              onClick={() => setCategoryID(post?.categories)}
                            >
                              <span className="font-extrabold">
                                READ MORE
                              </span>
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  showNoData && <div>No Data Found</div>
                )}

              </div>
            </div>
          </div>
        </div>


        {pageCount > 6 && (
          <div className="paginationContainer">
            {(() => {
              const totalPages = Math.ceil(pageCount / 6) || 0;
              const pages = [];

              const addPage = (i:any) => {
                pages.push(
                  <div
                    key={i}
                    className={pagenumber === i ? "paginationactive" : "paginationbox"}
                    onClick={() => HandleSelectnumbox(i)}
                  >
                    {i}
                  </div>
                );
              };

              if (pagenumber > 1) {
                pages.push(
                  <div
                    key="first"
                    className="paginationbox prev"
                    onClick={() => HandleSelectnumbox(1)}
                  >
                    First
                  </div>
                );
              }

              if (pagenumber > 1) {
                pages.push(
                  <div
                    key="prev"
                    className="paginationbox prev size-10"
                    onClick={() => HandleSelectnumbox(pagenumber - 1)}
                  >
                    <span>{"<"}</span>
                  </div>
                );
              }

              if (totalPages <= 6) {
                for (let i = 1; i <= totalPages; i++) {
                  addPage(i);
                }
              } else {
                if (pagenumber <= 3) {
               
                  addPage(1);
                  addPage(2);
                  addPage(3);

                  pages.push(
                    <div key="dots-end" className="paginationbox">
                      ...
                    </div>
                  );

                  addPage(totalPages - 2);
                  addPage(totalPages - 1);
                  addPage(totalPages);
                } else if (pagenumber >= totalPages - 2) {
                  // 1 2 3 ... last-2 last-1 last
                  addPage(1);
                  addPage(2);
                  addPage(3);

                  pages.push(
                    <div key="dots-start" className="paginationbox">
                      ...
                    </div>
                  );

                  addPage(totalPages - 2);
                  addPage(totalPages - 1);
                  addPage(totalPages);
                } else {
                  
                  addPage(1);

                  pages.push(
                    <div key="dots-left" className="paginationbox">
                      ...
                    </div>
                  );

                  addPage(pagenumber - 1);
                  addPage(pagenumber);
                  addPage(pagenumber + 1);

                  pages.push(
                    <div key="dots-right" className="paginationbox">
                      ...
                    </div>
                  );

                  addPage(totalPages);
                }
              }

              if (pagenumber < totalPages) {
                pages.push(
                  <div
                    key="next"
                    className="paginationbox prev"
                    onClick={() => HandleSelectnumbox(pagenumber + 1)}
                  >
                    {">"}
                  </div>
                );
              }

              if (pagenumber < totalPages) {
                pages.push(
                  <div
                    key="last"
                    className="paginationbox prev"
                    onClick={() => HandleSelectnumbox(totalPages)}
                  >
                    Last
                  </div>
                );
              }

              return pages;
            })()}
          </div>
        )}
      </div>
    </>
  );
}