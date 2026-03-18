import ShowNav from "@/components/client/ShowNav";
import Link from "next/link";
 

export default function NotFound() {
    return (
        <>
            <ShowNav />
            <section className="error-page product-details-sec shop-sec page_content default_content_class page-404">
                <div className="port-landing-wrap details-page default-img">
                    <div className="menu-design"></div>
                    <div className="banner-img">
                        <div className="container">
                            <div className="banner-caption page-eerr">
                                <h1 className="!text-7xl !uppercase">Whoops<span>!</span></h1>
                                <h3>Something went wrong - <span>We're Sorry! </span></h3>
                                <h4>The page you requested could not be found.</h4>
                                <div className=" minn">
                                    <Link className=" new-btnn error-bttn" href="/proposal">
                                        <span className="btn_label error-label">Talk To A <span>B3NET</span> Expert</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-col no-padding contact-sec cont-error">
                    <div className="top-footer-1">
                        <div className="container w-full flex items-center">
                            <h2 className="underline-sec">Perhaps, you may try exploring the following pages, or visit our <Link href="/">Homepage</Link> .</h2>

                        </div>
                    </div>
                </div>
            </section>
            {/*   */}
        </>
    );
}