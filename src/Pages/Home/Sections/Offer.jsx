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
        <div className="bg-gradient-to-b from-primary/30 to-transparent text-white h-[275px] rounded-lg border border-primary md:col-span-2"></div>
        <div className="bg-gradient-to-b from-primary/30 to-transparent text-white h-[275px] rounded-lg border border-primary "></div>
        <div className="bg-gradient-to-b from-primary/30 to-transparent text-white h-[275px] rounded-lg border border-primary"></div>
        <div className="bg-gradient-to-b from-primary/30 to-transparent text-white h-[275px] rounded-lg border border-primary"></div>
        <div className="bg-gradient-to-b from-primary/30 to-transparent text-white h-[275px] rounded-lg border border-primary"></div>
      </div>
    </section>
  );
};

export default Offer;
