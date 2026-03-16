"use client"
import { BASE_URL } from '@/lib/url';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function TestimonialSwiper() {
    const testimonials = [
        {
          id: 2,
          name: "David Schnieder",
          designation: "Founder",
          company: "American Real Estate and Mortgage School",
          image: BASE_URL + "/wp-content/uploads/2015/06/David-Schnieder.png",
          rating: 5,
          message:
            "No matter how much complex applications had in our project, B3NET team implemented all those smoothly. B3NET is indeed Orange County’s #1 web development firm.",
        },
        {
          id: 4,
          name: "Gina B",
          designation: "CEO",
          company: "Encore Staffing",
          image: BASE_URL + "/wp-content/uploads/2015/06/gina.png",
          rating: 5,
          message:
            "B3NET INC. did our website and they were very good, professional and a great value. I have already recommended them to other businesses.",
        },
        {
          id: 1,
          name: "Patrick McNamee",
          designation: "Broker Associate, REALTOR, SRES",
          company: "Evergreen Realty, HomeSmart",
          image: BASE_URL + "/wp-content/uploads/2015/06/PatrickMcNamee.png",
          rating: 5,
          message:
            "It was a pleasure working with B3NET on my new custom blog on the WordPress platform. I am very pleased with the result!",
        },
        {
          id: 5,
          name: "Gina B",
          designation: "CEO",
          company: "Encore Staffing",
          image: BASE_URL + "/wp-content/uploads/2015/06/gina.png",
          rating: 5,
          message:
            "B3NET INC. did our website and they were very good, professional and a great value. I have already recommended them to other businesses.",
        },
        {
          id: 3,
          name: "Gina B",
          designation: "CEO",
          company: "Encore Staffing",
          image: BASE_URL + "/wp-content/uploads/2015/06/gina.png",
          rating: 5,
          message:
            "B3NET INC. did our website and they were very good, professional and a great value. I have already recommended them to other businesses.",
        },
      ];
  return (
    <div className="testimonial-page-sec sp">
    <div className="container">
      <div className="testimonial-slider-col">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="item">
                <div className="tes-box">
                  <div className="bottom mb-2">
                    <div className="image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="content">
                      <strong>{item.name}</strong>
                      <div>
                        {item.designation}, {item.company}
                      </div>
                    </div>
                  </div>
                  <div className="testi-text pt-2 pt-md-4">
                    <p>{item.message}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export default TestimonialSwiper