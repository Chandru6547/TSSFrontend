import React, { useState, useEffect } from "react";
import "./ReviewPortal.css";
import { reviewFormConfig } from "./reviewFormConfig";
import Navbar from "../Component/Navbar";

export default function ReviewPortal() {
  const [formData, setFormData] = useState({});
  const [reviews, setReviews] = useState([]);

  // Set default values automatically
  useEffect(() => {
    const defaults = {};
    reviewFormConfig.forEach((f) => {
      if (f.defaultValue) defaults[f.name] = f.defaultValue;
    });
    setFormData(defaults);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitReview = (e) => {
    e.preventDefault();
    setReviews([formData, ...reviews]);
    window.scrollTo(0, 0);
  };

  const shouldShowField = (field) => {
    if (!field.dependsOn) return true;
    return formData[field.dependsOn] === field.showIf;
  };

  return (
    <div className="review-page">
      <Navbar />
      <h1 className="review-title">Daily Student Feedback Portal</h1>

      {/* Left side content + Right side form */}
      <div className="review-layout">
        <div className="review-info">
          <h2>Why Daily Feedback?</h2>
          <p>
            Regular feedback helps track learning progress and guides trainers
            to improve teaching methodology and session planning.
          </p>
          <p>
            Your feedback is important to help us understand your challenges and
            improve your learning experience.
          </p>
          <ul>
            <li>Measure understanding daily</li>
            <li>Improve training quality</li>
            <li>Personalized learning support</li>
          </ul>
        </div>

        <form className="review-form" onSubmit={submitReview}>
          {reviewFormConfig.map((field, i) =>
            shouldShowField(field) && (
              <div className="form-group" key={i}>
                <label>{field.label}</label>

                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name] || ""}
                    placeholder={field.placeholder}
                    disabled={field.disabled}
                    onChange={handleChange}
                  />
                ) : field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    disabled={field.disabled}
                  >
                    <option value="">Select</option>
                    {field.options?.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] || ""}
                    placeholder={field.placeholder}
                    disabled={field.disabled}
                    min={field.min}
                    max={field.max}
                    onChange={handleChange}
                  />
                )}
              </div>
            )
          )}

          <button type="submit" className="submit-btn">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
