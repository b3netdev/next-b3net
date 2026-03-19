import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
import { buildMetadata, getSeoFromPageData } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "B3NET",
    template: "B3NET | %s",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Providers>
          <Navbar />
          <BootstrapClient />
          {children}
          <Footer />
          <ToastProvider/>
        </Providers>
      </body>
    </html>
  );
}
