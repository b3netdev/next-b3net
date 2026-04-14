import menuList1 from "../assets/images/menu-list-icon-1.png";
import menuList2 from "../assets/images/menu-list-icon-2.png";
import menuList3 from "../assets/images/menu-list-icon-3.png";
import menuList4 from "../assets/images/menu-list-icon-4.png";
import menuList5 from "../assets/images/menu-list-icon-5.png";

type ServiceMegaMenuItem = {
    label: string;
    to?: string;
    state?: Record<string, any>;
    slug?: string
};

type ServiceMegaMenuGroup = {
    title: string;
    icon: any;
    listType: "dot" | "ul";
    dotSize?: number;
    items: ServiceMegaMenuItem[];
};

type ServiceMegaMenuColumn = {
    type: "groups";
    colClass: string;
    groups: ServiceMegaMenuGroup[];
};


export const menulist = [
    {
        "id": 13476,
        "parent_id": 0,
        "title": "Home",
        "object_id": 12048,
        "page": {
            "id": 12048,
            "type": "page",
            "title": "Home",
            "content": "",
            "excerpt": "",
            "slug": "home",
            "status": "publish",

            "acf": [],
            "acf_formatted": []
        },
        "children": []
    },
    {
        "id": 13477,
        "parent_id": 0,
        "title": "About Us",
        "type": "post_type",
        "object": "page",
        "object_id": 12476,
        "page": {
            "id": 12476,
            "type": "page",
            "title": "About",
            "excerpt": "Are You Digital?",
            "slug": "about-company",
            "status": "publish",
        },
        "children": [
            {
                "id": 13483,
                "parent_id": 13477,
                "title": "About Us",
                "object_id": 12476,
                "page": {
                    "id": 12476,
                    "type": "page",
                    "title": "About",
                    "content": "<h1>Are You Digital?</h1>\n",
                    "excerpt": "Are You Digital?",
                    "slug": "about-company",
                    "status": "publish",
                },
                "children": []
            },
            {
                "id": 13484,
                "parent_id": 13477,
                "title": "FAQ",
                "object_id": 12385,
                "page": {
                    "id": 12385,
                    "type": "page",
                    "title": "FAQ",
                    "excerpt": "Frequently Asked Questions",
                    "slug": "faq",
                    "status": "publish"
                },
                "children": []
            },
            {
                "id": 13485,
                "parent_id": 13477,
                "title": "Testimonial",
                "object_id": 12359,
                "page": {
                    "id": 12359,
                    "type": "page",
                    "title": "Testimonial",
                    "excerpt": "What Our Clients Say About B3NET",
                    "slug": "testimonial",
                    "status": "publish",
                },
                "children": []
            },
            {
                "id": 13486,
                "parent_id": 13477,
                "title": "Featured Clients",
                "object_id": 12836,
                "target": "",
                "classes": [],
                "page": {
                    "id": 12836,
                    "type": "page",
                    "title": "Featured Clients",
                    "slug": "featured-clients",
                    "status": "publish",
                },
                "children": []
            }
        ]
    },
    {
        "id": 13478,
        "parent_id": 0,
        "title": "Services",
        "object_id": 12050,
        "target": "",
        "classes": [],
        "page": {
            "id": 12050,
            "type": "page",
            "title": "Services",
            "slug": "services",
            "status": "publish",

        },
        "children": [1, 2, 3, 4, 5]

    },
    {
        "id": 13482,
        "parent_id": 0,
        "title": "Portfolio",
        "object_id": 12286,
        "page": {
            "id": 12286,
            "type": "page",
            "title": "Portfolio",
            "slug": "portfolio",
            "status": "publish",

        },
        "children": []
    },
    {
        "id": 13479,
        "parent_id": 0,
        "title": "We Solve",
        "type": "custom",
        "object": "custom",
        "object_id": 13479,
        "children": [
            {
                "id": 13490,
                "parent_id": 13479,
                "title": "Website Not Generating Leads",
                "object_id": 7731,
                "page": {
                    "id": 7731,
                    "type": "post",
                    "title": "Why Is My Website Not Generating Leads and How To Fix It?",
                    
                    "excerpt": "Today&#8217;s digital age demands a robust online presence for any brand to be successful. While your website serves as a [&hellip;]",
                    "slug": "website-not-generating-leads-how-to-fix-it",
                    "status": "publish",

                    "acf": [],
                    "acf_formatted": []
                },
                "children": []
            },
            {
                "id": 13569,
                "parent_id": 13479,
                "title": "7+ Reasons Why Your Website Is Not Showing Up on Google",
                "object_id": 7810,
                "target": "",
                "classes": [],
                "page": {
                    "id": 7810,
                    "type": "post",
                    "title": "7+ Reasons Why Your Website Is Not Showing Up on Google",
                    "slug": "7-reasons-why-your-website-is-not-showing-up-how-to-fix-it",
                },
                "children": []
            },
            {
                "id": 13570,
                "parent_id": 13479,
                "title": "Why is My Website Traffic Not Converting? ",
                "object_id": 7863,
                "target": "",
                "classes": [],
                "page": {
                    "id": 7863,
                    "type": "post",
                    "title": "Why is My Website Traffic Not Converting?",
                    "slug": "9-reasons-why-my-website-traffic-not-converting",
                    "status": "publish",

                    "acf": [],
                    "acf_formatted": []
                },
                "children": []
            },
            {
                "id": 13571,
                "parent_id": 13479,
                "title": "Why Is Your Website Not Making Sales?",
                "object_id": 8210,
                "page": {
                    "id": 8210,
                    "type": "post",
                    "title": "Why Is Your Website Not Making Sales?",
                    "slug": "why-is-your-website-not-making-sales-and-how-to-fix-it",
                    "status": "publish",

                    "acf": [],
                    "acf_formatted": []
                },
                "children": []
            }
        ]
    },
    {
        "id": 13480,
        "parent_id": 0,
        "title": "Blog",
        "object_id": 12408,
        "target": "",
        "classes": [],
        "page": {
            "id": 12408,
            "type": "page",
            "title": "Blog",
            "content": "",
            "excerpt": "",
            "slug": "blog",
            "status": "publish",

            "acf": [],
            "acf_formatted": []
        },
        "children": []
    },
    {
        "id": 13481,
        "parent_id": 0,
        "title": "Contact Us",
        "object_id": 12462,
        "target": "",
        "classes": [],
        "page": {
            "id": 12462,
            "type": "page",
            "title": "Contact",
            "excerpt": "Request for a Service",
            "slug": "contact",
            "status": "publish",

        },
        "children": []
    }
]

