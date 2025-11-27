import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";
import Navbar from "../Component/Navbar";

import feedbackvd1 from "../video/first.mp4";
import feedbackvd2 from "../video/second.mp4";

const testimonialsData = [
  // ✅ MOCK INTERVIEW FEEDBACK
  {
    name: "Anitha S",
    category: "Mock Interview",
    feedback:
      "I completed an extensive Mock Interview training program that focused on both technical and HR interview preparation. The sessions were conducted in a real interview environment and included detailed performance analysis. The feedback helped me improve my communication skills, confidence, and overall interview approach."
  },
  {
    name: "Priya",
    category: "Mock Interview",
    feedback:
      "The Mock Interview sessions were very practical and helped me understand real interview expectations. I learned how to answer questions clearly, handle pressure, and present my skills confidently. The personalized feedback after each session helped me correct my mistakes effectively."
  },
  {
    name: "Arun",
    category: "Mock Interview",
    feedback:
      "The mock interview practice improved my confidence and reduced my fear of technical interviews. I learned how to structure my answers properly and manage time during interviews. The guidance provided after every session was very useful for my improvement."
  },

  // ✅ DSA FEEDBACK
  {
    name: "Deepika",
    category: "DSA",
    feedback:
      "I completed a structured DSA training program that covered arrays, linked lists, stacks, queues, trees, and sorting algorithms. The concepts were explained clearly with regular practice problems. This training helped me strengthen my logical thinking and coding confidence."
  },
  {
    name: "Sneha",
    category: "DSA",
    feedback:
      "The DSA program helped me understand core algorithm concepts in a very simple way. Daily coding practice and doubt clarification sessions improved my problem-solving speed and accuracy. I now feel confident while facing coding interviews."
  },
  {
    name: "Vignesh",
    category: "DSA",
    feedback:
      "The DSA training enhanced my understanding of data structures and improved my ability to solve complex problems. The hands-on coding practice and regular assessments helped me improve my performance in technical rounds."
  },

  // ✅ PROBLEM SOLVING FEEDBACK
  {
    name: "Karthik",
    category: "Problem Solving",
    feedback:
      "The Problem Solving training focused on improving logical thinking and analytical skills. Daily challenges and guided practice helped me learn multiple approaches to solve the same problem. This greatly improved my confidence in competitive and interview-based coding."
  },
  {
    name: "Rahul",
    category: "Problem Solving",
    feedback:
      "The problem-solving sessions helped me develop a structured approach to coding problems. I learned how to analyze problems, select the best solution, and optimize my code for better performance and accuracy."
  },
  {
    name: "Divya",
    category: "Problem Solving",
    feedback:
      "The regular problem-solving exercises helped me improve my speed and accuracy in writing code. The guidance provided by the trainers strengthened my fundamentals and boosted my confidence for technical assessments."
  }
];


export default function Testimonials() {
  const swiperRefs = useRef([]);

  const handleVideoEnd = (index) => {
    if (swiperRefs.current[index]) {
      swiperRefs.current[index].slideNext();
    }
  };

  const renderSlider = (title, category, sliderIndex) => {
    const filteredData = testimonialsData.filter(
      (item) => item.category === category
    );

    return (
      <>
        <h2 className="testimonial-category-title">{title}</h2>

        <Swiper
          onSwiper={(swiper) => (swiperRefs.current[sliderIndex] = swiper)}
          slidesPerView={3}
          spaceBetween={25}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="testimonial-slider"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1050: { slidesPerView: 3 }
          }}
        >
          {filteredData.map((item, index) => {
            const videoSrc = index % 2 === 0 ? feedbackvd1 : feedbackvd2;

            return (
              <SwiperSlide key={index}>
                <div className="test-card">
                  <video
                    className="test-video"
                    controls
                    onEnded={() => handleVideoEnd(sliderIndex)}
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>

                  <h3>{item.name}</h3>
                  <p>{item.feedback}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  };

  return (
    <div className="testimonial-page">
      <Navbar />
      <h1 className="testimonial-title">Student Success Stories</h1>

      {renderSlider("Mock Interview Feedback", "Mock Interview", 0)}
      {renderSlider("DSA Feedback", "DSA", 1)}
      {renderSlider("Problem Solving Feedback", "Problem Solving", 2)}
    </div>
  );
}
