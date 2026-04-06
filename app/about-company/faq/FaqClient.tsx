"use client";

import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

type Props = {
  pageData: any;
  loading?: boolean;
};

function AccordionItem({
  question,
  answer,
  id,
  activeId,
  setActiveId,
}: {
  question: string;
  answer: string;
  id: string;
  activeId: string | null;
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const open = activeId === id;

  const handleToggle = () => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button${open ? "" : " collapsed"}`}
          type="button"
          onClick={handleToggle}
          aria-expanded={open}
          aria-controls={`collapse-${id}`}
        >
          <i
            className={`fa-solid fa-chevron-down icon transition-transform duration-300 ease-in-out ${
              open ? "rotate-180" : "rotate-0"
            }`}
          ></i>
          <span className="text">{question}</span>
        </button>
      </h2>

      <div
        id={`collapse-${id}`}
        aria-labelledby={`heading-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
}

const FaqSkeletonItem = () => (
  <div className="accordion-item">
    <div className="accordion-header">
      <div className="accordion-button" style={{ display: "block" }}>
        <Stack spacing={1}>
          <Skeleton variant="text" height={28} width="85%" />
          <Skeleton variant="text" height={18} width="55%" />
        </Stack>
      </div>
    </div>
    <div className="accordion-body">
      <Stack spacing={0.8}>
        <Skeleton variant="text" height={18} width="95%" />
        <Skeleton variant="text" height={18} width="90%" />
        <Skeleton variant="text" height={18} width="70%" />
      </Stack>
    </div>
  </div>
);

export default function FaqClient({ pageData, loading = false }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <>
      <div className="accordian-part">
        <div className="faq-part">
          <div className="container">
            <div className="accordion" id="faqAccordion">
              <div className="row">
                <div className="col-md-6 pe-md-4">
                  {loading
                    ? Array.from({ length: 8 }).map((_, i) => (
                        <FaqSkeletonItem key={`left-skel-${i}`} />
                      ))
                    : pageData?.acf?.data?.faq_left?.map((item: any, index: number) => (
                        <AccordionItem
                          key={`left-${index}`}
                          id={`left-${index}`}
                          question={item?.question}
                          answer={item?.answer}
                          activeId={activeId}
                          setActiveId={setActiveId}
                        />
                      ))}
                </div>

                <div className="col-md-6">
                  {loading
                    ? Array.from({ length: 8 }).map((_, i) => (
                        <FaqSkeletonItem key={`right-skel-${i}`} />
                      ))
                    : pageData?.acf?.data?.Faq_Right?.map((item: any, index: number) => (
                        <AccordionItem
                          key={`right-${index}`}
                          id={`right-${index}`}
                          question={item?.question}
                          answer={item?.answer}
                          activeId={activeId}
                          setActiveId={setActiveId}
                        />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="webiner-video">
        <div className="video-section">
          <div className="container">
            <h2 className="text-md-start text-center">
              Webinar <span>Help</span>
            </h2>

            <div className="row gy-4">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div className="col-md-6 col-lg-4" key={`video-skel-${i}`}>
                      <div className="video-card text-center">
                        <div className="video-thumbnail">
                          <Skeleton variant="rounded" height={190} />
                        </div>
                        <div style={{ marginTop: 10 }}>
                          <Skeleton variant="text" height={22} width="70%" />
                        </div>
                      </div>
                    </div>
                  ))
                : pageData?.acf?.data?.video_repeater?.map((video: any, index: number) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                      <div className="video-card text-center">
                        <div className="video-thumbnail">
                          <div dangerouslySetInnerHTML={{ __html: video?.video_link ?? "" }} />
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}