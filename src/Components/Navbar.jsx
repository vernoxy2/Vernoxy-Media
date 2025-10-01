import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import PrimaryBtn from "./PrimartyBtn";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const navitems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "Digital Marketing", path: "/services/digital_marketing" },
      { name: "Web Development", path: "/services/web_development" },
      { name: "Graphics Designer", path: "/services/graphics_design" },
      { name: "Video Editing", path: "/services/video_editing" },
    ],
  },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // mobile dropdown toggle

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const renderNavItems = (isMobile = false, onClickHandler = () => {}) =>
    navitems.map((item, i) => (
      <li key={i} className="relative group">
        {!item.dropdown ? (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `font-bold transition duration-300 ${
                isActive
                  ? "text-primary"
                  : "text-white hover:text-primary transform hover:scale-105"
              }`
            }
            onClick={onClickHandler}
          >
            {item.name}
          </NavLink>
        ) : (
          <>
            {/* Parent link */}
            <div
              className={`flex items-center gap-1 font-bold cursor-pointer ${
                isMobile ? "text-white" : "text-white group-hover:text-primary"
              }`}
              onClick={() =>
                isMobile ? setOpenDropdown(openDropdown === i ? null : i) : null
              }
            >
              {item.name} <HiChevronDown className="text-lg" />
            </div>

            {/* Dropdown */}
            <ul
              className={`${
                isMobile
                  ? openDropdown === i
                    ? "block pl-4 mt-2"
                    : "hidden"
                  : "absolute left-0 mt-2 w-48 bg-white/20 border border-primary border-t-0 backdrop-blur-md rounded-md shadow-lg transition-all duration-300 hidden group-hover:block group-focus-within:block"
              }`}
            >
              {item.dropdown.map((drop, idx) => (
                <li key={idx}>
                  <NavLink
                    to={drop.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition duration-300 ${
                        isActive
                          ? "text-primary"
                          : "text-white hover:text-primary"
                      }`
                    }
                    onClick={onClickHandler}
                  >
                    {drop.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
    ));

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent font-alumni">
      <nav className="container mx-auto flex justify-between items-center py-6 relative">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block border border-primary py-2 px-3 lg:px-5 rounded-md bg-white/20 backdrop-blur-md">
          <ul className="flex gap-5 lg:gap-10 uppercase">{renderNavItems()}</ul>
        </div>

        {/* Desktop Button */}
        <Link to="/contact-us" className="hidden lg:block">
          <PrimaryBtn>Get in Touch</PrimaryBtn>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-primary focus:outline-none"
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-[80%] bg-black/90 backdrop-blur-md shadow-lg z-50 transform transition-transform duration-500 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col h-full py-6 px-4">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-3xl text-white mb-6 focus:outline-none"
              aria-label="Close Menu"
            >
              <HiX />
            </button>

            <ul className="flex flex-col gap-6 font-bold text-white text-left pl-2 text-xl">
              {renderNavItems(true, () => setIsOpen(false))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
