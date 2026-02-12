"use client";

import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import ContactFooter from "@/components/server/ContactFooter";

type Props = {
  pageData: any;
  // optionally allow forcing skeleton while you test:
  loading?: boolean;
};

export default function FaqClient({ pageData, loading = false }: Props) {
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

  return (
    <>
      <div className="accordian-part">
        <div className="faq-part">
          <div className="container">
            <div className="accordion" id="faqAccordion">
              <div className="row">
                <div className="col-md-6 pe-md-4">
                  {loading ? (
                    Array.from({ length: 8 }).map((_, i) => (
                      <FaqSkeletonItem key={`left-skel-${i}`} />
                    ))
                  ) : (
                    pageData?.acf?.data?.faq_left?.map((data: any, index: number) => {
                      const headingId = `heading-left-${index}`;
                      const collapseId = `collapse-left-${index}`;

                      return (
                        <div className="accordion-item" key={index}>
                          <h2 className="accordion-header" id={headingId}>
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapseId}`}
                              aria-expanded="true"
                              aria-controls={collapseId}
                            >
                              <i className="fa-solid fa-minus icon"></i>
                              <span className="text">{data?.question}</span>
                            </button>
                          </h2>

                          <div
                            id={collapseId}
                            className="accordion-collapse collapse"
                            aria-labelledby={headingId}
                            data-bs-parent="#faqAccordion"
                          >
                            <div className="accordion-body">{data?.answer}</div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                <div className="col-md-6">
                  {loading ? (
                    Array.from({ length: 8 }).map((_, i) => (
                      <FaqSkeletonItem key={`right-skel-${i}`} />
                    ))
                  ) : (
                    pageData?.acf?.data?.Faq_Right?.map((data: any, index: number) => {
                      const headingId = `heading-right-${index}`;
                      const collapseId = `collapse-right-${index}`;

                      return (
                        <div className="accordion-item" key={index}>
                          <h2 className="accordion-header" id={headingId}>
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapseId}`}
                              aria-expanded="false"
                              aria-controls={collapseId}
                            >
                              <i className="fa-solid fa-minus icon"></i>
                              <span className="text">{data?.question}</span>
                            </button>
                          </h2>

                          <div
                            id={collapseId}
                            className="accordion-collapse collapse"
                            aria-labelledby={headingId}
                            data-bs-parent="#faqAccordion"
                          >
                            <div className="accordion-body">{data?.answer}</div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Webinar section */}
      <div className="webiner-video">
        <div className="video-section">
          <div className="container">
            <h2 className="text-md-start text-center">
              Webinar <span>Help</span>
            </h2>

            <div className="row gy-4">
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => (
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
              ) : (
                pageData?.acf?.data?.video_repeater?.map((video: any, index: number) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <div className="video-card text-center">
                      <div className="video-thumbnail">
                        <div dangerouslySetInnerHTML={{ __html: video?.video_link ?? "" }} />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <ContactFooter />
    </>
  );
}
