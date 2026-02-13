"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type AiCarouselProps = {
  carouselData?: any;
};

export default function AiSlider({ carouselData }: AiCarouselProps) {
  const defaultCarouselData = [
    {
      type: "video",
      src: "https://www.b3net.com/wp-content/uploads/2025/03/open-ai.webm",
      mime: "video/webm",
    },
    {
      type: "video",
      src: "https://www.b3net.com/wp-content/uploads/2025/03/ai-banner-video.webm",
      mime: "video/webm",
    },
    {
      type: "image",
      src: "https://www.b3net.com/wp-content/uploads/2025/03/banner-1.jpg",
      alt: "AI-Driven Digital Transformation",
      caption: {
        h2: "AI-Driven Digital TRANSFORMATION",
        h4: "for Your Business",
        text: "Welcome to B3NET Inc., the premier choice for artificial intelligence (AI) integrations and solutions designed to skyrocket your business efficiency and growth.",
      },
    },
  ];

  const dataToRender = carouselData?.length
    ? carouselData
    : defaultCarouselData;

  if (!dataToRender.length) return null;

  return (
    <div className="ai-carousel-wrapper" style={{ width: "100%" }}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, Mousewheel]}
        slidesPerView={1}
        spaceBetween={0}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        simulateTouch
        allowTouchMove
        grabCursor
        touchStartPreventDefault={false}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        style={{ width: "100%" }}
      >
        {dataToRender.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="item" style={{ width: "100%" }}>
              {item.type === "video" ? (
                <div style={{ width: "100%", height: "100%" }}>
                  <video
                    autoPlay
                    muted
                    controls
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                      pointerEvents: "none",
                    }}
                  >
                    <source src={item.src} type={item.mime} />
                  </video>
                </div>
              ) : (
                <>
                  <img
                    src={item.src}
                    alt={item.alt || ""}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                  {item.caption && (
                    <div className="carousel-caption">
                      <h2>{item.caption?.h2}</h2>
                      <h4>{item.caption?.h4}</h4>
                      {item.caption?.text}
                    </div>
                  )}
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
