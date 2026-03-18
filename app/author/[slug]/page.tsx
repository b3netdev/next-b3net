 

import Link from "next/link";
import { GetAuthorData, GetRelatedPost } from "@/lib/getdata";
import ShowNav from "@/components/client/ShowNav";




export default async function Author({ params }: { params: { slug: string } }) {

    const { slug } = await params;
    

    const [authorData] = await GetAuthorData(slug);
    console.log(authorData,"AuthorDATA")
    // const relatedpost: any = await GetRelatedPost(authorData?.id)
    // console.log(relatedpost,"Related post")







    // const PostCardSkeleton = () => (
    //     <div className="card-parts-1">
    //         <div className="card">
    //             {/* Image */}
    //             <Skeleton variant="rectangular" width="100%" height={220} />

    //             <div className="card-body heading5">
    //                 {/* Date row */}
    //                 <div className="calender d-flex justify-content-between">
    //                     <div className="mb-2 mb-sm-3 calender-size">
    //                         <Skeleton variant="text" width={140} height={22} />
    //                     </div>
    //                 </div>

    //                 {/* Title */}
    //                 <Skeleton variant="text" width="90%" height={28} />
    //                 <Skeleton variant="text" width="70%" height={28} />

    //                 {/* Excerpt (2–3 lines) */}
    //                 <Skeleton variant="text" width="100%" height={20} />
    //                 <Skeleton variant="text" width="95%" height={20} />
    //                 <Skeleton variant="text" width="80%" height={20} />

    //                 {/* Read more */}
    //                 <div
    //                     className="d-flex align-items-center gap-2 clr-blk"
    //                     style={{ marginTop: 12 }}
    //                 >
    //                     <Skeleton variant="text" width={110} height={22} />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );

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
                                                alt=""
                                                decoding="async"
                                                sizes="(max-width: 150px) 100vw, 150px"
                                            />
                                        </div>

                                        <h1>{authorData?.name}</h1>

                                        <p className="!font-bold opacity-60">{authorData?.description}</p>

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
            {/* <Auth */}
             
        </main>
    );
}

