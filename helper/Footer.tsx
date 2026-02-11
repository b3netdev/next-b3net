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
                    url: "https://b3net.com/texas/addison-website-design-development.html",
                  },
                  {
                    label: "Digital Marketing Addison",
                    url: "https://b3net.com/texas/digital-marketing-addison.html",
                  },
                ],
              },
              {
                title: "Albuquerque",
                links: [
                  {
                    label: "Website Design Albuquerque",
                    url: "https://b3net.com/new-mexico/website-design-albuquerque.html",
                  },
                ],
              },
              {
                title: "Allen",
                links: [
                  {
                    label: "Allen Website Design Development",
                    url: "https://b3net.com/texas/allen-website-design-development.html",
                  },
                  {
                    label: "Digital Marketing Allen TX",
                    url: "https://b3net.com/texas/digital-marketing-allen-tx.html",
                  },
                ],
              },
              {
                title: "Arlington",
                links: [
                  {
                    label: "Arlington Web Design",
                    url: "https://b3net.com/texas/arlington-web-design.html",
                  },
                  {
                    label: "Digital Marketing Arlington",
                    url: "https://b3net.com/texas/digital-marketing-arlington.html",
                  },
                ],
              },
              {
                title: "Austin",
                links: [
                  {
                    label: "Austin Website Design Development",
                    url: "https://b3net.com/texas/austin-website-design-development.html",
                  },
                  {
                    label: "Digital Marketing Austin",
                    url: "https://b3net.com/texas/digital-marketing-austin.html",
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
                    url: "https://b3net.com/texas/coppell-website-design-development.html",
                  },
                  {
                    label: "Digital Marketing Coppell TX",
                    url: "https://b3net.com/texas/digital-marketing-coppell-tx.html",
                  },
                ],
              },
              {
                title: "Dallas",
                links: [
                  {
                    label: "Dallas Digital Marketing Company",
                    url: "https://b3net.com/texas/dallas-digital-marketing-company.html",
                  },
                  {
                    label: "Dallas PPC Management Company",
                    url: "https://b3net.com/texas/dallas-ppc-management-company.html",
                  },
                  {
                    label: "Dallas SEO Internet Marketing Service",
                    url: "https://b3net.com/texas/dallas-seo-internet-marketing-service.html",
                  },
                  {
                    label: "Dallas Web Development Agency",
                    url: "https://b3net.com/texas/dallas-web-development-agency.html",
                  },
                  {
                    label: "Digital Marketing Agency Dallas Fort Worth",
                    url: "https://b3net.com/texas/digital-marketing-agency-dallas-fort-worth.html",
                  },
                  {
                    label: "Local SEO Agency Dallas",
                    url: "https://b3net.com/texas/local-seo-agency-dallas.html",
                  },
                  {
                    label: "Social Media Marketing Agency Dallas",
                    url: "https://b3net.com/texas/social-media-marketing-agency-dallas.html",
                  },
                  {
                    label: "Website Maintenance Services Dallas",
                    url: "https://b3net.com/texas/website-maintenance-services-dallas.html",
                  },
                ],
              },
              {
                title: "Farmers Branch",
                links: [
                  {
                    label: "Digital Marketing Farmers Branch TX",
                    url: "https://b3net.com/texas/digital-marketing-farmers-branch-tx.html",
                  },
                  {
                    label: "Farmers Branch Website Design & Development",
                    url: "https://b3net.com/texas/farmers-branch-website-design-development.html",
                  },
                ],
              },
              {
                title: "Fort Worth",
                links: [
                  {
                    label: "Digital Marketing Fort Worth",
                    url: "https://b3net.com/texas/digital-marketing-fort-worth.html",
                  },
                  {
                    label: "Website Design Fort Worth",
                    url: "https://b3net.com/texas/website-design-fort-worth.html",
                  },
                ],
              },
              {
                title: "Frisco",
                links: [
                  {
                    label: "Digital Marketing Frisco",
                    url: "https://b3net.com/texas/digital-marketing-frisco.html",
                  },
                  {
                    label: "Website Design Frisco",
                    url: "https://b3net.com/texas/website-design-frisco.html",
                  },
                ],
              },
              {
                title: "Garland",
                links: [
                  {
                    label: "Digital Marketing Garland TX",
                    url: "https://b3net.com/texas/digital-marketing-garland-tx.html",
                  },
                  {
                    label: "Garland Website Design",
                    url: "https://b3net.com/texas/garland-website-design.html",
                  },
                ],
              },
              {
                title: "Grapevine",
                links: [
                  {
                    label: "Digital Marketing Grapevine TX",
                    url: "https://b3net.com/texas/digital-marketing-grapevine-tx.html",
                  },
                  {
                    label: "Grapevine Website Design & Development",
                    url: "https://b3net.com/texas/grapevine-website-design-development.html",
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
                    url: "https://b3net.com/texas/digital-marketing-houston-tx.html",
                  },
                  {
                    label: "Website Design Houston",
                    url: "https://b3net.com/texas/website-design-houston.html",
                  },
                ],
              },
              {
                title: "Irvine",
                links: [
                  {
                    label: "Digital Marketing Company Irvine",
                    url: "https://b3net.com/california/digital-marketing-company-irvine.html",
                  },
                  {
                    label: "Website Design Irvine",
                    url: "https://b3net.com/california/website-design-irvine.html",
                  },
                ],
              },
              {
                title: "Irving",
                links: [
                  {
                    label: "Digital Marketing Irving TX",
                    url: "https://b3net.com/texas/digital-marketing-irving-tx.html",
                  },
                  {
                    label: "Irving Web Design",
                    url: "https://b3net.com/texas/irving-web-design.html",
                  },
                ],
              },
              {
                title: "Las Vegas",
                links: [
                  {
                    label: "Las Vegas Website Design",
                    url: "https://b3net.com/nevada/las-vegas-website-design.html",
                  },
                ],
              },
              {
                title: "Lewisville",
                links: [
                  {
                    label: "Digital Marketing Lewisville TX",
                    url: "https://b3net.com/texas/digital-marketing-lewisville-tx.html",
                  },
                  {
                    label: "Lewisville Website Design & Development",
                    url: "https://b3net.com/texas/lewisville-website-design-development.html",
                  },
                ],
              },
              {
                title: "McKinney",
                links: [
                  {
                    label: "Digital Marketing McKinney TX",
                    url: "https://b3net.com/texas/digital-marketing-mckinney-tx.html",
                  },
                  {
                    label: "Website Design McKinney",
                    url: "https://b3net.com/texas/website-design-mckinney.html",
                  },
                ],
              },
              {
                title: "Memphis",
                links: [
                  {
                    label: "Memphis Website Design Company",
                    url: "https://b3net.com/tennessee/memphis-website-design-company.html",
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
                    url: "https://b3net.com/texas/digital-marketing-mesquite-tx.html",
                  },
                  {
                    label: "Mesquite Website Design & Development",
                    url: "https://b3net.com/texas/mesquite-website-design-development.html",
                  },
                ],
              },
              {
                title: "New York",
                links: [
                  {
                    label: "New York Digital Marketing Agency",
                    url: "https://www.b3net.com/new-york/digital-marketing-agency.html",
                  },
                ],
              },
              {
                title: "Oklahoma City",
                links: [
                  {
                    label: "Website Design Oklahoma City",
                    url: "https://b3net.com/oklahoma/website-design-oklohoma-city.html",
                  },
                ],
              },
              {
                title: "Orange County",
                links: [
                  {
                    label: "Orange County Digital Marketing Company",
                    url: "https://b3net.com/california/orange-county-digital-marketing-company.html",
                  },
                  {
                    label: "Orange County Web Design",
                    url: "https://b3net.com/california/orange-county-web-design.html",
                  },
                ],
              },
              {
                title: "Phoenix",
                links: [
                  {
                    label: "Phoenix Web Design",
                    url: "https://b3net.com/arizona/phoenix-web-design.html",
                  },
                ],
              },
              {
                title: "Plano",
                links: [
                  {
                    label: "Plano Digital Marketing & Web Design",
                    url: "https://b3net.com/texas/plano-digital-marketing-web-design.html",
                  },
                  {
                    label: "Plano Web Design Company",
                    url: "https://b3net.com/texas/plano-web-design-company.html",
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
                    url: "https://b3net.com/california/digital-marketing-rancho-santa-margarita.html",
                  },
                  {
                    label: "Website Design Rancho Santa Margarita",
                    url: "https://b3net.com/california/website-design-rancho-santa-margarita.html",
                  },
                ],
              },
              {
                title: "Richardson",
                links: [
                  {
                    label: "Digital Marketing Richardson",
                    url: "https://b3net.com/texas/digital-marketing-richardson.html",
                  },
                  {
                    label: "Richardson Website Design & Development",
                    url: "https://b3net.com/texas/richardson-website-design-development.html",
                  },
                ],
              },
              {
                title: "Riverside",
                links: [
                  {
                    label: "Riverside Digital Marketing Company",
                    url: "https://b3net.com/california/riverside-digital-marketing-company.html",
                  },
                  {
                    label: "Web Design & Development Company Riverside",
                    url: "https://b3net.com/california/web-design-development-company-riverside.html",
                  },
                ],
              },
              {
                title: "Rockwall",
                links: [
                  {
                    label: "Digital Marketing Rockwall TX",
                    url: "https://b3net.com/texas/digital-marketing-rockwall-tx.html",
                  },
                  {
                    label: "Rockwall Website Design & Development",
                    url: "https://b3net.com/texas/rockwall-website-design-development.html",
                  },
                ],
              },
              {
                title: "Rowlett",
                links: [
                  {
                    label: "Digital Marketing Rowlett TX",
                    url: "https://b3net.com/texas/digital-marketing-rowlett-tx.html",
                  },
                  {
                    label: "Rowlett Website Design & Development",
                    url: "https://b3net.com/texas/rowlett-website-design-development.html",
                  },
                ],
              },
              {
                title: "Southlake",
                links: [
                  {
                    label: "Digital Marketing Southlake TX",
                    url: "https://b3net.com/texas/digital-marketing-southlake-tx.html",
                  },
                  {
                    label: "Southlake Website Design & Development",
                    url: "https://b3net.com/texas/southlake-website-design-development.html",
                  },
                ],
              },
              {
                title: "Tustin",
                links: [
                  {
                    label: "Tustin Digital Marketing Company",
                    url: "https://www.b3net.com/california/digital-marketing-tustin.html",
                  },
                  {
                    label: "Tustin Website Design",
                    url: "https://www.b3net.com/california/website-design-tustin.html",
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
              url: "https://www.b3net.com/web-design-services.html",
            },
            {
              label: "Web Development",
              url: "https://www.b3net.com/web-development-agency.html",
            },
            {
              label: "Ecommerce",
              url: "https://www.b3net.com/ecommerce-web-development-service.html",
            },
            {
              label: "WordPress",
              url: "https://www.b3net.com/wordpress-development-company.html",
            },
            {
              label: "Website Maintenance",
              url: "https://www.b3net.com/texas/website-maintenance-services-dallas.html",
            },
            {
              label: "Magento Web Design",
              url: "https://www.b3net.com/magento-ecommerce-development.html",
            },
            {
              label: "Woocommerce",
              url: "https://www.b3net.com/woocommerce-development-company.html",
            },
            {
              label: "Opencart Development",
              url: "https://www.b3net.com/opencart-website-development-service.html",
            },
            {
              label: "Shopify Development",
              url: "https://www.b3net.com/shopify-store-development-servce.html",
            },
            {
              label: "Laravel Development",
              url: "https://www.b3net.com/laravel-development-company.html",
            },
          ],
        },
        {
          title: "AI-Powered Digital Marketing",
          links: [
            { label: "SEO", url: "https://www.b3net.com/seo-services.html" },
            {
              label: "Local Search Marketing",
              url: "https://www.b3net.com/local-search-marketing-services.html",
            },
            {
              label: "PPC Management",
              url: "https://www.b3net.com/ppc-management-services.html",
            },
            {
              label: "Social Media Marketing",
              url: "https://www.b3net.com/social-media-marketing-services.html",
            },
            {
              label: "Content Marketing",
              url: "https://www.b3net.com/content-marketing-services.html",
            },
            {
              label: "Email Marketing",
              url: "https://www.b3net.com/email-marketing-services-company.html",
            },
            {
              label: "App Store Optimization",
              url: "https://www.b3net.com/app-store-optimization.html",
            },
            {
              label: "Online Reputation Management",
              url: "https://www.b3net.com/online-reputation-management.html",
            },
            {
              label: "Zoho Consultant",
              url: "https://www.b3net.com/zoho-crm-consultant-integration-service.html",
            },
            {
              label: "Go High Level Consultant",
              url: "https://www.b3net.com/gohighlevel-expert-services.html",
            },
            {
              label: "Amazon Consultant",
              url: "https://www.b3net.com/amazon-sales-consultant.html",
            },
          ],
        },
        {
          title: "AI Integration Services",
          links: [
            {
              label: "AI Integration Services",
              url: "https://www.b3net.com/ai-integration-services.html",
            },
            {
              label: "Marketing Automation",
              url: "https://www.b3net.com/marketing-automation-services-company.html",
            },
            { label: "AI Video", url: "https://www.b3net.com/ai-video.html" },
            {
              label: "Customer Sentiment Analysis",
              url: "https://www.b3net.com/ai-tools/customer-sentiment-analysis/",
            },
            {
              label: "AI-Powered PPC Campaign Tool",
              url: "https://www.b3net.com/ai-tools/ppc-campaign/",
            },
          ],
        },
        {
          title: " Mobile App Development",
          links: [
            {
              label: "iOS Development",
              url: "https://www.b3net.com/iphone-app-development-services.html",
            },
            {
              label: "Android Development",
              url: "https://www.b3net.com/android-app-development.html",
            },
            {
              label: "PhoneGap Development",
              url: "https://www.b3net.com/phonegap-hypbrid-app-development.html",
            },
          ],
        },
        {
          title: "Business Process Automation",
          links: [
            {
              label: "Data Governance and Data Strategy Services",
              url: "https://www.b3net.com/data-governance.html",
            },
            {
              label: "Data Solutions",
              url: "https://www.b3net.com/data-solutions.html",
            },
          ],
        },
        { title: "FAQ", url: "https://www.b3net.com/faq.html" },
        { title: "Testimonials", url: "https://www.b3net.com/testimonial.html" },
        { title: "Clients Login", url: "https://launchpad.37signals.com/signin" },
        { title: "Blog", url: "https://www.b3net.com/blog.html" },
        { title: "Contact Us", url: "https://www.b3net.com/contact.html" },
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