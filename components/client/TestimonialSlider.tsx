"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";

import testImage1 from "../../assets/images/testi-img-1.webp";
import testImage2 from "../../assets/images/testi-img-2.webp";
import testImage3 from "../../assets/images/testi-img-3.webp";
import testImage4 from "../../assets/images/testi-img-4.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




const testimonials: any = [
  {
    id: 1,
    type: "text",
    img: testImage1,
    name: "Cindy Jacobs",
    role: "Director of Development",
    text:
      "B3NET went above and beyond with us. As a non-profit, WISEPlace relies on the kindness of our community partners to help us navigate change. B3NET expertly assisted with the redesign of our website under atypical circumstances...",
  },
  {
    id: 2,
    type: "video",
    img: testImage2,
    name: "Scott D. Stewart",
    role: "Executive Producer",
    video: "https://www.youtube.com/watch?v=u9ftgf6V1QI&t=2s",
    thumbnail_image: "https://img.youtube.com/vi/u9ftgf6V1QI/0.jpg"
  },
  {
    id: 3,
    type: "video",
    img: testImage3,
    name: "David Schnieder",
    role: "CEO of americanrealestateschool.com",
    video: "https://www.youtube.com/watch?v=ey2r4hwa5yc&t=4s",
    thumbnail_image: "https://img.youtube.com/vi/ey2r4hwa5yc/0.jpg"
  },
  {
    id: 4,
    type: "text",
    img: testImage4,
    name: "Cédric Duhamel",
    role: "Alain Girault",
    text:
      "It's always difficult to choose a good web designer among a large panel of professionals. B3NET has perfectly met the requirements for my business...",
  },
];

const Stars: React.FC = () => (
  <div className="stars">
    <ul>
      {[1, 2, 3, 4, 5].map((n) => (
        <li key={n}>
          <i className="fa-solid fa-star"></i>
        </li>
      ))}
    </ul>
  </div>
);

const TestimonialCard: React.FC<{ item: any }> = ({ item }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const getYouTubeId = (url: string) => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : "";
  };

  const videoId = item.type === "video" ? getYouTubeId(item.video) : "";

  return (
    <div className={`tes-box ${item.type === "video" ? "video-box" : ""}`}>
      <div className="bottom mb-2">
        <div className="image">
          <Image src={item.img} alt={item.name} />
        </div>
        <div className="content">
          <h4>{item.name}</h4>
          <p>{item.role}</p>
          <Stars />
        </div>
      </div>

      <div className="testi-text pt-2 pt-md-4">
        {item.type === "video" ? (
          !isPlaying ? (
            <div
              className="relative cursor-pointer testimonialvideo-thumbnail"
              onClick={() => setIsPlaying(true)}
            >

              <img
                src={item?.thumbnail_image}
                alt={item.name}
                className="w-full"
              />


              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[14px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="video-container-iframe">
              <div className="video-container-iframe aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title={item.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-[250px]"
                />
              </div>
            </div>
          )
        ) : (
          <p>{item.text}</p>
        )}
      </div>
    </div>
  );
};

const TestimonoalCard: React.FC = () => {
  return (
    <div className="testimonial-slider-col pe-0 ps-0">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          slidesPerView="auto"

        >
          {testimonials.map((item: any) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonoalCard;
