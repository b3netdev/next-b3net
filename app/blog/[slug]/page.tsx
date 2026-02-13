"use client";
import React, { useEffect, useState } from "react";

import useBlog from "../../../hooks/useBlog";

import { useAppDispatch } from "@/redux/hooks";
import { setStickyNavMenu   } from "@/redux/slicers/menuSlicer";
import ContactFooter from "@/components/server/ContactFooter";
// import { Link as ScrollL } from "react-scroll";
import { useParams } from "next/navigation";
import Link from "next/link";
import Scroll from "@/components/client/Scroll";

const BlogDetail = () => {
      const params = useParams();
  const slug = params?.slug as string;

  const { getBlogdetail, getRelatedPosts } = useBlog();
  const [pageData, setPageData] = useState<any>({});
  const [relatedpost, setRelatedPost] = useState([]);

  const dispatch = useAppDispatch();
  const [sideNav, setSidenav] = useState([]);
  const [contentData, setContentData] = useState("");


  useEffect(() => {
    dispatch(setStickyNavMenu(true));

    return () => {
      dispatch(setStickyNavMenu(false));
    };
  }, []);

  useEffect(() => {
    const getblogData = async () => {
      if (!slug) return;
      const data = await getBlogdetail(slug);
      setPageData(data);
    };

    getblogData();
  }, [slug]);

//   useEffect(() => {
//     const fetchRelatedPosts = async () => {
//       if (!categoryId) return;

//       const data = await getRelatedPosts();
//       setRelatedPost(data);
//     };
//     fetchRelatedPosts();
//   }, [categoryId, id]);

  function extractH2AndInjectIds() {
    const html = pageData?.content?.rendered || "";
    if (!html) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const h2Elements = doc.querySelectorAll("h2");
    const headings = [];

    h2Elements.forEach((h2, index) => {
      const id = `h2-${index}`;
      h2.setAttribute("id", id);

      headings.push({
        id,
        text: (h2.textContent || "").trim(),
      });
    });

    setSidenav(headings);
    setContentData(doc.body.innerHTML);
  }

  useEffect(() => {
    extractH2AndInjectIds();
  }, [pageData]);

  const HandleGotoBlogDetail = (id) => {
    // navigate(`/blog/${id}`, {
    //   state: { id: id, category: categoryId },
    // });
  };

  return (
    <main className="page_content">
      <div className="portfolio-detail portfoli-padd portfolio-page-1 blog-details">
        {/* Landing */}
        <div className="port-landing-wrap details-page-1">
          <div className="menu-design"></div>

          <div className="banner-img">
            <div className="container">
              <div className="row gy-4 d-flex align-items-center justify-content-center">
                <div className="col-md-6 pe-md-5">
                  <img src={pageData?.featured_image_url} alt="" />
                </div>

                <div className="col-md-6 mt-4 mt-md-0">
                  <h1>{pageData?.title?.rendered}</h1>

                  <h4>
                    <span> </span> | | <i className="fa-solid fa-comment"></i>
                  </h4>

                  <h4>
                    <span>May 21, 2025 </span> | Sarah Clark
                  </h4>

                  <div className="icones"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="blog-detalis-content py-0 pt-4 pt-lg-0 py-lg-5">
          <div className="container">
            <div className="row gy-5">
              {/* Sidebar */}
              <div className="col-lg-4 col-xl-3">
                <div id="blog-sidebar" className="sidebar">
                  {/* side menu  */}
                  {/* <div className="col-lg-8 col-xl-9"> */}
                  <div className="newsletter-blog">
                    <div className="toc-text">
                      <h3>Table of Contents</h3>
                    </div>
                    <div className="navListMenu" style={{padding:0}}> 
                      {sideNav?.map((item, index) => (
                        <div className="blogSidenavitemBox">
                          <Scroll
                            key={item.id || index}
                            to={item.id}
                            className="blogSidenavitem"
                          >
                            {item.text}
                          </Scroll>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* </div> */}

                  <div className="newsletter-blog">
                    <h3>Join Our Newsletter</h3>

                    <form>
                      <div className="input-group-icon">
                        <i className="fa-solid fa-circle-user"></i>
                        <input type="text" placeholder="Name" />
                      </div>

                      <div className="input-group-icon">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Email Address" />
                      </div>

                      <div className="input-group-icon">
                        <i className="fa-solid fa-phone"></i>
                        <input type="tel" placeholder="Phone Number" />
                      </div>

                      <div className="mb-0 text-end pt-md-4">
                        <button
                          type="submit"
                          className="btn btn-primary orange-1"
                        >
                          SUBMIT NOW{" "}
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="solutions">
                    <h3>Explore Our Solutions</h3>
                    <p>
                      From stunning websites to smart AI solutions and
                      top-ranking SEO — we bring your vision to life.
                    </p>
                    <div className="mb-0 text-center pt-md-4 aos-init aos-animate">
                      <Link
                        href="/"
                        className="btn btn-primary orange-1"
                      >
                        VIEW ALL SOLUTIONS{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 col-xl-9">
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentData,
                  }}
                />
                <div className="blog-details-social-icons my-4">
                  <h3>Share With Friends</h3>
                  <div className="social-icons">
                    <ul className="d-flex align-items-center justify-content-start">
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="author-section">
                  <Link
                  href={"/"}
                    // to={`/author/${pageData?._embedded?.author?.[0]?.slug}`}
                    // state={{ id: pageData?._embedded?.author?.[0]?.id }}
                  >
                    <img
                      src={pageData?._embedded?.author?.[0]?.mpp_avatar?.[96]}
                      alt="Sarah Clark"
                    />
                    <div>
                      <h3>{pageData?._embedded?.author?.[0]?.name}</h3>
                      <p>{pageData?._embedded?.author?.[0]?.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* related post  */}
        <div className="blog-details-bottom">
          <div className="portfolio-imgs blog-data pb-4">
            <div className="container">
              <h2 className="text-center mb-4 mb-lg-5">RELATED POST</h2>
              <div className="row gy-4">
                <div className="relatedpostcontainer">
                  {relatedpost?.map((data, index) => {
                    return (
                      <div
                        className="card-parts-1"
                        key={data?.id || index}
                        onClick={() => HandleGotoBlogDetail(data?.id)}
                      >
                        <div className="card">
                          <img
                            src={data?.featured_image_url}
                            className="card-img-top"
                            alt="What Makes Motion UI An Emerging Web Development Trend Now?"
                          />

                          <div className="card-body heading5">
                            <div className="calender d-flex justify-content-between">
                              <div className="mb-2 mb-sm-3 calender-size">
                                <i className="fa-solid fa-calendar-days"></i>
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
                            href="/"
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactFooter />
      </div>
    </main>
  );
};

export default BlogDetail;
