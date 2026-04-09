

import Link from "next/link";
import { GetAuthorData, GetRelatedPost } from "@/lib/getdata";
import ShowNav from "@/components/client/ShowNav";
import AuthorRelatedPosts from "./AuthorRelatedPosts";




export default async function Author({ params }: { params: { slug: string } }) {

    const { slug } = await params;


    const [authorData] = await GetAuthorData(slug);
    

    return (
        <main className="page_content">
            <ShowNav />
            <div className="portfolio-page blog">
                <div className="bg-color-part">
                    <div className="blog-about author-blog">
                        <div className="container">
                            <div className="row gy-4 justify-content-center align-items-center">
                                <div className="col-12 txt-part">
                                    <div className="left-side">
                                        <div className="w-full flex justify-center">
                                            <img
                                                width={150}
                                                height={150}
                                                src={authorData?.mpp_avatar?.full}
                                                className="avatar avatar-150 photo mx-auto"
                                                alt="left-side"
                                                decoding="async"
                                                sizes="(max-width: 150px) 100vw, 150px"
                                            />
                                        </div>

                                        <h1>{authorData?.name}</h1>

                                        <p className="font-medium text-[16px] ">{authorData?.description}</p>

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
                id={authorData?.id}
            />

        </main>
    );
}

