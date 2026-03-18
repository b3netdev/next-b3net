"use client";

import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    column: "left",
    question: "What industries does B3NET work with?",
    answer: (
      <>
        At B3NET, we collaborate with businesses across a wide range of
        industries, including healthcare, eCommerce, fintech, education,
        logistics, SaaS, real estate, travel, and startups. Our team adapts
        technology and strategy based on each industry’s unique challenges,
        ensuring scalable and future-ready digital solutions.
      </>
    ),
  },
  {
    id: 2,
    column: "left",
    question: "What web development services does B3NET provide?",
    answer: (
      <>
        B3NET offers end-to-end web development services, including custom
        website development, responsive web applications, CMS-based websites,
        eCommerce platforms, and enterprise web solutions. Our focus is on
        building secure, scalable, and high-performance websites tailored to
        your business goals.
      </>
    ),
  },
  {
    id: 3,
    column: "left",
    question: "What makes B3NET different from other digital agencies?",
    answer: (
      <>
        B3NET stands out through a consultative, results-driven approach. We
        don’t just build solutions—we understand your business goals, analyze
        user behavior, and align technology with growth outcomes. Transparent
        communication, agile execution, and long-term partnership mindset set us
        apart from traditional agencies.
      </>
    ),
  },
  {
    id: 4,
    column: "left",
    question: "How does B3NET ensure project quality?",
    answer: (
      <>
        Quality is built into every stage of our process. We follow proven
        development standards, conduct regular code reviews, perform multi-level
        testing, and maintain continuous client feedback loops. Our dedicated QA
        team ensures every solution meets performance, security, and usability
        benchmarks before launch.
      </>
    ),
  },
  {
    id: 5,
    column: "left",
    question: "How does B3NET approach website design?",
    answer: (
      <>
        Our web design process is user-first and data-driven. We combine modern
        UI/UX principles with brand strategy to create visually appealing,
        intuitive, and conversion-focused designs. Every design is optimized for
        usability, accessibility, and consistent performance across all devices.
      </>
    ),
  },
  {
    id: 6,
    column: "left",
    question: "Do you provide support after project completion?",
    answer: (
      <>
        Yes. B3NET offers post-launch support and maintenance to ensure your
        product runs smoothly. Depending on your needs, this may include
        performance monitoring, security updates, feature enhancements, and
        technical support—so your digital solution continues to evolve with your
        business.
      </>
    ),
  },
  {
    id: 7,
    column: "left",
    question: "How long does a typical project take?",
    answer: (
      <>
        Project timelines depend on scope, complexity, and requirements. A
        standard website may take 4 to 6 weeks, while larger web or software
        solutions may take several months. We provide a detailed timeline and
        milestones before the project begins to ensure clear expectations.
      </>
    ),
  },
  {
    id: 8,
    column: "right",
    question: "What software development services does B3NET offer?",
    answer: (
      <>
        We provide end-to-end software development services, including:
        <ul>
          <li>Custom software development</li>
          <li>Web and mobile application development</li>
          <li>SaaS product development</li>
          <li>API integration & system modernization</li>
          <li>Cloud solutions and DevOps support</li>
        </ul>
        Each solution is tailored to meet your operational and scalability
        requirements.
      </>
    ),
  },
  {
    id: 9,
    column: "right",
    question: "Does B3NET offer web development services?",
    answer: (
      <>
        Absolutely. B3NET specializes in high-performance, user-centric web
        development, including corporate websites, enterprise platforms, custom
        portals, and eCommerce solutions. Our websites are designed for speed,
        security, SEO, and seamless user experience across all devices.
      </>
    ),
  },
  {
    id: 10,
    column: "right",
    question: "Can B3NET work with startups as well as enterprises?",
    answer: (
      <>
        Yes. We partner with early-stage startups, growing businesses, and large
        enterprises alike. Whether you’re validating an idea, building an MVP,
        or scaling an existing platform, we tailor our engagement model to fit
        your stage and budget.
      </>
    ),
  },
  {
    id: 11,
    column: "right",
    question: "How do you manage communication during a project?",
    answer: (
      <>
        We maintain clear and consistent communication through regular updates,
        scheduled meetings, and collaboration tools. A dedicated project manager
        acts as your single point of contact, ensuring transparency,
        accountability, and timely delivery.
      </>
    ),
  },
  {
    id: 12,
    column: "right",
    question: "Does B3NET offer custom solutions or ready-made packages?",
    answer: (
      <>
        B3NET primarily focuses on custom-built solutions designed around your
        specific business goals. However, we also leverage proven frameworks and
        accelerators where appropriate to reduce development time without
        compromising quality.
      </>
    ),
  },
  {
    id: 13,
    column: "right",
    question:
      "Does B3NET build SEO-friendly and performance-optimized websites?",
    answer: (
      <>
        Yes. All websites developed by B3NET follow SEO best practices and
        performance optimization standards. We ensure clean code structure, fast
        load times, mobile responsiveness, and technical SEO readiness—helping
        your website rank better and deliver a seamless user experience.
      </>
    ),
  },
  {
    id: 14,
    column: "right",
    question: "How do I get started with B3NET?",
    answer: (
      <>
        Getting started is simple. Share your requirements with us, and our
        experts will analyze your needs, suggest the right approach, and provide
        a clear roadmap with timelines and cost estimates—no obligations, just
        clarity.
      </>
    ),
  },
];

const leftFaqs = faqData.filter((item) => item.column === "left");
const rightFaqs = faqData.filter((item) => item.column === "right");

function AccordionItem({
  item,
  openId,
  setOpenId,
}: {
  item: (typeof faqData)[number];
  openId: number | null;
  setOpenId: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const open = openId === item.id;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`faqHeading${item.id}`}>
        <button
          className={`accordion-button${open ? "" : " collapsed"}`}
          type="button"
          onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
          aria-expanded={open}
          aria-controls={`faqCollapse${item.id}`}
        >
          <i
            className={`fa-solid icon transition-transform duration-300 ease-in-out ${
              open ? "fa-minus" : "fa-plus"
            }`}
          ></i>
          <span className="text">{item.question}</span>
        </button>
      </h2>

      <div
        id={`faqCollapse${item.id}`}
        aria-labelledby={`faqHeading${item.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="accordion-body">{item.answer}</div>
      </div>
    </div>
  );
}

const FrequentQuestion = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="sp product-development">
     
        <div className="accordian-part">
          <div className="faq-part">
            <div className="container">
              <div className="row justify-content-center mb-4">
                <div className="col-lg-8 text-center">
                  <div className="heading-title">
                    <h2>
                      Frequently Asked
                      <span> Questions</span>
                    </h2>
                  </div>
                </div>
              </div>

              <div className="accordion" id="faqAccordion">
                <div className="row">
                  <div className="col-md-6 pe-md-4">
                    {leftFaqs.map((item) => (
                      <AccordionItem
                        key={item.id}
                        item={item}
                        openId={openId}
                        setOpenId={setOpenId}
                      />
                    ))}
                  </div>

                  <div className="col-md-6">
                    {rightFaqs.map((item) => (
                      <AccordionItem
                        key={item.id}
                        item={item}
                        openId={openId}
                        setOpenId={setOpenId}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FrequentQuestion;