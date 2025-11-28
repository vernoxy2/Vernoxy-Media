import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-7xl font-extrabold text-primary font-Bai_Jamjuree">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mt-4 font-Mulish">Page Not Found</h2>
      <p className="text-gray-600 mt-2 font-Bai_Jamjuree">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 flex items-center font-Mulish gap-2.5 bg-gradient-to-r from-primary to-white text-[#1168B5] font-bold px-5 py-3 rounded-lg shadow hover:scale-95 transition"
      >
        <FaHome className="text-xl" /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
