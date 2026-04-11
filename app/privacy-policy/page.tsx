import React, { cache } from 'react'
import ShowNav from '@/components/client/ShowNav'
import Link from 'next/link'
import { GetPageData } from '@/lib/getdata';
import { Metadata } from 'next';
import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from '@/lib/seo';
import StructuredData from '@/components/server/StructuredData';


const getBlogPageData = cache(async () => {

    const data = await GetPageData("privacy-policy", "page");
    return data?.page ?? data;
});

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getBlogPageData();
    const seo = getSeoFromPageData(pageData);

    return buildMetadata(seo);
}

const page = async () => {
    const pageData = await getBlogPageData();
    const schemaData = getSchemaFromPageData(pageData);

    return (
        <section className="product-details-sec shop-sec page_content default_content_class">
            <ShowNav />
            <StructuredData data={schemaData} />
            <div className="port-landing-wrap details-page default-img commonbannercontainer">
                <div className="menu-design"></div>
                <div className="banner-img proposalBanner">

                    <div className="container">
                        <div className="banner-caption">
                            <h2>{pageData?.title?.rendered}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-sec">
                <div className="container new-bg-sec">
                    <div className="breadcrumb-left ">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                            </ol>
                        </nav>
                    </div>


                    <div
                        dangerouslySetInnerHTML={{ __html: pageData?.content || "" }}

                    />
                </div>
            </div>

        </section>
    )
}

export default page