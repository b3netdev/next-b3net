import {
  getportfoliodetail,
  getPortFloioRelatedPost,
} from "@/lib/getdata";
import Link from "next/link";
import Contact from "@/components/client/Contact";
import ShowNav from "@/components/client/ShowNav";
import Expertise from "@/components/server/Expertise";
import StructuredData from "@/components/server/StructuredData";
import { cache } from "react";
import type { Metadata } from "next";
import {
  buildMetadata,
  getSchemaFromPageData,
  getSeoFromPageData,
} from "@/lib/seo";
import { BASE_URL } from "@/lib/url";
import { redirect } from "next/navigation";

type PortfolioPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function isInvalidSlug(value: unknown): boolean {
  if (typeof value !== "string") return true;

  let slug: string;

  try {
    slug = decodeURIComponent(value).trim().toLowerCase();
  } catch {
    return true;
  }

  return (
    !slug ||
    ["undefined", "null", "false", "nan"].includes(slug)
  );
}

const getPortfolioPageData = cache(async (slug: string) => {
  // No API call for reserved invalid values.
  if (isInvalidSlug(slug)) {
    return null;
  }

  try {
    const data = await getportfoliodetail(slug);
    const pageData = data?.page ?? data;

    return pageData?.id ? pageData : null;
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Fetch error 404")
    ) {
      return null;
    }

    throw error;
  }
});

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isInvalidSlug(slug)) {
    redirect("/portfolio");
  }

  const pageData = await getPortfolioPageData(slug);

  if (!pageData) {
    redirect("/portfolio");
  }

  return buildMetadata(getSeoFromPageData(pageData));
}

const PortfolioDetailPage = async ({
  params,
}: PortfolioPageProps) => {
  const { slug } = await params;

  if (isInvalidSlug(slug)) {
    redirect("/portfolio");
  }

  const pageData = await getPortfolioPageData(slug);

  if (!pageData) {
    redirect("/portfolio");
  }

  const schemaData = getSchemaFromPageData(pageData);

  const relatedpost = await getPortFloioRelatedPost(
    pageData.portfolio_category,
    pageData.id
  );

  return (
    <main className="page_content">
      <StructuredData data={schemaData} />

      <ShowNav />
            <div className="portfolio-detail portfoli-padd portfolio-page-1">
                <div className="port-landing-wrap details-page">
                    <div className="menu-design"></div>
                    <div className="banner-img">
                        <img
                            src={`${BASE_URL}/wp-content/themes/b3net/assets/images/portfolio/port-details-banner.jpg`}
                            alt="banner-img"
                        />
                        <div className="container">
                            <div className="banner-caption">
                                <h2 className="!text-3xl">{pageData?.title?.rendered}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="breadcrum my-3 my-sm-4 my-lg-5">
                    <div className="container">
                        <nav aria-label="breadcrumb ">
                            <ol className="breadcrumb d-flex align-items-center ">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item " aria-current="page">
                                    portfolio
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    portfolio-details
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="portfolio-details-page">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-6 pe-4">
                                <div className="about-img owl-carousel owl-theme">
                                    <div className="item">
                                        <img
                                            src={pageData?.featured_media_url}
                                            className="img-fluid"
                                            alt="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="heading5 services-flexiable-width  ">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: pageData?.content || "",
                                        }}
                                    />

                                    <Link
                                        href="/request-for-proposal"
                                        className="custom-button mt-4"
                                    >
                                        Let’s Get Started{" "}
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-details-page-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8  text-start">
                                <div className="heading1">
                                    <h2 className="text-anime-style-3">
                                        Some Other Projects You May Like to View
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-10">
                            <div className="row g-4 mx-0">
                                {relatedpost?.map((item: any, index: any) => (
                                    <div
                                        key={item?.id || index}
                                        className="col-12 col-sm-6 col-lg-3"
                                    >
                                        <div className="portfolio-list h-100">
                                            <div className="image reveal">
                                                <Link
                                                    href={`/portfolio/${item?.slug}`}
                                                    className="d-block">
                                                    <img
                                                        src={item?.featured_media_url || item?.image || ""}
                                                        className="img-fluid w-100"
                                                        alt={item?.title?.rendered || ""}
                                                    />
                                                </Link>
                                            </div>

                                            <div className="portfolio-details d-flex align-items-center justify-content-between py-4 px-3">
                                                <Link
                                                    href={`/portfolio/${item?.slug}`}

                                                    className="text-truncate"
                                                    style={{ maxWidth: "calc(100% - 28px)" }}
                                                >
                                                    {item?.title?.rendered}{" "}

                                                </Link>

                                                <i className="fa-regular fa-heart flex-shrink-0"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space60"></div>
                    </div>
                </div>


                <Expertise />

                <section className="contact-sec sp py-5">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 text-center">
                                <div className="heading-title">
                                    <p
                                        className="title aos-init aos-animate"
                                        data-aos="fade-left"
                                        data-aos-duration="800"
                                    >
                                        Request for a Service
                                    </p>
                                    <h2>
                                        GET YOUR FREE CONSULTATION
                                        <span>+ PROPOSAL</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Contact data={true} />
                </section>
            </div>
    </main>
  );
};

export default PortfolioDetailPage;