export const serviceMegaMenuColumns: ServiceMegaMenuColumn[] = [
    {
        type: "groups",
        colClass: "col-xxl-3 col-lg-4 col-sm-12",
        groups: [
            {
                title: "Website Design & Development",
                icon: menuList1,
                listType: "dot",
                dotSize: 10,
                items: [
                    { label: "Web Design", slug: "web-design-services" },
                    { label: "Web Development", slug: "web-development-service-2" },
                    { label: "Ecommerce", slug: "ecommerce-web-development-service" },
                    { label: "WordPress", slug: "wordpress-development-company" },
                    { label: "Website Maintenance", slug: "website-maintenance-service-dallas" },
                    { label: "Magento Web Design", slug: "magento-development-company" },
                    { label: "Woocommerce", slug: "woocommerce-development-company" },
                    { label: "Opencart Development", slug: "opencart-web-development-services" },
                    { label: "Shopify Development", slug: "laravel-development-company" },
                    { label: "Laravel Development", slug: "laravel-development-company-2" },
                ],
            },
            {
                title: "Mobile App Development",
                icon: menuList2,
                listType: "dot",
                dotSize: 10,
                items: [
                    { label: "iOS Development", slug: "ios-app-development-company" },
                    { label: "Android Development", slug: "android-app-development" },
                    { label: "PhoneGap Development", slug: "hybrid-app-phonegap-development" },
                ],
            },
        ],
    },
    {
        type: "groups",
        colClass: "col-xxl-3 col-lg-4 col-sm-12",
        groups: [
            {
                title: "AI-Powered Digital Marketing",
                icon: menuList3,
                listType: "dot",
                dotSize: 10,
                items: [
                    { label: "SEO", slug: "seo-services-2" },
                    { label: "Local Search Marketing", slug: "local-search-marketing-4" },
                    { label: "PPC Management", slug: "ppc-management" },
                    { label: "Social Media Marketing", slug: "social-media-marketing-service" },
                    { label: "Content Marketing", slug: "content-marketing-service" },
                    { label: "Email Marketing", slug: "email-marketing-services" },
                    { label: "App Store Optimization", slug: "app-store-optimization-2" },
                    { label: "Zoho Consultant", slug: "zoho-consultant" },
                    { label: "Go High Level Consultant", slug: "gohighlevel-crm-services" },
                    { label: "Amazon Consultant", slug: "amazon-marketing-service" },
                ],
            },
            {
                title: "Business Process Automation",
                icon: menuList4,
                listType: "ul",
                items: [
                    { label: "Data Governance and Data Strategy Services", slug: "data-governance" },
                    { label: "Data Solutions", slug: "data-solutions" },
                ],
            },
        ],
    },
    {
        type: "groups",
        colClass: "col-xxl-3 col-lg-4 col-sm-12",
        groups: [
            {
                title: "AI Integration Services",
                icon: menuList5,
                listType: "dot",
                dotSize: 10,
                items: [
                    { label: "AI Integration Services", slug: "ai-integration" },
                    { label: "Marketing Automation", slug: "marketing-automation-services-2" },
                    { label: "AI Video", slug: "ai-video" },
                    // { label: "Customer Sentiment Analysis", slug: "customer-sentiment-analysis" },
                    // { label: "AI-Powered PPC Campaign Tool", slug: "/ai-tools/ppc-campaign/" },
                ],
            },
        ],
    },
];

    export const sluglist = [
    { slug: "web-design-services" },
    { slug: "web-development-service-2" },
    { slug: "ecommerce-web-development-service" },
    { slug: "wordpress-development-company" },
    { slug: "website-maintenance-service-dallas" },
    { slug: "magento-development-company" },
    { slug: "woocommerce-development-company" },
    { slug: "opencart-web-development-services" },
    { slug: "laravel-development-company" },
    { slug: "laravel-development-company-2" },
    { slug: "ios-app-development-company" },
    { slug: "android-app-development" },
    { slug: "hybrid-app-phonegap-development" },
    { slug: "seo-services-2" },
    { slug: "local-search-marketing-4" },
    { slug: "ppc-management" },
    { slug: "social-media-marketing-service" },
    { slug: "content-marketing-service" },
    { slug: "email-marketing-services" },
    { slug: "app-store-optimization-2" },
    { slug: "zoho-consultant" },
    { slug: "amazon-marketing-service" },
    { slug: "data-governance" },
    { slug: "data-solutions" },
    { slug: "local-search-marketing-4" },
    { slug: "oklahoma-website-design" },
    { slug: "opencart-web-development-services" },
    { slug: "digital-marketing-in-addison" },
    { slug: "orange-county-web-design-2" },
    { slug: "ai-integration" },
    { slug: "local-search-marketing-4" },
    { slug: "social-media-marketing-service" },
    { slug: "marketing-automation-services-2" },
    { slug: "ai-video" },
    { slug: "data-engineering" },
    { slug: "dallas-digital-marketing-company" },
    { slug: "dallas-ppc-management" },
    { slug: "dallas-social-media-marketing" },
    { slug: "custom-web-application-development" },
    {slug:"web-design-services-in-addison"},
    {slug:"digital-marketing-in-addison"},
    {slug:"albuquerque-web-design"},
    {slug:"allen-website-design-development"},
    {slug:"digital-marketing-in-allen"},
    {slug:"website-design-development-arlington"},
    {slug:"digital-marketing-in-arlington"},
    {slug:"web-design-and-development"},
    {slug:"tustin-digital-marketing-company"},
    {slug:"website-design-development-carrollton"},
    {slug:"digital-marketing-in-carrollton"},
    {slug:"web-design-and-development-in-cedar-hill"},
    {slug:"digital-marketing-in-cedar-hill"},
    {slug:"web-design-services-in-coppell"},
    {slug:"digital-marketing-in-coppell"},
    {slug:"dallas-digital-marketing-company"},
    {slug:"dallas-ppc-management"},
    {slug:"dallas-seo-agency"},
    {slug:"web-development-service"},
    {slug:"digital-marketing-forth-worth"},
    {slug:"dallas-local-seo-agency"},
    {slug:"dallas-social-media-marketing"},
    {slug:"website-maintenance-service-dallas"},
    {slug:"digital-marketing-in-farmers-branch"},
    {slug:"web-design-and-development-in-farmers-branch"},
    {slug:"digital-marketing-in-fort-worth"},
    {slug:"website-design-development-fort-worth"},
    {slug:"digital-marketing-frisco"},
    {slug:"web-design-services-in-frisco"},
    {slug:"digital-marketing-in-garland"},
    // {slug:"garland-website-design-development"},
    {slug:"digital-marketing-in-grapevine"},
    {slug:"grapevine-website-design-development"},
    {slug:"digital-marketing-in-houston"},
    {slug:"web-design-and-development-in-houston"},
    {slug:"digital-marketing-company-in-irvine-ca"},
    {slug:"irvine-web-design"},
    {slug:"irving-digital-marketing"},
    {slug:"web-design-and-development-irving"},
    {slug:"las-vegas-web-design"},
    {slug:"dallas-digital-marketing-company-2"},
    {slug:"lewisville-website-design-development"},
    {slug:"digital-marketing-in-mckinney"},
    {slug:"web-design-and-development-in-mckinney"},
    {slug:"memphis-website-design-development"},
    {slug:"digital-marketing-in-mesquite"},
    {slug:"web-design-and-development-in-mesquite"},
    {slug:"new-york-digital-marketing-company"},
    {slug:"oklahoma-website-design"},
    {slug:"orange-county-digital-marketing-company"},
    {slug:"orange-county-web-design-2"},
    {slug:"website-design-development-in-phoenix"},
    {slug:"plano-digital-marketing"},
    {slug:"riverside-web-design"},
    {slug:"digital-marketing-agency-in-princeton"},
    {slug:"princetonwebsite-design-development"},
    {slug:"digital-marketing-company-in-rancho-santa-margarita"},
    {slug:"rancho-santa-margarita-web-design"},
    {slug:"digital-marketing-richardson"},
    {slug:"richardson-website-design-development"},
    {slug:"digital-marketing-company-in-riverside-ca"},
    {slug:"orange-county-web-design"},
    {slug:"digital-marketing-in-rockwall"},
    {slug:"website-design-development-in-rockwall"},
    {slug:"digital-marketing-in-rowlett"},
    {slug:"web-design-and-development-in-rowlett"},
    {slug:"digital-marketing-company-in-southlake-tx"},
    // {slug:"southlake-website-design-development"},
    {slug:"digital-marketing-company-in-tustin-ca"},
    {slug:"tustin-web-design"}
]