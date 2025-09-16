import React from "react";

const PrimaryBtn = ({ children, className = "" }) => {
  return (
    <button
      onClick={() => console.log({ children })}
      className={`bg-gradient-to-r from-primary to-white text-[#1168B5] font-bold px-7 py-2 rounded-md hover:scale-90 duration-300 ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
