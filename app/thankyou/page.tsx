import ShowNav from "@/components/client/ShowNav";
import Link from "next/link";
const Thankyou = () => {


    return (
        <main className="page_content">
            <ShowNav />
            <section className="error-page thank-you-page text-center">
                <div className="container">
                    <h1>Thank You!</h1>
                    <h2>Your submission has been received.</h2>
                    <h3>
                        We appreciate your time and will get back to you as soon as
                        possible.
                    </h3>

                    <div className="mt-3 mt-md-5">
                        <Link
                            className="btn btn-outline-light aos-init aos-animate"
                            href="/"
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <span className="btn_label" data-text="Back to Home">
                                Back to Home
                            </span>
                            <span className="btn_icon">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Thankyou;
