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

type TestimonialText = {
  id: number;
  type: "text";
  img: StaticImageData;
  name: string;
  role: string;
  text: string;
};

type TestimonialVideo = {
  id: number;
  type: "video";
  img: StaticImageData;
  name: string;
  role: string;
  video: string;
};

type TestimonialItem = TestimonialText | TestimonialVideo;

const testimonials: TestimonialItem[] = [
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
    video: "https://www.youtube.com/embed/u9ftgf6V1QI?rel=0",
  },
  {
    id: 3,
    type: "video",
    img: testImage3,
    name: "David Schnieder",
    role: "CEO of americanrealestateschool.com",
    video: "https://www.youtube.com/embed/ey2r4hwa5yc?rel=0",
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

const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => {
  const swiperRef = useRef<any | null>(null);
  
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
          <div className="video-container-iframe">
            <iframe
              src={item.video}
              title={item.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
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
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          slidesPerView="auto"
          
        >
          {testimonials.map((item) => (
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
