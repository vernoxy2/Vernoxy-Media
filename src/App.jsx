import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// Pages
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Projects from "./Pages/Projects/Projects";

const App = () => {
  return (
    <Router>
      <div className="bg-vernoxy text-white min-h-screen text-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={<div className="p-8 text-3xl text-center">404 - Page Not Found</div>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
