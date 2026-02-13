

import ContactUsForm from "@/app/contact/Contactusform";
import Contact from "@/components/client/Contact";

import { GetPageData } from "@/lib/getdata";
const Aivideo =async () => {
  
 const data = await GetPageData("ai-video", "page");
     const pageData = data?.page ?? data;
     console.log(pageData, "PAGE DATA")

 
  return (
    <section className="email-col py-md-5 py-3">
      <div className="container">
        <div className="email-market-gap">
          <div className="form-box-shadow p-sm-4 p-0 d-flex flex-column justify-content-center align-items-center ai-video-wrapper">
            <div dangerouslySetInnerHTML={{ __html: pageData?.content || "" }} />
          </div>
        </div>
      </div>

      <div className="bottom-form" id="contact-form">
        <div className="container">
          <div className="common-form shadow-1 bg-white p-3 p-sm-5">
            <div className="heading5 mb-3 mb-md-5 text-center">
              <h2>Revolutionize Your Product Sales with AI-Driven Video Marketing! Start Now!</h2>
            </div>
            
              <Contact 
              data={true}
              />
          
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Aivideo;
