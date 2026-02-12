// app/about/[slug]/page.tsx
import { notFound } from "next/navigation";
import { GetPageData } from "@/lib/getdata";
import AboutUsClient from "./AboutUsClient";

type PageProps = {
  params: { slug: string };
};

export default async function AboutUsPage({ params }: PageProps) {
  const { slug } = params;


  const data = await GetPageData("about-company", "page");
  console.log(data,"DATA")

  const pageData = data?.page ?? data; 

  if (!pageData) notFound();

  return (
    <div className="about-page portfolio-page">
      
      <div className="port-landing-wrap gpp">
        <div className="banner-img">
          <img
            src="https://www.b3net.com/wp-content/uploads/2025/12/about-banner.webp"
            alt=""
          />
          <div className="container">
            <div className="banner-caption">
              <h1>Are You Digital?</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="industry-sec sp">
        <div className="breadcrum pb-3 pb-md-4 pb-lg-5">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-flex align-items-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 pe-lg-4">
              <div className="heading-title heading-big-uppercase int-className">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: pageData?.acf?.data?.heading ?? "",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="space30" />

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <img
                src="https://www.b3net.com/wp-content/uploads/2025/12/ai-image.webp"
                alt=""
              />
            </div>

            <div className="col-lg-8 col-md-6 mb-4 common-content new-colr">
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData?.acf?.data?.content ?? "",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Client-only stuff (swiper, DOM animation, etc) */}
      <AboutUsClient pageData={pageData} />
    </div>
  );
}
