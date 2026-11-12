import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import StructuredData from "@/components/server/StructuredData";
import LeadForm, { type Cf7Config } from "../../_landing/LeadForm";
import { Arrow, Check, IconSprite, Phone, SvcIcon } from "../../_landing/Icons";
import { faqSchema, jsonLd, landingMetadata, landingSchema } from "../../_landing/seo";
import "../../_landing/landing.css";

/*
 * Static landing page for /texas/dallas-web-development-agency
 * (rewritten to /location-pages/texas/dallas-web-development-agency in next.config.ts).
 * Content is hard-coded; only SEO metadata / schema are still read from WordPress.
 */

const SLUG = "dallas-web-development-agency";

/** [contact-form-7 id="14435" title="Dallas Web Development"] — fields [fname] [email] [phone] [requirement] */
const CF7: Cf7Config = {
  formId: 14435,
  fields: { name: "fname", email: "email", phone: "phone", extra: "requirement" },
};

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  if (city !== "texas") return {};
  return landingMetadata(SLUG, {
    title: "Dallas Web Development Agency | Custom Websites & Web Apps",
    description:
      "Custom websites, web apps, customer portals and eCommerce stores, built by a Dallas team that has been shipping code since 1999.",
  });
}

const PLACEHOLDERS = { name: "Taylor Morgan", email: "taylor@company.com", phone: "(214) 555-0187" };

const PROJECT_TYPES = [
  "New business website",
  "Website redesign",
  "Web app or customer portal",
  "eCommerce store",
  "Integration or API work",
  "Not sure yet",
];

const causes = [
  ["Vague scope, surprise invoices", "No written scope means every change becomes a new charge. We agree features, milestones and price before work starts."],
  ["The developer disappears", "Freelancers move on and agencies rotate staff. You get one project manager as your single point of contact, from kickoff to support."],
  ["The wrong platform", "A store built on the wrong platform, or an app forced into a theme, means an expensive rebuild later. We choose the stack around your needs."],
  ["It works but doesn't sell", "A site can be technically sound and still not convert or rank. Conversion paths, speed and technical SEO are built in."],
];

const stack = ["Laravel", "React", "WordPress", "WooCommerce", "Shopify", "Magento", "OpenCart", "Zoho", "Go High Level", "iOS & Android"];

const industries = [
  ["Financial services and insurance", "Secure client portals, quote and application forms, and pages that build credibility fast."],
  ["Healthcare and medical practices", "Online booking, provider profiles and HIPAA-aware intake forms."],
  ["Logistics and distribution", "Quote calculators, shipment tracking portals and B2B ordering."],
  ["Real estate", "Listing search, agent pages and lead capture that routes straight to your CRM."],
  ["Professional services", "Law, accounting and consulting firms that need a steady flow of booked consultations."],
  ["Retail and eCommerce", "Online stores with inventory sync, wholesale pricing and fast mobile checkout."],
];

const steps = [
  ["Initiation", "Understand the goal", "We learn your business, users and systems, and agree what success looks like."],
  ["Planning", "Scope and roadmap", "Features, tech stack, milestones and a fixed price, signed off before any build."],
  ["Execution", "Design and build", "Development in milestones you can review, with regular progress updates."],
  ["Quality assurance", "Test everything", "Code reviews and multi-level testing for speed, security and every device."],
  ["Delivery", "Launch and support", "Go-live, analytics and conversion tracking, then ongoing support."],
];

const engage = [
  ["One point of contact", "A dedicated project manager owns your project from kickoff to launch."],
  ["Regular updates", "Scheduled meetings and shared tools, so you always know what's done."],
  ["In-house QA", "A dedicated QA team checks performance, security and usability before launch."],
  ["Support after launch", "Monitoring, security updates and new features as your business grows."],
];

const quotes = [
  ["I hired B3NET to design and develop our website. I had a bunch of complex coding to be deployed. They did an awesome job.", "BB", "Bob Burnett", "CEO, ARC Levers"],
  ["After burning through a stack of cash and three web designers that couldn't handle what I wanted I found B3NET and they not only did what I wanted but did it quickly and reasonably.", "JP", "Joe Patera", "Serv-All Packaging"],
  ["What an outstanding team. From concept to delivery the entire process was made easy by the staff at B3NET.", "JC", "James Cameron", "Security Concepts Group"],
];

const areas = ["Dallas", "Plano", "Frisco", "Richardson", "Addison", "Irving", "Carrollton", "Garland", "McKinney", "Allen", "Fort Worth", "Arlington"];

