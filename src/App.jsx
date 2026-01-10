import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

// Pages
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Projects from "./Pages/Projects/Projects";
import GlobalPresence from "./Pages/GlobalPresence/GlobalPresence";
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
import UserPageLogin from "./Pages/Admin/UserPageLogin";
import AdminPageLogin from "./Pages/Admin/AdminPageLogin";
import AdminLayout from "./Components/Layout/AdminLayout";
import Welcome from "./Pages/Admin/Welcome";
import ERP_Requirement from "./Components/ERP_Requirement";
import CityDisplay from "./Components/CityDisplay";
import CityPage from "./Pages/GlobalPresence/Sections/CityPage";

// Layout wrapper to conditionally show Navbar/Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarFooterPaths = [
    "/admin/dashboard",
    "/admin/welcome",
    "/admin/admin-page",
    "/admin/user-page",
    "/admin",
  ];

  const hideLayout = hideNavbarFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );

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
          <Route path="/services/customized_crm" element={<VideoEditing />} />

          <Route path="/products" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          <Route path="/:citySlug" element={<CityPage/>} />
          <Route path="/erp-capture" element={<ERPCapture />} />

          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin routes with nested layout */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* Default route - redirect to welcome */}
            {/* <Route index element={<Welcome />} /> */}
            <Route path="welcome" element={<Welcome />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="admin-page" element={<AdminPageLogin />} />
            <Route path="user-page" element={<UserPageLogin />} />
          </Route>

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;