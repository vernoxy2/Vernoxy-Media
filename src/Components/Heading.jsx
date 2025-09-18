import React from "react";

const Heading = ({ boldText, normalText, className }) => {
  return (
    <h1
      className={`text-3xl md:text-5xl text-white flex flex-wrap items-baseline gap-3 font-Bai_Jamjuree ${className}`}
    >
      <span className="font-bold">{boldText} </span>
      <span>{normalText}</span>
    </h1>
  );
};

export default Heading;
