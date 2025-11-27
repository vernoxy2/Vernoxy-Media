import React from "react";
import Heading from "../../../Components/Heading";
import PrimaryObject from "../../../Components/PrimaryObject";
import src from "../../../assets/Obj1.svg";

const Offer = () => {
  return (
    <section className="relative z-10 container">
      <Heading
        boldText={"What"}
        normalText={"We Offer"}
        className={"text-center flex gap-3 justify-center "}
      ></Heading>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[275px] rounded-lg  md:col-span-2">1</div>
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[275px] rounded-lg  md:row-span-2 md:h-full">2</div>
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[275px] rounded-lg ">3</div>
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[275px] rounded-lg ">4</div>
      </div>
      <PrimaryObject src={src} className="top-0 "/>
      <PrimaryObject src={src} className="bottom-0 -left-5 "/>
    </section>
  );
};

export default Offer;
