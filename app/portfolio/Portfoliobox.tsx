"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
import usePortfolio from "@/hooks/usePortfolio";

type Category = {
  id: number;
  name: string;
  count?: number;
};

type PortfolioItem = {
  id: number;
  slug: string;
  title?: { rendered?: string };
  featured_media_url?: string;
};

export default function Portfoliobox() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [selectTab, setSelectTab] = useState<Category | null>(null);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [pagenumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [shouldScrollToTabs, setShouldScrollToTabs] = useState(false);

  const tabsRef = useRef<HTMLDivElement | null>(null);

  const { getportfolioCategories, getportfolioItems } = usePortfolio();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const cats: Category[] = await getportfolioCategories();
        if (cats?.length) {
          setCategoryList(cats);
          setSelectTab(cats[0]);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!selectTab?.id) return;

    (async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          portfolio_category: String(selectTab.id),
          per_page: "6",
          page: String(pagenumber),
        });

        const items: PortfolioItem[] = await getportfolioItems(params);
        setPortfolioItems(items ?? []);

        if (shouldScrollToTabs) {
          setTimeout(() => {
            tabsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setShouldScrollToTabs(false);
          }, 100);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [selectTab?.id, pagenumber]);

  const HandleSelectTab = (tab: Category) => {
    setSelectTab(tab);
    setPageNumber(1);
    setShouldScrollToTabs(false);
  };

  const HandleSelectnumbox = (num: number) => {
    if (num === pagenumber) return;
    setShouldScrollToTabs(true);
    setPageNumber(num);
  };

  return (
    <div
      ref={tabsRef}
      className="portfolio-content">
      <div className="container">
        <ul

          className="nav nav-pills mb-3 justify-content-center"
          role="tablist"
        >
          {categoryList.map((tab) => (
            <li className="nav-item mb-3 portfolio-category" role="presentation" key={tab.id}>
              <button
                className={`nav-link${selectTab?.id === tab.id ? " active" : ""} blognavlink`}
                type="button"
                onClick={() => HandleSelectTab(tab)}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="portfolio-imgs">
          <div className="row gy-4" id="jar1">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  className="col-lg-4 col-sm-6 bg-hover content1"
                  key={`sk-${index}`}
                >
                  <div className="portfolio-list">
                    <div className="image reveal">
                      <Skeleton variant="rectangular" width="100%" height={220} />
                    </div>

                    <div className="portfolio-details">
                      <div className="d-flex align-items-center justify-content-between">
                        <Skeleton variant="text" width="70%" height={28} />
                        <Skeleton variant="circular" width={18} height={18} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
              : portfolioItems.map((item) => (
                <div className="col-lg-4 col-sm-6 bg-hover content1" key={item.id}>
                  <div className="portfolio-list">
                    <div className="image reveal">
                      <Link href={`/portfolio/${item?.slug}`}>
                        <img src={item.featured_media_url || ""} alt="featured_media" />
                      </Link>
                    </div>

                    <div className="portfolio-details">
                      <Link
                        href={`/portfolio/${item?.slug}`}
                        className="d-flex align-items-center justify-content-between"
                      >
                        {item?.title?.rendered ?? ""}
                        <span>
                          <i
                            className="fa-solid fa-arrow-right"
                            style={{
                              transform: "rotate(-45deg)",
                              display: "inline-block",
                            }}
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        

       {Number(selectTab?.count ?? 0) > 6 && (
  <div className="paginationContainer">
    {(() => {
      const itemsPerPage = 6;
      const totalItems = Number(selectTab?.count ?? 0);
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      const visiblePageCount = 5;
      const pages: React.ReactNode[] = [];

      /*
       * Page 1–4  → 1 2 3 4 5
       * Page 5–7  → 4 5 6 7 8
       * Page 8–10 → 7 8 9 10 11
       */
      let startPage = 1;

      if (pagenumber >= visiblePageCount) {
        startPage =
          4 +
          Math.floor((pagenumber - visiblePageCount) / 3) * 3;
      }

      // Keep the visible pages inside the available page range.
      startPage = Math.min(
        startPage,
        Math.max(1, totalPages - visiblePageCount + 1)
      );

      const endPage = Math.min(
        startPage + visiblePageCount - 1,
        totalPages
      );

      const addPage = (page: number) => {
        pages.push(
          <button
            type="button"
            key={`page-${page}`}
            className={
              pagenumber === page
                ? "paginationactive"
                : "paginationbox"
            }
            onClick={() => HandleSelectnumbox(page)}
            aria-label={`Go to page ${page}`}
            aria-current={pagenumber === page ? "page" : undefined}
          >
            {page}
          </button>
        );
      };

      // First button
      if (pagenumber > 1) {
        pages.push(
          <button
            type="button"
            key="first"
            className="paginationbox prev"
            onClick={() => HandleSelectnumbox(1)}
          >
            First
          </button>
        );
      }

      // Previous button
      if (pagenumber > 1) {
        pages.push(
          <button
            type="button"
            key="previous"
            className="paginationbox prev size-10"
            onClick={() => HandleSelectnumbox(pagenumber - 1)}
            aria-label="Previous page"
          >
            {"<"}
          </button>
        );
      }

      // Five moving page numbers
      for (let page = startPage; page <= endPage; page++) {
        addPage(page);
      }

      // Dots and final page number
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push(
            <span key="pagination-dots" className="paginationDots">
              ...
            </span>
          );
        }

        addPage(totalPages);
      }

      // Next button
      if (pagenumber < totalPages) {
        pages.push(
          <button
            type="button"
            key="next"
            className="paginationbox prev"
            onClick={() => HandleSelectnumbox(pagenumber + 1)}
            aria-label="Next page"
          >
            {">"}
          </button>
        );
      }

      // Last button
      if (pagenumber < totalPages) {
        pages.push(
          <button
            type="button"
            key="last"
            className="paginationbox prev"
            onClick={() => HandleSelectnumbox(totalPages)}
          >
            Last
          </button>
        );
      }

      return pages;
    })()}
  </div>
)}
      </div>

    </div>
  );
}