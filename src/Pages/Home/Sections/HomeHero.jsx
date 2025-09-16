import React from "react";
import Video from "../../../assets/HomePageImgs/HeroV.mp4";
import BottomLine from "../../../Components/BottomLine";

const HomeHero = () => {
  return (
    <div className="relative w-full h-[600px] 2xl:h-[660px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Video}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-vernoxy to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full mt-16 container">
        {/* Centered Heading */}
        <h1
          className="text-2xl md:text-6xl mb-4 max-w-7xl mx-auto font-light font-Bai_Jamjuree uppercase text-center 
             bg-gradient-to-b from-primary/80 to-white bg-clip-text text-transparent"
        >
          Empowering <span className="font-bold">Brands</span>{" "}
          <br className="hidden xl:block" /> Through{" "}
          <span className="font-bold">Creative</span> Solutions
        </h1>

        {/* Left-Aligned Paragraph */}
        <p className="text-white text-lg md:text-xl md:max-w-[350px] text-left mt-10 pt-6">
          Empowering brands with data-driven strategies, creative solutions, and
          modern digital design
        </p>
        <BottomLine />
      </div>
    </div>
  );
};

export default HomeHero;
