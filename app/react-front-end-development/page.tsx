
import {
    Zap,
    ShieldCheck,
    LayoutTemplate,
    ArrowRight,
    Database,
    Code,
    Smartphone,
    CheckCircle,
    Play,
    X,
    Menu,
    TrendingUp,
    Server,
    Lock
} from 'lucide-react';
import type { LucideIcon } from "lucide-react";
import Contact from './Contact';
import ScrollLink from '@/components/client/ScrollLink';
import { Metadata } from 'next';


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "WordPress to React Upgrade Services | B3NET",
        template: "%s | B3NET",
    },

    description:
        "Upgrade your WordPress site with a fast, secure, modern React front end. Keep WordPress admin unchanged while improving speed, UX, SEO, and future scalability.",

    keywords: [
        "WordPress to React upgrade",
        "WordPress React frontend",
        "headless WordPress development",
        "React front end development",
        "WordPress performance upgrade",
        "modern WordPress website",
        "headless WordPress services",
        "WordPress API React",
        "React website development",
        "WordPress speed optimization",
        "React development",
    ],

    alternates: {
        canonical: `${siteUrl}/wordpress-to-react-upgrade`,
    },

    openGraph: {
        locale: "en_US",
        type: "article",
        title: "Home",
        description:
            "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
        url: siteUrl,
        siteName: "B3net",
        images: [
            {
                url: "https://backend.b3net.com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg",
                width: 1200,
                height: 675,
                type: "image/jpeg",
                alt: "B3NET",
            },
        ],
        modifiedTime: "2026-03-16T08:48:52+00:00",
    },


    twitter: {
        card: "summary_large_image",
        site: "@b3net",
        title: "Home",
        description:
            "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
        images: [
            "https://backend.b3net.com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg",
        ],
    },

    other: {
        "article:publisher": "https://www.facebook.com/B3NET",
        "article:modified_time": "2026-03-16T08:48:52+00:00",

        "og:locale": "en_US",
        "og:type": "article",
        "og:title": "Home",
        "og:description":
            "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services. Transform your brand with our expert solutions.",
        "og:url": siteUrl,
        "og:site_name": "B3net",
        "og:image":
            "https://backend.b3net.com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg",
        "og:image:width": "1200",
        "og:image:height": "675",
        "og:image:type": "image/jpeg",

        "twitter:card": "summary_large_image",
        "twitter:site": "@b3net",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
};
const pageUrl = `${siteUrl}/wordpress-to-react-upgrade`;

const logoUrl =
    "https://backend.b3net.com/wp-content/uploads/2025/11/B3NET-New-Logo-for-Yaost.jpg";

