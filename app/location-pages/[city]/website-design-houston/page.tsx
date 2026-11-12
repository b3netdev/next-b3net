import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import StructuredData from "@/components/server/StructuredData";
import LeadForm, { type Cf7Config } from "../../_landing/LeadForm";
import { Arrow, Check, IconSprite, Phone, SvcIcon } from "../../_landing/Icons";
import { faqSchema, jsonLd, landingMetadata, landingSchema } from "../../_landing/seo";
import "../../_landing/landing.css";

/*
 * Static landing page for /texas/website-design-houston
 * (rewritten to /location-pages/texas/website-design-houston in next.config.ts).
 * Content is hard-coded; only SEO metadata / schema are still read from WordPress.
 * Last updated: 2026-11-12
 */

const SLUG = "website-design-houston";

/** [contact-form-7 id="14434" title="Houston web design"] — fields [fname] [email] [phone] [website] */
const CF7: Cf7Config = {
  formId: 14434,
  fields: { name: "fname", email: "email", phone: "phone", extra: "website" },
};

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  if (city !== "texas") return {};
  return landingMetadata(SLUG, {
    title: "Houston Web Design Company | Website Design Houston TX",
    description:
      "Custom websites for Houston businesses that need more calls, quote requests and sales. Designed, built and launched by B3NET in 4–6 weeks.",
  });
}

const HOU_PLACEHOLDERS = { name: "Jordan Lee", email: "jordan@company.com", phone: "(713) 555-0142" };

const causes = [
  ["No clear offer", "Visitors can't tell what you do, who it's for, or what to do next within five seconds."],
  ["Slow or clumsy on phones", "Most local searches happen on mobile, often from a truck, a job site or a waiting room."],
  ["Nothing that builds trust", "No reviews, results or real photos near the point where you ask for contact details."],
  ["Invisible on Google", "The site was designed without keyword research, so the right buyers never find it."],
];

const industries = [
  ["Energy and oilfield services", "Capability pages, safety and certification proof, and RFQ forms that procurement teams can use."],
  ["Healthcare and medical practices", "Online booking, physician profiles and HIPAA-aware forms for clinics and specialists."],
  ["Logistics and the port economy", "Service-area pages, quote calculators and customer portals for shippers and carriers."],
  ["Manufacturing and industrial", "Product catalogues, spec sheets and distributor locators."],
  ["Construction and home services", "Project galleries, service-area pages for each suburb, and click-to-call on every screen."],
  ["Professional services", "Law, accounting and financial firms that need credibility and a steady flow of consultations."],
];

const steps = [
  ["Week 1", "Discovery", "We learn your goals, customers and competitors, and review your current site and analytics."],
  ["Weeks 1–2", "Plan and wireframe", "Page structure, keyword map and wireframes, so you approve the layout before any design."],
  ["Weeks 2–3", "Design", "Full designs for desktop and mobile, with two rounds of revisions."],
  ["Weeks 3–5", "Build and test", "Development, content entry, speed tuning, accessibility checks and cross-device testing."],
  ["Weeks 5–6", "Launch and support", "Redirects, analytics and conversion tracking set up, then post-launch support."],
];

const quotes = [
  ["After burning through a stack of cash and three web designers that couldn't handle what I wanted I found B3NET and they not only did what I wanted but did it quickly and reasonably.", "JP", "Joe Patera", "Serv-All Packaging"],
  ["I hired B3NET to design and develop our website. I had a bunch of complex coding to be deployed. They did an awesome job.", "BB", "Bob Burnett", "CEO, ARC Levers"],
  ["B3NET stands head and shoulders above competitors!", "CL", "Cynthia Lewman", "ToyMakingPlans"],
];

const areas = ["Houston", "The Woodlands", "Sugar Land", "Katy", "Pearland", "Cypress", "Spring", "Pasadena", "League City", "Conroe", "Greater Houston"];

