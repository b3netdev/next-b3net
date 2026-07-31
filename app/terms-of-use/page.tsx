import Link from 'next/link'
import React, { cache } from 'react'
import ShowNav from '@/components/client/ShowNav'
import { GetPageData } from '@/lib/getdata';
import { Metadata } from 'next';
import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from '@/lib/seo';
import StructuredData from '@/components/server/StructuredData';


const getBlogPageData = cache(async () => {

    const data = await GetPageData("terms-of-use", "page");
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
            <StructuredData data={schemaData} />
            <ShowNav />
            <div className="port-landing-wrap details-page default-img commonbannercontainer">
                <div className="menu-design"></div>
                <div className="banner-img">
                    <div className="container proposalBanner">
                        <div className="banner-caption flex justify-center">
                            <h1 className='!text-4xl'>{pageData?.title?.rendered}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-sec">
                <div className="container new-bg-sec">
                    <div className="breadcrumb-left">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Terms of Use</li>
                            </ol>
                        </nav>
                    </div>
                    
                    <div
                    className='primary-bodyText'
                        dangerouslySetInnerHTML={{ __html: pageData?.content || "" }}
                    />
                </div>
            </div>

        </section>

    )
}

export default page