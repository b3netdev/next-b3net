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

    </div>
  );
}