const faqs = [
  ["How much does a website cost in Houston?", "Custom sites with more pages, integrations or eCommerce cost more. The price depends on page count, custom features, content writing and integrations such as a CRM or booking system. After a short call, you'll get a fixed-price proposal so there are no surprises."],
  ["How long does it take to build a website?", "A standard business website takes 4–6 weeks from kickoff to launch. Larger or custom projects take a few months. We give you a timeline with milestones before work starts."],
  ["Do you have an office in Houston?", "Our Texas offices are in Dallas and Austin. Houston clients work with us through video calls and a dedicated project manager, which keeps projects moving without the need to travel. On-site meetings are available for larger projects."],
  ["Will a redesign hurt my Google rankings?", "Not if it's handled properly. Before redesigning, we record your ranking pages and set up redirects for every changed URL, so the traffic you've earned carries over."],
  ["Do I own my website?", "Yes. You own the design, content and domain."],
  ["Can you write the content too?", "Yes. Our team writes SEO-focused page copy, or we can edit and optimise content you provide."],
  ["What happens after launch?", "We offer ongoing maintenance, security updates, backups and SEO support, so the site keeps performing. Many clients stay with us for years."],
  ["WordPress, Shopify or custom: which is right for me?", "WordPress suits most service businesses. Shopify is usually best for online stores. Custom development makes sense when you need features off-the-shelf platforms can't handle. We'll recommend one in your free review."],
];


