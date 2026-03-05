"use client";
import React, { useEffect, useState } from "react";

import useBlog from "../../../hooks/useBlog";

import { useAppDispatch } from "@/redux/hooks";
import { setStickyNavMenu } from "@/redux/slicers/menuSlicer";
import ContactFooter from "@/components/server/ContactFooter";
// import { Link as ScrollL } from "react-scroll";
import { useParams } from "next/navigation";
import Link from "next/link";
import Scroll from "@/components/client/Scroll";
import { useFormik } from "formik";
import * as Yup from "yup";

const BlogDetail = () => {
  const params = useParams();
  const id = params?.id
  console.log(id, "SLUG")

  const { getBlogdetail, getRelatedPosts } = useBlog();
  const [pageData, setPageData] = useState<any>({});
  const [relatedpost, setRelatedPost] = useState<any>([]);

  const dispatch = useAppDispatch();
  const [sideNav, setSidenav] = useState<any>([]);
  const [contentData, setContentData] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .trim()
        .email("Enter a valid email address")
        .required("Email is required"),
      phone: Yup.string()
        .trim()
        .matches(/^[0-9+\-() ]{7,20}$/, "Enter a valid phone number")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      
      console.log("Form Values:", values);
    },
  });


  useEffect(() => {
    if (pageData?.date) {
      const formatted = new Date(pageData.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setFormattedDate(formatted);
    }
  }, [pageData?.date]);






  useEffect(() => {
    dispatch(setStickyNavMenu(true));

    return () => {
      dispatch(setStickyNavMenu(false));
    };
  }, []);

  useEffect(() => {
    const getblogData = async () => {
      if (!id) return;
      const data = await getBlogdetail(id);
      setPageData(data);
    };

    getblogData();
  }, [id]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      if (!pageData?.categories) return;

      const data = await getRelatedPosts(pageData?.categories, pageData?.id);
      setRelatedPost(data);
    };
    fetchRelatedPosts();
  }, [pageData]);

  function extractH2AndInjectIds() {
    const html = pageData?.content?.rendered;
    if (!html) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const h2Elements = doc.querySelectorAll("h2");
    const headings: any = [];

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

  const HandleGotoBlogDetail = (id: any) => {
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
                    <span>{formattedDate}</span> | {pageData?.author?.name}
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
                    <div className="navListMenu" >
                      {sideNav?.map((item: any, index: any) => (
                        <div className="blogSidenavitemBox" key={index}>
                          <Scroll
                            key={index}
                            to={item.id}
                            className="blogSidenavitem p-2"
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

                    <form onSubmit={formik.handleSubmit} noValidate>
                      <div className="input-group-icon">
                        <i className="fa-solid fa-circle-user"></i>
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.name && formik.errors.name ? (
                        <small className="text-danger d-block mt-1">{formik.errors.name}</small>
                      ) : null}

                      <div className="input-group-icon">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.email && formik.errors.email ? (
                        <small className="text-danger d-block mt-1">{formik.errors.email}</small>
                      ) : null}

                      <div className="input-group-icon">
                        <i className="fa-solid fa-phone"></i>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.phone && formik.errors.phone ? (
                        <small className="text-danger d-block mt-1">{formik.errors.phone}</small>
                      ) : null}

                      <div className="mb-0 text-end pt-md-4">
                        <button type="submit" className="btn btn-primary orange-1">
                          SUBMIT NOW <i className="fa-solid fa-arrow-right-long"></i>
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
                    href={`/author/${pageData?.author?.id}/${pageData?.categories}`}
                  >
                    <img
                      src={pageData?.author?.avatar_urls?.[96]}
                      alt={pageData?.author?.name}
                    />
                    <div>
                      <h3>{pageData?.author?.name}</h3>
                      <p>{pageData?.author?.description}</p>
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
                  {relatedpost?.map((data: any, index: any) => {
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
                              href={`/blog/${data?.id}`}
                              className="card-title mb-2 card-text-a">
                              {data?.title?.rendered}
                            </Link>

                            <div
                              dangerouslySetInnerHTML={{
                                __html: data?.excerpt?.rendered,
                              }}
                            />

                            <Link
                              href={`/blog/${data?.id}`}
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
