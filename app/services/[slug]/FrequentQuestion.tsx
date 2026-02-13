"use client";

import { useEffect, useMemo, useState } from "react";

const FrequentQuestion = ({ pageData }: { pageData: any }) => {
  const faqs = useMemo(() => pageData?.acf?.data?.faq_repeater ?? [], [pageData]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  useEffect(() => {
    if (faqs.length) setActiveIndex(0);
  }, [faqs.length]);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>

      <div className="accordion" id="faqAccordion">
        {faqs.map((item: any, index: number) => {
          const headingId = `faqHeading${index}`;
          const collapseId = `faqCollapse${index}`;
          const isOpen = activeIndex === index;

          return (
            <div className="accordion-item" key={headingId}>
              <div className="flex  justify-between bg-amber-200">
                <div className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={collapseId}
                  >
                    {item?.question}
                  </button>
                </div>
               
              </div>
              {isOpen && (
                <div id={collapseId} className="accordion-collapse">
                  <div className="accordion-body">{item?.answer}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentQuestion;
