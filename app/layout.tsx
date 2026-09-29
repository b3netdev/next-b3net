import type { Metadata } from "next";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Exo_2 } from "next/font/google";


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
import RouteHeader from "@/components/client/RouteHeader";
import Providers from "@/redux/Provider";
import RouteFooter from "@/components/client/RouteFooter";
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

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-exo-2",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";



export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Top Web Design & AI Digital Marketing Company | B3NET",
    template: "%s | B3NET",
  },

  description:
    "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",


  keywords: [
    "React development",
    "Next js development",
    "Node js development",
    "MERN stack development",
    "Full stack development",
    "Mobile App development",
    "React native  development",
    "WordPress to React upgrade",
    "WordPress React frontend",
    "headless WordPress development",
    "React front end development",
    "WordPress performance upgrade",
    "modern WordPress website",
    "headless WordPress services",
    "WordPress API React",
    "React website development",
    "WordPress speed optimization",
  ],

  alternates: {
    canonical: siteUrl,
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
    locale: "en_US",
    type: "article",
    title: "Home",
    description:
      "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
    url: siteUrl,
    siteName: "B3net",
    images: [
      {
        url: "https://backend.b3net.com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg",
        width: 1200,
        height: 675,
        type: "image/jpeg",
        alt: "B3NET",
      },
    ],
    modifiedTime: "2026-03-16T08:48:52+00:00",
  },

  twitter: {
    card: "summary_large_image",
    site: "@b3net",
    title: "Home",
    description:
      "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
    images: [
      "https://backend.b3net.com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg",
    ],
  },

  other: {
    "article:publisher": "https://www.facebook.com/B3NET",
    "article:modified_time": "2026-03-16T08:48:52+00:00",

    "og:locale": "en_US",
    "og:type": "article",
    "og:title": "Home",
    "og:description":
      "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
    "og:url": siteUrl,
    "og:site_name": "B3net",
    "og:image":
      "https://backend.b3net.com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg",
    "og:image:width": "1200",
    "og:image:height": "675",
    "og:image:type": "image/jpeg",

    "twitter:card": "summary_large_image",
    "twitter:site": "@b3net",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} ${exo2.variable}`}>
      <body suppressHydrationWarning>
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="Q6m+qa1IAhRJXbrRv/gTNA"  strategy="beforeInteractive"></Script>
         <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/1e1642a0c5b048500cfb3a3c83be46cf/script.js" />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQVC5NS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WC2TSS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        <Script id="gtm-tqvc5ns" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TQVC5NS');
          `}
        </Script>


        <Script id="gtm-wc2tss" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WC2TSS');
          `}
        </Script>




        <Script id="legacy-ua" strategy="afterInteractive">
          {`
            (function(i,s,o,g,r,a,m){
              i['GoogleAnalyticsObject']=r;
              i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments) };
              i[r].l=1*new Date();
              a=s.createElement(o);
              m=s.getElementsByTagName(o)[0];
              a.async=1;
              a.src=g;
              m.parentNode.insertBefore(a,m);
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-6536820-1', 'b3net.com');
            ga('send', 'pageview');
          `}
        </Script>


        <Script
          id="google-ads-gtag-src"
          src="https://www.googletagmanager.com/gtag/js?id=AW-1070943410"
          strategy="lazyOnload"
        />


        <Script id="google-ads-gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1070943410');
          `}
        </Script>


        <Script id="b3net-heatmap" strategy="afterInteractive">
          {`
            if (typeof hmtracker == 'undefined') {
              var hmt_script = document.createElement('script'),
                  hmt_purl = encodeURIComponent(location.href).replace('.', '~');
              hmt_script.type = 'text/javascript';
              hmt_script.src =
                'https://www.b3net.com/hmt/?hmtrackerjs=B3NET.com&uid=05cf75d64f067a6d500fd2e96f09939f637e676d&purl=' + hmt_purl;
              document.getElementsByTagName('head')[0].appendChild(hmt_script);
            }
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){ (c[a].q=c[a].q||[]).push(arguments) };
              t=l.createElement(r);
              t.async=1;
              t.src='https://www.clarity.ms/tag/' + i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, 'clarity', 'script', 'g5977el7lj');
          `}
        </Script>

        {/* AdRoll */}
        <Script id="adroll-init" strategy="lazyOnload">
          {`
            window.adroll_adv_id = "IXSTBEWES5CEBBCQAA2O2T";
            window.adroll_pix_id = "FAZBXTQYPRE2LP6RVHDOLR";

            (function () {
              var _onload = function(){
                if (document.readyState && !/loaded|complete/.test(document.readyState)) {
                  setTimeout(_onload, 10);
                  return;
                }
                if (!window.__adroll_loaded) {
                  window.__adroll_loaded = true;
                  setTimeout(_onload, 50);
                  return;
                }
                var scr = document.createElement("script");
                var host = (("https:" == document.location.protocol)
                  ? "https://s.adroll.com"
                  : "http://a.adroll.com");
                scr.setAttribute("async", "true");
                scr.type = "text/javascript";
                scr.src = host + "/j/roundtrip.js";
                (
                  (document.getElementsByTagName("head") || [null])[0] ||
                  document.getElementsByTagName("script")[0].parentNode
                ).appendChild(scr);
              };

              if (window.addEventListener) {
                window.addEventListener("load", _onload, false);
              } else {
                window.attachEvent("onload", _onload);
              }
            })();
          `}
        </Script>

        <Providers>
          <RouteHeader />
          <BootstrapClient />
          <ScrollToTop />
          {children}
          <RouteFooter />
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}