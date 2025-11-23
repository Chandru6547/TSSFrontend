import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import "./Courses.css";

export default function Courses() {

  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("visible", entry.isIntersecting)
      );
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const modules = [
    { module: "Module 1", name: "Core level C language", hours: "7 days (42 hours)" },
    { module: "Module 2", name: "Advanced C language", hours: "7 days (42 hours)" },
    { module: "Module 3", name: "OOPS", hours: "5 days (30 hours)" },
    { module: "Module 4", name: "Java or Python", hours: "7 days (42 hours)" },
    { module: "Module 5", name: "DSA", hours: "7 days (42 hours)" },
    { module: "Module 6", name: "Problem Solving", hours: "7 days (42 hours)" },
    { module: "Module 7", name: "Aptitude", hours: "12 days (72 hours)" },
    { module: "Module 8", name: "Soft Skills", hours: "5 days (30 hours)" },
  ];

  return (
    <div className="courses-page">

      <Navbar />

      <h1 className="course-heading fade-section">
        Program Plans: Tailored to Your Learning Goals
      </h1>

      <div className="course-container fade-section">

        <table className="course-table">
          <thead>
            <tr>
              <th>Training Modules</th>
              <th>No. of Hours</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((item, index) => (
              <tr key={index}>
                <td>{item.module} — {item.name}</td>
                <td>{item.hours}</td>
              </tr>
            ))}
            <tr className="total-row">
              <td>Total</td>
              <td>300 hours</td>
            </tr>
          </tbody>
        </table>

        <div className="course-plan-box">
          <h2>Plan A: 300–340 Hours</h2>
          <h3>Intensive Comprehensive Training</h3>
          <p>
            This program builds strong fundamentals in programming, DSA,
            operating systems, project development and real-world interview preparation.
            Designed by experts to make you job-ready with confidence.
          </p>
        </div>
      </div>

      {/* ================= EXTRA CONTENT ================= */}
      <section className="course-details fade-section">
        <h2>What Will You Learn?</h2>
        <ul>
          <li>Master programming fundamentals using C, Java or Python.</li>
          <li>Object-Oriented Programming and advanced DSA concepts.</li>
          <li>Competitive coding & real-world problem-solving.</li>
          <li>Professional aptitude & interview readiness.</li>
          <li>Communication & corporate soft skill training.</li>
        </ul>
      </section>

      <section className="course-details fade-section">
        <h2>Career Opportunities</h2>
        <ul>
          <li>Software Developer / Full Stack Developer</li>
          <li>Python / Java Developer</li>
          <li>DevOps / Cloud Engineer</li>
          <li>Data Analyst / ML Engineer</li>
          <li>Technical Support / Associate Engineer</li>
        </ul>
      </section>

      <section className="course-details fade-section">
        <h2>Training Methodology</h2>
        <ul>
          <li>Live interactive classes with task-based learning</li>
          <li>Mini projects + one major project</li>
          <li>Mock interviews & resume preparation</li>
          <li>Weekly assessments & mentor support</li>
        </ul>
      </section>

      {/* ================= PLACEMENTS ================= */}
      <section className="placement-section fade-section">
        <h2>Our Students Got Placed In</h2>

        <div className="placement-grid">
          <img src="data:image/png;base64,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" alt="TCS" />
          <img src="data:image/png;base64,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" alt="Wipro" />
          <img src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAACUCAMAAAAeaLPCAAAAYFBMVEX///83gcIqe8Azf8H0+Py60eiGrtc7g8P7/f4kfMBontHW5PKCrdfN3u9/qtWNtNpIi8aWuNvp8fhCh8Xh6/Ued75WksptodGlxOITc7ygv9/B1eqwy+VimMx3pNIAb7oNczbiAAAJ2UlEQVR4nO1aiZKjOAwNtgED4T7D1f//l2tJnMEw00l2ZrrKr6p3NoDwsyzrMrebgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYHBBYoG0cnXxEXQxlF0d9K+K158xRuwOWMeKyPxinCRJqXHOOfwCla1f5q+7XIY3HmBvGjzkluWBX/wD0uyz/O7hCKvBn6FfFY/lChTivfUf4B99WPIZ3em+JZ1q3ZMOuYP9oPIi1Rpm1ddpuxciqywffZzyIeKOk+C9YJovJ9CXtRgNM3uWuj/EPIdB6N5Espe8rdv4EXyjlI8u//5sLTHa+RFoqTK5tcP/r94jXxRKqGy/584/TZeI2//BPJSiExBrMYtMyGEjBmQT8UJsiIo1HMXW0JOT8rf3zby+PyevLABHf2Qhd3GYz34ddyG8+TCMYoiJ6F04B7pUQ/D4EdpH+pVIoKub+PYcZy47cPgdxxsASKpQmN3q8CefOC5bm4NcFd0TuVC2qLgWUk0Jc29SiPV7ykVOwXc4m4S9UdmQTNWuQuJqPrjbl6NaVNcMs/6eEhy14IU0rVAYNLKM3l4oFLvCqIccl1roslZnuIjNl6ar19DSfH6qVIo0op7fH0BRw1cZeSiGSygsuHCqkBLHs2huIU5ToNAIrwmzaNiuUbzCx+4QWJqIPe+JWbnHG+XD4VyVg/PgwPnRe2VhSKlEilLRs8nV+R7UA63Kr/2h3xW02NQSgxiZXhtgq+o0i0i0ieKjeM45BOxMg9nIjL+AiKWnyrDzYourV16N4vPuHdKKWqKw73pgtBuowrme0m+TcBOor4AZxOmgzcNkc4mAJmNEtqtroPUGR/7QLknoeQqkmN5N3FvISFiVb+shbCHSZUndhOCa+BJO28dWTS+GuOcvOUqpfFxcRWySPNpdScWNx/Jb9ODIkJRNtjLFpVBmqMteQkZfgevYf7ORApiX9pa7hnmf0O43TdZU7ELzWPo37oJaTOy8VGckBd3tMZy3PkN2SUM5XCDEZMkvO3QIQE+6LjLBmxkUdmiFIefa17Z6XMt3T5cazPygXwzcX/2jMFk+JAtg+K5lz69WYxUQ+q2LE33GEBle0X+mbu8jeRMGqklH5Jv0Xi8giyudKRMS9hPB5IBrerzpPC1QO5Z8RvoyDNNVdGRKyFn/0xeVmxysWcDcB4KEOL18Rmf7EYjDIm3/q3n5Lkm1y0qHCLWkm9KFNMmaiImlzNk8AZ+MKwpy+P5ccsKMCjtrC7I6xZKoN3oyWeY6rBRn2TRtC3WI/n6SF6gZbHocKd/nC3JOfmDQ8AR7t4p+R7ewb0z24xpOSsk7x+pyLbURllJ9vQ9s/ku+azGV/hnQ2T5mgod/B4gxLU5eLiQn0p8m/yp2WAUtB7nY6RL2gNzPCpSOLTf93YjYwrQOkv7GHnZ4hj5eVoeehvVszE47A0b14bvt+y0V5Q9xmeG877ZZBH9OM9qsVxfdZ8fkvxswFfUu4sN5IYcM1P/pAP/vuYL8jVXBW1EdjO3k92xfyKT4rjeVsPg3pJq3impNmd+nzzJXGyryeephG8qKCBr3ptIkMP18r65pHYSv4fJLJE7Gtt532w69MbHsL8lguR5NHozF15W9tbOMK/jfL0kUm6xTi3JJKGKqSP9tzUvMbxehRJlWWg2bCyipZhTRjJgi5nQUSxYba8YVA0s1YaaV0tli0ka7DfW++RTJK8J+yvI06twI1N3U4qWVT9PWVL2sXrFnlllCuPGs6sC+pbT7YrK98nj/1+Tp1ZJUkDpVK5eX9Xnc1VF67eO7Cs7wpmJNimXgp17ebyxz7dtnhpQv9B8NZOnQmit1blVE5nMQ6OfE+PiscRAWcRuaa0SSbso/8+YTbLNUrImYXxRJnPR8Uhnl1XH5TZmBXHpLcrnbEmr39c8pVXnMfy22PwwP6OMZ3abQAa9fuiit7Tn2bJh+8YgThYJi80B4X0/3/+Gt+H8aV/I0KkW+hawV34FnqlxANiuT1Eva2qLzat1UYB/j3yI5C/9fIB+3ou3nkKEaV7OZqyEZQ+GwbHJI8b9eddEv6+9KVRzSv4/EGExm3evImxHQarZJwUymN1gGcs5EfOg/RTmy0hP9IepyKaI8H6Epc6L1+hzJ0R8UuhJ26XqGwsR2rJwjK6870m6kcWUaTDcY+9rXsSUEl604wfvzLJCKt09UCR1cJStQ3Q9PVlsqVOC0/1AJUXZeHm+YwNqIGiT5gD3LYOUTNZUGEBZ6Z2fd/Xolqz+W+RPK6mAqriL4dBqLP0DDTkZfA6H4AXkZOeeVzjevIE+QJ6aG4dT2VUUSw2e65cGoy+Rn2JZ7Kty65T71PLEvtgHyFNjy2L6XqkaAj2EF+nvSqhUGN2kTCN3ealhsADd0jfJn7c+bgO1D/Q7FjsYKo6e7AnMC0rqzxdfaF+cna4iIMMXfsjm1aDUJdSfEDScGhu3kwNHFZAsj8KprMmN0yJmz8XiTH7gUzD7CPlpvXVyU1OGVZlotUEYbJ67063pxIvSsyxvtPOF2pAe+YjZqJVE9vWR3nRHBWDhD7rJQVbg+RPLwqcDXjlNK9Y5ndabCX9G8yqggx2yQ3omIipO1fYSdZkcDQFsYD0XwR4Qd2l8Rd7TqCMAq6Fs5EPkZU+J47BXVUZGjPmkqFUm89xNhRRsKwV05uwzg8OzpH0mAqFsOqL5jNncluOZcq1zVNrOUYhF8kbfF6m6NQrWPCLrOH7sFWxH4e6UDFNPvMz7tU5XuWi56dl/SPPwppzOn/wGvjsQWdH7lIZM5zKCVqG06qYLiqwIusaHTxvZJgcLYC/OtkfFo6I/pF0Bn0AUQV9DPevxiSCR9z5A/hbWHpFNaieO68qlnCuf1gJPRnB6Xp5XVZW4kJ1zXq3coZhf69ismmpdztxk8H2/yjlKDPMWsfHrgsd0mhQ81I/S1ZGP8NZEfihR6Gn7FWlCp4nqQToldxmP5pep7HMuvJeTdUVr20XNMEmbjUj2+Vw6cTzlV3ddaysRRtH9fo8mj1qM8MPROGTZ462pU5GS0GGGQfR4zAPCKf1XtemzZPbw9WBr8aemX8a7D0Mgg+PJOmYQ81UAtfL4um8lJEL/a09/c+f8MdEOOSym+rOq+1M3W6pCFNYeHnCTyrH3t7GbvO/zCzuqXPjcWYHlSd1ffcTzCRRh37St2pX62RVh2NldGB6/+raZLjlVAnbfNM1vfpnzlyAg4fKe/foPQY9n9VddiH8XeFj64of8fx0YotlVB+XfhcCK6rJr+O8Cvwmxrro//y4kflZx2TT8d0EdT+dnKp7aIz9T8XYJuVf1t2m8BJmOCvVVt8bAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOBb+A+Ij5Wp2oWk9QAAAABJRU5ErkJggg==" alt="Infosys" />
          <img src="data:image/jpeg;base64,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" alt="Zoho" />
          <img src="data:image/png;base64,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" alt="Accenture" />
          <img src="data:image/png;base64,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" alt="Amazon" />
        </div>
      </section>

      <div className="enroll-container fade-section">
        <button className="enroll-btn" onClick={() => setOpen(true)}>Join the Program</button>
      </div>

      {/* ================= MODAL FORM ================= */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h2>Register for the Program</h2>

            <form className="form">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />

              <label>Are you a</label>
              <select onChange={(e) => setRole(e.target.value)}>
                <option>Select option</option>
                <option>College Student</option>
                <option>Working Professional</option>
              </select>

              {role === "College Student" && (
                <>
                  <label>College Name</label>
                  <input type="text" placeholder="Enter college name" />

                  <label>Year</label>
                  <input type="text" placeholder="3rd year / Final year" />
                </>
              )}

              {role === "Working Professional" && (
                <>
                  <label>Company Name</label>
                  <input type="text" placeholder="Enter company name" />

                  <label>Years of Experience</label>
                  <input type="number" placeholder="0 - 10 years" />
                </>
              )}

              <label>Select Course</label>
              <select>
                <option>MERN Full Stack</option>
                <option>AWS Cloud & DevOps</option>
                <option>Python & Machine Learning</option>
                <option>Cyber Security</option>
              </select>

              <button className="submit-btn">Submit</button>
            </form>

            <button className="close-btn" onClick={() => setOpen(false)}>×</button>
          </div>
        </div>
      )}

    </div>
  );
}
