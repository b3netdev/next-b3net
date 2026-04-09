import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import BootstrapClient from "./BootstrapClient";
import "./globals.css";
import "../assets/css/style.css";
import "../assets/css/webslidemenu.css";
import "../assets/css/footer.css";
import "../assets/css/new-style.css";
import "../assets/css/caseStudy-inner.css";
import "../assets/css/caseStudy-inner-3.css";
import "../assets/css/caseStudy-inner-2.css";
import "../assets/css/fade-down.css";
// import "../assets/js/main.js";

import Navbar from "@/components/client/Navcontainer";
import Providers from "@/redux/Provider";
import Footer from "@/components/server/Footer";
import { Poppins } from "next/font/google";
import ToastProvider from "@/components/client/Toast";
import { GetPageData } from "@/lib/getdata";
import { buildMetadata, getSchemaFromPageData, getSeoFromPageData } from "@/lib/seo";
import ScrollToTop from "@/components/client/ScrollToTop";
import { cache } from "react";
import StructuredData from "@/components/server/StructuredData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});




const getPageData = cache(async () => {
  
  const data = await GetPageData("home", "page");
  return data?.page ?? data;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData();
  const seo = getSeoFromPageData(pageData);

  return buildMetadata(seo);
}



export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageData = await getPageData();
  const schemaData = getSchemaFromPageData(pageData);
 
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <StructuredData data={schemaData} />
        <Providers>
          <Navbar />
          <BootstrapClient />
          <ScrollToTop/>
          {children}
          <Footer />
          <ToastProvider/>
        </Providers>
      </body>
    </html>
  );
}
