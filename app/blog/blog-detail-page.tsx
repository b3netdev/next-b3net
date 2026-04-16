import { GetRelatedPost, getBlogdetail } from "@/lib/getdata";
import Link from "next/link";
import ShowNav from "@/components/client/ShowNav";
import { load } from "cheerio";
import { cache } from "react";
import { notFound } from "next/navigation";
import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from "@/lib/seo";
import { Metadata } from "next";
import StructuredData from "@/components/server/StructuredData";
import ScrollLink from "@/components/client/ScrollLink";




const getBlogPageData = cache(async (slug: string) => {

  const data = await getBlogdetail(slug);
  return data[0];
});

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const pageData = await getBlogPageData(slug);
  const seo = getSeoFromPageData(pageData);

  return buildMetadata(seo);
}


const BlogDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const pageData = await getBlogPageData(slug)

  if (!pageData) notFound();

  const schemaData = getSchemaFromPageData(pageData);


  const authordata = pageData?._embedded?.author[0]

  const relatedpost = await GetRelatedPost(
    pageData?.categories,
    pageData?.id
  );


  const formattedDate = pageData?.date
    ? new Date(pageData.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : "";

  let sideNav: { id: string; text: string }[] = [];
  let contentData = pageData?.content?.rendered || "";

  if (contentData) {
    const $ = load(contentData);

    $("h2, h3").each((index, el) => {
      const tag = "toc";
      const id = `${tag}-${index}`;

      $(el).attr("id", id);

      sideNav.push({
        id,
        text: $(el).text().trim(),
      });
    });

    contentData = $.html();
  }

  return (
    <>
      <ShowNav />
      <StructuredData data={schemaData} />

      <div className="portfolio-detail portfoli-padd portfolio-page-1 blog-details">
        <div className="port-landing-wrap details-page-1">
          <div className="menu-design"></div>
          <div className="banner-img">
            <div className="container">
              <div className="row gy-4 d-flex align-items-center justify-content-center">
                <div className="col-md-6 pe-md-5">
                  <img
                    src={pageData?.featured_image_url}
                    alt={pageData?.title?.rendered || ""}
                  />
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <h1>{pageData?.title?.rendered}</h1>
                  <h4>
                    <span>{formattedDate}</span>
                    {authordata?.name ? ` | ${authordata.name}` : ""}
                  </h4>
                  <div className="icones"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-detalis-content py-0 pt-4 pt-lg-0 py-lg-5">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-4 col-xl-3">
                <div id="blog-sidebar" className="sidebar">
                  <div className="newsletter-blog">
                    <div className="toc-text">
                      <h3>Table of Contents</h3>
                    </div>


                    <div className="navListMenu">
                      {sideNav?.map((item, index) => (
                        <div className="blogSidenavitemBox" key={index}>
                          <ScrollLink targetId={`${item.id}`} className="blogSidenavitem primary-bodyText p-2">
                            {item.text}
                          </ScrollLink>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className="newsletter-blog">
                    <h3>Join Our Newsletter</h3>
                    <BlogDetailForm />
                  </div> */}

                  <div className="solutions">
                    <h3>Explore Our Solutions</h3>
                    <p>
                      From stunning websites to smart AI solutions and
                      top-ranking SEO — we bring your vision to life.
                    </p>
                    <div className="mb-0 text-center pt-md-4 aos-init aos-animate">
                      <Link href="/" className="btn btn-primary orange-1">
                        VIEW ALL SOLUTIONS{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 col-xl-9">

                <div
                  className="blog-container primary-bodyText"
                  dangerouslySetInnerHTML={{
                    __html: contentData,
                  }}
                />


                <div className="blog-details-social-icons my-4">
                  <h3>Share With Friends</h3>
                  <div className="social-icons">
                    <ul className="d-flex align-items-center justify-content-start">
                      <li>
                        <a href="https://www.linkedin.com/company/b3net-inc/" target="_blank">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/b3net" target="_blank">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/B3NET" target="_blank">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>


                <div className="author-section">
                  <Link href={`/author/${authordata?.slug}`}>
                    <img
                      src={authordata?.mpp_avatar?.[96]}
                      alt={authordata?.name}
                    />
                    <div>
                      <h3>{authordata?.name}</h3>
                      <p>{authordata?.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-details-bottom">
          <div className="portfolio-imgs blog-data pb-4">
            <div className="container">
              <h2 className="text-center mb-4 mb-lg-5">RELATED POST</h2>
              <div className="row gy-4">
                <div className="relatedpostcontainer">
                  {relatedpost?.map((data: any, index: number) => {
                    return (
                      <div className="card-parts-1" key={data?.id || index}>
                        <div className="card">
                          <img
                            src={data?.featured_image_url}
                            className="card-img-top"
                            alt={data?.title?.rendered || ""}
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
                              href={`/${data?.slug}`}
                              className="card-title mb-2 card-text-a"
                            >
                              <span className="text-[#3b58a2] font-extrabold">
                                {data?.title?.rendered}
                              </span>
                            </Link>

                            <div
                              dangerouslySetInnerHTML={{
                                __html: data?.excerpt?.rendered || " ",
                              }}
                            />

                            <Link
                              href={`/${data?.slug}`}
                              className="d-flex align-items-center gap-2 clr-blk"
                            >
                              <span className="font-extrabold hover:text-[#f15a29]!">
                                READ MORE
                              </span>
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
      </div>
    </>
  );
};

export default BlogDetail;
