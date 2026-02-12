"use client";

const FrequentQuestion = ({ pageData }: { pageData: any }) => {
  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>

        <div className="accordion new-accor-item" id="faqAccordion">
          {pageData?.acf?.data?.faq_repeater?.map((item: any, index: number) => {
            const headingId = `faqHeading${index + 1}`;
            const collapseId = `faqCollapse${index + 1}`;

            return (
              <div className="accordion-item" key={headingId}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={collapseId}
                  >
                    {item.question}
                    <i className="fa-solid fa-chevron-down faq-icon"></i>
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={headingId}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestion;
