"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import Select1 from "../../assets/images/select-1.webp";
import Select2 from "../../assets/images/select-2.webp";
import Select3 from "../../assets/images/select-3.webp";
import Select4 from "../../assets/images/select-4.webp";
import Select5 from "../../assets/images/select-5.webp";
import Select0 from "../../assets/images/select-0.webp";

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
  const [activeId, setActiveId] = useState<string>("one");
  const [activeImage, setActiveImage] = useState<StaticImageData>(
    processSteps[0].image
  );
  const [contentHeights, setContentHeights] = useState<Record<string, number>>(
    {}
  );

  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useLayoutEffect(() => {
    const heights: Record<string, number> = {};

    processSteps.forEach((step) => {
      const el = contentRefs.current[step.id];
      if (el) {
        heights[step.id] = el.scrollHeight;
      }
    });

    setContentHeights(heights);

    const handleResize = () => {
      const updatedHeights: Record<string, number> = {};

      processSteps.forEach((step) => {
        const el = contentRefs.current[step.id];
        if (el) {
          updatedHeights[step.id] = el.scrollHeight;
        }
      });

      setContentHeights(updatedHeights);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggle = (step: ProcessStep) => {
    console.log(step)
    if (activeId == step.id) {
      setActiveImage(Select0)
      setActiveId((prev) => (prev === step.id ? "" : step.id));
      return
    }
    setActiveImage(step.image);
    setActiveId((prev) => (prev === step.id ? "" : step.id));
  };

  return (
    <div className="about1 workflow-sec sp new-gap" id="workflow">
      <div className="container">
        <div className="row mb-4 mb-md-5">
          <div className="col-lg-12 text-center">
            <div className="heading-title">
              <p className="primary-bodyText">Our Process</p>
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

                return (
                  <div className="accordion-item" key={step.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
                        type="button"
                        onClick={() => toggle(step)}
                        aria-expanded={isOpen}
                      >
                        <div className={`${index==3?"process-sm-text":""}`}>

                          <span className="icon-1">
                            <i className="fa-solid fa-check"></i>
                          </span>
                          {index + 1}.{step.title}
                          <span className="icon-2">
                            <i className="fa-solid fa-chevron-down"></i>
                          </span>
                        </div>
                      </button>
                    </h2>

                    <div
                      className={`acc-anim ${isOpen ? "open" : ""}`}
                      style={{
                        maxHeight: isOpen
                          ? `${contentHeights[step.id] || 0}px`
                          : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease",
                      }}
                    >
                      <div
                        className="acc-anim-inner"
                        ref={(node) => {
                          contentRefs.current[step.id] = node;
                        }}
                      >
                        <div className="accordion-body">
                          <p className="primary-bodyText">{step.description}</p>
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
              <Image src={activeImage} alt="Process Step" unoptimized />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;