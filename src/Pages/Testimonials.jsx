import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";
import Navbar from "../Component/Navbar";

const testimonialsData = [
  {
    name: "Anitha S",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    feedback: "The training sessions are excellent and interactive. The coding support and mock interviews helped me build confidence."
  },
  {
    name: "Karthik",
    video: "https://www.w3schools.com/html/movie.mp4",
    feedback: "Everyday practice and daily reports helped me improve my knowledge and land multiple interview calls."
  },
  {
    name: "Deepika",
    video: "https://www.w3schools.com/html/movie.mp4",
    feedback: "Best place to learn real project-based training. Trainers are very friendly and supportive."
  },
  {
    name: "Suresh",
    video: "https://www.w3schools.com/html/movie.mp4",
    feedback: "Mock tests, resume preparation and doubt clarification are very useful. Highly recommended."
  }
];

export default function Testimonials() {
  return (
    <div className="testimonial-page">
      <Navbar />

      <h1 className="testimonial-title">Student Success Stories</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 2800 }}
        modules={[Pagination, Navigation, Autoplay]}
        className="testimonial-slider"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1050: { slidesPerView: 3 }
        }}
      >
        {testimonialsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="test-card">
              {item.video ? (
                <video className="test-video" controls>
                  <source src={item.video} type="video/mp4" />
                </video>
              ) : (
                <div className="no-video">🎤 Audio / Written Feedback</div>
              )}
              <h3>{item.name}</h3>
              <p>{item.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
