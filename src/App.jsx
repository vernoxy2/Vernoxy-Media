import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// Pages
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Components/Footer";

// Services inner pages
import WebDevelopment from "./Pages/Services/WebDevelopment/WebDevelopment";
import GraphicsDesign from "./Pages/Services/GraphicsDesign/GraphicsDesign";
import VideoEditing from "./Pages/Services/VideoEditing/VideoEditing";
import DigitalMarketing from "./Pages/Services/DigitalMarketing/DigitalMarketing";

const App = () => {
  return (
    <Router>
      <div className="bg-vernoxy text-white min-h-screen text-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />

          {/* Service inner pages */}
          <Route path="/services/digital_marketing" element={<DigitalMarketing/>} />
          <Route path="/services/web_development" element={<WebDevelopment />} />
          <Route path="/services/graphics_design" element={<GraphicsDesign />} />
          <Route path="/services/video_editing" element={<VideoEditing />} />

          <Route path="/products" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={<div className="p-8 text-3xl text-center">404 - Page Not Found</div>}
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
