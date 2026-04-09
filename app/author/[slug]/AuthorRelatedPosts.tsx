"use client"
import React, { useState } from "react";

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
    const { categoryId, pageCount } = useAppSelector(state => state.id)
    const [loading, setLoading] = useState(false)
    const [relatedpost, setRelatedpost] = useState<any>([])
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState<number>(1)

    useEffect(() => {
        const getposts = async () => {
            setLoading(true)
            const params : any = {
                categories: categoryId,
                exclude: String(id),
                per_page: "6",
                page: String(pageNumber),
            };
            const data = await getRelatedPosts(params)
            setRelatedpost(data)
            setLoading(false)
        }
        getposts()

    }, [categoryId,pageNumber])


    const setCategoryID = (id: any) => {
        dispatch(setCategoryId(id))
    }

    const HandleSelectnumbox = (num: number) => {
        setPageNumber(num);
      };
    



    const PostCardSkeleton = () => (
        <div className="card-parts-1">
            <div className="card">
                {/* Image */}
                <Skeleton variant="rectangular" width="100%" height={220} />

                <div className="card-body heading5">
                    {/* Date row */}
                    <div className="calender d-flex justify-content-between">
                        <div className="mb-2 mb-sm-3 calender-size">
                            <Skeleton variant="text" width={140} height={22} />
                        </div>
                    </div>

                    {/* Title */}
                    <Skeleton variant="text" width="90%" height={28} />
                    <Skeleton variant="text" width="70%" height={28} />

                    {/* Excerpt (2–3 lines) */}
                    <Skeleton variant="text" width="100%" height={20} />
                    <Skeleton variant="text" width="95%" height={20} />
                    <Skeleton variant="text" width="80%" height={20} />

                    {/* Read more */}
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
            <div className="portfolio-content blog-content">
                <div className="container">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home">
                            <div
                                className="portfolio-imgs blog-data"
                                style={{ width: "90vw" }}
                            >
                                <h2 className="text-center mb-4">More From The AuthorRelatedPosts</h2>

                                <div className="row gy-4">
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
                                                    className="col-lg-4 col-sm-6"
                                                    key={index}
                                                    style={{ cursor: "pointer" }}
                                                // onClick={() => {
                                                //     navigate(`/blog/${data?.title?.rendered}`, {
                                                //         state: { id: data?.id, categoryId }
                                                //     });
                                                // }}
                                                >
                                                    <div className="card-parts-1">
                                                        <div className="card">
                                                            <Link
                                                                href={`/blog/${data?.slug}`}
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
                                                                    href={`/blog/${data?.slug}`}
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
                                                                    href={`/blog/${data?.slug}`}
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
                                                pageNumber <= 4 ? 4 : Math.min(pageNumber, totalPages);

                                            pages.push(
                                                <div
                                                    key="prev"
                                                    className="paginationbox prev size-10"
                                                    onClick={() => pageNumber > 1 && HandleSelectnumbox(pageNumber - 1)}
                                                >
                                                    Prev
                                                </div>
                                            );

                                            for (let i = 1; i <= visiblePages; i++) {
                                                pages.push(
                                                    <div
                                                        key={i}
                                                        className={pageNumber === i ? "paginationactive" : "paginationbox"}
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
                                                            className={pageNumber === i ? "paginationactive" : "paginationbox"}
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
                                                        pageNumber < totalPages && HandleSelectnumbox(pageNumber + 1)
                                                    }
                                                >
                                                    Next
                                                </div>
                                            );

                                            return pages;
                                        })()}
                                    </div>
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    );
};

export default AuthorRelatedPosts;
