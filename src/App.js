import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; // Assuming you have these pages
import Blogs from "./pages/Blogs";     // Assuming you have these pages
import Contact from "./pages/Contact"; // Assuming you have these pages

import "./App.css"; // Add your custom styles here for smooth scroll and layout

function App() {
  return (
    <Router>
      <Navbar />
      {/* Scrollable Sections */}
      <div className="sections-container">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="blogs" className="section">
          <Blogs />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
    </Router>
  );
}

export default App;
