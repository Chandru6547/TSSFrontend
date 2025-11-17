import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO + NAME */}
        <div className="navbar-brand">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipPw0Zao_KYuaMipacLhym_O6Q-3APadfs67fvdf=s1360-w1360-h1020-rw"
            alt="TechSign Logo"
            className="navbar-logo-img"
          />
          <h1 className="navbar-logo-text">
            TechSign <span>Solutions</span>
          </h1>
        </div>

        {/* MENU */}
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="navbar-btn">☰</button>

      </div>
    </nav>
  );
}
