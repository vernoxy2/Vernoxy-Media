import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

// Pages
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Projects from "./Pages/Projects/Projects";

// Services inner pages
import WebDevelopment from "./Pages/Services/WebDevelopment/WebDevelopment";
// import GraphicsDesign from "./Pages/Services/GraphicsDesign/GraphicsDesign";
import VideoEditing from "./Pages/Services/VideoEditing/VideoEditing";
import DigitalMarketing from "./Pages/Services/DigitalMarketing/DigitalMarketing";
import CustomizedApp from "./Pages/Services/CustomizedApp/CustomizedApp";
import NotFound from "./Pages/NotFound";
import ERPCapture from "./Pages/ERPCapture/ERPCapture";
// Admin Pages
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import ERP_Requirement from "./Components/ERP_Requirement";

// Layout wrapper to conditionally show Navbar/Footer
const Layout = ({ children }) => {
  const location = useLocation();

  // List of paths where Navbar/Footer should NOT appear
  const hideNavbarFooterPaths = ["/admin/dashboard"];

  const hideLayout = hideNavbarFooterPaths.includes(location.pathname);

  return (
    <div className="bg-vernoxy text-white min-h-screen text-center">
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />

          {/* Service inner pages */}
          <Route
            path="/services/digital_marketing"
            element={<DigitalMarketing />}
          />
          <Route
            path="/services/web_development"
            element={<WebDevelopment />}
          />
          <Route path="/services/app_development" element={<CustomizedApp />} />
          {/* <Route path="/services/graphics_design" element={<GraphicsDesign />} /> */}
          <Route path="/services/video_editing" element={<VideoEditing />} />

          <Route path="/products" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/erp-capture" element={<ERPCapture />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      {/* <ERP_Requirement/> */}
    </Router>
  );
};

export default App;
