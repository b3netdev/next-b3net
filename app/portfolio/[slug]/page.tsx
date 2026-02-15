import { getportfoliodetail, getPortFloioRelatedPost } from "@/lib/getdata";
import Link from "next/link";
const page = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params
    const pageData = await getportfoliodetail(slug)
    const relatedpost = await getPortFloioRelatedPost(pageData?.portfolio_category, slug)
    console.log(relatedpost, "PAGE DATA")

    const expertiseData = [
        {
            title: "Real Estate",
            image:
                "https://b3net.com/wp-content/themes/b3net/assets/images/expertise-img-1.jpg",
            description:
                "SEO-driven websites for realtors, brokers, and property managers to attract buyers, sellers, and investors effortlessly.",
            link: "https://b3net.com/request-for-proposal.html",
        },
        {
            title: "Financial Services",
            image:
                "https://b3net.com/wp-content/themes/b3net/assets/images/expertise-img-2.jpg",
            description:
                "Custom web solutions for insurance agencies, notaries, and financial institutions to enhance credibility and client acquisition.",
            link: "https://b3net.com/request-for-proposal.html",
        },
        {
            title: "Medical & Healthcare",
            image:
                "https://b3net.com/wp-content/themes/b3net/assets/images/expertise-img-3.jpg",
            description:
                "HIPAA-compliant, fast, and SEO-friendly websites for clinics, hospitals, and healthcare providers to improve patient engagement.",
            link: "https://b3net.com/request-for-proposal.html",
        },
        {
            title: "Small Businesses",
            image:
                "https://b3net.com/wp-content/themes/b3net/assets/images/expertise-img-4.jpg",
            description:
                "Affordable, high-performing websites designed to help small businesses grow, attract customers, and increase online visibility.",
            link: "https://b3net.com/request-for-proposal.html",
        },
        {
            title: "Automotive",
            image:
                "https://b3net.com/wp-content/themes/b3net/assets/images/expertise-img-5.jpg",
            description:
                "Custom automotive websites with SEO and e-commerce features to help dealerships, repair shops, and auto parts businesses thrive.",
            link: "https://b3net.com/request-for-proposal.html",
        },
        {
            title: "Professional Service",
            image:
                "https://b3net.com/wp-content/themes/b3net/assets/images/expertise-img-6.jpg",
            description:
                "Sleek, conversion-focused websites for lawyers, consultants, and agencies to showcase expertise and attract more clients.",
            link: "https://b3net.com/request-for-proposal.html",
        },
    ];

    return (
        <main className="page_content">
            <div className="portfolio-detail portfoli-padd portfolio-page-1">
                <div className="port-landing-wrap details-page">
                    <div className="menu-design"></div>
                    <div className="banner-img">
                        <img
                            src="https://b3net.com/wp-content/themes/b3net/assets/images/portfolio/port-details-banner.jpg"
                            alt=""
                        />
                        <div className="container">
                            <div className="banner-caption">
                                <h2>{pageData?.title?.rendered}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="breadcrum my-3 my-sm-4 my-lg-5">
                    <div className="container">
                        <nav aria-label="breadcrumb ">
                            <ol className="breadcrumb d-flex align-items-center ">
                                <li className="breadcrumb-item">
                                    <a href="https://b3net.com">Home</a>
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
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="heading5 services-flexiable-width  ">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: pageData?.content?.rendered,
                                        }}
                                    />

                                    <Link
                                        href="/proposal"
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
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="row g-4 mx-0">
                                {relatedpost?.map((item: any, index: any) => (
                                    <div
                                        key={item?.id || index}
                                        className="col-12 col-sm-6 col-lg-3"
                                    >
                                        <div className="portfolio-list h-100">
                                            <div className="image reveal">
                                                <Link
                                                    href={`/portfolio/${item?.id}`}
                                                    // state={{ id: item?.id, categoryId }}
                                                    // href={item?.link || "#"}

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
                                                    href={`/portfolio/${item?.id}`}
                                                    // state={{ id: item?.id, categoryId }}
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

                {/* common box  */}
                <div className="expertise-service sp pb-0 new-gap">
                    <div className="container">
                        <div className="row mb-4 mb-md-5">
                            <div className="col-lg-12 text-center">
                                <div className="heading-title">
                                    <h2>
                                        Our Digital Expertise Across
                                        <span> Industries </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-sec-images solutions-list-images expertise-list-images">
                        <div
                            className="row m-0 align-items-center"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            {expertiseData.map((item, index) => (
                                <div className="col-lg-4 col-md-6 p-0" key={index}>
                                    <div className="portfolio-list">
                                        <div className="image image-anime reveal">
                                            <a href={item.link}>
                                                <img src={item.image} alt={item.title} />
                                            </a>

                                            <div className="solutions-hover-box">
                                                <h3>{item.title}</h3>

                                                <div className="solution-hover">
                                                    <p>{item.description}</p>

                                                    <Link href={item.link}>
                                                        Request A Quote
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="contact-sec bg-grey sp py-5">
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
                    {/* <Contact data={true} /> */}
                </section>
            </div>
        </main>
    )
}

export default page