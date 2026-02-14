import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const location = useLocation();
  const currentPath = location.pathname;

  // Fetch user role from Firestore
  useEffect(() => {
    const fetchUserRole = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role);
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      }
      setLoading(false);
    };

    fetchUserRole();
  }, []);

  // Define menu items based on role
  const getMenuItems = () => {
    
    const commonItems = [
      
    ]
    if (userRole === "admin") {
      return [
        ...commonItems,
        { name: "Dashboard", path: "/admin/welcome" },
        { name: "Admin Work Portal", path: "/admin/admin-page" },
      { name: "ERP Request", path: "/admin/dashboard" },
      ];
    } else if (userRole === "user") {
      return [
        ...commonItems,
        { name: "Dashboard", path: "/admin/welcome" },
        { name: "User Work Portal", path: "/admin/user-page" },
      ];
    }

    return commonItems;
  };

  const menuItems = getMenuItems();

  if (loading) {
    return (
      <div className="hidden md:flex w-16 h-full bg-gradient-to-b from-[#102F5C] to-[#3566AD]">
        <div className="flex items-center justify-center w-full">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex relative">
      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex flex-col h-full bg-gradient-to-b from-[#102F5C] to-[#3566AD]
    text-white transition-all duration-500 ease-in-out
    ${isOpen ? "w-96" : "w-16"}
  `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="overflow-hidden">
            <h1
              className={`text-white whitespace-nowrap transition-all duration-300 font-bold
          ${isOpen ? "opacity-100 " : "opacity-0 "}
        `}
            >
              Vernoxy Media
            </h1>
          </Link>

          <button
            onClick={toggleSidebar}
            className="p-1.5 bg-white rounded-lg xl:hover:bg-white/80 active:bg-white/80 text-black "
          >
            {isOpen ? (
              <FaCaretLeft className="text-2xl text-primary" />
            ) : (
              <IoMenu className="text-2xl text-primary" />
            )}
          </button>
        </div>

        {/* Menu */}
        <nav
          className={`flex flex-col mt-10 gap-1 px-2 ml-10 mr-6 transition-all duration-500 ease-in-out whitespace-nowrap
      ${
        isOpen
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 invisible pointer-events-none"
      }
    `}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-6 py-3 rounded-md text-xl font-bold transition-all duration-200
          ${
            currentPath === item.path
              ? "bg-white text-[#3668B1]"
              : "hover:bg-white hover:text-[#3668B1]"
          }
        `}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Role Badge */}
        {isOpen && userRole && (
          <div className="mt-auto mb-4 mx-6 p-3 bg-white/10 rounded-lg">
            <p className="text-xs text-white/70">Logged in as</p>
            <p className="text-sm font-bold text-white capitalize">{userRole}</p>
          </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#102F5C] to-[#3566AD] text-white pl-8 z-50 transition-transform duration-500 md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } w-80`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <Link to={"/"}>
            <h1 className="text-white delay-100">Vernoxy Media</h1>
          </Link>

          <IoClose onClick={() => setMobileOpen(false)} className="text-2xl" />
        </div>
        <nav className="flex flex-col mt-4 gap-2 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 p-2 rounded-md transition-colors duration-200 ${
                currentPath === item.path
                  ? "bg-white text-black"
                  : "hover:bg-white hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Role Badge for Mobile */}
        {userRole && (
          <div className="absolute bottom-4 left-8 right-4 p-3 bg-white/10 rounded-lg">
            <p className="text-xs text-white/70">Logged in as</p>
            <p className="text-sm font-bold text-white capitalize">{userRole}</p>
          </div>
        )}
      </div>

      {/* Overlay for Mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;