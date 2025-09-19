import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import PrimaryBtn from "./PrimartyBtn";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const navitems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent font-alumni">
      <nav className="container mx-auto flex justify-between items-center py-6 relative">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-10 w-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:block border border-primary py-2 px-3 lg:px-5 rounded-md bg-white/20 backdrop-blur-md">
          <ul className="flex gap-5 lg:gap-10 uppercase">
            {navitems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `font-bold transition duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-white hover:text-primary transform hover:scale-105"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <PrimaryBtn>Get in Touch</PrimaryBtn>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-primary focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md shadow-lg rounded-b-2xl md:hidden z-50 transform transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-4 items-center py-6 font-bold text-white">
            {navitems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold"
                      : "hover:text-primary transition duration-300"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <PrimaryBtn>Get in Touch</PrimaryBtn>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
