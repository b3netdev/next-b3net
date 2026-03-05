"use client";

import React from "react";

const footerData = {
  servingTitle: "Serving Your Location",
  accordionId: "accordionFlushExample",
  locations: [
    {
      key: "usa",
      label: "USA",
      collapseId: "flush-collapseOne",
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
      key: "australia",
      label: "Australia",
      collapseId: "flush-collapseTwo",
      columns: [[{ title: "Coming Soon..." }]],
    },
    {
      key: "new-Zealand",
      label: "New Zealand",
      collapseId: "flush-collapseThree",
      columns: [
        [
          {
            title: "Web Design & Development",
            links: [
              { label: "Web Design Auckland", url: "https://b3net.co.nz/web-design-auckland/" },
              { label: "Web Design Wellington", url: "https://b3net.co.nz/web-design-wellington/" },
              { label: "Web Design Christchurch", url: "https://b3net.co.nz/web-design-christchurch/" },
            ],
          },
          {
            title: "SEO and PPC",
            links: [
              { label: "SEO PPC Services Auckland", url: "https://b3net.co.nz/seo-ppc-services-auckland/" },
              { label: "SEO PPC Services Wellington", url: "https://b3net.co.nz/seo-ppc-services-wellington/" },
              { label: "SEO PPC Services Christchurch", url: "https://b3net.co.nz/seo-ppc-services-christchurch/" },
            ],
          },
          {
            title: "Data Goveranance & Solutions",
            links: [{ label: "Data Governance Solutions", url: "https://b3net.co.nz/data-governance-solutions/" }],
          },
        ],
      ],
      forceFullCol: true,
    },
    {
      key: "india",
      label: "India",
      collapseId: "flush-collapseFour",
      columns: [[{ title: "Coming Soon..." }]],
    },
  ],
  desktopTabs: [
    { tabId: "usa-tab", target: "#usa", paneId: "usa", label: "USA", active: true, icon: "−" },
    { tabId: "australia-tab", target: "#australia", paneId: "australia", label: "Australia", active: false, icon: "+" },
    {
      tabId: "new-Zealand-tab",
      target: "#new-Zealand",
      paneId: "new-Zealand",
      label: "New Zealand",
      active: false,
      icon: "+",
    },
    { tabId: "india-tab", target: "#india", paneId: "india", label: "India", active: false, icon: "+" },
  ],
  explore: {
    title: "Explore",
    items: [
      {
        title: "Web Design & Development",
        links: [
          { label: "Web Design", url: "https://www.b3net.com/web-design-services.html" },
          { label: "Web Development", url: "https://www.b3net.com/web-development-agency.html" },
          { label: "Ecommerce", url: "https://www.b3net.com/ecommerce-web-development-service.html" },
          { label: "WordPress", url: "https://www.b3net.com/wordpress-development-company.html" },
          { label: "Website Maintenance", url: "https://www.b3net.com/texas/website-maintenance-services-dallas.html" },
          { label: "Magento Web Design", url: "https://www.b3net.com/magento-ecommerce-development.html" },
          { label: "Woocommerce", url: "https://www.b3net.com/woocommerce-development-company.html" },
          { label: "Opencart Development", url: "https://www.b3net.com/opencart-website-development-service.html" },
          { label: "Shopify Development", url: "https://www.b3net.com/shopify-store-development-servce.html" },
          { label: "Laravel Development", url: "https://www.b3net.com/laravel-development-company.html" },
        ],
      },
      {
        title: "AI-Powered Digital Marketing",
        links: [
          { label: "SEO", url: "https://www.b3net.com/seo-services.html" },
          { label: "Local Search Marketing", url: "https://www.b3net.com/local-search-marketing-services.html" },
          { label: "PPC Management", url: "https://www.b3net.com/ppc-management-services.html" },
          { label: "Social Media Marketing", url: "https://www.b3net.com/social-media-marketing-services.html" },
          { label: "Content Marketing", url: "https://www.b3net.com/content-marketing-services.html" },
          { label: "Email Marketing", url: "https://www.b3net.com/email-marketing-services-company.html" },
          { label: "App Store Optimization", url: "https://www.b3net.com/app-store-optimization.html" },
          { label: "Online Reputation Management", url: "https://www.b3net.com/online-reputation-management.html" },
          { label: "Zoho Consultant", url: "https://www.b3net.com/zoho-crm-consultant-integration-service.html" },
          { label: "Go High Level Consultant", url: "https://www.b3net.com/gohighlevel-expert-services.html" },
          { label: "Amazon Consultant", url: "https://www.b3net.com/amazon-sales-consultant.html" },
        ],
      },
      {
        title: "AI Integration Services",
        links: [
          { label: "AI Integration Services", url: "https://www.b3net.com/ai-integration-services.html" },
          { label: " Marketing Automation", url: "https://www.b3net.com/marketing-automation-services-company.html" },
          { label: "AI Video", url: "https://www.b3net.com/ai-video.html" },
          {
            label: "Customer Sentiment Analysis",
            url: "https://www.b3net.com/ai-tools/customer-sentiment-analysis/",
          },
          { label: "AI-Powered PPC Campaign Tool", url: "https://www.b3net.com/ai-tools/ppc-campaign/" },
        ],
      },
      {
        title: " Mobile App Development",
        links: [
          { label: "iOS Development", url: "https://www.b3net.com/iphone-app-development-services.html" },
          { label: "Android Development", url: "https://www.b3net.com/android-app-development.html" },
          { label: "PhoneGap Development", url: "https://www.b3net.com/phonegap-hypbrid-app-development.html" },
        ],
      },
      {
        title: "Business Process Automation",
        links: [
          { label: "Data Governance and Data Strategy Services", url: "https://www.b3net.com/data-governance.html" },
          { label: "Data Solutions", url: "https://www.b3net.com/data-solutions.html" },
        ],
      },
      { title: "FAQ", url: "https://www.b3net.com/faq.html" },
      { title: "Testimonials", url: "https://www.b3net.com/testimonial.html" },
      { title: "Clients Login", url: "https://launchpad.37signals.com/signin" },
      { title: "Blog", url: "https://www.b3net.com/blog.html" },
      { title: "Contact Us", url: "https://www.b3net.com/contact.html" },
    ],
  },
  socials: {
    title: "Find us on Social Media",
    items: [
      { url: "https://www.linkedin.com/company/b3net-inc/", icon: "fa-linkedin-in" },
      { url: "https://www.youtube.com/channel/UCkmWVQDZdVSfYRUPXTDPOrA", icon: "fa-youtube" },
      { url: "https://www.instagram.com/b3netinc/", icon: "fa-instagram" },
      { url: "https://x.com/b3net", icon: "fa-x-twitter" },
      { url: "https://www.facebook.com/B3NET", icon: "fa-facebook-f" },
    ],
  },
  partners: {
    title: "Partners",
    items: [
      {
        url: "https://www.zoho.com/partners/find-partner-profile.html?partnerid=d1b91bec8996f03d23320e2caa316b72",
        img: "https://www.b3net.com/wp-content/themes/b3net/assets/images/zoho.png",
        alt: "Zoho",
        targetBlank: false,
      },
      {
        url: "#",
        img: "https://www.b3net.com/wp-content/themes/b3net/assets/images/google-authorised.png",
        alt: "Google authorised",
        targetBlank: false,
      },
    ],
  },
  successImg: "https://www.b3net.com/wp-content/themes/b3net/assets/images/success-img.png",
};

