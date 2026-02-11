"use client";

import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import Select1 from "../../assets/images/select-1.png";
import Select2 from "../../assets/images/select-2.png";
import Select3 from "../../assets/images/select-3.png";
import Select4 from "../../assets/images/select-4.png";
import Select5 from "../../assets/images/select-5.png";

type ProcessStep = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
};

const processSteps: ProcessStep[] = [
  {
    id: "one",
    title: "Initiation",
    description:
      "We begin by understanding your business goals and challenges. Using AI-powered analysis, we identify key opportunities and set clear objectives to ensure your project starts on the right track.",
    image: Select1,
  },
  {
    id: "two",
    title: "Planning",
    description:
      "Together, we shape the strategy and design a scalable roadmap. This involves picking the right tech, building a timeline, and setting the foundation for efficiency and long-term success.",
    image: Select2,
  },
  {
    id: "three",
    title: "Execution",
    description:
      "Our expert team brings the plan to life by deploying strategy into action. We design, develop, and integrate solutions to meet your goals.",
    image: Select3,
  },
  {
    id: "four",
    title: "Quality Assurance",
    description:
      "Before anything goes live, we test it rigorously. Every project undergoes quality checks to ensure it’s enterprise-ready and reliable.",
    image: Select4,
  },
  {
    id: "five",
    title: "Delivery",
    description:
      "We deliver your project with care, ensuring everything runs smoothly, on time, and optimized for real-world performance.",
    image: Select5,
  },
];

const Process: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(processSteps[0].id);
  const [activeImage, setActiveImage] = useState<StaticImageData>(
    processSteps[0].image
  );

  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggle = (step: ProcessStep) => {
    setActiveImage(step.image);
    setActiveId((prev) => (prev === step.id ? "" : step.id));
  };

  return (
    <div className="about1 workflow-sec sp new-gap" id="workflow">
      <div className="container">
        <div className="row mb-4 mb-md-5">
          <div className="col-lg-12 text-center">
            <div className="heading-title">
              <p>Our Process</p>
              <h2>
                Intelligent. <span>Custom-Built.</span> Efficient.
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="accordion custom-accordion">
              {processSteps.map((step, index) => {
                const isOpen = activeId === step.id;
                const el = contentRefs.current[step.id];
                const height = isOpen && el ? el.scrollHeight : 0;

                return (
                  <div className="accordion-item" key={step.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          !isOpen ? "collapsed" : ""
                        }`}
                        type="button"
                        onClick={() => toggle(step)}
                        aria-expanded={isOpen}
                      >
                        <span className="icon-1">
                          <i className="fa-solid fa-check"></i>
                        </span>
                        {index + 1}. {step.title}
                        <span className="icon-2">
                          <i className="fa-solid fa-chevron-down"></i>
                        </span>
                      </button>
                    </h2>

                    <div
                      className={`acc-anim ${isOpen ? "open" : ""}`}
                      style={{ maxHeight: `${height}px` }}
                    >
                      <div
                        className="acc-anim-inner"
                        ref={(node) => {
                          contentRefs.current[step.id] = node;
                        }}
                      >
                        <div className="accordion-body">
                          <p>{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div className="image-container d-none d-md-block pt-5 process-img-col">
              <Image src={activeImage} alt="Process Step" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
