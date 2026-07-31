import ShowNav from "@/components/client/ShowNav";
import Link from "next/link";


export default function NotFound() {
    return (
        <>
            <ShowNav />
            <section className="error-page product-details-sec shop-sec page_content default_content_class page-404">
                <div className=" details-page default-img">
                    <div className="menu-design"></div>
                    <div className="banner-img commonbannercontainer">
                        <div className="container errorPageContainer">
                            <div className=" page-eerr flex flex-col justify-center errpagecontainer">
                                <h1 className="errpageHeading">Whoops<span>!</span></h1>
                                <div className="text-xl md:text-2xl  font-semibold">
                                    Something didn't go as planned, but no worries-we're here to <br /> help. Visit the <Link href="/"><span> homepage </span></Link>
                                     or reach out to us anytime
                                </div>

                                <div className="flex justify-center mt-15 font-semibold">
                                    <Link  href="/request-for-proposal">
                                        <div className="errrorpagebtn">
                                            Talk to a <span>B3NET</span> Expert <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/*   */}
        </>
    );
}