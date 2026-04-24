import type { Metadata } from "next";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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

const siteUrl =  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Top Web Design & AI Digital Marketing Company | B3NET",
    template: "%s | B3NET",
  },
  description:
  "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/0e730defc91657a6459d9c46/script.js"
          strategy="beforeInteractive"
        />
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

        {/* Google Tag Manager - Container 1 */}
        <Script id="gtm-tqvc5ns" strategy="beforeInteractive">
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


        <Script id="gtm-wc2tss" strategy="beforeInteractive">
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

        {/* Legacy Universal Analytics - usually remove unless you truly still need UA */}
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

        {/* Google Ads / gtag.js loader */}
        <Script
          id="google-ads-gtag-src"
          src="https://www.googletagmanager.com/gtag/js?id=AW-1070943410"
          strategy="afterInteractive"
        />

        {/* Optional gtag bootstrap for Ads if needed */}
        <Script id="google-ads-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1070943410');
          `}
        </Script>

        {/* Heatmap tracking */}
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
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
        <Script id="adroll-init" strategy="afterInteractive">
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
          <Navbar />
          <BootstrapClient />
          <ScrollToTop />
          {children}
          <Footer />
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}