export default async function HoustonWebDesignPage({ params }: Props) {
  const { city } = await params;
  if (city !== "texas") notFound();

  const schemaData = await landingSchema(SLUG);

  return (
    <main className="hw-page" id="top">
      {schemaData && <StructuredData data={schemaData} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqs)) }} />

      <IconSprite />

      {/* 1. HERO */}
      <section className="hw-hero" aria-labelledby="hw-h1">
        <svg className="hw-skyline" viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <g fill="#FFFFFF">
            <rect x="40" y="150" width="70" height="70" /><rect x="120" y="120" width="55" height="100" /><rect x="185" y="160" width="60" height="60" />
            <rect x="260" y="90" width="48" height="130" /><rect x="316" y="130" width="70" height="90" />
            <rect x="400" y="60" width="44" height="160" /><polygon points="400,60 422,30 444,60" />
            <rect x="455" y="105" width="62" height="115" /><rect x="528" y="140" width="50" height="80" />
            <rect x="590" y="20" width="58" height="200" /><rect x="600" y="8" width="38" height="12" />
            <rect x="660" y="70" width="40" height="150" /><rect x="652" y="95" width="56" height="125" />
            <rect x="720" y="40" width="46" height="180" /><polygon points="720,40 743,14 766,40" />
            <rect x="778" y="115" width="66" height="105" /><rect x="856" y="80" width="50" height="140" />
            <rect x="918" y="135" width="72" height="85" /><rect x="1000" y="100" width="46" height="120" />
            <rect x="1058" y="150" width="80" height="70" /><rect x="1150" y="125" width="52" height="95" />
            <rect x="1214" y="160" width="68" height="60" /><rect x="1294" y="140" width="56" height="80" /><rect x="1360" y="170" width="80" height="50" />
          </g>
        </svg>
        <div className="hw-wrap">
          <div>
            <p className="hw-eyebrow">Houston Web Design Company</p>
            <h1 id="hw-h1">
              Houston Web Design That Turns Visitors <em>Into Leads</em>
            </h1>
            <p className="hw-sub">
              Custom websites for Houston businesses that need more calls, quote requests and sales from their site. Designed, built and launched by B3NET in 4–6 weeks.
            </p>
            <ul className="hw-ticks">
              <li><Check />Conversion-focused design, built SEO-ready from day one</li>
              <li><Check /><span>WordPress, Shopify and fully custom builds <span>that you own outright</span></span></li>
              <li><Check />Serving Houston businesses since 1999 from our Texas offices</li>
            </ul>
            <div className="hw-ctas">
              <a className="hw-btn" href="#review">Get My Free Website Review <Arrow /></a>
              <a className="hw-callnum" href="tel:+18778908986">
                <Phone />
                <span>or call <span className="hw-ph">877-890-8986</span></span>
              </a>
            </div>
            <p className="hw-fine">
              No obligation. You&apos;ll get <span>a short video review</span> of your current site and 3 fixes we&apos;d make first, within <span>1 business day</span>.
            </p>
          </div>

          <div className="hw-formcard" id="review">
            <h2>Get your free website review</h2>
            <p className="hw-formsub">Takes 30 seconds. We&apos;ll look at your site and tell you what&apos;s costing you leads.</p>
            <LeadForm
              cf7={CF7}
              idPrefix="h"
              extra={{ kind: "input", label: "Current website", inputMode: "url", placeholder: "yourcompany.com — leave blank if you don't have one" }}
              placeholders={HOU_PLACEHOLDERS}
              submitLabel="Get My Free Website Review"
              reply={<>We reply within <span>1 business day</span>. No spam, ever.</>}
            />
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="hw-trust" aria-label="Ratings and credentials">
        <div className="hw-wrap">
          <div className="hw-item"><b>4.9</b><span className="hw-star" aria-hidden="true">★</span> Google</div>
          <div className="hw-item"><b>5.0</b><span className="hw-star" aria-hidden="true">★</span> Clutch</div>
          <div className="hw-item"><b>5.0</b><span className="hw-star" aria-hidden="true">★</span> GoodFirms</div>
          <div className="hw-item"><b>1999</b> In business since</div>
          <div className="hw-item"><b>Zoho</b> Authorized Partner</div>
          <div className="hw-item"><b>Google Cloud</b> Partner</div>
        </div>
      </section>

      {/* 3. PROBLEM */}
      <section className="hw-band" aria-labelledby="hw-h-problem">
        <div className="hw-wrap hw-problem">
          <div className="hw-head" style={{ marginBottom: 0 }}>
            <p className="hw-eyebrow">Why sites don&apos;t convert</p>
            <h2 id="hw-h-problem">Your website looks fine. So why isn&apos;t it bringing in business?</h2>
            <p className="hw-lead">
              Most Houston companies we talk to aren&apos;t short of traffic. They&apos;re short of leads. Visitors land, skim, and leave without calling, because the site doesn&apos;t answer their questions fast enough or give them an easy next step.
            </p>
          </div>
          <div>
            <div className="hw-causes">
              {causes.map(([t, d], i) => (
                <div className="hw-cause" key={t}>
                  <span className="hw-x" aria-hidden="true">{i + 1}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </div>
              ))}
            </div>
            <p className="hw-close">We design around those four problems first, then make it look great.</p>
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="hw-band hw-tint" id="services" aria-labelledby="hw-h-services">
        <div className="hw-wrap">
          <div className="hw-head">
            <p className="hw-eyebrow">Services</p>
            <h2 id="hw-h-services">Website design and development services in Houston</h2>
          </div>
          <div className="hw-grid3">
            <article className="hw-svc">
              <SvcIcon d="M3 5h18v12H3zM8 21h8M12 17v4M7 9h6M7 12h4" />
              <h3>Custom website design</h3>
              <p>A site designed around how your customers buy, with clear calls to action on every page. No templates stretched to fit.</p>
              <Link className="hw-textlink" href="/portfolio">See our web design work →</Link>
            </article>
            <article className="hw-svc">
              <SvcIcon d="M21 12a9 9 0 1 1-2.6-6.4M21 4v5h-5" />
              <h3>Website redesign</h3>
              <p>Keep what&apos;s working, fix what isn&apos;t. We map your existing rankings first so a redesign doesn&apos;t cost you the Google traffic you already have.</p>
            </article>
            <article className="hw-svc">
              <SvcIcon d="M3 4h2l2.4 11h11l2-8H6.3M9 20h.01M18 20h.01" />
              <h3>eCommerce websites</h3>
              <p>Shopify, WooCommerce, Magento and OpenCart stores with product pages, filters and checkout built to sell.</p>
              <Link className="hw-textlink" href="/case-study-automobile-parts-website-design-seo">ARC Levers case study →</Link>
            </article>
            <article className="hw-svc">
              <SvcIcon d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4" />
              <h3>WordPress websites</h3>
              <p>A WordPress site your team can update without calling a developer, with the speed and security setup done properly.</p>
            </article>
            <article className="hw-svc">
              <SvcIcon d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM21 21l-5-5" />
              <h3>SEO-ready builds</h3>
              <p>Keyword research, page structure, schema, fast load times and Google Business Profile guidance are part of the build, not an add-on.</p>
            </article>
            <article className="hw-svc">
              <SvcIcon>
                  <circle cx="12" cy="4.5" r="2" fill="currentColor" />
                  <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 8.5l7 1.5 7-1.5M12 10v5l-3 6M12 15l3 6" />
              </SvcIcon>
              <h3>ADA and accessibility</h3>
              <p>Sites built to WCAG guidelines so every visitor can use them, reducing your exposure to ADA website claims.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 5. RESULTS */}
      <section className="hw-band" id="results" aria-labelledby="hw-h-results">
        <div className="hw-wrap">
          <div className="hw-head">
            <p className="hw-eyebrow">Results</p>
            <h2 id="hw-h-results">What a better website does for the bottom line</h2>
          </div>
          <div className="hw-results">
            <article className="hw-res hw-feature">
              <p className="hw-who">ARC Levers · Motorcycle parts manufacturer</p>
              <p className="hw-big">275%</p>
              <p className="hw-label">Increase in average monthly sales</p>
              <p>An outdated OpenCart store that was hard to navigate. We redesigned it, reorganised products by brand, model and year, and fixed the technical SEO.</p>
              <Link className="hw-textlink" href="/case-study-automobile-parts-website-design-seo">Read the case study →</Link>
            </article>
            <article className="hw-res">
              <p className="hw-who">Cabinet DIY · eCommerce</p>
              <p className="hw-bigq">“Tripled my conversion rate.”</p>
              <p className="hw-label">After two failed agencies</p>
              <p>Owner Kevin Karadag says we ranked his keywords, grew his traffic, tripled his conversion rate and lifted sales.</p>
              <Link className="hw-textlink" href="/testimonial">Read the review →</Link>
            </article>
            <article className="hw-res">
              <p className="hw-who">ViAge Solutions · Tech hardware</p>
              <p className="hw-bigq">US market launch</p>
              <p className="hw-label">New website and digital strategy</p>
              <p>A new website and digital strategy helped ViAge Solutions expand into the US market.</p>
              <Link className="hw-textlink" href="/case-study-tech-hardware-service-web-design-digital-marketing">Read the case study →</Link>
            </article>
          </div>
          <p className="hw-after"><Link className="hw-textlink" href="/portfolio">See all case studies and work →</Link></p>
        </div>
      </section>

      {/* 6. INDUSTRIES */}
      <section className="hw-band hw-tint" aria-labelledby="hw-h-ind">
        <div className="hw-wrap">
          <div className="hw-head">
            <p className="hw-eyebrow">Houston industries</p>
            <h2 id="hw-h-ind">Websites built for how Houston does business</h2>
            <p className="hw-lead">Houston&apos;s economy runs on industries that sell to other businesses, to patients and to homeowners. Each needs something different from a website.</p>
          </div>
          <div className="hw-inds">
            {industries.map(([t, d]) => (
              <div className="hw-ind" key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS */}
      <section className="hw-band" id="process" aria-labelledby="hw-h-process">
        <div className="hw-wrap">
          <div className="hw-head">
            <p className="hw-eyebrow">Process</p>
            <h2 id="hw-h-process">From first call to launch in 4–6 weeks</h2>
          </div>
          <ol className="hw-steps">
            {steps.map(([wk, t, d]) => (
              <li className="hw-step" key={t}><span className="hw-wk">{wk}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
          <p className="hw-note">Larger sites, custom features and eCommerce stores with big catalogues take longer. You&apos;ll get a written timeline before we start.</p>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="hw-band hw-tint" aria-labelledby="hw-h-quotes">
        <div className="hw-wrap">
          <div className="hw-head">
            <p className="hw-eyebrow">Client reviews</p>
            <h2 id="hw-h-quotes">What clients say about working with B3NET</h2>
          </div>
          <div className="hw-quotes">
            {quotes.map(([q, av, name, org]) => (
              <figure className="hw-quote" key={name}>
                <div className="hw-stars" aria-label="5 stars">★★★★★</div>
                <blockquote>“{q}”</blockquote>
                <figcaption>
                  <span className="hw-av" aria-hidden="true">{av}</span>
                  <span><b>{name}</b>{org}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="hw-after"><Link className="hw-textlink" href="/testimonial">Read more client reviews →</Link></p>
        </div>
      </section>

      {/* 9. HOUSTON FIT */}
      <section className="hw-band" aria-labelledby="hw-h-fit">
        <div className="hw-wrap hw-fit">
          <div>
            <p className="hw-eyebrow">Working with Houston clients</p>
            <h2 id="hw-h-fit" style={{ marginTop: 12 }}>Texas-based, set up to work with Houston teams</h2>
            <p className="hw-lead">
              We&apos;re a Texas company with offices in Dallas and Austin, and we&apos;ve been building websites since 1999. Houston clients work with a dedicated project manager, scheduled video check-ins and shared collaboration tools, so you always know what&apos;s done and what&apos;s next. <span>For larger projects, we can meet on-site in Houston.</span>
            </p>
            <div style={{ marginTop: 26 }}>
              <a className="hw-btn" href="#review">Get My Free Website Review <Arrow /></a>
            </div>
          </div>
          <div className="hw-areas">
            <h3>Areas we serve</h3>
            <div className="hw-chips">
              {areas.map((a) => <span key={a}>{a}</span>)}
            </div>
            <div className="hw-offices">
              <span><b>Dallas</b> · 13601 Preston Rd, Ste W706, Dallas, TX 75240</span>
              <span><b>Austin</b> · 701 Tillery St #12, Unit 213, Austin, TX 78702</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="hw-band hw-tint" id="faq" aria-labelledby="hw-h-faq">
        <div className="hw-wrap hw-faq">
          <div className="hw-head">
            <p className="hw-eyebrow">FAQ</p>
            <h2 id="hw-h-faq">Houston web design questions, answered</h2>
            <p className="hw-lead">Still deciding? Call <span className="hw-ph">877-890-8986</span> and talk it through with a strategist.</p>
          </div>
          <div className="hw-qa">
            {faqs.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="hw-final" aria-labelledby="hw-h-final">
        <div className="hw-wrap">
          <div>
            <p className="hw-eyebrow" style={{ color: "#FFB08A" }}>Free website review</p>
            <h2 id="hw-h-final" style={{ marginTop: 12 }}>Find out what&apos;s stopping your website from bringing in leads</h2>
            <p className="hw-lead">Send us your website and we&apos;ll send back <span>a short video review</span> with the three changes we&apos;d make first. Free, and no obligation.</p>
            <div className="hw-contactlines">
              <a className="hw-callnum" href="tel:+18778908986"><Phone /><span className="hw-ph">877-890-8986</span></a>
              <a className="hw-callnum" href="mailto:info@b3net.com" style={{ color: "var(--hero-ink)", fontWeight: 500 }}>info@b3net.com</a>
            </div>
          </div>
          <div className="hw-formcard">
            <h2>Get your free website review</h2>
            <p className="hw-formsub">We reply within <span>1 business day</span>.</p>
            <LeadForm
              cf7={CF7}
              idPrefix="f"
              extra={{ kind: "input", label: "Current website", inputMode: "url", placeholder: "yourcompany.com" }}
              placeholders={HOU_PLACEHOLDERS}
              submitLabel="Get My Free Website Review"
            />
          </div>
        </div>
      </section>

      {/* Mobile quick-contact bar */}
      <div className="hw-callbar" aria-label="Quick contact">
        <a className="hw-c1" href="tel:+18778908986"><Phone />Call now</a>
        <a className="hw-c2" href="#review">Free Review</a>
      </div>
    </main>
  );
}
