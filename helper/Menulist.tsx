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
                    "slug": "website-not-making-sales",
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
                    { label: "Web Development", slug: "web-development-agency" },
                    { label: "Ecommerce", slug: "ecommerce-web-development-service" },
                    { label: "WordPress", slug: "wordpress-development-company" },
                    { label: "Website Maintenance", slug: "texas/website-maintenance-services-dallas" },
                    { label: "Magento Web Design", slug: "magento-ecommerce-development" },
                    { label: "Woocommerce", slug: "woocommerce-development-company" },
                    { label: "Opencart Development", slug: "opencart-website-development-service" },
                    { label: "Shopify Development", slug: "shopify-store-development-servce" },
                    { label: "Laravel Development", slug: "laravel-development-company" },
                    { label: "React Front-End Development", slug: "wordpress-to-react-upgrade" },
                ],
            },
            {
                title: "Mobile App Development",
                icon: menuList2,
                listType: "dot",
                dotSize: 10,
                items: [
                    { label: "iOS Development", slug: "iphone-app-development-services" },
                    { label: "Android Development", slug: "android-app-development" },
                    { label: "PhoneGap Development", slug: "phonegap-hypbrid-app-development" },
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
                    { label: "SEO", slug: "seo-services" },
                    { label: "Local Search Marketing", slug: "local-search-marketing-services" },
                    { label: "PPC Management", slug: "ppc-management-services" },
                    { label: "Social Media Marketing", slug: "social-media-marketing-services" },
                    { label: "Content Marketing", slug: "content-marketing-services" },
                    { label: "Email Marketing", slug: "email-marketing-services-company" },
                    { label: "App Store Optimization", slug: "app-store-optimization" },
                    { label: "Online Reputation Management", slug: "online-reputation-management" },
                    { label: "Zoho Consultant", slug: "zoho-crm-consultant-integration-service" },
                    { label: "Go High Level Consultant", slug: "gohighlevel-expert-services" },
                    { label: "Amazon Consultant", slug: "amazon-sales-consultant" },
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
                    { label: "AI Integration Services", slug: "ai-integration-services" },
                    { label: "Marketing Automation", slug: "marketing-automation-services-company" },
                    { label: "AI Video", slug: "ai-video" },
                    { label: "AI Chatbot", slug: "ai-chatbot-development-services" },
                    // { label: "Customer Sentiment Analysis", slug: "customer-sentiment-analysis" },
                    // { label: "AI-Powered PPC Campaign Tool", slug: "/ai-tools/ppc-campaign/" },
                ],
            },
        ],
    },
];

export const sluglist = [
    ///Today
    { slug: "web-design-services" },
    { slug: "web-development-agency" },
    { slug: "ecommerce-web-development-service" },
    { slug: "wordpress-development-company" },
    { slug: "website-maintenance-services-dallas" },
    { slug: "magento-ecommerce-development" },
    { slug: "woocommerce-development-company" },
    { slug: "opencart-website-development-service" },
    { slug: "shopify-store-development-servce" },
    { slug: "laravel-development-company" },
    { slug: "iphone-app-development-services" },
    { slug: "android-app-development" },
    { slug: "phonegap-hypbrid-app-development" },
    { slug: "ai-integration-services" },
    { slug: "marketing-automation-services-company" },
    { slug: "ai-video" },
    { slug: "seo-services" },
    { slug: "local-search-marketing-services" },
    { slug: "ppc-management-services" },
    { slug: "social-media-marketing-services" },
    { slug: "content-marketing-services" },
    { slug: "email-marketing-services-company" },
    { slug: "app-store-optimization" },
    { slug: "zoho-crm-consultant-integration-service" },
    { slug: "gohighlevel-expert-services" },
    { slug: "online-reputation-management" },
    { slug: "amazon-sales-consultant" },
    { slug: "digital-marketing-agency-services" },
    { slug: "data-governance" },
    { slug: "custom-web-application-development" },
    { slug: "data-solutions" },
    { slug: "data-engineering-services" },
    { slug: "digital-marketing-addison" },
    { slug: "addison-website-design-development" },
    { slug: "website-design-albuquerque" },
    { slug: "allen-website-design-development" },
    { slug: "digital-marketing-allen-tx" },
    { slug: "arlington-web-design" },
    { slug: "digital-marketing-arlington" },
    { slug: "austin-website-design-development" },
    { slug: "digital-marketing-austin" },
    { slug: "carrollton-website-design-development" },
    { slug: "digital-marketing-carrollton" },
    { slug: "cedar-hill-website-design-development" },
    { slug: "digital-marketing-cedar-hill-tx" },
    { slug: "coppell-website-design-development" },
    { slug: "digital-marketing-coppell-tx" },
    { slug: "dallas-digital-marketing-company" },
    { slug: "dallas-ppc-management-company" },
    { slug: "dallas-seo-internet-marketing-service" },
    { slug: "dallas-web-development-agency" },
    { slug: "digital-marketing-agency-dallas-fort-worth" },
    { slug: "local-seo-agency-dallas" },
    { slug: "social-media-marketing-agency-dallas" },
    { slug: "website-maintenance-services-dallas" },
    { slug: "digital-marketing-farmers-branch-tx" },
    { slug: "farmers-branch-website-design-development" },
    { slug: "digital-marketing-fort-worth" },
    { slug: "website-design-fort-worth" },
    { slug: "digital-marketing-frisco" },
    { slug: "website-design-frisco" },
    { slug: "digital-marketing-garland-tx" },
    { slug: "garland-website-design" },
    { slug: "digital-marketing-grapevine-tx" },
    { slug: "grapevine-website-design-development" },
    { slug: "digital-marketing-houston-tx" },
    { slug: "website-design-houston" },
    { slug: "digital-marketing-company-irvine" },
    { slug: "website-design-irvine" },
    { slug: "digital-marketing-irving-tx" },
    { slug: "irving-web-design" },
    { slug: "las-vegas-website-design" },
    { slug: "digital-marketing-lewisville-tx" },
    { slug: "lewisville-website-design-development" },
    { slug: "digital-marketing-mckinney-tx" },
    { slug: "website-design-mckinney" },
    { slug: "memphis-website-design-company" },
    { slug: "digital-marketing-mesquite-tx" },
    { slug: "mesquite-website-design-development" },
    { slug: "digital-marketing-agency" },
    { slug: "website-design-oklohoma-city" },
    { slug: "orange-county-digital-marketing-company" },
    { slug: "orange-county-web-design" },
    { slug: "phoenix-web-design" },
    { slug: "plano-digital-marketing-web-design" },
    { slug: "plano-web-design-company" },
    { slug: "princeton-digital-marketing-agency" },
    { slug: "princeton-website-design-development" },
    { slug: "digital-marketing-rancho-santa-margarita" },
    { slug: "website-design-rancho-santa-margarita" },
    { slug: "digital-marketing-richardson" },
    { slug: "richardson-website-design-development" },
    { slug: "riverside-digital-marketing-company" },
    { slug: "web-design-development-company-riverside" },
    { slug: "digital-marketing-rockwall-tx" },
    { slug: "rockwall-website-design-development" },
    { slug: "digital-marketing-rowlett-tx" },
    { slug: "rowlett-website-design-development" },
    { slug: "digital-marketing-southlake-tx" },
    { slug: "southlake-website-design-development" },
    { slug: "digital-marketing-tustin" },
    { slug: "website-design-tustin" },
    { slug: "hbot-marketing" },
    { slug: "healthcare-web-design" },
    { slug: "mobile-app-marketing-services" },
]