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
import { Search, X } from "lucide-react";
import api from "@/api/axios";
type TabItem = {
  id: any;
  target: string;
  controls: string;
  selected: boolean;
  name: string;
  count?: number;
};

export default function BlogClient() {
  const { getBlogCategories, getBlogItems, loading, searchBlog } = useBlog();
  const dispatch = useDispatch()

  const [category, setCategory] = useState<any>([]);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [categoryloading, setCategoryLoading] = useState(false)
  const [pageCount, setPageCount] = useState<any>(null)
  const [scroll, setScroll] = useState(true)
  const [searchText, setSearchtext] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showcategoryNav, setShowCategoryNav] = useState(true)

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
      const data = await getBlogCategories(15);


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
    if (!selectTab?.id || searchQuery.length > 0) return;
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
      setShowCategoryNav(true)
    };

    getblogitems();
  }, [selectTab, pagenumber, searchQuery]);


  useEffect(() => {
    if (!searchQuery) return;

    const fetchBlogs = async () => {
      try {
        const response = await searchBlog(searchQuery, pagenumber);

        if (
          response?.totalPosts != null &&
          response?.data != null
        ) {
          setBlogItems(response.data);
          setPageCount(response.totalPosts);
        }
      } catch (error) {
        console.error("Blog search failed:", error);
      }
      
    };

    fetchBlogs();
  }, [searchQuery, pagenumber]);


  useEffect(() => {
    if (blogItems?.length > 0 && scroll === false) {
      const isMobile = window.innerWidth <= 768;

      setTimeout(() => {
        if (isMobile) {
          const el = document.getElementById("blog-category-section");

          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else if (tabsRef?.current) {
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
      }, 300);
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


  const HandleSearch = async () => {
    setShowCategoryNav(false)
    if (!searchText.trim()) return;
    setSearchQuery(searchText.trim())
    setPageNumber(1)

  }


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
                      <Link href={`/${item?.slug}`}><h2 className="blogbannerheading"
                        dangerouslySetInnerHTML={{ __html: item.title || " " }}
                      /></Link>
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
      <div className="w-full flex  mt-5 justify-center flex-wrap gap-2" >
        <div className="search-box">
          <input
            type="search"
            value={searchText}
            placeholder="Search blog..."
            className="search-input"
            aria-label="Search blog"
            onChange={(e) => {
              setSearchtext(e.target.value);
              if (!e.target.value.trim()) {
                setSearchQuery("");
                setPageNumber(1);
                setShowCategoryNav(true);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                HandleSearch();
              }
            }}
          />

          {searchText.length > 0 && (
            <button
              type="button"
              className="clear-search"
              aria-label="Clear search"
              onClick={() => {
                setSearchtext("");
                setSearchQuery("");
                setPageNumber(1);
                setShowCategoryNav(true);
              }}
            >
              <X size={18} />
            </button>
          )}

          <button
            type="button"
            className="searchButton"
            aria-label="Search"
            disabled={!searchText.trim()}
            onClick={HandleSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div
        id="blog-category-section"
        ref={tabsRef}
        className="blog-banner-slide owl-carousel owl-theme mt-10 pb-10">
        {
          showcategoryNav &&
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
        }



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
                              <span className="text-[#3b58a2] font-extrabold"
                                dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
                              />
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
              const itemsPerPage = 6;
              const totalPages = Math.ceil(pageCount / itemsPerPage);
              const current = Number(pagenumber);
              const pages: React.ReactNode[] = [];

              /*
               * < Prev  1  ...  7  8  9  [10]  11  12  13  ...  50  Next >
               * First and last page always shown, 3 pages on each side of
               * the current page, "..." for the gaps.
               */
              const pageItems: (number | "dots-start" | "dots-end")[] = [];
              let windowStart = Math.max(2, current - 3);
              let windowEnd = Math.min(totalPages - 1, current + 3);
              // don't hide a single page behind "..."
              if (windowStart === 3) windowStart = 2;
              if (windowEnd === totalPages - 2) windowEnd = totalPages - 1;

              pageItems.push(1);
              if (windowStart > 2) pageItems.push("dots-start");
              for (let p = windowStart; p <= windowEnd; p++) pageItems.push(p);
              if (windowEnd < totalPages - 1) pageItems.push("dots-end");
              if (totalPages > 1) pageItems.push(totalPages);

              // Previous button
              pages.push(
                <button
                  type="button"
                  key="previous"
                  className="paginationbox paginationNav"
                  onClick={() => HandleSelectnumbox(current - 1)}
                  disabled={current <= 1}
                  aria-label="Previous page"
                >
                  {"< Prev"}
                </button>
              );

              pageItems.forEach((item) => {
                if (typeof item === "number") {
                  pages.push(
                    <button
                      type="button"
                      key={`page-${item}`}
                      className={
                        current === item
                          ? "paginationactive"
                          : "paginationbox"
                      }
                      onClick={() => HandleSelectnumbox(item)}
                      aria-label={`Go to page ${item}`}
                      aria-current={current === item ? "page" : undefined}
                    >
                      {item}
                    </button>
                  );
                } else {
                  pages.push(
                    <span key={item} className="paginationDots">
                      ...
                    </span>
                  );
                }
              });

              // Next button
              pages.push(
                <button
                  type="button"
                  key="next"
                  className="paginationbox paginationNav"
                  onClick={() => HandleSelectnumbox(current + 1)}
                  disabled={current >= totalPages}
                  aria-label="Next page"
                >
                  {"Next >"}
                </button>
              );

              return pages;
            })()}
          </div>
        )}
      </div>
    </>
  );
}