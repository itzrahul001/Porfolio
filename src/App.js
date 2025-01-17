import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

// Component to handle dynamic title updates
function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home",
      "/about": "About",
      "/contact": "Contact",
      "/projects": "Projects",
      "/technologies": "Technologies",
    };

    const pageTitle = titles[location.pathname] || "Page";
    document.title = `My Portfolio - ${pageTitle}`;
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <DynamicTitle /> {/* Handles dynamic title updates */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
