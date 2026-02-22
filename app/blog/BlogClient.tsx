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
    id: "",
    target: "#pills-home",
    controls: "pills-home",
    selected: true,
    name: "All",
  });

  const [blogItems, setBlogItems] = useState<any[]>([]);
  const [pagenumber, setPageNumber] = useState<number>(1);

  /*
  =========================
  FIX IS HERE
  =========================
  */

  useEffect(() => {
    const getPageData = async () => {
      const data = await getBlogCategories();

      let allIdList = "";

      if (Array.isArray(data) && data.length > 0) {
        allIdList = data.map((item: any) => item.id).join(",");
      }

      const allobj: TabItem = {
        id: allIdList,
        target: "#pills-home",
        controls: "pills-home",
        selected: true,
        name: "All",
        count: data?.reduce(
          (total: number, item: any) => total + (item.count || 0),
          0
        ),
      };

      /*
      IMPORTANT:
      Convert WP category → TabItem
      */

      const mappedCategories: TabItem[] = Array.isArray(data)
        ? data.map((item: any) => ({
          id: item.id,
          target: `#pills-${item.id}`,
          controls: `pills-${item.id}`,
          selected: false,
          name: item.name,
          count: item.count,
        }))
        : [];

      setSelectTab(allobj);

      setCategory([allobj, ...mappedCategories]);
    };

    getPageData();
  }, []);

  /*
  =========================
  BLOG ITEMS FETCH
  =========================
  */

  useEffect(() => {
    const getblogitems = async () => {
      const params = new URLSearchParams({
        categories: String(selectTab?.id ?? ""),
        per_page: "6",
        page: String(pagenumber),
      });

      const data = await getBlogItems(params);

      setBlogItems(Array.isArray(data) ? data : []);
    };

    getblogitems();
  }, [selectTab, pagenumber]);

  /*
  =========================
  SCROLL
  =========================
  */

  useEffect(() => {
    if (blogItems?.length > 0 && tabsRef?.current) {
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

  /*
  =========================
  HANDLERS
  =========================
  */

  const HandleSelectnumbox = (num: number) => {
    setPageNumber(num);
  };

  const HandleSelectTab = (tab: TabItem) => {
    setSelectTab(tab);
    setPageNumber(1);
  };

  /*
  =========================
  POPULAR READS
  =========================
  */

  const popularReads = [
    {
      id: 1,
      wrapClass: "blog-about",
      container: true,
      rowClass: "row gy-4 justify-content-center align-items-center",
      img: "https://b3net.com/wp-content/uploads/2026/01/Content-Marketing-in-the-Age-of-AI.jpg",
      imgAlt: "",
      buttonWrapClass: "mb-0 text-start pt-md-4",
      h4: "Popular Reads",
      h2: <>How AI Is Transforming Patient Engagement</>,
      p: <>AI is silently transforming our everyday lives...</>,
      btnText: "Read More",
      href: "#",
    },
  ];

  const showNoData = !loading && blogItems?.length === 0;

  return (
    <>
      {/* SLIDER */}

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
      >
        {popularReads.map((item) => (
          <SwiperSlide key={item.id}>
            <div style={{ padding: "40px" }}>
              <img src={item.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CATEGORY */}

      <div className="container">

        <ul className="nav nav-pills mb-3 justify-content-center">

          {category.map((tab, index) => (

            <li key={index}>

              <button
                className={`nav-link ${selectTab.id == tab.id ? "active" : ""
                  }`}
                onClick={() => HandleSelectTab(tab)}
              >

                {tab.name}

              </button>

            </li>

          ))}

        </ul>

        {/* BLOG */}

        <div ref={tabsRef} className="row">

          {loading ? (

            Array.from({ length: 6 }).map((_, index) => (

              <div key={index} className="col-lg-4">

                <Skeleton variant="rectangular" height={200} />

              </div>

            ))

          ) : blogItems.length > 0 ? (

            blogItems.map((post, index) => (

              <div key={index} className="col-lg-4">

                <Link href={`/blog/${post.slug}`}>

                  <img src={post.featured_image_url} />

                </Link>

                <h3
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}
                />

              </div>

            ))

          ) : (

            showNoData && <div>No Data Found</div>

          )}

        </div>

        {/* PAGINATION */}

        {selectTab?.count && selectTab.count > 6 && (

          <div>

            {Array.from(
              { length: Math.ceil(selectTab.count / 6) },

              (_, index) => (

                <button
                  key={index}
                  onClick={() => HandleSelectnumbox(index + 1)}
                >
                  {index + 1}
                </button>

              )

            )}

          </div>

        )}

      </div>

    </>
  );
}