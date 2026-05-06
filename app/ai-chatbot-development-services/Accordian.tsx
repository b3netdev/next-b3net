"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
type AccordionItem = {
  id: string;
  question: string;
  answer: string;
  show?: boolean;
};

type AccordianProps = {
  items?: AccordionItem[];
  parentId: string;
};

const Accordian = ({ items = [], parentId }: AccordianProps) => {
  const defaultOpenItem = items.find((item) => item.show)?.id || null;
  const [openItem, setOpenItem] = useState<string | null>(defaultOpenItem);

  const handleToggle = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  if (!items.length) {
    return <p>No accordion items found.</p>;
  }

  return (
    <div className="accordion custom-accordion" id={parentId}>
      {items.map((item) => {
        const isOpen = openItem === item.id;

        return (
          <div className="accordion-item" key={item.id}>
            <button
              className={`accordion-button !flex  !justify-between ${!isOpen ? "collapsed" : ""}`}
              type="button"
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={item.id}
            >
              {item.question}
              {isOpen ? (
               <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </button>

            <div
              id={item.id}
             
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              <div className="accordion-body primary-bodyText">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;