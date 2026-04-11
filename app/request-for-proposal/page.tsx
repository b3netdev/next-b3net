import React, { cache } from "react";
import Contact from "@/components/client/Contact";
import Link from "next/link";
import ShowNav from "@/components/client/ShowNav";
import { GetPageData } from "@/lib/getdata";
import { Metadata } from "next";
import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from "@/lib/seo";
import StructuredData from "@/components/server/StructuredData";


const getBlogPageData = cache(async () => {

  const data = await GetPageData("get-a-free-proposal", "page");
  return data?.page ?? data;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getBlogPageData();
  const seo = getSeoFromPageData(pageData);

  return buildMetadata(seo);
}


const Proposal = async () => {
  const pageData = await getBlogPageData();
  const schemaData = getSchemaFromPageData(pageData);

  return (
    <section className="product-details-sec shop-sec page_content default_content_class">
      <ShowNav />
      <StructuredData data={schemaData} />
      <div className="port-landing-wrap details-page default-img commonbannercontainer">
        <div className="menu-design"></div>
        <div
          className="banner-img proposalBanner"
        >
          <div className="container">
            <div className="banner-caption">
              <h2>Get A Free Proposal</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-sec">
        <div className="container new-bg-sec">
          <div className="breadcrumb-left">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Get A Free Proposal
                </li>
              </ol>
            </nav>
          </div>

          <div className="span12">
            <div className="eva-title-container">
              <h1 className="eva-title left">
                Start your Project by Requesting a Proposal
              </h1>
            </div>

            <div className="eva-column-wrap" style={{ paddingBottom: "0px" }}>
              <p>
                B3NET INC. will provide you with a free, no obligation price
                quote.
                <br />
                (For RFP via email, please send it to{" "}
                <a href="mailto:info@b3net.com">info@b3net.com</a> or call us at{" "}
                <a href="tel:7149360208">714.936.0208</a>)
              </p>
            </div>
          </div>
          <Contact data={true} />
        </div>
      </div>
    </section>
  );
};

export default Proposal;
