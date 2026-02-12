import Link from "next/link";
import { notFound } from "next/navigation";
import { GetPageData } from "@/lib/getdata";
import Portfoliobox from "./Portfoliobox";
import Contact from "@/components/client/Contact";
type PageProps = {
  params: { slug: string };
};

export default async function Portfolio() {



  const pageData = await GetPageData("portfolio","page");
  console.log(pageData,"PAGE DATA")


  if (!pageData) notFound();

  return (
    <main className="page_content">
      <div className="portfolio-page">
        <div className="port-landing-wrap gpp">
          <div className="banner-img">
            <img
              src="https://b3net.com/wp-content/uploads/2025/10/portfolio-banner-1.webp"
              alt=""
            />
            <div className="container">
              <div className="banner-caption">
                <div
                  dangerouslySetInnerHTML={{ __html: pageData?.content ?? "" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-color-part">
          <div className="breadcrum py-3 py-4 py-sm-5">
            <div className="container">
              <nav aria-label="breadcrumb ">
                <ol className="breadcrumb d-flex align-items-center ">
                  <li className="breadcrumb-item">
                    <a href="https://b3net.com">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Portfolio
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        
        <Portfoliobox />

       

        <div className="expertise-service sp pb-0 new-gap mt-5">
          <div className="container">
            <div className="row mb-4 mb-md-5">
              <div className="col-lg-12 text-center">
                <div className="heading-title">
                  <h2>
                    Our Digital Expertise Across <span> Industries </span>
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
              {(pageData?.acf?.data?.box_repeater ?? []).map(
                (item: any, index: number) => (
                  <div className="col-lg-4 col-md-6 p-0" key={index}>
                    <div className="portfolio-list">
                      <div className="image image-anime reveal">
                        <Link href="/requestforproposal.html">
                          <img src={item?.image} alt="" />
                        </Link>

                        <div className="solutions-hover-box">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.content ?? "",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="as-seen-on">
            <div className="container">
              <h3 className="text-center mb-4">
                {pageData?.acf?.data?.as_seen_on_heading ?? ""}
              </h3>

              <div className="row g-4 d-flex align-items-center justify-content-center">
                {(pageData?.acf?.data?.as_seen_on_repeater ?? []).map(
                  (item: any, index: number) => (
                    <div
                      className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 xtra-space"
                      key={index}
                    >
                      <a href={item?.url ?? "#"} target="_blank" rel="noreferrer">
                        <img src={item?.image} alt="As seen on" />
                      </a>
                    </div>
                  )
                )}
              </div>
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
                    GET YOUR FREE CONSULTATION <span>+ PROPOSAL</span>
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
}
