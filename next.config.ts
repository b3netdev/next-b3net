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
      {
        source: "/location-pages/images/:file*",
        destination: "/images/:file*",
        permanent: false,
      },
      {
        source: "/digital-marketing-in-addison",
        destination: "/texas/digital-marketing-addison",
        permanent: true,
      },
      {
        source: "/web-design-services-in-addison",
        destination: "/texas/addison-website-design-development",
        permanent: true,
      },
      {
        source: "/albuquerque-web-design",
        destination: "/new-mexico/website-design-albuquerque",
        permanent: true,
      },
      {
        source: "/allen-website-design-development",
        destination: "/texas/allen-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-allen",
        destination: "/texas/digital-marketing-allen-tx",
        permanent: true,
      },
      {
        source: "/website-design-development-arlington",
        destination: "/texas/arlington-web-design",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-arlington",
        destination: "/texas/digital-marketing-arlington",
        permanent: true,
      },
      {
        source: "/web-design-and-development",
        destination: "/texas/austin-website-design-development",
        permanent: true,
      },
      {
        source: "/austin-digital-marketing-agency",
        destination: "/texas/digital-marketing-austin",
        permanent: true,
      },
      {
        source: "/website-design-development-carrollton",
        destination: "/texas/carrollton-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-carrollton",
        destination: "/texas/digital-marketing-carrollton",
        permanent: true,
      },
      {
        source: "/web-design-and-development-in-cedar-hill",
        destination: "/texas/cedar-hill-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-cedar-hill",
        destination: "/texas/digital-marketing-cedar-hill-tx",
        permanent: true,
      },
      {
        source: "/web-design-services-in-coppell",
        destination: "/texas/coppell-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-coppell",
        destination: "/texas/digital-marketing-coppell-tx",
        permanent: true,
      },
      {
        source: "/dallas-digital-marketing-company",
        destination: "/texas/dallas-digital-marketing-company",
        permanent: true,
      },
      {
        source: "/dallas-digital-marketing-agency",
        destination: "/texas/dallas-digital-marketing-company",
        permanent: true,
      },
      {
        source: "/dallas-ppc-management",
        destination: "/texas/dallas-ppc-management-company",
        permanent: true,
      },
      {
        source: "/dallas-seo-agency",
        destination: "/texas/dallas-seo-internet-marketing-service",
        permanent: true,
      },
      {
        source: "/web-development-service",
        destination: "/texas/dallas-web-development-agency",
        permanent: true,
      },
      {
        source: "/digital-marketing-forth-worth",
        destination: "/texas/digital-marketing-agency-dallas-fort-worth",
        permanent: true,
      },
      {
        source: "/dallas-local-seo-agency",
        destination: "/texas/local-seo-agency-dallas",
        permanent: true,
      },
      {
        source: "/dallas-social-media-marketing",
        destination: "/texas/social-media-marketing-agency-dallas",
        permanent: true,
      },
      {
        source: "/website-maintenance-service-dallas",
        destination: "/texas/website-maintenance-services-dallas",
        permanent: true,
      },
      {
        source: "/website-maintenance-services",
        destination: "/texas/website-maintenance-services-dallas",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-farmers-branch",
        destination: "/texas/digital-marketing-farmers-branch-tx",
        permanent: true,
      },
      {
        source: "/web-design-and-development-in-farmers-branch",
        destination: "/texas/farmers-branch-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-fort-worth",
        destination: "/texas/digital-marketing-fort-worth",
        permanent: true,
      },
      {
        source: "/website-design-development-fort-worth",
        destination: "/texas/website-design-fort-worth",
        permanent: true,
      },
      {
        source: "/digital-marketing-frisco",
        destination: "/texas/digital-marketing-frisco",
        permanent: true,
      },
      {
        source: "/web-design-services-in-frisco",
        destination: "/texas/website-design-frisco",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-garland",
        destination: "/texas/digital-marketing-garland-tx",
        permanent: true,
      },
      {
        source: "/garland-website-design-development",
        destination: "/texas/garland-website-design",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-grapevine",
        destination: "/texas/digital-marketing-grapevine-tx",
        permanent: true,
      },
      {
        source: "/grapevine-website-design-development",
        destination: "/texas/grapevine-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-houston",
        destination: "/texas/digital-marketing-houston-tx",
        permanent: true,
      },
      {
        source: "/web-design-and-development-in-houston",
        destination: "/texas/website-design-houston",
        permanent: true,
      },
      {
        source: "/digital-marketing-company-in-irvine-ca",
        destination: "/california/digital-marketing-company-irvine",
        permanent: true,
      },
      {
        source: "/irvine-web-design",
        destination: "/california/website-design-irvine",
        permanent: true,
      },
      {
        source: "/irving-digital-marketing",
        destination: "/texas/digital-marketing-irving-tx",
        permanent: true,
      },
      {
        source: "/web-design-and-development-irving",
        destination: "/texas/irving-web-design",
        permanent: true,
      },
      {
        source: "/las-vegas-web-design",
        destination: "/nevada/las-vegas-website-design",
        permanent: true,
      },
      {
        source: "/dallas-digital-marketing-company-2",
        destination: "/texas/digital-marketing-lewisville-tx",
        permanent: true,
      },
      {
        source: "/lewisville-website-design-development",
        destination: "/texas/lewisville-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-mckinney",
        destination: "/texas/digital-marketing-mckinney-tx",
        permanent: true,
      },
      {
        source: "/web-design-and-development-in-mckinney",
        destination: "/texas/website-design-mckinney",
        permanent: true,
      },
      {
        source: "/memphis-website-design-development",
        destination: "/tennessee/memphis-website-design-company",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-mesquite",
        destination: "/texas/digital-marketing-mesquite-tx",
        permanent: true,
      },
      {
        source: "/web-design-and-development-in-mesquite",
        destination: "/texas/mesquite-website-design-development",
        permanent: true,
      },
      {
        source: "/new-york-digital-marketing-company",
        destination: "/new-york/digital-marketing-agency",
        permanent: true,
      },
      {
        source: "/oklahoma-website-design",
        destination: "/oklahoma/website-design-oklohoma-city",
        permanent: true,
      },
      {
        source: "/orange-county-digital-marketing-company",
        destination: "/california/orange-county-digital-marketing-company",
        permanent: true,
      },
      {
        source: "/orange-county-seo",
        destination: "/california/orange-county-digital-marketing-company",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-orange-county",
        destination: "/california/orange-county-digital-marketing-company",
        permanent: true,
      },
      {
        source: "/orange-county-web-design-2",
        destination: "/california/orange-county-web-design",
        permanent: true,
      },
      {
        source: "/website-design-orange-county",
        destination: "/california/orange-county-web-design",
        permanent: true,
      },
      {
        source: "/website-design-development-in-phoenix",
        destination: "/arizona/phoenix-web-design",
        permanent: true,
      },
      {
        source: "/plano-digital-marketing",
        destination: "/texas/plano-digital-marketing-web-design",
        permanent: true,
      },
      {
        source: "/riverside-web-design",
        destination: "/texas/plano-web-design-company",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-in-princeton",
        destination: "/texas/princeton-digital-marketing-agency",
        permanent: true,
      },
      {
        source: "/princetonwebsite-design-development",
        destination: "/texas/princeton-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-company-in-rancho-santa-margarita",
        destination: "/california/digital-marketing-rancho-santa-margarita",
        permanent: true,
      },
      {
        source: "/rancho-santa-margarita-web-design",
        destination: "/california/website-design-rancho-santa-margarita",
        permanent: true,
      },
      {
        source: "/digital-marketing-richardson",
        destination: "/texas/digital-marketing-richardson",
        permanent: true,
      },
      {
        source: "/richardson-website-design-development",
        destination: "/texas/richardson-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-company-in-riverside-ca",
        destination: "/california/riverside-digital-marketing-company",
        permanent: true,
      },
      {
        source: "/orange-county-web-design",
        destination: "/california/web-design-development-company-riverside",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-rockwall",
        destination: "/texas/digital-marketing-rockwall-tx",
        permanent: true,
      },
      {
        source: "/website-design-development-in-rockwall",
        destination: "/texas/rockwall-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-in-rowlett",
        destination: "/texas/digital-marketing-rowlett-tx",
        permanent: true,
      },
      {
        source: "/web-design-and-development-in-rowlett",
        destination: "/texas/rowlett-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-company-in-southlake-tx",
        destination: "/texas/digital-marketing-southlake-tx",
        permanent: true,
      },
      {
        source: "/south-lake-website-design-development",
        destination: "/texas/southlake-website-design-development",
        permanent: true,
      },
      {
        source: "/digital-marketing-company-in-tustin-ca",
        destination: "/california/digital-marketing-tustin",
        permanent: true,
      },
      {
        source: "/tustin-web-design",
        destination: "/california/website-design-tustin",
        permanent: true,
      },
      {
        source: "/zoho-consultant",
        destination: "/zoho-crm-consultant-integration-service",
        permanent: true,
      },
      {
        source: "/orange-county-iphone-app-developer",
        destination: "/iphone-app-development-services",
        permanent: true,
      },
      {
        source: "/orange-county-email-marketing",
        destination: "/email-marketing-services-company",
        permanent: true,
      },
      {
        source: "/orange-county-android-app-development",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/how-to-create-a-content-strategy-that-works-a-step-by-step-guide",
        destination: "/5-simple-steps-to-create-effective-content-strategy",
        permanent: true,
      },
      {
        source: "/healthcare-web-design-dallas-tx",
        destination: "/healthcare-web-design",
        permanent: true,
      },
      {
        source: "/email-marketing-services-dallas",
        destination: "/email-marketing-services-company",
        permanent: true,
      },
      {
        source: "/dallas-mobile-app-marketing",
        destination: "/mobile-app-marketing-services",
        permanent: true,
      },
      {
        source: "/dallas-ecommerce-development",
        destination: "/ecommerce-web-development-service",
        permanent: true,
      },
      {
        source: "/dallas-content-marketing-services",
        destination: "/content-marketing-services",
        permanent: true,
      },
      {
        source: "/app-store-optimization-orange-county",
        destination: "/app-store-optimization",
        permanent: true,
      },
      {
        source: "/website-design-dallas-tx",
        destination: "/texas/dallas-web-development-agency",
        permanent: true,
      },
      {
        source: "/orange-county-ecommerce-developer",
        destination: "/ecommerce-web-development-service",
        permanent: true,
      },
      {
        source: "/voice-first-writing-6",
        destination: "/voice-first-writing",
        permanent: true,
      },
      {
        source: "/the-future-of-search-navigating-googles-ai-driven-evolution",
        destination: "/navigating-googles-ai-mode",
        permanent: true,
      },
      {
        source: "/the-future-of-search-navigating-googles-ai-driven-evolution",
        destination: "/navigating-googles-ai-mode",
        permanent: true,
      },
      {
        source: "/online-reputation-management",
        destination: "/online-reputation-management-services",
        permanent: true,
      },
      {
        source: "/texas/dallas-web-design-development",
        destination: "/texas/dallas-web-development-agency",
        permanent: true,
      },
      {
        source: "/portfolio/arc-levers",
        destination: "/portfolio/arc-levers-store",
        permanent: true,
      },
      {
        source: "/portfolio/arrendaria-real-estate-service",
        destination: "/portfolio/arrendaria",
        permanent: true,
      },
      {
        source: "/the-rise-of-ai-generated-search-results-how-to-compete-as-a-human-creator",
        destination: "/how-to-compete-with-ai-generated-content-as-a-human-creator",
        permanent: true,
      },
      {
        source: "/portfolio/ace-alignerswordpress",
        destination: "/portfolio/ace-aligner",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source:
          "/:city(texas|california|new-york|new-mexico|nevada|tennessee|oklahoma|arizona)/:slug",
        destination: "/location-pages/:city/:slug",
      },
    ]
  },
};

export default nextConfig;