import React from "react";
import Heading from "../../../Components/Heading";
import BottomLine from "../../../Components/BottomLine";
import ActionV from "../../../assets/HomePageImgs/ActionV.mp4";
import PrimaryBg from "../../../Components/PrimaryBg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // ✅ better for scroll detection
import src from "../../../assets/Obj2.svg";
import PrimaryObject from "../../../Components/PrimaryObject";

// Data
const Count = [
  { id: 1, Count: "150+", text: "Projects Completed" },
  { id: 2, Count: "10M+", text: "Leads Generated" },
  { id: 3, Count: "120+", text: "Happy Clients" },
  { id: 4, Count: "10+", text: "Years of Experience" },
];

// Single Card Component
const StatCard = ({ count, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,    // trigger when 30% is visible
  });

  // Split number and suffix (e.g., "150+" → 150 + "+")
  const match = count.match(/^(\d+)(\D*)$/);
  const number = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-primary/20 hover:from-primary/40 to-vernoxy border-vernoxy border-[2px] hover:border-primary/40 duration-500 rounded-lg h-[150px] flex flex-col justify-center items-center text-white text-center"
    >
      <h2 className="text-2xl md:text-6xl font-semibold font-Bai_Jamjuree">
        {inView ? (
          <CountUp start={0} end={number} duration={2.5} separator="," />
        ) : (
          0
        )}
        {suffix}
      </h2>
      <p className="text-xl md:text-2xl lg:text-3xl font-Bai_Jamjuree">{text}</p>
    </div>
  );
};

// Main Action Component
const Action = () => {
  return (
    <section className="container space-y-10 relative -z-0">
      <PrimaryBg className="bottom-40 pr-80" />
      <PrimaryBg className="-top-28 -pr-40" />
      
      {/* Heading */}
      <Heading
        boldText={"See Vernoxy"}
        normalText={" in Action"}
        className="text-start flex justify-start"
      />

      {/* Video */}
      <div className="bg-[#606060]/20 h-[460px] rounded-3xl overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={ActionV}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Numbers Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-start">
        {/* Left Title */}
        <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-start">
          <h1 className="text-5xl font-bold font-Bai_Jamjuree bg-gradient-to-r from-primary to-white bg-clip-text text-start text-transparent">
            Numbers That Speak
          </h1>
          <BottomLine />
        </div>

        {/* Render Cards */}
        {Count.map((item) => (
          <StatCard key={item.id} count={item.Count} text={item.text} />
        ))}
      </div>
      <PrimaryObject src={src} className="bottom-0 "/>
    </section>
  );
};

export default Action;
