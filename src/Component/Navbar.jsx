import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../image.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Get current route for active menu styles
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-brand">
          <img src={logo} alt="TechSign Logo" className="navbar-logo-img" />
          <h1 className="navbar-logo-text">
            TechSign <span>Solutions</span>
          </h1>
        </div>

        {/* MENU */}
        <ul className={`navbar-menu ${open ? "active" : ""}`}>
          <li className={location.pathname === "/" ? "active-link" : ""}>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>

          <li className={location.pathname === "/courses" ? "active-link" : ""}>
            <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>
          </li>

          <li className={location.pathname === "/about" ? "active-link" : ""}>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>

          <li className={location.pathname === "/review" ? "active-link" : ""}>
            <Link to="/review-portal" onClick={() => setOpen(false)}>Review Portal</Link>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="navbar-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

      </div>
    </nav>
  );
}
