import React, { useState } from "react";
import "./Navbar.css";
import logo from '../logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-brand">
          <img
            src={logo}
            alt="TechSign Logo"
            className="navbar-logo-img"
          />
          <h1 className="navbar-logo-text">
            TechSign <span>Solutions</span>
          </h1>
        </div>

        {/* MENU */}
        <ul className={`navbar-menu ${open ? "active" : ""}`}>
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="navbar-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

      </div>
    </nav>
  );
}