const faqs = [
  ["How much does web development cost?", "Business websites, web apps, portals and large stores are priced on scope. Cost depends on features, integrations and design complexity. After a free consultation, you get a written quote for your project."],
  ["How long does a project take?", "A standard business website takes 4–6 weeks. Larger web or software projects can take several months. We give you milestones and a timeline before work starts."],
  ["Can I meet your team in person?", "Yes. Our office is at 13601 Preston Rd in North Dallas, and visits are by appointment. Many clients start in person and then work with us by video call."],
  ["Can you take over a site another developer built?", "Yes. We start with a code and security review, fix what's urgent, and then take over updates and new features."],
  ["Can you integrate my CRM and other tools?", "Yes. We connect websites to CRMs such as Zoho and Go High Level, payment gateways, booking systems and other third-party apps."],
  ["Who owns the code?", "You do. On final payment, you own the code, design and content."],
  ["Will my site be fast, secure and SEO-ready?", "Yes. Every build follows SEO best practices with clean code, fast load times, mobile responsiveness and technical SEO in place at launch."],
  ["Do you offer support after launch?", "Yes. We offer performance monitoring, security updates, feature work and technical support, so your site keeps up with your business."],
];

export default async function DallasWebDevelopmentPage({ params }: Props) {
  const { city } = await params;
  if (city !== "texas") notFound();

  const schemaData = await landingSchema(SLUG);

  return (
    <main className="hw-page" id="top">
      {schemaData && <StructuredData data={schemaData} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqs)) }} />
      <IconSprite />

      {/* HERO */}
      <section className="hw-hero" aria-labelledby="hw-h1">
        <svg className="hw-skyline" viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <g fill="#FFFFFF">
            <rect x="30" y="150" width="80" height="70" /><rect x="120" y="115" width="52" height="105" /><rect x="182" y="150" width="64" height="70" />
            <rect x="258" y="80" width="54" height="140" /><rect x="322" y="125" width="60" height="95" />
            <rect x="394" y="50" width="62" height="170" /><rect x="404" y="34" width="42" height="16" />
            <rect x="468" y="110" width="58" height="110" />
            <rect x="560" y="120" width="6" height="100" /><circle cx="563" cy="104" r="22" />
            <rect x="600" y="30" width="56" height="190" /><polygon points="600,30 628,6 656,30" />
            <rect x="668" y="90" width="48" height="130" /><rect x="726" y="60" width="60" height="160" />
            <rect x="798" y="120" width="70" height="100" /><rect x="880" y="45" width="50" height="175" />
            <rect x="942" y="105" width="66" height="115" /><rect x="1020" y="140" width="56" height="80" />
            <rect x="1088" y="95" width="48" height="125" /><rect x="1148" y="150" width="80" height="70" />
            <rect x="1240" y="120" width="54" height="100" /><rect x="1306" y="160" width="70" height="60" /><rect x="1386" y="140" width="54" height="80" />
          </g>
        </svg>
        <div className="hw-wrap">
          <div>
            <p className="hw-eyebrow">Dallas Web Development Agency</p>
            <h1 id="hw-h1">
              Dallas Web Development Built to <em>Win You More Business</em>
            </h1>
            <p className="hw-sub">
              Custom websites, web apps, customer portals and eCommerce stores, built by a Dallas team that has been shipping code since 1999. Meet us at our North Dallas office or on a call.
            </p>
            <ul className="hw-ticks">
              <li><Check />Custom builds in Laravel, React, WordPress and Shopify</li>
              <li><Check />Connected to your CRM, payments, booking and back-office tools</li>
              <li><Check />A dedicated project manager and in-house QA on every project</li>
            </ul>
            <div className="hw-ctas">
              <a className="hw-btn" href="#estimate">Get a Free Project Estimate <Arrow /></a>
              <a className="hw-callnum" href="tel:+18778908986">
                <Phone />
                <span>or call <span className="hw-ph">877-890-8986</span></span>
              </a>
            </div>
            <p className="hw-fine">
              Tell us what you need. You&apos;ll get a scoped estimate and timeline within 2 business days. Free, with no obligation.
            </p>
          </div>

          <div className="hw-formcard" id="estimate">
            <h2>Get a free project estimate</h2>
            <p className="hw-formsub">Four quick fields. A developer, not a salesperson, reviews every request.</p>
            <LeadForm
              cf7={CF7}
              idPrefix="h"
              extra={{ kind: "select", label: "What are you building?", options: PROJECT_TYPES }}
              placeholders={PLACEHOLDERS}
              submitLabel="Get My Free Estimate"
              reply={<>We reply within <span>1 business day</span>. No spam, ever.</>}
            />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="hw-trust" aria-label="Ratings and credentials">
        <div className="hw-wrap">
          <div className="hw-item"><b>4.9</b><span className="hw-star" aria-hidden="true">★</span> Google</div>
          <div className="hw-item"><b>5.0</b><span className="hw-star" aria-hidden="true">★</span> Clutch</div>
          <div className="hw-item"><b>5.0</b><span className="hw-star" aria-hidden="true">★</span> GoodFirms</div>
          <div className="hw-item"><b>1999</b> In business since</div>
          <div className="hw-item"><b>Dallas</b> Office on Preston Rd</div>
          <div className="hw-item"><b>Zoho</b> Authorized Partner</div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="hw-band" aria-labelledby="hw-h-problem">
        <div className="hw-wrap hw-problem">
          <div className="hw-head" style={{ marginBottom: 0 }}>
            <p className="hw-eyebrow">Why web projects go wrong</p>
            <h2 id="hw-h-problem">Most web projects fail before a line of code is written</h2>
            <p className="hw-lead">
              Dallas businesses often come to us after a project went over budget, stalled, or launched a site nobody uses. The cause is rarely the code. It&apos;s how the project was set up.
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
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="hw-band hw-tint" id="services" aria-labelledby="hw-h-services">
        <div className="hw-wrap">
          <div className="hw-head">
            <p className="hw-eyebrow">Services</p>
            <h2 id="hw-h-services">Web development services in Dallas</h2>
          </div>
          <div className="hw-grid3">
            <article className="hw-svc">
              <SvcIcon d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
              <h3>Custom website development</h3>
              <p>Fast, secure business websites built from scratch around your sales process, with clear calls to action on every page.</p>
              <Link className="hw-textlink" href="/portfolio">See our work →</Link>
            </article>
            <article className="hw-svc">
              <SvcIcon d="M3 4h18v16H3zM3 9h18M8 9v11" />
              <h3>Web apps and customer portals</h3>
              <p>Booking systems, quote tools, dashboards and client logins that replace spreadsheets and email chains.</p>
            </article>
            <article className="hw-svc">
              <SvcIcon d="M3 4h2l2.4 11h11l2-8H6.3M9 20h.01M18 20h.01" />
              <h3>eCommerce development</h3>
              <p>Shopify, WooCommerce, Magento and OpenCart stores with product filters, fast checkout and inventory sync.</p>
              <Link className="hw-textlink" href="/case-study-automobile-parts-website-design-seo">ARC Levers case study →</Link>
            </article>
            <article className="hw-svc">
              <SvcIcon d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4" />
              <h3>WordPress development</h3>
              <p>Custom themes and plugins your team can update without a developer, with speed and security set up properly.</p>
            </article>
            <article className="hw-svc">
              <SvcIcon d="M9 7H6a4 4 0 0 0 0 8h3M15 7h3a4 4 0 0 1 0 8h-3M8 11h8" />
              <h3>Integrations and automation</h3>
              <p>Connect your site to Zoho, Go High Level, payment gateways, ERPs and AI chatbots, so leads and orders flow without retyping.</p>
            </article>
            <article className="hw-svc">
              <SvcIcon>
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
              </SvcIcon>
              <h3>Maintenance and support</h3>
              <p>Security updates, backups, monitoring and feature work after launch, from the same team that built it.</p>
              <Link className="hw-textlink" href="/texas/website-maintenance-services-dallas">Website maintenance in Dallas →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="hw-stack" aria-label="Technologies">
        <div className="hw-wrap">
          <span className="hw-lbl">We build with</span>
          {stack.map((t) => (
            <span className="hw-t" key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="hw-band" id="results" aria-labelledby="hw-h-results">
        <div className="hw-wrap">
          <div className="hw-head">
            <p className="hw-eyebrow">Results</p>
            <h2 id="hw-h-results">Development work that pays for itself</h2>
          </div>
          <div className="hw-results">
            <article className="hw-res hw-feature">
              <p className="hw-who">ARC Levers · Motorcycle parts manufacturer</p>
              <p className="hw-big">275%</p>
              <p className="hw-label">Increase in average monthly sales</p>
              <p>We rebuilt an outdated OpenCart store, reorganised products by brand, model and year, and fixed the technical SEO.</p>
              <Link className="hw-textlink" href="/case-study-automobile-parts-website-design-seo">Read the case study →</Link>
            </article>
            <article className="hw-res">
              <p className="hw-who">American Real Estate and Mortgage School</p>
              <p className="hw-bigq">Complex applications, delivered smoothly</p>
              <p className="hw-label">David Schnieder, Founder</p>
              <p>“No matter how much complex applications had in our project, B3NET team implemented all those smoothly.”</p>
              <Link className="hw-textlink" href="/testimonial">Read the review →</Link>
            </article>
            <article className="hw-res">
              <p className="hw-who">Acrendo · Long-term client</p>
              <p className="hw-big">2013</p>
              <p className="hw-label">Working together since</p>
              <p>Acrendo has trusted B3NET with several web projects since 2013, and describes our work as consistently professional and high quality.</p>
              <Link className="hw-textlink" href="/testimonial">More client reviews →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="hw-band hw-tint" aria-labelledby="hw-h-ind">
        <div className="hw-wrap">
          <div className="hw-head">
            <p className="hw-eyebrow">Dallas industries</p>
            <h2 id="hw-h-ind">Built for the way DFW companies sell</h2>
            <p className="hw-lead">Dallas–Fort Worth runs on financial services, healthcare, logistics, real estate and professional services. Each needs different things from its website.</p>
          </div>
          <div className="hw-inds">
            {industries.map(([t, d]) => (
              <div className="hw-ind" key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="hw-band" id="process" aria-labelledby="hw-h-process">
        <div className="hw-wrap">
          <div className="hw-head">
            <p className="hw-eyebrow">Process</p>
            <h2 id="hw-h-process">A clear plan, a fixed scope, no surprises</h2>
            <p className="hw-lead">A standard business website takes 4–6 weeks. Larger web applications take several months. You get the timeline in writing before we start.</p>
          </div>
          <ol className="hw-steps">
            {steps.map(([wk, t, d]) => (
              <li className="hw-step" key={t}><span className="hw-wk">{wk}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
          <div className="hw-engage">
            {engage.map(([t, d]) => (
              <div key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
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
        </div>
      </section>

      {/* OFFICE */}
      <section className="hw-band" id="office" aria-labelledby="hw-h-office">
        <div className="hw-wrap hw-fit">
          <div>
            <p className="hw-eyebrow">Local team</p>
            <h2 id="hw-h-office" style={{ marginTop: 12 }}>A Dallas team you can meet in person</h2>
            <p className="hw-lead">
              Our office is on Preston Road in North Dallas. Come in to talk through your project, or we&apos;ll meet you on a video call. Either way, you work with the same team from the first meeting to launch.
            </p>
            <div className="hw-areas" style={{ marginTop: 26 }}>
              <h3>Serving Dallas–Fort Worth</h3>
              <div className="hw-chips">
                {areas.map((a) => <span key={a}>{a}</span>)}
              </div>
            </div>
          </div>
          <div className="hw-office">
            <h3>B3NET Dallas office</h3>
            <address>13601 Preston Rd, Ste W706<br />Dallas, TX 75240</address>
            <p>
              <a className="hw-ph" href="tel:+18778908986" style={{ color: "var(--white)", textDecoration: "none" }}>877-890-8986</a>
              <br />
              <a className="hw-sm" href="mailto:info@b3net.com" style={{ textDecoration: "none" }}>info@b3net.com</a>
            </p>
            <p className="hw-sm">Office hours: Mon–Fri, 9am–6pm CT. Visits by appointment.</p>
            <a className="hw-btn" href="#estimate">Book a meeting <Arrow /></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hw-band hw-tint" id="faq" aria-labelledby="hw-h-faq">
        <div className="hw-wrap hw-faq">
          <div className="hw-head">
            <p className="hw-eyebrow">FAQ</p>
            <h2 id="hw-h-faq">Dallas web development questions, answered</h2>
            <p className="hw-lead">Rather talk? Call <span className="hw-ph">877-890-8986</span> and speak with our team.</p>
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

      {/* FINAL CTA */}
      <section className="hw-final" aria-labelledby="hw-h-final">
        <div className="hw-wrap">
          <div>
            <p className="hw-eyebrow" style={{ color: "#FFB08A" }}>Free project estimate</p>
            <h2 id="hw-h-final" style={{ marginTop: 12 }}>Tell us what you want to build. We&apos;ll tell you what it takes.</h2>
            <p className="hw-lead">Share your project and get a scoped estimate, recommended tech stack and timeline. Free, with no obligation.</p>
            <div className="hw-contactlines">
              <a className="hw-callnum" href="tel:+18778908986"><Phone /><span className="hw-ph">877-890-8986</span></a>
              <span className="hw-callnum" style={{ color: "var(--hero-ink)", fontWeight: 500 }}>13601 Preston Rd, Ste W706, Dallas, TX 75240</span>
            </div>
          </div>
          <div className="hw-formcard">
            <h2>Get a free project estimate</h2>
            <p className="hw-formsub">We reply within <span>1 business day</span>.</p>
            <LeadForm
              cf7={CF7}
              idPrefix="f"
              extra={{ kind: "select", label: "What are you building?", options: PROJECT_TYPES }}
              placeholders={PLACEHOLDERS}
              submitLabel="Get My Free Estimate"
            />
          </div>
        </div>
      </section>

      {/* Mobile quick-contact bar */}
      <div className="hw-callbar" aria-label="Quick contact">
        <a className="hw-c1" href="tel:+18778908986"><Phone /><span className="hw-long">Call 877-890-8986</span><span className="hw-short">Call now</span></a>
        <a className="hw-c2" href="#estimate">Free Estimate</a>
      </div>
    </main>
  );
}