const modifiedTime = "2026-03-16T08:48:52+00:00";

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: "B3NET",
            url: siteUrl,
            logo: {
                "@type": "ImageObject",
                url: logoUrl,
                width: 1200,
                height: 675,
            },
            image: {
                "@type": "ImageObject",
                url: logoUrl,
                width: 1200,
                height: 675,
            },
            sameAs: ["https://www.facebook.com/B3NET"],
            description:
                "B3NET offers cutting-edge web design, AI-powered digital marketing, mobile app development, and OpenAI integration services.",
        },

        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: "B3NET",
            publisher: {
                "@id": `${siteUrl}/#organization`,
            },
            inLanguage: "en-US",
        },

        {
            "@type": "WebPage",
            "@id": `${pageUrl}/#webpage`,
            url: pageUrl,
            name: "WordPress to React Upgrade Services | B3NET",
            headline: "WordPress to React Upgrade Services",
            description:
                "Upgrade your WordPress site with a fast, secure, modern React front end. Keep WordPress admin unchanged while improving speed, UX, SEO, and future scalability.",
            keywords: [
                "WordPress to React upgrade",
                "WordPress React frontend",
                "headless WordPress development",
                "React front end development",
                "WordPress performance upgrade",
                "modern WordPress website",
                "headless WordPress services",
                "WordPress API React",
                "React website development",
                "WordPress speed optimization",
                "React development",
            ],
            isPartOf: {
                "@id": `${siteUrl}/#website`,
            },
            about: {
                "@id": `${pageUrl}/#service`,
            },
            mainEntity: {
                "@id": `${pageUrl}/#service`,
            },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: logoUrl,
                width: 1200,
                height: 675,
            },
            image: {
                "@type": "ImageObject",
                url: logoUrl,
                width: 1200,
                height: 675,
            },
            publisher: {
                "@id": `${siteUrl}/#organization`,
            },
            dateModified: modifiedTime,
            inLanguage: "en-US",
        },

        {
            "@type": "Service",
            "@id": `${pageUrl}/#service`,
            name: "WordPress to React Upgrade Services",
            alternateName: [
                "WordPress to React Upgrade",
                "WordPress React Frontend",
                "Headless WordPress Development",
                "React Front End Development",
                "WordPress Performance Upgrade",
            ],
            serviceType: "WordPress to React Front-End Upgrade",
            category: "Web Development",
            url: pageUrl,
            description:
                "Upgrade your WordPress site with a fast, secure, modern React front end. Keep WordPress admin unchanged while improving speed, UX, SEO, and future scalability.",
            provider: {
                "@id": `${siteUrl}/#organization`,
            },
            areaServed: {
                "@type": "Country",
                name: "United States",
            },
            audience: {
                "@type": "BusinessAudience",
                audienceType:
                    "Businesses using WordPress that want faster performance, better security, modern user experience, SEO improvements, and future-ready React development.",
            },
            offers: {
                "@type": "Offer",
                "@id": `${pageUrl}/#offer`,
                url: pageUrl,
                name: "Request a Free Quote",
                description:
                    "Request a free quote to upgrade your WordPress site with a modern React front end.",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                seller: {
                    "@id": `${siteUrl}/#organization`,
                },
            },
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "WordPress to React Upgrade Benefits",
                itemListElement: [
                    {
                        "@type": "Offer",
                        name: "Fast React Front End",
                        description:
                            "Upgrade your WordPress site with a faster, modern React front end.",
                    },
                    {
                        "@type": "Offer",
                        name: "Secure WordPress Architecture",
                        description:
                            "Keep the WordPress admin unchanged while separating the public-facing React frontend.",
                    },
                    {
                        "@type": "Offer",
                        name: "Improved UX and SEO",
                        description:
                            "Improve speed, user experience, SEO, and future scalability.",
                    },
                    {
                        "@type": "Offer",
                        name: "Future-Ready React Development",
                        description:
                            "Prepare your WordPress website for future integrations, APIs, and modern front-end development.",
                    },
                ],
            },
        },

        {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}/#breadcrumb`,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: siteUrl,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "WordPress to React Upgrade Services",
                    item: pageUrl,
                },
            ],
        },
    ],
};

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-90"></div>
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-ping"></span>
                            Future-Proof Your Web Presence
                        </div>
                        <h1 className="text-4xl lg:text-6xl  react-devPage-heading  leading-tight mb-6">
                            Wordpress to upgrade to React on front end. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Make It React Fast.
                            </span>
                        </h1>
                        <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Upgrade Your WordPress Site with a Fast, Modern React Front End
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <ScrollLink
                                targetId='react-page-contact'
                                className="w-full cursor-pointer sm:w-auto bg-[#2258F0] hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all gap-3 shadow-lg shadow-blue-600/40 flex items-center justify-center"
                            >
                                <span>
                                    Start Your Upgrade
                                </span>
                                <i className="fa-solid fa-arrow-right-long ml-3"></i>
                            </ScrollLink>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start space-x-8 text-slate-400 text-sm">
                            <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> 2-3x Faster Load</div>
                            <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Better SEO</div>
                        </div>
                    </div>


                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 shadow-2xl p-4 transform rotate-1 lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute -top-4 -left-4 bg-white text-slate-900 px-4 py-2 rounded shadow-lg font-bold text-sm z-20 flex items-center">
                                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span> 100/100 Performance
                            </div>


                            <div className="bg-slate-950 rounded overflow-hidden">
                                <div className="bg-slate-900 px-4 py-2 flex items-center space-x-2 border-b border-slate-800">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="ml-4 px-3 py-1 bg-slate-800 rounded text-xs text-slate-400 font-mono">b3net-react-app.js</div>
                                </div>
                                <div className="p-6 grid grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Frontend (React)</div>
                                        <div className="h-32 bg-slate-900 rounded border border-blue-500/30 flex flex-col items-center justify-center p-4 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                                            <Zap className="w-10 h-10 text-blue-400 mb-2" />
                                            <span className="text-blue-100 font-medium">Blazing Fast UI</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Backend (WordPress)</div>
                                        <div className="h-32 bg-slate-800 rounded border border-slate-700 flex flex-col items-center justify-center p-4 opacity-70">
                                            <Database className="w-10 h-10 text-slate-400 mb-2" />
                                            <span className="text-slate-300 font-medium">Content Management</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-6 pb-6">
                                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-3/4 animate-pulse"></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                                        <span>API Connection Established</span>
                                        <span className="text-green-400">Live</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const VideoSection = () => {
    return (
        <section id="video" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    <div className="lg:w-7/12 w-full">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://mega.nz/embed/lKdgXRLJ#C0EGYo8AzLo9LAzUiqL4ODZ_tePwXzC0G-z0_BM6BCU"
                                allowFullScreen
                                allow="autoplay; encrypted-media"
                                title="B3NET Video"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    <div className="lg:w-5/12 w-full space-y-8">
                        <h2 className="text-3xl font-bold text-slate-900">
                            Is Your WordPress Site <span className="text-blue-600">Feeling Sluggish?</span>
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mt-1">
                                    <TrendingUp className="w-5 h-5 text-red-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-slate-900">The Problem</h3>
                                    <p className="text-slate-600">Slow loading times, plugin bloat, and outdated themes are costing you customers and search rankings.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                                    <Zap className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-slate-900">The Solution</h3>
                                    <p className="text-slate-600">Keep WordPress exactly as it is—but upgrade your front end to React. 2-3x faster speeds instantly.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                    <LayoutTemplate className="w-5 h-5 text-green-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-slate-900">The Result</h3>
                                    <p className="text-slate-600">No migration necessary. Just a clean, app-like experience your customers (and Google) will love.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const FeatureCard = ({
    icon: Icon,
    title,
    description,
    color,
}: FeatureCardProps) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
        <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <Icon className="w-7 h-7 text-white !rotate-90" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);


type FeatureCardProps = {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
};


const Features = () => {
    return (
        <section id="benefits" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Go Headless?</h2>
                    <p className="text-lg text-slate-600">
                        Traditional WordPress ties your design to the database. Decoupling them unlocks enterprise-level performance.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Zap}
                        color="bg-gradient-to-br from-blue-500 to-blue-600"
                        title="Blazing Speed"
                        description="React loads content instantly. By serving static assets via API, we eliminate the heavy database queries that slow down standard WordPress themes."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        color="bg-gradient-to-br from-indigo-500 to-indigo-600"
                        title="Ironclad Security"
                        description="Your backend is hidden from the public. Without direct access to your WordPress database, hackers have no entry point on the frontend."
                    />
                    <FeatureCard
                        icon={Smartphone}
                        color="bg-gradient-to-br from-cyan-500 to-cyan-600"
                        title="App-Like Experience"
                        description="Offer smooth page transitions and instant interactions. Provide the premium feel of a mobile app directly in the browser."
                    />
                </div>
            </div>
        </section>
    );
};

