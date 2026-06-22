import Link from "next/link";
import { GetPageData, GetRelatedPost } from "@/lib/getdata";
import NewsletterForm from "./[slug]/NewsletterForm";
import ShowNav from "@/components/client/ShowNav";
import { BASE_URL } from "@/lib/url";
import { cache } from "react";
import { Metadata } from "next";
import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from "@/lib/seo";
import StructuredData from "@/components/server/StructuredData";
import { notFound } from "next/navigation";

const sluglist = [
  {
    slug: "website-not-generating-leads-how-to-fix-it",
  },
  {
    slug: "7-reasons-why-your-website-is-not-showing-up-how-to-fix-it",
  },
  {
    slug: "9-reasons-why-my-website-traffic-not-converting",
  },
  {
    slug: "website-not-making-sales",
  },
];

const VALID_WESOLVE_SLUGS = new Set(sluglist.map((item) => item.slug));

export function isWesolveSlug(slug: string) {
  return VALID_WESOLVE_SLUGS.has(slug);
}

const getBlogPageData = cache(async (slug: string) => {
  const data = await GetPageData(slug, "post");
  return data?.page ?? data;
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const pageData = await getBlogPageData(slug);

  if (!pageData) {
    notFound();
  }

  const seo = getSeoFromPageData(pageData);
  return buildMetadata(seo);
}

export async function generateStaticParams() {
  return sluglist.map((item) => ({
    slug: item.slug,
  }));
}

export default async function WesolveDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  if (!isWesolveSlug(slug)) {
    notFound();
  }

  const pageData = await getBlogPageData(slug);

  if (!pageData) {
    notFound();
  }

  const schemaData = getSchemaFromPageData(pageData);
  const author = pageData?.author;
  const authorSlug = author?.name?.split(" ")?.[0]?.toLowerCase();
  const relatedPosts = await GetRelatedPost(pageData?.categories, pageData?.id);



  return (
    <main className="page_content wesolveSub">
      <StructuredData data={schemaData} />
      <ShowNav />
      <div className="portfolio-detail portfoli-padd portfolio-page-1 blog-details">
        <div className="port-landing-wrap details-page-1">
          <div className="menu-design"></div>

          <div className="banner-img">
            <div className="container">
              <div className="row gy-4 d-flex align-items-center justify-content-center">
                <div className="col-md-6 pe-md-5">
                  <img
                    src={`${BASE_URL}/wp-content/uploads/2023/07/B3NET-Blog-Banner-11.jpg`}
                    alt="B3NET-Blog-Banner-11"
                  />
                </div>

                <div className="col-md-6 mt-4 mt-md-0">
                  <h1>{pageData?.title?.rendered}</h1>

                  <h4>
                    <span>
                      {new Date(pageData?.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>{" "}
                    {author?.name && <>| {author.name}</>}
                  </h4>
                </div>
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
                {/* <NewsletterForm /> */}

                <div className="solutions">
                  <h3>Explore Our Solutions</h3>
                  <p style={{ color: "white" }}>
                    From stunning websites to smart AI solutions and top-ranking SEO - we bring your
                    vision to life.
                  </p>

                  <div className="mb-0 text-center pt-md-4" style={{ marginBottom: "20px" }}>
                    <Link href="/services" className="btn btn-primary orange-1">
                      VIEW ALL SOLUTIONS <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-xl-9">
              <div className="blog-container">
                <div
                  className="primary-bodyText wesolve-container"
                  dangerouslySetInnerHTML={{
                    __html: pageData?.content || "",
                  }}
                />
              </div>

              <div className="blog-details-social-icons my-4">
                <h3>Share With Friends</h3>
                <div className="social-icons">
                  <ul className="d-flex align-items-center justify-content-start">
                    <li>
                      <a href="https://www.linkedin.com/company/b3net-inc/"  target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/b3net"   target="_blank">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/B3NET"  target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {author && (
                <div className="author-section">
                  <Link href={`/author/${authorSlug}`}>
                    <img src={author?.avatar_urls?.[256] || ""} alt={author?.name} />
                    <div>
                      <h3>{author?.name}</h3>
                      <p className="primary-bodyText">{author?.description}</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div className="blog-details-bottom">
              <div className="portfolio-imgs blog-data pb-4">
                <div className="container">
                  <h2 className="text-center mb-4 mb-lg-5">RELATED POST</h2>

                  <div className="row gy-4">
                    {relatedPosts?.map((post: any) => (
                      <div className="col-lg-4 col-sm-6" key={post.id}>
                        <div className="card-parts-1">
                          <div className="card">
                            <img src={post.featured_image_url} className="card-img-top" alt="featured_image_url" />

                            <div className="card-body heading5">
                              <div className="calender d-flex justify-content-between">
                                <div className="mb-2 mb-sm-3 calender-size">
                                  <i className="fa-solid fa-calendar-days"></i>{" "}
                                  {new Date(post?.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </div>
                              </div>

                              <Link
                                href={`/${post?.slug}`}
                                className="card-title mb-2 card-text-a"
                                style={{ color: "#3b58a2" }}
                              >
                                <span className="font-bold">{post.title?.rendered}</span>
                              </Link>

                              <div
                              className="primary-bodyText"
                               dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }} />

                              <Link href={`/${post?.slug}`} className="d-flex align-items-center gap-2 clr-blk">
                                READ MORE <i className="fa-solid fa-arrow-right-long"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
