import React from "react";
import Heading from "../../../Components/Heading";

const Offer = () => {
  return (
    <section>
      <Heading
        boldText={"What"}
        normalText={"We Offer"}
        className={"text-center flex justify-center "}
      ></Heading>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[275px] rounded-lg  md:col-span-2"></div>
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[275px] rounded-lg  md:row-span-2 md:h-full"></div>
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[275px] rounded-lg "></div>
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[275px] rounded-lg "></div>
      </div>
    </section>
  );
};

export default Offer;
