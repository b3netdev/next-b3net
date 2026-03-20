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
  title: "B3NET - Innovating Your Digital",
  description:
    "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://2026.b3net.info/b3net-com/",
  },

  openGraph: {
    locale: "en_US",
    type: "article",
    url: "https://2026.b3net.info/b3net-com/",
    siteName: "B3net",
    title: "Home",
    description:
      "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
    images: [
      {
        url: "https://2026.b3net.info/b3net-com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg",
        width: 1200,
        height: 675,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@b3net",
    title: "Home",
    description:
      "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
    images: [
      "https://2026.b3net.info/b3net-com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg",
    ],
  },

  other: {
    "article:publisher": "https://www.facebook.com/B3NET",
    "article:modified_time": "2025-03-26T10:34:36+00:00",
  },
};


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pagedata = await GetPageData("home", "page");
 
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
