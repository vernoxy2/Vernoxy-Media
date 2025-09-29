import React from "react";
import bg from "../assets/BlurBG.svg";

const PrimaryBg = ({ className = "" }) => {
  return (
    <div className={`flex justify-center absolute  right-1/2 translate-x-1/2 container -z-10 ${className}`}>
      <img src={bg} alt="Background Blur" className="h-full object-cover scale-105" />
    </div>
  );
};

export default PrimaryBg;
