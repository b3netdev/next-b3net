export type FooterLink = {
  label: string;
  url: string;
};

export type FooterLocationItem = {
  title: string;
  links: FooterLink[];
};

export type FooterLocation = {
  id: string;
  label: string;
  columns: FooterLocationItem[][];
};

export type FooterExploreItem =
  | { title: string; url: string }
  | { title: string; links: FooterLink[] };

export type FooterSocial = {
  icon: string;
  url: string;
};

export type FooterPartner = {
  img: string;
  url: string;
  alt?: string;
};

export type FooterData = {
  locations: FooterLocation[];
  explore: FooterExploreItem[];
  socials: FooterSocial[];
  partners: FooterPartner[];
  successImg: string;
};


export const footerData: FooterData = {
  locations: [
    {
      id: "usa",
      label: "USA",
      columns: [
        [
          {
            title: "Addison",
            links: [
              {
                label: "Addison Website Design Development",
                url: "/services/addison-website-design-development",
              },
              {
                label: "Digital Marketing Addison",
                url: "/services/digital-marketing-addison",
              },
            ],
          },
          {
            title: "Albuquerque",
            links: [
              {
                label: "Website Design Albuquerque",
                url: "/services/website-design-albuquerque",
              },
            ],
          },
          {
            title: "Allen",
            links: [
              {
                label: "Allen Website Design Development",
                url: "/services/allen-website-design-development",
              },
              {
                label: "Digital Marketing Allen TX",
                url: "/services/digital-marketing-allen-tx",
              },
            ],
          },
          {
            title: "Arlington",
            links: [
              {
                label: "Arlington Web Design",
                url: "/services/arlington-web-design",
              },
              {
                label: "Digital Marketing Arlington",
                url: "/services/digital-marketing-arlington",
              },
            ],
          },
          {
            title: "Austin",
            links: [
              {
                label: "Austin Website Design Development",
                url: "/services/austin-website-design-development",
              },
              {
                label: "Digital Marketing Austin",
                url: "/services/digital-marketing-austin",
              },
            ],
          },
          {
            title: "Carrollton",
            links: [
              {
                label: "Carrollton Website Design Development",
                url: "https://b3net.com/texas/carrollton-website-design-development.html",
              },
              {
                label: "Digital Marketing Carrollton",
                url: "https://b3net.com/texas/digital-marketing-carrollton.html",
              },
            ],
          },
          {
            title: "Cedar Hill",
            links: [
              {
                label: "Cedar Hill Website Design & Development",
                url: "https://b3net.com/texas/cedar-hill-website-design-development.html",
              },
              {
                label: "Digital Marketing Cedar Hill TX",
                url: "https://b3net.com/texas/digital-marketing-cedar-hill-tx.html",
              },
            ],
          },
        ],
        [
          {
            title: "Coppell",
            links: [
              {
                label: "Coppell Website Design & Development",
                url: "/services/oppell-website-design-development",
              },
              {
                label: "Digital Marketing Coppell TX",
                url: "/services/digital-marketing-coppell-tx",
              },
            ],
          },
          {
            title: "Dallas",
            links: [
              {
                label: "Dallas Digital Marketing Company",
                url: "/services/dallas-digital-marketing-company",
              },
              {
                label: "Dallas PPC Management Company",
                url: "/services/dallas-ppc-management-company",
              },
              {
                label: "Dallas SEO Internet Marketing Service",
                url: "/services/dallas-seo-internet-marketing-service",
              },
              {
                label: "Dallas Web Development Agency",
                url: "/services/dallas-web-development-agency",
              },
              {
                label: "Digital Marketing Agency Dallas Fort Worth",
                url: "/services/digital-marketing-agency-dallas-fort-worth",
              },
              {
                label: "Local SEO Agency Dallas",
                url: "/services/local-seo-agency-dallas",
              },
              {
                label: "Social Media Marketing Agency Dallas",
                url: "/services/social-media-marketing-agency-dallas",
              },
              {
                label: "Website Maintenance Services Dallas",
                url: "/services/website-maintenance-services-dallas",
              },
            ],
          },
          {
            title: "Farmers Branch",
            links: [
              {
                label: "Digital Marketing Farmers Branch TX",
                url: "/services/digital-marketing-farmers-branch-tx",
              },
              {
                label: "Farmers Branch Website Design & Development",
                url: "/services/farmers-branch-website-design-development",
              },
            ],
          },
          {
            title: "Fort Worth",
            links: [
              {
                label: "Digital Marketing Fort Worth",
                url: "/services/digital-marketing-fort-worth",
              },
              {
                label: "Website Design Fort Worth",
                url: "/services/website-design-fort-worth",
              },
            ],
          },
          {
            title: "Frisco",
            links: [
              {
                label: "Digital Marketing Frisco",
                url: "/services/digital-marketing-frisco",
              },
              {
                label: "Website Design Frisco",
                url: "/services/website-design-frisco",
              },
            ],
          },
          {
            title: "Garland",
            links: [
              {
                label: "Digital Marketing Garland TX",
                url: "/services/digital-marketing-garland-tx",
              },
              {
                label: "Garland Website Design",
                url: "/services/garland-website-design",
              },
            ],
          },
          {
            title: "Grapevine",
            links: [
              {
                label: "Digital Marketing Grapevine TX",
                url: "/services/digital-marketing-grapevine-tx",
              },
              {
                label: "Grapevine Website Design & Development",
                url: "/services/grapevine-website-design-development",
              },
            ],
          },
        ],
        [
          {
            title: "Houston",
            links: [
              {
                label: "Digital Marketing Houston TX",
                url: "/services/digital-marketing-houston-tx",
              },
              {
                label: "Website Design Houston",
                url: "/services/website-design-houston",
              },
            ],
          },
          {
            title: "Irvine",
            links: [
              {
                label: "Digital Marketing Company Irvine",
                url: "/services/digital-marketing-company-irvine",
              },
              {
                label: "Website Design Irvine",
                url: "/services/website-design-irvine",
              },
            ],
          },
          {
            title: "Irving",
            links: [
              {
                label: "Digital Marketing Irving TX",
                url: "/services/digital-marketing-irving-tx",
              },
              {
                label: "Irving Web Design",
                url: "/services/irving-web-design",
              },
            ],
          },
          {
            title: "Las Vegas",
            links: [
              {
                label: "Las Vegas Website Design",
                url: "/services/las-vegas-website-design",
              },
            ],
          },
          {
            title: "Lewisville",
            links: [
              {
                label: "Digital Marketing Lewisville TX",
                url: "/services/digital-marketing-lewisville-tx",
              },
              {
                label: "Lewisville Website Design & Development",
                url: "/services/lewisville-website-design-development",
              },
            ],
          },
          {
            title: "McKinney",
            links: [
              {
                label: "Digital Marketing McKinney TX",
                url: "/services/digital-marketing-mckinney-tx",
              },
              {
                label: "Website Design McKinney",
                url: "/services/website-design-mckinney",
              },
            ],
          },
          {
            title: "Memphis",
            links: [
              {
                label: "Memphis Website Design Company",
                url: "/services/memphis-website-design-company",
              },
            ],
          },
        ],
        [
          {
            title: "Mesquite",
            links: [
              {
                label: "Digital Marketing Mesquite TX",
                url: "/services/digital-marketing-mesquite-tx",
              },
              {
                label: "Mesquite Website Design & Development",
                url: "/services/mesquite-website-design-development",
              },
            ],
          },
          {
            title: "New York",
            links: [
              {
                label: "New York Digital Marketing Agency",
                url: "/services/digital-marketing-agency",
              },
            ],
          },
          {
            title: "Oklahoma City",
            links: [
              {
                label: "Website Design Oklahoma City",
                url: "/services/website-design-oklohoma-city",
              },
            ],
          },
          {
            title: "Orange County",
            links: [
              {
                label: "Orange County Digital Marketing Company",
                url: "/services/orange-county-digital-marketing-company",
              },
              {
                label: "Orange County Web Design",
                url: "/services/orange-county-web-design",
              },
            ],
          },
          {
            title: "Phoenix",
            links: [
              {
                label: "Phoenix Web Design",
                url: "/services/phoenix-web-design",
              },
            ],
          },
          {
            title: "Plano",
            links: [
              {
                label: "Plano Digital Marketing & Web Design",
                url: "/services/plano-digital-marketing-web-design",
              },
              {
                label: "Plano Web Design Company",
                url: "/services/plano-web-design-company",
              },
            ],
          },
          {
            title: "Princeton",
            links: [
              {
                label: "Princeton Digital Marketing Agency",
                url: "https://www.b3net.com/texas/princeton-digital-marketing-agency.html",
              },
              {
                label: "Princeton Website Design & Development",
                url: "https://b3net.com/texas/princeton-website-design-development.html",
              },
            ],
          },
        ],
        [
          {
            title: "Rancho Santa Margarita",
            links: [
              {
                label: "Digital Marketing Rancho Santa Margarita",
                url: "/services/digital-marketing-rancho-santa-margarita",
              },
              {
                label: "Website Design Rancho Santa Margarita",
                url: "/services/website-design-rancho-santa-margarita",
              },
            ],
          },
          {
            title: "Richardson",
            links: [
              {
                label: "Digital Marketing Richardson",
                url: "/services/digital-marketing-richardson",
              },
              {
                label: "Richardson Website Design & Development",
                url: "/services/richardson-website-design-development",
              },
            ],
          },
          {
            title: "Riverside",
            links: [
              {
                label: "Riverside Digital Marketing Company",
                url: "/services/riverside-digital-marketing-company",
              },
              {
                label: "Web Design & Development Company Riverside",
                url: "/services/web-design-development-company-riverside",
              },
            ],
          },
          {
            title: "Rockwall",
            links: [
              {
                label: "Digital Marketing Rockwall TX",
                url: "/services/digital-marketing-rockwall-tx",
              },
              {
                label: "Rockwall Website Design & Development",
                url: "/services/rockwall-website-design-development",
              },
            ],
          },
          {
            title: "Rowlett",
            links: [
              {
                label: "Digital Marketing Rowlett TX",
                url: "/services/digital-marketing-rowlett-tx",
              },
              {
                label: "Rowlett Website Design & Development",
                url: "/services/rowlett-website-design-development",
              },
            ],
          },
          {
            title: "Southlake",
            links: [
              {
                label: "Digital Marketing Southlake TX",
                url: "/services/digital-marketing-southlake-tx",
              },
              {
                label: "Southlake Website Design & Development",
                url: "/services/southlake-website-design-development",
              },
            ],
          },
          {
            title: "Tustin",
            links: [
              {
                label: "Tustin Digital Marketing Company",
                url: "/services/digital-marketing-tustin",
              },
              {
                label: "Tustin Website Design",
                url: "/services/website-design-tustin",
              },
            ],
          },
        ],
      ],
    },
    {
      id: "australia",
      label: "Australia",
      columns: [[{ title: "Coming Soon...", links: [] }]],
    },
    {
      id: "new-Zealand",
      label: "New Zealand",
      columns: [
        [
          {
            title: "Web Design & Development",
            links: [
              {
                label: "Web Design Auckland",
                url: "/services/web-design-auckland",
              },
              {
                label: "Web Design Wellington",
                url: "/services/web-design-wellington",
              },
              {
                label: "Web Design Christchurch",
                url: "/services/web-design-christchurch",
              },
            ],
          },
          {
            title: "SEO and PPC",
            links: [
              {
                label: "SEO PPC Services Auckland",
                url: "/services/seo-ppc-services-auckland",
              },
              {
                label: "SEO PPC Services Wellington",
                url: "/services/seo-ppc-services-wellington",
              },
              {
                label: "SEO PPC Services Christchurch",
                url: "/services/seo-ppc-services-christchurch",
              },
            ],
          },
          {
            title: "Data Goveranance & Solutions",
            links: [
              {
                label: "Data Governance Solutions",
                url: "/services/data-governance-solutions",
              },
            ],
          },
        ],
      ],
    },
    {
      id: "india",
      label: "India",
      columns: [[{ title: "Coming Soon...", links: [] }]],
    },
  ],


  explore: [
    {
      title: "Web Design & Development",
      links: [
        {
          label: "Web Design",
          url: "/services/web-design-services",
        },
        {
          label: "Web Development",
          url: "/services/web-development-agency",
        },
        {
          label: "Ecommerce",
          url: "/services/ecommerce-web-development-service",
        },
        {
          label: "WordPress",
          url: "/services/wordpress-development-company",
        },
        {
          label: "Website Maintenance",
          url: "/services/website-maintenance-services-dallas",
        },
        {
          label: "Magento Web Design",
          url: "/services/magento-ecommerce-development",
        },
        {
          label: "Woocommerce",
          url: "/services/woocommerce-development-company",
        },
        {
          label: "Opencart Development",
          url: "/services/opencart-website-development-service",
        },
        {
          label: "Shopify Development",
          url: "/services/shopify-store-development-servce",
        },
        {
          label: "Laravel Development",
          url: "/services/laravel-development-company",
        },
      ],
    },
    {
      title: "AI-Powered Digital Marketing",
      links: [
        { label: "SEO", url: "/services/seo-services" },
        {
          label: "Local Search Marketing",
          url: "/services/local-search-marketing-services",
        },
        {
          label: "PPC Management",
          url: "/services/ppc-management-services",
        },
        {
          label: "Social Media Marketing",
          url: "/services/social-media-marketing-services",
        },
        {
          label: "Content Marketing",
          url: "/services/content-marketing-services",
        },
        {
          label: "Email Marketing",
          url: "/services/email-marketing-services-company",
        },
        {
          label: "App Store Optimization",
          url: "/services/app-store-optimization",
        },
        {
          label: "Online Reputation Management",
          url: "/services/online-reputation-management",
        },
        {
          label: "Zoho Consultant",
          url: "/services/zoho-crm-consultant-integration-service",
        },
        {
          label: "Go High Level Consultant",
          url: "/services/gohighlevel-expert-services",
        },
        {
          label: "Amazon Consultant",
          url: "/services/amazon-sales-consultant",
        },
      ],
    },
    {
      title: "AI Integration Services",
      links: [
        {
          label: "AI Integration Services",
          url: "/services/ai-integration-services",
        },
        {
          label: "Marketing Automation",
          url: "/services/marketing-automation-services-company",
        },
        { label: "AI Video", url: "/services/ai-video" },
        {
          label: "Customer Sentiment Analysis",
          url: "/services/customer-sentiment-analysis",
        },
        {
          label: "AI-Powered PPC Campaign Tool",
          url: "/services/ppc-campaign",
        },
      ],
    },
    {
      title: " Mobile App Development",
      links: [
        {
          label: "iOS Development",
          url: "/services/iphone-app-development-services",
        },
        {
          label: "Android Development",
          url: "/services/android-app-development",
        },
        {
          label: "PhoneGap Development",
          url: "/services/phonegap-hypbrid-app-development",
        },
      ],
    },
    {
      title: "Business Process Automation",
      links: [
        {
          label: "Data Governance and Data Strategy Services",
          url: "/services/data-governance",
        },
        {
          label: "Data Solutions",
          url: "/services/data-solutions",
        },
      ],
    },
    { title: "FAQ", url: "/faq" },
    { title: "Testimonials", url: "/testimonial" },
    { title: "Clients Login", url: "https://launchpad.37signals.com/signin" },
    { title: "Blog", url: "/blog" },
    { title: "Contact Us", url: "/contact" },
  ],

  socials: [
    {
      icon: "fa-linkedin-in",
      url: "https://www.linkedin.com/company/b3net-inc/",
    },
    {
      icon: "fa-youtube",
      url: "https://www.youtube.com/channel/UCkmWVQDZdVSfYRUPXTDPOrA",
    },
    { icon: "fa-instagram", url: "https://www.instagram.com/b3netinc/" },
    { icon: "fa-x-twitter", url: "https://x.com/b3net" },
    { icon: "fa-facebook-f", url: "https://www.facebook.com/B3NET" },
  ],


  partners: [
    {
      img: "https://www.b3net.com/wp-content/themes/b3net/assets/images/zoho.png",
      url: "https://www.zoho.com/partners/find-partner-profile.html?partnerid=d1b91bec8996f03d23320e2caa316b72",
      alt: "Zoho",
    },
    {
      img: "https://www.b3net.com/wp-content/themes/b3net/assets/images/google-authorised.png",
      url: "#",
      alt: "Google Authorised",
    },
  ],


  successImg: "https://www.b3net.com/wp-content/themes/b3net/assets/images/success-img.png",
};



