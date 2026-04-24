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
        if (relatedpost?.length > 0 && tabsRef?.current) {
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
    }, [relatedpost]);



    const setCategoryID = (id: any) => {
        dispatch(setCategoryId(id))
    }

    const HandleSelectnumbox = (num: number) => {
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
        <div >
            <div className="portfolio-content blog-content" ref={tabsRef}>
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


                                {/* {pageCount > 6 && (
                                    <div className="paginationContainer">
                                        {(() => {
                                            const totalPages = Math.ceil(pageCount / 6) || 0;
                                            const pages = [];

                                            const visiblePages =
                                                pagenumber <= 4 ? 4 : Math.min(pagenumber, totalPages);

                                            pages.push(
                                                <div
                                                    key="prev"
                                                    className="paginationbox prev size-10"
                                                    onClick={() => pagenumber > 1 && HandleSelectnumbox(pagenumber - 1)}
                                                >
                                                    Prev
                                                </div>
                                            );

                                            for (let i = 1; i <= visiblePages; i++) {
                                                pages.push(
                                                    <div
                                                        key={i}
                                                        className={pagenumber === i ? "paginationactive" : "paginationbox"}
                                                        onClick={() => HandleSelectnumbox(i)}
                                                    >
                                                        {i}
                                                    </div>
                                                );
                                            }

                                            if (visiblePages < totalPages - 2) {
                                                pages.push(
                                                    <div key="dots" className="paginationbox">
                                                        ...
                                                    </div>
                                                );

                                                for (let i = totalPages - 1; i <= totalPages; i++) {
                                                    pages.push(
                                                        <div
                                                            key={i}
                                                            className={pagenumber === i ? "paginationactive" : "paginationbox"}
                                                            onClick={() => HandleSelectnumbox(i)}
                                                        >
                                                            {i}
                                                        </div>
                                                    );
                                                }
                                            }

                                            pages.push(
                                                <div
                                                    key="next"
                                                    className="paginationbox prev"
                                                    onClick={() =>
                                                        pagenumber < totalPages && HandleSelectnumbox(pagenumber + 1)
                                                    }
                                                >
                                                    Next
                                                </div>
                                            );

                                            return pages;
                                        })()}
                                    </div>
                                )} */}

                                {pageCount > 6 && (
                                    <div className="paginationContainer">
                                        {(() => {
                                            const totalPages = Math.ceil(pageCount / 6) || 0;
                                            const pages = [];

                                            const addPage = (i: any) => {
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
                        </div>
                    </div>
                </div>
            </div>

        </div >

    );
};

export default AuthorRelatedPosts;
