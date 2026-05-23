"use client"
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
import ShowNav from "@/components/client/ShowNav";


type CategoryClientProps = {
    slug: string;
};


const CategoryClient = ({ slug }: CategoryClientProps) => {


    const { getBlogItems, loading, getBlogCategories } = useBlog();
    const dispatch = useDispatch()


    const tabsRef = useRef<HTMLDivElement | null>(null);
    const [pageCount, setPageCount] = useState<any>(null)
    const [scroll, setScroll] = useState(true)


    const [blogItems, setBlogItems] = useState<any>([]);
    const [pagenumber, setPageNumber] = useState<any>(1);

    const [categoryloading, setCategoryLoading] = useState(false)
    const [categoryid, setCategoryid] = useState<any>()

    useEffect(() => {
        const getPageData = async () => {
            setCategoryLoading(true)
            const data = await getBlogCategories();
            console.log(data, "DATA")
            for (let i in data) {
                console.log(data[i].slug)
                if (data[i].slug == slug) setCategoryid(data[i].id)
            }

            setCategoryLoading(false)
        };

        getPageData();
    }, [slug]);


    useEffect(() => {
        if (!categoryid) return

        const getblogitems = async () => {
            const params = new URLSearchParams({
                per_page: "6",
                page: String(pagenumber),
            });

            params.append("categories", categoryid);

            const res: any = await getBlogItems(params);
            setBlogItems(res.data);
            setPageCount(res.totalPosts)
        };

        getblogitems();
    }, [pagenumber, categoryid]);




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


    const showNoData = !loading && !categoryloading && blogItems?.length === 0;
    return (
        <div>
            <ShowNav />
            <div style={{ marginTop: "90px" }} />
            <div className="default-img flex justify-center items-center" style={{ background: "darkblue" }}>
                <div className="banner-img" >
                    <div className="container">
                        <div className="banner-caption category-banner-sec" style={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h2>Categories</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-content mt-10  d-flex justify-center" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    <div className="portfolio-imgs blog-data " id="content-section">
                        <div className="blog-container-box" id="jar1">
                            {loading || categoryloading ? (
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
    )
}

export default CategoryClient
