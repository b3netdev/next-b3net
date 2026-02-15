"use client"
import React, { useState } from "react";

import { useEffect } from "react";
import useBlog from "@/hooks/useBlog";
import { useAppDispatch } from "@/redux/hooks";

import ContactFooter from "@/components/server/ContactFooter";
;
import Skeleton from "@mui/material/Skeleton";
import Link from "next/link";
import { setStickyNavMenu } from '@/redux/slicers/menuSlicer';

const Author = (slug: any) => {

    console.log(slug, "SLUG")

    const { authorDetails, loading } = useBlog();
    const [authorData, setauthorData] = useState({});
    const [relatedpost, setRelatedPost] = useState([]);



    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setStickyNavMenu(true));

        return () => {
            dispatch(setStickyNavMenu(false));
        };
    }, []);

    useEffect(() => {
        const getAuthorData = async () => {
            const data = await authorDetails(slug);
            setauthorData(data);
            // const authorposts = await getAuthorposts(id);
            // setRelatedPost(authorposts);
        };
        getAuthorData();
    }, [slug]);

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
        <main className="page_content">
            <div className="portfolio-page blog">
                <div className="bg-color-part">
                    <div className="blog-about author-blog">
                        <div className="container">
                            <div className="row gy-4 justify-content-center align-items-center">
                                <div className="col-12 txt-part">
                                    <div className="left-side">
                                        <div className="blog-about-img">
                                            <img
                                                width={150}
                                                height={150}
                                                src={authorData?.mpp_avatar?.full}
                                                className="avatar avatar-150 photo"
                                                alt=""
                                                decoding="async"
                                                sizes="(max-width: 150px) 100vw, 150px"
                                            />
                                        </div>

                                        <h1>{authorData?.name}</h1>

                                        <p>{authorData?.description}</p>

                                        <div
                                            className="mb-0 text-start pt-md-4 aos-init aos-animate"
                                            data-aos="fade-up"
                                            data-aos-duration="800"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-content blog-content">
                <div className="container">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home">
                            <div
                                className="portfolio-imgs blog-data"
                                style={{ width: "90vw" }}
                            >
                                <h2 className="text-center mb-4">More From The Author</h2>

                                <div className="row gy-4">
                                    {loading
                                        ? Array.from({ length: 6 }).map((_, index) => (
                                            <div className="col-lg-4 col-sm-6" key={index}>
                                                <PostCardSkeleton />
                                            </div>
                                        ))
                                        : relatedpost?.map((data, index) => {
                                            const categoryId = data?.categories.join("")
                                            return (
                                                <div
                                                    className="col-lg-4 col-sm-6"
                                                    key={index}
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                        navigate(`/blog/${data?.title?.rendered}`, {
                                                            state: { id: data?.id, categoryId }
                                                        });
                                                    }}
                                                >
                                                    <div className="card-parts-1">
                                                        <div className="card">
                                                            <img
                                                                src={data?.featured_image_url}
                                                                className="card-img-top"
                                                                alt={data?.title?.rendered || "Blog post"}
                                                            />

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
                                                                    href={"/"}
                                                                    className="card-title mb-2 card-text-a">
                                                                    {data?.title?.rendered}
                                                                </Link>

                                                                <div
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: data?.excerpt?.rendered,
                                                                    }}
                                                                />

                                                                <Link
                                                                    href={"/"}
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

                                <div className="pagination-cstms">
                                    <span aria-current="page" className="page-numbers current">
                                        1
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactFooter />
        </main>
    );
};

export default Author;
