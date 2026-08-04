"use client"
import React, { useRef, useState } from "react";

import { useEffect } from "react";
import useBlog from "@/hooks/useBlog";
import { useAppDispatch } from "@/redux/hooks";
import Skeleton from "@mui/material/Skeleton";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { setCategoryId } from "@/redux/slicers/idSlicer";
const AuthorRelatedPosts = ({ id }: { id: number }) => {
    const { getRelatedPosts } = useBlog()
    const { categoryId } = useAppSelector(state => state.id)
    const [loading, setLoading] = useState(false)
    const [relatedpost, setRelatedpost] = useState<any>([])
    const dispatch = useDispatch()
    const [pagenumber, setPageNumber] = useState<number>(1)
    const [pageCount, setpageCount] = useState<any>()
    const tabsRef = useRef<HTMLDivElement | null>(null);
    const [scroll, setScroll] = useState(true)
    useEffect(() => {
        const getposts = async () => {
            setLoading(true)
            const params: any = {
                categories: categoryId,
                author: String(id),
                per_page: "6",
                page: String(pagenumber),
            };
            const { data, totalPosts } = await getRelatedPosts(params)
            setRelatedpost(data)
            setpageCount(totalPosts)
            setLoading(false)
        }
        getposts()

    }, [categoryId, pagenumber])

    useEffect(() => {
        if (relatedpost?.length > 0 && scroll == false) {
            const isMobile = window.innerWidth <= 768;

            setTimeout(() => {
                if (isMobile) {
                    const el = document.getElementById("relatedpost-section");

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
    }, [relatedpost]);


    const setCategoryID = (id: any) => {
        dispatch(setCategoryId(id))
    }

    const HandleSelectnumbox = (num: number) => {
        setScroll(false)
        setPageNumber(num);
    };




    const PostCardSkeleton = () => (
        <div className="card-parts-1">
            <div className="card">

                <Skeleton variant="rectangular" width="100%" height={220} />

                <div className="card-body heading5">

                    <div className="calender d-flex justify-content-between">
                        <div className="mb-2 mb-sm-3 calender-size">
                            <Skeleton variant="text" width={140} height={22} />
                        </div>
                    </div>


                    <Skeleton variant="text" width="90%" height={28} />
                    <Skeleton variant="text" width="70%" height={28} />


                    <Skeleton variant="text" width="100%" height={20} />
                    <Skeleton variant="text" width="95%" height={20} />
                    <Skeleton variant="text" width="80%" height={20} />


                    <div
                        className="d-flex align-items-center gap-2 clr-blk"
                        style={{ marginTop: 12 }}
                    >
                        <Skeleton variant="text" width={110} height={22} />
                    </div>
                </div>
            </div>
        </div>
    );

    return (

        <div id="relatedpost-section" className="portfolio-content blog-content" ref={tabsRef}>
            <div className="container">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home">
                        <div
                            className="portfolio-imgs blog-data"

                        >
                            <h2 className="text-center mb-4">More From The Author</h2>

                            <div className="blog-container-box">
                                {loading
                                    ? Array.from({ length: 6 }).map((_, index) => (
                                        <div className="col-lg-4 col-sm-6" key={index}>
                                            <PostCardSkeleton />
                                        </div>
                                    ))
                                    : relatedpost?.map((data: any, index: any) => {
                                        // const categoryId = data?.categories.join("")
                                        return (
                                            <div
                                                className="blogItem"
                                                key={index}

                                            >
                                                <div className="card-parts-1 blog-box">
                                                    <div className="card blog-box-card">
                                                        <Link
                                                            href={`/${data?.slug}`}
                                                            onClick={() => setCategoryID(data?.categories)}

                                                        >
                                                            <img
                                                                src={data?.featured_image_url}
                                                                className="card-img-top"
                                                                alt={data?.title?.rendered || "Blog post"}
                                                            />
                                                        </Link>

                                                        <div className="card-body heading5">
                                                            <div className="calender d-flex justify-content-between">
                                                                <div className="mb-2 mb-sm-3 calender-size">
                                                                    <i className="fa-solid fa-calendar-days"></i>{" "}
                                                                    {new Date(data?.date).toLocaleDateString(
                                                                        "en-US",
                                                                        {
                                                                            year: "numeric",
                                                                            month: "long",
                                                                            day: "numeric",
                                                                        }
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <Link
                                                                href={`/${data?.slug}`}
                                                                onClick={() => setCategoryID(data?.categories)}
                                                                className="card-title mb-2 card-text-a">
                                                                {data?.title?.rendered}
                                                            </Link>

                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: data?.excerpt?.rendered,
                                                                }}
                                                            />

                                                            <Link
                                                                href={`/${data?.slug}`}
                                                                onClick={() => setCategoryID(data?.categories)}
                                                                className="d-flex align-items-center gap-2 clr-blk">
                                                                READ MORE{" "}
                                                                <i className="fa-solid fa-arrow-right-long"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>



                            {pageCount > 6 && (
                                <div className="paginationContainer">
                                    {(() => {
                                        const itemsPerPage = 6;
                                        const totalPages = Math.ceil(pageCount / itemsPerPage);
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
                                                Math.floor(
                                                    (pagenumber - visiblePageCount) / 3
                                                ) *
                                                3;
                                        }

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
                                                    aria-current={
                                                        pagenumber === page ? "page" : undefined
                                                    }
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
                                                    onClick={() =>
                                                        HandleSelectnumbox(pagenumber - 1)
                                                    }
                                                    aria-label="Previous page"
                                                >
                                                    {"<"}
                                                </button>
                                            );
                                        }

                                        // Moving group of five pages
                                        for (let page = startPage; page <= endPage; page++) {
                                            addPage(page);
                                        }

                                        // Ellipsis and final page
                                        if (endPage < totalPages) {
                                            if (endPage < totalPages - 1) {
                                                pages.push(
                                                    <span
                                                        key="pagination-dots"
                                                        className="paginationDots"
                                                    >
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
                                                    onClick={() =>
                                                        HandleSelectnumbox(pagenumber + 1)
                                                    }
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
                                                    onClick={() =>
                                                        HandleSelectnumbox(totalPages)
                                                    }
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
                </div>
            </div>
        </div>



    );
};

export default AuthorRelatedPosts;
