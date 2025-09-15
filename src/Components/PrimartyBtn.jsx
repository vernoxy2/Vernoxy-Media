import React from "react";

const PrimaryBtn = ({children}) => {
  return (
    <button className="bg-gradient-to-r from-primary to-white text-[#1168B5] font-bold px-7 py-2 rounded-md">
      {children}
    </button>
  );
};

export default PrimaryBtn;
