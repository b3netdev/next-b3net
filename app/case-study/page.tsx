import React, { cache } from 'react'

import { GetPageData } from '@/lib/getdata';
import { Metadata } from 'next';
import { buildMetadata, getSeoFromPageData } from '@/lib/seo';
import ShowNav from '@/components/client/ShowNav';
import Link from 'next/link';


const getPageData = cache(async () => {

  const data = await GetPageData("case-studies", "page");
  return data?.page ?? data;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData();
  const seo = getSeoFromPageData(pageData);

  return buildMetadata(seo);
}

export const caseStudySlugs = [
  "case-study-automobile-parts-website-design-seo",
  "case-study-tree-care-service-web-design-digital-marketing",
  "case-study-tech-hardware-service-web-design-digital-marketing",
  "case-study-mattress-company-website-digital-marketing",
];

const page = async () => {
  const data = await getPageData();

  const pageData = data?.page ?? data;

  return (
    <div>
      <ShowNav />
      <div className='case-study-page-container' >
        {
          pageData?.acf?.data?.case_studies_repeater?.map((item: any, index: any) => {
            return (
              <div className="item">
                <div
                  className=""
                >
                  <div className="card h-100">
                    <img
                      src={item?.image}
                      className="card-img-top"
                      alt="card-img-top"
                    />
                    <div className="card-body heading5 p-4">
                      <h4 className="card-title mb-2 text-black">
                        {item?.heading}
                      </h4>
                      <p className="card-text" >
                        {item?.content}
                      </p>

                      <div className="mt-4">
                        <Link
                          className="btn"
                          href={`/${caseStudySlugs[index] ?? caseStudySlugs[0]}`}
                        >
                          <span className="btn_label_1 font-extrabold">
                            Read More
                          </span>
                          <span className="btn_icon">
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default page
