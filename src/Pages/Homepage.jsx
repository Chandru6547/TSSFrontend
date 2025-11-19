import React, { useEffect } from "react";
import Navbar from "../Component/Navbar";
import "./Homepage.css";
import ParticlesBackground from "./ParticlesBackground";

export default function HomePage() {

  // ---------------- SCROLL FADE EFFECT ---------------- //
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage">
      <ParticlesBackground />
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="hero-title fade-section">
          Welcome to TechSign Solutions
        </h1>

        <p className="hero-subtitle fade-section">
          A Leading IT Training Organization offering Real-Time Training, 
          Live Projects & Placement Support for Students and Professionals.
        </p>

        <button className="hero-btn fade-section">Explore Courses</button>
      </section>

      {/* HIGHLIGHTS */}
      <section className="highlights">
        <h2 className="highlight-title fade-section">Why Choose Us?</h2>

        <div className="highlight-grid">

          <div className="highlight-card fade-section">
            <h3 className="fade-section">Real-Time Training</h3>
            <p className="fade-section">
              Courses designed by industry experts with hands-on projects.
            </p>
          </div>

          <div className="highlight-card fade-section">
            <h3 className="fade-section">Placement Support</h3>
            <p className="fade-section">
              Resume building, interview preparation, and job assistance.
            </p>
          </div>

          <div className="highlight-card fade-section">
            <h3 className="fade-section">Expert Trainers</h3>
            <p className="fade-section">
              Learn from certified professionals with 10+ years experience.
            </p>
          </div>

        </div>
      </section>

      {/* ================= OUR COURSES ================= */}
      <section className="courses">
        <h2 className="section-title fade-section">Our Popular Courses</h2>

        <div className="courses-grid">

          <div className="course-box fade-section">
            <h3>MERN Full Stack Development</h3>
            <p>React, Node.js, MongoDB, Express + Live Project</p>
          </div>

          <div className="course-box fade-section">
            <h3>AWS Cloud & DevOps</h3>
            <p>AWS, Docker, Kubernetes, CI/CD, Terraform</p>
          </div>

          <div className="course-box fade-section">
            <h3>Python & Machine Learning</h3>
            <p>Data Science, ML Models, Pandas, NumPy</p>
          </div>

          <div className="course-box fade-section">
            <h3>Cyber Security</h3>
            <p>Ethical Hacking, Pen Testing, SOC Tools</p>
          </div>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about">
        <div className="about-content fade-section">
          <h2>About TechSign Solutions</h2>
          <p>
            TechSign Solutions is a leading IT Training Institute focused on 
            delivering real-time, industry-ready skills. Our programs are 
            designed with the latest technologies and are taught by certified 
            experts with hands-on projects, live labs, and placement support.
          </p>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials">
        <h2 className="section-title fade-section">Student Success Stories</h2>

        <div className="testimonials-grid">

          <div className="testimonial-box fade-section">
            <p>
              “I got placed as a React Developer after completing the MERN course! 
              The live projects and mock interviews helped me a lot.”
            </p>
            <h4>— Rahul, Frontend Developer</h4>
          </div>

          <div className="testimonial-box fade-section">
            <p>
              “Best place to learn AWS DevOps. Trainers teach with real-time 
              scenarios. The labs were amazing!”
            </p>
            <h4>— Sneha, DevOps Engineer</h4>
          </div>

          <div className="testimonial-box fade-section">
            <p>
              “The Python + ML course helped me get my first job in Data Science. 
              Loved the practical approach!”
            </p>
            <h4>— Arvind, Data Analyst</h4>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer fade-section">
        © {new Date().getFullYear()} TechSign Solutions. All rights reserved.
      </footer>

    </div>
  );
}
