

import Link from "next/link";
import { GetAuthorData, GetRelatedPost } from "@/lib/getdata";
import ShowNav from "@/components/client/ShowNav";
import AuthorRelatedPosts from "./AuthorRelatedPosts";
import { cache } from "react";
import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import StructuredData from "@/components/server/StructuredData";


const getAuthorPageData = cache(async (slug: string) => {

    const data = await GetAuthorData(slug);
    return data[0];
});

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const pageData = await getAuthorPageData(slug);
    const seo = getSeoFromPageData(pageData);

    return buildMetadata(seo);
}


export default async function Author({ params }: { params: { slug: string } }) {

    const { slug } = await params;
    const pageData = await getAuthorPageData(slug)
    if (!pageData) notFound();
    const schemaData = getSchemaFromPageData(pageData);




    return (
        <main className="page_content">
            <StructuredData data={schemaData} />
            <ShowNav />
            <div className="portfolio-page blog">
                <div className="bg-color-part">
                    <div className="blog-about author-blog auther-box">
                        <div className="container">
                            <div className="row gy-4 justify-content-center align-items-center">
                                <div className="col-12 txt-part auther-box">
                                    <div className="left-side ">
                                        <div className="w-full flex justify-center">
                                            <img
                                                width={150}
                                                height={150}
                                                src={pageData?.mpp_avatar?.full}
                                                className="avatar avatar-150 photo mx-auto"
                                                alt="left-side"
                                                decoding="async"
                                                sizes="(max-width: 150px) 100vw, 150px"
                                            />
                                        </div>

                                        <h1>{pageData?.name}</h1>

                                        <p className="font-medium text-[16px] primary-bodyText">{pageData?.description}</p>

                                        <div
                                            className="mb-0 text-start pt-md-4 aos-init aos-animate"
                                            data-aos="fade-up"
                                            data-aos-duration="800"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AuthorRelatedPosts
                id={pageData?.id}
            />
        </main>
    );
}