export const footerData1: any = {
  locations: [
    {
      id: "usa",
      label: "USA",
      columns: [
        [
          {
            title: "Addison",
            links: [
              { label: "Addison Website Design Development", url: "addison-website-design-development" },
              { label: "Digital Marketing Addison", url: "digital-marketing-addison" },
            ],
          },
          {
            title: "Albuquerque",
            links: [
              { label: "Website Design Albuquerque", url: "website-design-albuquerque" },
            ],
          },
          {
            title: "Allen",
            links: [
              { label: "Allen Website Design Development", url: "allen-website-design-development" },
              { label: "Digital Marketing Allen TX", url: "digital-marketing-allen-tx" },
            ],
          },
          {
            title: "Arlington",
            links: [
              { label: "Arlington Web Design", url: "arlington-web-design" },
              { label: "Digital Marketing Arlington", url: "digital-marketing-arlington" },
            ],
          },
          {
            title: "Austin",
            links: [
              { label: "Austin Website Design Development", url: "austin-website-design-development" },
              { label: "Digital Marketing Austin", url: "digital-marketing-austin" },
            ],
          },
          {
            title: "Carrollton",
            links: [
              { label: "Carrollton Website Design Development", url: "carrollton-website-design-development" },
              { label: "Digital Marketing Carrollton", url: "digital-marketing-carrollton" },
            ],
          },
          {
            title: "Cedar Hill",
            links: [
              { label: "Cedar Hill Website Design & Development", url: "cedar-hill-website-design-development" },
              { label: "Digital Marketing Cedar Hill TX", url: "digital-marketing-cedar-hill-tx" },
            ],
          },
        ],

        [
          {
            title: "Coppell",
            links: [
              { label: "Coppell Website Design & Development", url: "coppell-website-design-development" },
              { label: "Digital Marketing Coppell TX", url: "digital-marketing-coppell-tx" },
            ],
          },
          {
            title: "Dallas",
            links: [
              { label: "Dallas Digital Marketing Company", url: "dallas-digital-marketing-company" },
              { label: "Dallas PPC Management Company", url: "dallas-ppc-management-company" },
              { label: "Dallas SEO Internet Marketing Service", url: "dallas-seo-internet-marketing-service" },
              { label: "Dallas Web Development Agency", url: "dallas-web-development-agency" },
              { label: "Digital Marketing Agency Dallas Fort Worth", url: "digital-marketing-agency-dallas-fort-worth" },
              { label: "Local SEO Agency Dallas", url: "local-seo-agency-dallas" },
              { label: "Social Media Marketing Agency Dallas", url: "social-media-marketing-agency-dallas" },
              { label: "Website Maintenance Services Dallas", url: "website-maintenance-services-dallas" },
            ],
          },
          {
            title: "Farmers Branch",
            links: [
              { label: "Digital Marketing Farmers Branch TX", url: "digital-marketing-farmers-branch-tx" },
              { label: "Farmers Branch Website Design & Development", url: "farmers-branch-website-design-development" },
            ],
          },
          {
            title: "Fort Worth",
            links: [
              { label: "Digital Marketing Fort Worth", url: "digital-marketing-fort-worth" },
              { label: "Website Design Fort Worth", url: "website-design-fort-worth" },
            ],
          },
        ],
      ],
    },

    {
      id: "australia",
      label: "Australia",
      columns: [[{ title: "Coming Soon...", links: [] }]],
    },

    {
      id: "new-Zealand",
      label: "New Zealand",
      columns: [
        [
          {
            title: "Web Design & Development",
            links: [
              { label: "Web Design Auckland", url: "web-design-auckland" },
              { label: "Web Design Wellington", url: "web-design-wellington" },
              { label: "Web Design Christchurch", url: "web-design-christchurch" },
            ],
          },
          {
            title: "SEO and PPC",
            links: [
              { label: "SEO PPC Services Auckland", url: "seo-ppc-services-auckland" },
              { label: "SEO PPC Services Wellington", url: "seo-ppc-services-wellington" },
              { label: "SEO PPC Services Christchurch", url: "seo-ppc-services-christchurch" },
            ],
          },
          {
            title: "Data Goveranance & Solutions",
            links: [
              { label: "Data Governance Solutions", url: "data-governance-solutions" },
            ],
          },
        ],
      ],
    },

    {
      id: "india",
      label: "India",
      columns: [[{ title: "Coming Soon...", links: [] }]],
    },
  ],

  explore: [
    {
      title: "Web Design & Development",
      links: [
        { label: "Web Design", url: "web-design-services" },
        { label: "Web Development", url: "web-development-agency" },
        { label: "Ecommerce", url: "ecommerce-web-development-service" },
        { label: "WordPress", url: "wordpress-development-company" },
        { label: "Website Maintenance", url: "website-maintenance-services-dallas" },
        { label: "Magento Web Design", url: "magento-ecommerce-development" },
        { label: "Woocommerce", url: "woocommerce-development-company" },
        { label: "Opencart Development", url: "opencart-website-development-service" },
        { label: "Shopify Development", url: "shopify-store-development-servce" },
        { label: "Laravel Development", url: "laravel-development-company" },
      ],
    },

    {
      title: "AI-Powered Digital Marketing",
      links: [
        { label: "SEO", url: "seo-services" },
        { label: "Local Search Marketing", url: "local-search-marketing-services" },
        { label: "PPC Management", url: "ppc-management-services" },
        { label: "Social Media Marketing", url: "social-media-marketing-services" },
        { label: "Content Marketing", url: "content-marketing-services" },
        { label: "Email Marketing", url: "email-marketing-services-company" },
        { label: "App Store Optimization", url: "app-store-optimization" },
        { label: "Online Reputation Management", url: "online-reputation-management" },
        { label: "Zoho Consultant", url: "zoho-crm-consultant-integration-service" },
        { label: "Go High Level Consultant", url: "gohighlevel-expert-services" },
        { label: "Amazon Consultant", url: "amazon-sales-consultant" },
      ],
    },

    { title: "FAQ", url: "faq" },
    { title: "Testimonials", url: "testimonial" },
    { title: "Blog", url: "blog" },
    { title: "Contact Us", url: "contact" },
  ],

  socials: [
    { icon: "fa-linkedin-in", url: "b3net-inc" },
    { icon: "fa-youtube", url: "UCkmWVQDZdVSfYRUPXTDPOrA" },
    { icon: "fa-instagram", url: "b3netinc" },
    { icon: "fa-x-twitter", url: "b3net" },
    { icon: "fa-facebook-f", url: "B3NET" },
  ],

  partners: [
    {
      img: "zoho.png",
      url: "find-partner-profile",
      alt: "Zoho",
    },
    {
      img: "google-authorised.png",
      url: "",
      alt: "Google Authorised",
    },
  ],

  successImg: "success-img.png",
};