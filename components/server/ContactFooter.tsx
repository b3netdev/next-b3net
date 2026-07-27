
import Link from "next/link";

const ContactFooter = () => {
  return (
    <div className="footer-smaill ">
      <div className="container">
        <div className="start-now-col d-sm-flex align-items-center justify-content-between mt-md-5 px-4 py-3 px-md-5 py-md-5">
          <div
            className="start-now-col-left"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="font-semibold text-5xl text-white mb-3">
              
                Boost Your Revenue with
              <span className="font-bold" > AI-Powered</span>
            </div>
            <div className="font-semibold text-5xl text-white mb-3 bg-[#FF4F03] p-1">Digital Transformation</div>
          </div>

          <div
            className="start-now-col-right"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Link className="btn btn-white" href="/request-for-proposal">
              <span className="btn_label" data-text="Start Now">
                Start Now
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
