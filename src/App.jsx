import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import ProtectedRoute from "./Components/ProtectedRoute";

// ✅ Lazy load all pages
const Home = lazy(() => import("./Pages/Home/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const Services = lazy(() => import("./Pages/Services/Services"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const GlobalPresence = lazy(() =>
  import("./Pages/GlobalPresence/GlobalPresence")
);

const WebDevelopment = lazy(() =>
  import("./Pages/Services/WebDevelopment/WebDevelopment")
);
const VideoEditing = lazy(() =>
  import("./Pages/Services/VideoEditing/VideoEditing")
);
const DigitalMarketing = lazy(() =>
  import("./Pages/Services/DigitalMarketing/DigitalMarketing")
);
const CustomizedApp = lazy(() =>
  import("./Pages/Services/CustomizedApp/CustomizedApp")
);

const NotFound = lazy(() => import("./Pages/NotFound"));
const ERPCapture = lazy(() => import("./Pages/ERPCapture/ERPCapture"));

const AdminLogin = lazy(() => import("./Pages/Admin/AdminLogin"));
const AdminDashboard = lazy(() =>
  import("./Pages/Admin/AdminDashboard")
);
const UserPageLogin = lazy(() =>
  import("./Pages/Admin/UserPageLogin")
);
const AdminPageLogin = lazy(() =>
  import("./Pages/Admin/AdminPageLogin")
);

const CityPage = lazy(() =>
  import("./Pages/GlobalPresence/Sections/CityPage")
);

// Layout wrapper
const Layout = ({ children }) => {
  const location = useLocation();

  const hideNavbarFooterPaths = [
    "/admin/dashboard",
    "/admin-page",
    "/user-page",
  ];

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
        {/* ✅ Suspense wraps all routes */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-b-4 border-primary"></div>
            </div>
          }
        >
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
            <Route
              path="/services/app_development"
              element={<CustomizedApp />}
            />
            <Route
              path="/services/customized_crm"
              element={<VideoEditing />}
            />

            <Route path="/products" element={<Projects />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            <Route path="/:citySlug" element={<CityPage />} />
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

            <Route path="/admin-page" element={<AdminPageLogin />} />
            <Route path="/user-page" element={<UserPageLogin />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
