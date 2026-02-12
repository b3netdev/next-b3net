"use client";

import React, { useEffect, useState } from "react";
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
  const {getportfolioCategories,getportfolioItems} = usePortfolio()
  // Load categories
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

  // Load items when tab/page changes
  useEffect(() => {
    if (!selectTab?.id) return;

    (async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          categories: String(selectTab.id),
          per_page: "6",
          page: String(pagenumber),
        });

        const items: PortfolioItem[] = await getportfolioItems(params);
        setPortfolioItems(items ?? []);
      } finally {
        setLoading(false);
      }
    })();
  }, [selectTab?.id, pagenumber]);

  const HandleSelectTab = (tab: Category) => {
    setSelectTab(tab);
    setPageNumber(1);
  };

  const HandleSelectnumbox = (num: number) => {
    setPageNumber(num);
  };

  return (
    <div className="portfolio-content">
      <div className="container">
        <ul className="nav nav-pills mb-3 justify-content-center" role="tablist">
          {categoryList.map((tab) => (
            <li className="nav-item" role="presentation" key={tab.id}>
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
                        <Link href={`/portfolio/${item.slug}`}>
                          <img src={item.featured_media_url || ""} alt="" />
                        </Link>
                      </div>

                      <div className="portfolio-details">
                        <Link
                          href={`/portfolio/${item.slug}`}
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

        {/* Pagination */}
        {!!selectTab?.count && selectTab.count > 6 && (
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
  );
}
