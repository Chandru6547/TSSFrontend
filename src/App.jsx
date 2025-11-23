import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import "./App.css";
import Courses from "./Pages/Courses"
import About from "./Pages/About";
import ReviewPortal from "./Pages/ReviewPortal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path ="/about" element = {<About/>}/>
        <Route path = "/review-portal" element = {<ReviewPortal/>} />
      </Routes>
    </Router>
  );
}

export default App;
