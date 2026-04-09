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
import Navbar from "@/components/client/Navcontainer";
import Providers from "@/redux/Provider";
import Footer from "@/components/server/Footer";
import { Poppins } from "next/font/google";
import ToastProvider from "@/components/client/Toast";
import ScrollToTop from "@/components/client/ScrollToTop";
import { BASE_URL } from "@/lib/url";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});






const siteUrl = BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Top Web Design & AI Digital Marketing Company | B3NET",
    template: "%s | B3NET",
  },

  description:
    "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "article",
    locale: "en_US",
    url: "/",
    siteName: "B3net",
    title: "Home",
    description:
      "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
    publishedTime: "2025-03-04T09:15:06+00:00",
    modifiedTime: "2026-03-16T08:48:52+00:00",
    authors: ["https://www.facebook.com/B3NET"],
    images: [
      {
        url: "https://backend.b3net.com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg",
        width: 1200,
        height: 675,
        alt: "B3NET",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@b3net",
    title: "Top Web Design & AI Digital Marketing Company | B3NET",
    description:
      "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
    images: [
      "https://backend.b3net.com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg",
    ],
  },

  category: "technology",

  other: {
    "article:publisher": "https://www.facebook.com/B3NET",
  },
};


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  
 
  return (
    <html lang="en" className={poppins.className}>
      <body>
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
