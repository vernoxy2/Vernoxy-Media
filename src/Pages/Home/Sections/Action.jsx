import React from "react";
import Heading from "../../../Components/Heading";
import BottomLine from "../../../Components/BottomLine";

const Action = () => {
  return (
    <section className="container">
      <Heading
        boldText={"See Vernoxy"}
        normalText={" in Action"}
        className={"text-start flex justify-start  "}
      ></Heading>
      <div className="bg-[#606060]/20 h-[460px] rounded-3xl"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="md:row-span-2 md:h-full">
          <h1 className="text-4xl font-bold text-start max-w-md">
            Enhancing Operational Efficiency with Predictive Al
          </h1>
          <BottomLine />
        </div>
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[150px] rounded-lg"></div>
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[150px] rounded-lg"></div>
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[150px] rounded-lg"></div>
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[150px] rounded-lg"></div>
      </div>
    </section>
  );
};

export default Action;
