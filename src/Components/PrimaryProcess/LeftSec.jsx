import React from "react";
import Heading from "../Heading";
import BottomLine from "../BottomLine";



const LeftSec = () => {
  return (
    <div className="space-y-24">
      <div className="text-start space-y-5">
        <Heading
          boldText={"Our process of"}
          normalText={"Customized CRM"}
          className={"text-start"}
        />
        <p className="w-[82%]">
          We follow a structured process to deliver customized CRM solutions.
          From understanding your business needs and designing tailored
          workflows to integrating features, testing, and providing ongoing
          support our approach ensures a CRM that fits your goals and drives
          growth.
        </p>
        <BottomLine />
      </div>
      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:mr-24">
        <div className="h-80 rounded-xl border-[0.5px] border-primary/30 bg-[#464646]/30 backdrop-blur-md"></div>
        <div className="h-80 rounded-xl border-[0.5px] border-primary/30 bg-[#464646]/30 backdrop-blur-md"></div>
        <div className="h-80 rounded-xl border-[0.5px] border-primary/30 bg-[#464646]/30 backdrop-blur-md"></div>
        <div className="h-80 rounded-xl border-[0.5px] border-primary/30 bg-[#464646]/30 backdrop-blur-md"></div>
        <div className="h-80 rounded-xl border-[0.5px] border-primary/30 bg-[#464646]/30 backdrop-blur-md"></div>
        <div className="h-80 rounded-xl border-[0.5px] border-primary/30 bg-[#464646]/30 backdrop-blur-md"></div>
        <div className="h-80 rounded-xl border-[0.5px] border-primary/30 bg-[#464646]/30 backdrop-blur-md"></div>
        <div className="h-80 rounded-xl border-[0.5px] border-primary/30 bg-[#464646]/30 backdrop-blur-md"></div>

      </div>
    </div>
  );
};

export default LeftSec;