const NewFooter = () => {
  return (
    <div className="footer-col no-padding">
      <main className="page_content-1">
        <div className="footer-col ">
          <div className="top-footer">
            <div className="container">
              <div className="menu-list">
                <h3>{footerData.servingTitle}</h3>
              </div>

              {/* MOBILE ACCORDION */}
              <div
                className="accordion accordion-flush footer-accordian d-md-none"
                id={footerData.accordionId}
              >
                {footerData.locations.map((loc, idx) => (
                  <div className="accordion-item" key={loc.key}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${loc.collapseId}`}
                        aria-expanded="false"
                        aria-controls={loc.collapseId}
                      >
                        {loc.label}
                      </button>
                    </h2>

                    <div
                      id={loc.collapseId}
                      className="accordion-collapse collapse"
                      data-bs-parent={`#${footerData.accordionId}`}
                    >
                      <div className="accordion-body">
                        <div className="footer-col">
                          <div className="top-footer new-footer">
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-12 col-xl-12">
                                  <div className="menu-list">
                                    <div className="row d-flc-2">
                                      {loc.columns.map((col, cIdx) => (
                                        <div
                                          className={
                                            loc.forceFullCol
                                              ? "col-12 col-sm-12 col-lg-12 col-xl-12"
                                              : "col-6 col-sm-4 col-lg-3 col-xl-2"
                                          }
                                          key={cIdx}
                                        >
                                          <ul id="locationList">
                                            {col.map((city) => (
                                              <li key={city.title}>
                                                <a className="main-link">{city.title}</a>

                                                {city?.links && city?.links.length > 0 && (
                                                  <div className="dropdown-content">
                                                    {city?.links.map((l:any) => (
                                                      <a
                                                        key={l.url}
                                                        href={l.url}
                                                        target={l.url.includes("b3net.co.nz") ? "_blank" : undefined}
                                                      >
                                                        {l.label}
                                                      </a>
                                                    ))}
                                                  </div>
                                                )}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* DESKTOP TABS (structure unchanged, still bootstrap tabs) */}
              <div className="d-none d-md-block">
                <ul
                  className="nav nav-tabs d-flex justify-content-between"
                  id="myTab"
                  role="tablist"
                  style={{ gap: "10px" }}
                >
                  {footerData.desktopTabs.map((t) => (
                    <li className="nav-item flex-grow-1" role="presentation" key={t.tabId}>
                      <button
                        className={`nav-link ${t.active ? "active" : ""} d-flex justify-content-between w-100`}
                        id={t.tabId}
                        data-bs-toggle="tab"
                        data-bs-target={t.target}
                        type="button"
                        role="tab"
                        aria-controls={t.paneId}
                        aria-selected={t.active ? "true" : "false"}
                      >
                        {t.label} <span className="icon">{t.icon}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="tab-content" id="myTabContent">
                  {/* USA */}
                  <div className="tab-pane fade show active" id="usa" role="tabpanel" aria-labelledby="usa-tab">
                    <div className="footer-col">
                      <div className="top-footer new-footer">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12 col-xl-12">
                              <div className="menu-list">
                                <div className="row d-flc-2">
                                  {footerData.locations
                                    .find((l) => l.key === "usa")
                                    ?.columns.map((col, cIdx) => (
                                      <div className="col-6 col-sm-4 col-lg-3 col-xl-2" key={cIdx}>
                                        <ul id="locationList">
                                          {col.map((city) => (
                                            <li key={city.title}>
                                                
                                              <a className="main-link">{city.title}</a>
                                              {city?.links && city?.links.length > 0 && (
                                                <div className="dropdown-content">
                                                  {city?.links?.map((l:any) => (
                                                    <a key={l.url} href={l.url}>
                                                      {l.label}
                                                    </a>
                                                  ))}
                                                </div>
                                              )}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Australia */}
                  <div className="tab-pane fade" id="australia" role="tabpanel" aria-labelledby="australia-tab">
                    Coming Soon...
                  </div>

                  {/* New Zealand */}
                  <div
                    className="tab-pane fade"
                    id="new-Zealand"
                    role="tabpanel"
                    aria-labelledby="new-Zealand-tab"
                  >
                    <div className="footer-col">
                      <div className="top-footer new-footer">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12 col-xl-12">
                              <div className="menu-list">
                                <div className="row d-flc-2">
                                  <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                                    <ul id="locationList">
                                      {footerData.locations
                                        .find((l) => l.key === "new-Zealand")
                                        ?.columns?.[0]?.map((item) => (
                                          <li key={item.title}>
                                            <a className="main-link">{item.title}</a>
                                            {item.links && (
                                              <div className="dropdown-content">
                                                {item.links.map((l) => (
                                                  <a key={l.url} href={l.url} target="_blank">
                                                    {l.label}
                                                  </a>
                                                ))}
                                              </div>
                                            )}
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* India */}
                  <div className="tab-pane fade" id="india" role="tabpanel" aria-labelledby="india-tab">
                    Coming Soon...
                  </div>
                </div>
              </div>

              {/* EXPLORE */}
              <div className="row">
                <div className="col-12">
                  <div className="menu-list new-menu-list new-lst">
                    <h3>{footerData.explore.title}</h3>
                    <ul className="d-flx">
                      {footerData.explore.items.map((item) => (
                        <li key={item.title}>
                          {"links" in item ? (
                            <>
                              <a className="main-link">{item.title}</a>
                              <div className="dropdown-content">
                                {item?.links?.map((l) => (
                                  <a key={l.url} href={l.url}>
                                    {l.label}
                                  </a>
                                ))}
                              </div>
                            </>
                          ) : (
                            <a href={item.url}>{item.title}</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SOCIAL + PARTNERS + SUCCESS */}
              <div className="row mt-4 mt-lg-5">
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="menu-list new-menu-list">
                        <h3 className="">{footerData.socials.title}</h3>
                        <ul className="footer-social">
                          {footerData.socials.items.map((s) => (
                            <li key={s.url}>
                              <a href={s.url} target="_blank" title="">
                                <i className={`fa-brands ${s.icon}`}></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="menu-list">
                        <h3>{footerData.partners.title}</h3>
                        <ul className="partners">
                          {footerData.partners.items.map((p) => (
                            <li key={p.img}>
                              <a href={p.url} target={p.url !== "#" ? "_blank" : undefined}>
                                <img src={p.img} alt={p.alt} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="menu-list">
                    <div className="success">
                      <img src={footerData.successImg} alt="Success img" />
                    </div>
                  </div>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewFooter;