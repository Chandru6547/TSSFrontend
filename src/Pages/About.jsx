import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import Navbar from "../Component/Navbar";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= end) clearInterval(timer);
        }, stepTime);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [end]);

  return (
    <div className="counter-box" ref={ref}>
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
};

export default function About() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      fadeRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          ref.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-page">
      <Navbar/>
      <h1 className="about-heading">ABOUT TECHSIGN SOLUTIONS</h1>

      <section className="about-section fade-section" ref={(el) => (fadeRefs.current[0] = el)}>
        <h2>Who We Are</h2>
        <p>
          TechSign Solutions transforms students into industry-ready IT professionals.
          We provide real-time project-based training and continuous skill improvement 
          to help students excel both technically and professionally.
        </p>
      </section>

      <section className="about-section fade-section" ref={(el) => (fadeRefs.current[1] = el)}>
        <h2>What We Offer</h2>
        <ul>
          <li>ISO Certified Training</li>
          <li>Technical + Aptitude + Soft Skills Training</li>
          <li>Daily Tests & Weekly Coding Contests</li>
          <li>Real-time assessments & online learning platform</li>
        </ul>
      </section>

      <section className="about-section fade-section" ref={(el) => (fadeRefs.current[2] = el)}>
        <h2>Our Approach</h2>
        <ol>
          <li>Practical real-time scenario based teaching</li>
          <li>Continuous tracking via Git repository</li>
          <li>Strong focus on problem-solving and development skills</li>
        </ol>
      </section>

      <section className="about-section fade-section" ref={(el) => (fadeRefs.current[3] = el)}>
        <h2>Our Trainers</h2>
        <ul>
          <li>Highly experienced mentors from real industry background</li>
          <li>Training from fundamentals to advanced concepts</li>
          <li>Exposure to HackerRank, CodeChef, LeetCode & more</li>
        </ul>
      </section>

      {/* Placement Stats */}
      <section className="placement-stats fade-section" ref={(el) => (fadeRefs.current[4] = el)}>
        <h2 className="stats-heading">STUDENTS SUCCESS & PLACEMENTS</h2>
        <p className="stats-desc">
          Our placement system has enabled students to secure dream jobs and internships
          with top MNCs and product-based companies.
        </p>

        <div className="counter-grid">
          <Counter end={1200} label="Students Trained" />
          <Counter end={1450} label="Placement Offers" />
          <Counter end={18} label="Highest Package (LPA)" />
          <Counter end={5} label="Average Package (LPA)" />
          <Counter end={140} label="Recruitment Partners" />
        </div>
      </section>

      <section className="about-extra fade-section" ref={(el) => (fadeRefs.current[5] = el)}>
        <h2>Why Choose TechSign Solutions?</h2>
        <ul>
          <li>End-to-end placement assistance & real interview preparation</li>
          <li>Mock interviews & resume building support</li>
          <li>Workshops, bootcamps, hackathons, and coding challenges</li>
          <li>Learning path designed to match real industry projects</li>
        </ul>
      </section>

      <section className="about-contact fade-section" ref={(el) => (fadeRefs.current[6] = el)}>
        <h2>Contact & Reach</h2>
        <p><strong>Location:</strong> Tamil Nadu, Telangana & Andhra Pradesh</p>
        <p><strong>Email:</strong> techsignsolutions@gmail.com</p>
        <p><strong>Mobile:</strong> +91 6379867066</p>
      </section>
    </div>
  );
}
