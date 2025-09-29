import React from "react";
import PrimaryBg from "../assets/HeroBg.svg";

const PrimaryHero = ({ title, subtitle }) => {
  return (
    <section className="relative -mt-24">
      <div className="absolute top-0 left-0 w-full">
        <img src={PrimaryBg} alt="Hero Background" className="mx-auto" />
      </div>

      <div className="w-full flex flex-col justify-center items-start container">
        <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-light text-stroke text-start w-full font-Bai_Jamjuree m-0">
          {title}
        </h1>
        <h2 className="font-Bai_Jamjuree text-xl md:text-6xl uppercase font-semibold text-start w-full md:w-1/2 mt-0">
          {subtitle}
        </h2>
      </div>

      <div className="bg-gradient-to-r from-vernoxy via-primary/50 to-vernoxy text-white h-[1px] my-7"></div>
    </section>
  );
};

export default PrimaryHero;
