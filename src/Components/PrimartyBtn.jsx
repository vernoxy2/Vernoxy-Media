import React from "react";

const PrimaryBtn = ({ children, className = "", onClick, type = "button", ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-r from-primary to-white text-[#1168B5] font-bold px-7 py-2 rounded-md hover:scale-95 duration-300 md:text-lg min-w-[175px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
