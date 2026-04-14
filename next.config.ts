import type { NextConfig } from "next";

const domain = new URL(process.env.NEXT_PUBLIC_BASE_URL || "").hostname;

const nextConfig: NextConfig = {
  images: {
    domains: [domain],
  },

  async redirects() {
    return [
      {
        source: "/services/:slug",
        destination: "/:slug",
        permanent: true, // 301 redirect (SEO)
      },
      {
        source: "/blog/:slug",
        destination: "/:slug",
        permanent: true, // 301 redirect (SEO)
      },
      {
        source: "/about-company/faq",
        destination: "/faq",
        permanent: true, // 301 redirect (SEO)
      },
      {
        source: "/about-company/testimonial",
        destination: "/testimonial",
        permanent: true, // 301 redirect (SEO)
      },
      {
        source: "/about-company/featured-clients",
        destination: "/featured-clients",
        permanent: true, // 301 redirect (SEO)
      },
      {
        source: "/wesolve/:slug",
        destination: "/:slug",
        permanent: true, // 301 redirect (SEO)
      },
      {
        source: "/casestudy/:slug",
        destination: "/:slug",
        permanent: true, // 301 redirect (SEO)
      },
    ];
  },
  async rewrites() {
    return[
      {
        source:
          "/:city(texas|california|new-york|new-mexico|nevada|tennessee|oklahoma|arizona)/:slug",
        destination: "/location-pages/:city/:slug",
      },
    ]
  },
};

export default nextConfig;