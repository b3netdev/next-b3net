// app/blog/page.tsx (SERVER COMPONENT)
import Image from "next/image";
import Link from "next/link";

import BlogheroBanner from "@/assets/images/blog-hero-banner.jpg";
import BlogClient from "./BlogClient";
export default function BlogPage() {
  return (
    <main className="page_content">
      <div className="portfolio-page blog">
        <div className="port-landing-wrap gpp">
          <div className="banner-img">
            {/* If you prefer, you can keep <img /> too */}
            <Image src={BlogheroBanner} alt="" priority />
            <div className="container">
              <div className="banner-caption">
                <h1>
                  Web Design & <br />
                  Digital Marketing Blog
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-color-part">
        <div className="breadcrum py-3 py-4 py-sm-5">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-flex align-items-center">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blog
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Everything that uses hooks stays here */}
      <BlogClient />
    </main>
  );
}
