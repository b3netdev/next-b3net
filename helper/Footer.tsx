import { BASE_URL } from "@/lib/url";

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
                url: "/services/web-design-services-in-addison",
              },
              {
                label: "Digital Marketing Addison",
                url: "/services/digital-marketing-in-addison",
              },
            ],
          },
          {
            title: "Albuquerque",
            links: [
              {
                label: "Website Design Albuquerque",
                url: "/services/albuquerque-web-design",
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
                url: "/services/digital-marketing-in-allen",
              },
            ],
          },
          {
            title: "Arlington",
            links: [
              {
                label: "Arlington Web Design",
                url: "/services/website-design-development-arlington",
              },
              {
                label: "Digital Marketing Arlington",
                url: "/services/digital-marketing-in-arlington",
              },
            ],
          },
          {
            title: "Austin",
            links: [
              {
                label: "Austin Website Design Development",
                url: "/services/web-design-and-development",
              },
              {
                label: "Digital Marketing Austin",
                url: "/services/tustin-digital-marketing-company",
              },
            ],
          },
          {
            title: "Carrollton",
            links: [
              {
                label: "Carrollton Website Design Development",
                url: "/services/website-design-development-carrollton",
              },
              {
                label: "Digital Marketing Carrollton",
                url: "/services/digital-marketing-in-carrollton",
              },
            ],
          },
          {
            title: "Cedar Hill",
            links: [
              {
                label: "Cedar Hill Website Design & Development",
                url: "/services/web-design-and-development-in-cedar-hill",
              },
              {
                label: "Digital Marketing Cedar Hill TX",
                url: "/services/digital-marketing-in-cedar-hill",
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
                url: "/services/web-design-services-in-coppell",
              },
              {
                label: "Digital Marketing Coppell TX",
                url: "/services/digital-marketing-in-coppell",
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
                url: "/services/dallas-ppc-management",
              },
              {
                label: "Dallas SEO Internet Marketing Service",
                url: "/services/dallas-seo-agency",
              },
              {
                label: "Dallas Web Development Agency",
                url: "/services/web-development-service",
              },
              {
                label: "Digital Marketing Agency Dallas Fort Worth",
                url: "/services/digital-marketing-forth-worth",
              },
              {
                label: "Local SEO Agency Dallas",
                url: "/services/dallas-local-seo-agency",
              },
              {
                label: "Social Media Marketing Agency Dallas",
                url: "/services/dallas-social-media-marketing",
              },
              {
                label: "Website Maintenance Services Dallas",
                url: "/services/website-maintenance-service-dallas",
              },
            ],
          },
          {
            title: "Farmers Branch",
            links: [
              {
                label: "Digital Marketing Farmers Branch TX",
                url: "/services/digital-marketing-in-farmers-branch",
              },
              {
                label: "Farmers Branch Website Design & Development",
                url: "/services/web-design-and-development-in-farmers-branch",
              },
            ],
          },
          {
            title: "Fort Worth",
            links: [
              {
                label: "Digital Marketing Fort Worth",
                url: "/services/digital-marketing-in-fort-worth",
              },
              {
                label: "Website Design Fort Worth",
                url: "/services/website-design-development-fort-worth",
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
                url: "/services/web-design-services-in-frisco",
              },
            ],
          },
          {
            title: "Garland",
            links: [
              {
                label: "Digital Marketing Garland TX",
                url: "/services/digital-marketing-in-garland",
              },
              {
                label: "Garland Website Design",
                url: "/services/garland-website-design-development",
              },
            ],
          },
          {
            title: "Grapevine",
            links: [
              {
                label: "Digital Marketing Grapevine TX",
                url: "/services/digital-marketing-in-grapevine",
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
                url: "/services/digital-marketing-in-houston",
              },
              {
                label: "Website Design Houston",
                url: "/services/web-design-and-development-in-houston",
              },
            ],
          },
          {
            title: "Irvine",
            links: [
              {
                label: "Digital Marketing Company Irvine",
                url: "/services/digital-marketing-company-in-irvine-ca",
              },
              {
                label: "Website Design Irvine",
                url: "/services/irvine-web-design",
              },
            ],
          },
          {
            title: "Irving",
            links: [
              {
                label: "Digital Marketing Irving TX",
                url: "/services/irving-digital-marketing",
              },
              {
                label: "Irving Web Design",
                url: "/services/web-design-and-development-irving",
              },
            ],
          },
          {
            title: "Las Vegas",
            links: [
              {
                label: "Las Vegas Website Design",
                url: "/services/las-vegas-web-design",
              },
            ],
          },
          {
            title: "Lewisville",
            links: [
              {
                label: "Digital Marketing Lewisville TX",
                url: "/services/dallas-digital-marketing-company-2",
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
                url: "/services/digital-marketing-in-mckinney",
              },
              {
                label: "Website Design McKinney",
                url: "/services/web-design-and-development-in-mckinney",
              },
            ],
          },
          {
            title: "Memphis",
            links: [
              {
                label: "Memphis Website Design Company",
                url: "/services/memphis-website-design-development",
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
                url: "/services/digital-marketing-in-mesquite",
              },
              {
                label: "Mesquite Website Design & Development",
                url: "/services/web-design-and-development-in-mesquite",
              },
            ],
          },
          {
            title: "New York",
            links: [
              {
                label: "New York Digital Marketing Agency",
                url: "/services/new-york-digital-marketing-company",
              },
            ],
          },
          {
            title: "Oklahoma City",
            links: [
              {
                label: "Website Design Oklahoma City",
                url: "/services/oklahoma-website-design",
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
                url: "/services/orange-county-web-design-2",
              },
            ],
          },
          {
            title: "Phoenix",
            links: [
              {
                label: "Phoenix Web Design",
                url: "/services/website-design-development-in-phoenix",
              },
            ],
          },
          {
            title: "Plano",
            links: [
              {
                label: "Plano Digital Marketing & Web Design",
                url: "/services/plano-digital-marketing",
              },
              {
                label: "Plano Web Design Company",
                url: "/services/riverside-web-design",
              },
            ],
          },
          {
            title: "Princeton",
            links: [
              {
                label: "Princeton Digital Marketing Agency",
                url: "/services/digital-marketing-agency-in-princeton",
              },
              {
                label: "Princeton Website Design & Development",
                url: "/services/princetonwebsite-design-development",
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
                url: "/services/digital-marketing-company-in-rancho-santa-margarita",
              },
              {
                label: "Website Design Rancho Santa Margarita",
                url: "/services/rancho-santa-margarita-web-design",
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
                url: "/services/digital-marketing-company-in-riverside-ca",
              },
              {
                label: "Web Design & Development Company Riverside",
                url: "/services/orange-county-web-design",
              },
            ],
          },
          {
            title: "Rockwall",
            links: [
              {
                label: "Digital Marketing Rockwall TX",
                url: "/services/digital-marketing-in-rockwall",
              },
              {
                label: "Rockwall Website Design & Development",
                url: "/services/website-design-development-in-rockwall",
              },
            ],
          },
          {
            title: "Rowlett",
            links: [
              {
                label: "Digital Marketing Rowlett TX",
                url: "/services/digital-marketing-in-rowlett",
              },
              {
                label: "Rowlett Website Design & Development",
                url: "/services/web-design-and-development-in-rowlett",
              },
            ],
          },
          {
            title: "Southlake",
            links: [
              {
                label: "Digital Marketing Southlake TX",
                url: "/services/digital-marketing-company-in-southlake-tx",
              },
              // {
              //   label: "Southlake Website Design & Development",
              //   url: "/services/southlake-website-design-development",
              // },
            ],
          },
          {
            title: "Tustin",
            links: [
              {
                label: "Tustin Digital Marketing Company",
                url: "/services/digital-marketing-company-in-tustin-ca",
              },
              {
                label: "Tustin Website Design",
                url: "/services/tustin-web-design",
              },
            ],
          },
        ],
      ],
    },
    {
      id: "australia",
      label: "Australia",
      columns: [
        [
          { title:"Sydney",
            links:[
              {
                label:"SEO & PPC Services Sydney",
                url:'https://au.b3net.com/seo-ppc-company-sydney/'
              },
              {
                label:"Web Design and Development Sydney",
                url:'https://au.b3net.com/sydney-website-design-development/'
              },
            ]
          },
          {
            title:"Melbourne",
            links:[
              {
                label:"SEO & PPC Services Melbourne",
                url:'https://au.b3net.com/seo-ppc-company-melbourne/'
              },
              {
                label:"Web Design and Development Melbourne – Future-Ready Websites That Deliver",
                url:'https://au.b3net.com/melbourne-web-design-melbourne/'
              },
            ]
          },
          {
            title:"Brisbane",
            links:[
              {
                label:"Web Design and Development Brisbane",
                url:'https://au.b3net.com/brisbane-website-design-development/'
              },
            ]
          },

        ]
      ],
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
                url: "https://b3net.co.nz/web-design-auckland/",
              },
              {
                label: "Web Design Wellington",
                url: "https://b3net.co.nz/web-design-wellington/",
              },
              {
                label: "Web Design Christchurch",
                url: "https://b3net.co.nz/web-design-christchurch/",
              },
            ],
          },
          {
            title: "SEO and PPC",
            links: [
              {
                label: "SEO PPC Services Auckland",
                url: "https://b3net.co.nz/seo-ppc-services-auckland/",
              },
              {
                label: "SEO PPC Services Wellington",
                url: "https://b3net.co.nz/seo-ppc-services-wellington/",
              },
              {
                label: "SEO PPC Services Christchurch",
                url: "https://b3net.co.nz/seo-ppc-services-christchurch/",
              },
            ],
          },
          {
            title: "Data Goveranance & Solutions",
            links: [
              {
                label: "Data Governance Solutions",
                url: "https://b3net.co.nz/data-governance-solutions/",
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
          url: "/services/web-development-service-2",
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
          url: "/services/website-maintenance-service-dallas",
        },
        {
          label: "Magento Web Design",
          url: "/services/magento-development-company",
        },
        {
          label: "Woocommerce",
          url: "/services/woocommerce-development-company",
        },
        {
          label: "Opencart Development",
          url: "/services/opencart-web-development-services",
        },
        {
          label: "Shopify Development",
          url: "/services/laravel-development-company",
        },
        {
          label: "Laravel Development",
          url: "/services/laravel-development-company-2",
        },
      ],
    },
    {
      title: "AI-Powered Digital Marketing",
      links: [
        { label: "SEO", url: "/services/seo-services-2" },
        {
          label: "Local Search Marketing",
          url: "/services/local-search-marketing-4",
        },
        {
          label: "PPC Management",
          url: "/services/ppc-management",
        },
        {
          label: "Social Media Marketing",
          url: "/services/social-media-marketing-service",
        },
        {
          label: "Content Marketing",
          url: "/services/content-marketing-service",
        },
        {
          label: "Email Marketing",
          url: "/services/email-marketing-services",
        },
        {
          label: "App Store Optimization",
          url: "/services/app-store-optimization-2",
        },
        {
          label: "Online Reputation Management",
          url: "/services/online-reputation-management-2",
        },
        {
          label: "Zoho Consultant",
          url: "/services/zoho-consultant",
        },
        {
          label: "Go High Level Consultant",
          url: "/services/gohighlevel-crm-services",
        },
        {
          label: "Amazon Consultant",
          url: "/services/amazon-marketing-service",
        },
      ],
    },
    {
      title: "AI Integration Services",
      links: [
        {
          label: "AI Integration Services",
          url: "/services/ai-integration",
        },
        {
          label: "Marketing Automation",
          url: "/services/marketing-automation-services-2",
        },
        { label: "AI Video", url: "/services/ai-video" },
        // {
        //   label: "Customer Sentiment Analysis",
        //   url: "/services/customer-sentiment-analysis",
        // },
        // {
        //   label: "AI-Powered PPC Campaign Tool",
        //   url: "/services/ppc-campaign",
        // },
      ],
    },
    {
      title: " Mobile App Development",
      links: [
        {
          label: "iOS Development",
          url: "/services/ios-app-development-company",
        },
        {
          label: "Android Development",
          url: "/services/android-app-development",
        },
        {
          label: "PhoneGap Development",
          url: "/services/hybrid-app-phonegap-development",
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
    { title: "Contact Us", url: "contact" },
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
      img: `${BASE_URL}/wp-content/themes/b3net/assets/images/zoho.png`,
      url: "https://www.zoho.com/partners/find-partner-profile.html?partnerid=d1b91bec8996f03d23320e2caa316b72",
      alt: "Zoho Authorized Partner badge",
    },
    {
      img: `${BASE_URL}/wp-content/themes/b3net/assets/images/google-authorised.png`,
      url: "#",
      alt: "Google Cloud Partner badge",
    },
  ],


  successImg: `${BASE_URL}/wp-content/themes/b3net/assets/images/success-img.png`,
};