const ProcessSection = () => {
    const steps = [
        {
            number: "01",
            title: "Audit & Strategy",
            description: "We analyze your existing WordPress plugins, theme data, and SEO structure to map out the headless architecture."
        },
        {
            number: "02",
            title: "Parallel Build",
            description: "We build your new React frontend on a separate staging environment. Your live site remains untouched and fully functional."
        },
        {
            number: "03",
            title: "API Integration",
            description: "We connect your WordPress backend content to the React frontend using REST API or WPGraphQL for real-time data syncing."
        },
        {
            number: "04",
            title: "Seamless Switch",
            description: "Once tested, we simply repoint your domain to the new frontend. Zero downtime. Instant speed upgrade."
        }
    ];

    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">The Upgrade Process</h2>
                    <p className="text-lg text-slate-600">
                        We've refined our workflow to ensure your business never skips a beat while we turbocharge your technology.
                    </p>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8">

                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10 transform translate-y-2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="w-24 h-24 bg-white border-4 border-[#3B58A1] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-[#FF4F02] transition-colors shadow-sm">
                                <span className="text-3xl font-extrabold text-[#3B58A1] group-hover:text-[#FF4F02] transition-colors">{step.number}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 text-center mb-3">{step.title}</h3>
                            <p className="text-slate-600 text-center text-sm leading-relaxed px-2">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Comparison = () => {
    return (
        <section id="comparison" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stop Maintaining.<br />Start Performing.</h2>
                        <p className="text-slate-400 mb-8 text-lg">
                            The traditional WordPress architecture was built for blogging in 2003. React is built for interactive web experiences in 2025.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Zero Theme Dependency",
                                "No More Plugin Conflicts",
                                "Global CDN Deployment",
                                "Instant Scalability"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                                    <span className="text-slate-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
                        <div className="grid grid-cols-2 border-b border-slate-700">
                            <div className="p-4 text-center font-bold text-slate-400 bg-slate-800/50">Current Site</div>
                            <div className="p-4 text-center font-bold text-blue-400 bg-blue-500/10">B3NET Upgrade</div>
                        </div>
                        <div className="divide-y divide-slate-700">
                            {[
                                { label: "Page Load", old: "2-5 Seconds", new: "< 0.5 Seconds" },
                                { label: "Security", old: "Vulnerable Plugins", new: "Decoupled & Secure" },
                                { label: "Scalability", old: "Server Crash Risk", new: "Infinite (Serverless)" },
                                { label: "Mobile UX", old: "Responsive (Clunky)", new: "Native App Feel" },
                            ].map((row, idx) => (
                                <div key={idx} className="grid grid-cols-3 items-center hover:bg-slate-700/30 transition-colors">
                                    <div className="p-4 col-span-3 sm:col-span-1 text-sm font-medium text-slate-500 uppercase tracking-wide text-center sm:text-left border-b sm:border-b-0 border-slate-700 bg-slate-800/30 sm:bg-transparent">
                                        {row.label}
                                    </div>
                                    <div className="p-4 text-center text-slate-400 sm:border-l border-slate-700">
                                        {row.old}
                                    </div>
                                    <div className="p-4 text-center text-white font-bold bg-blue-500/5 sm:border-l border-slate-700">
                                        {row.new}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default function App() {

    return (
        <div className="font-sans text-slate-900  antialiased selection:bg-blue-200 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <Hero />
            <Features />
            <ProcessSection />
            <VideoSection />
            <Comparison />
            <Contact />
        </div>
    );
}