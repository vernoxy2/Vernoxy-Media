import React from "react";
import Heading from "../../../Components/Heading";
import PrimaryBtn from "../../../Components/PrimartyBtn";
import Puxxle1 from "../../../assets/AboutPageImg/Puzzle1.svg";
import Puxxle2 from "../../../assets/AboutPageImg/Puzzle2.svg";

const WithVernoxy = () => {
  return (
    <section>
      <div className="container ">
        <img src={Puxxle2} alt="" className="mx-auto translate-x-20 pl-12 h-full animate-float -mb-16 pointer-events-none" />
        <img src={Puxxle1} alt="" className="mx-auto -mb-20 h-full pointer-events-none"/>
        <div className=" bg-gradient-to-b from-primary/30  to-vernoxy border-[2px] border-vernoxy border-t-0 hover:border-primary/40 duration-500 transform text-white rounded-lg py-14 font-Bai_Jamjuree backdrop-blur-md bg-white/10 space-y-5">
          <Heading
            boldText="Innovate. Collaborate. Grow"
            normalText="With Vernoxy"
            className="text-center"
          />
          <p className="max-w-md mx-auto">
            Collaborate with Vernoxy to innovate, grow, and communicate
            effectively with experts driving impactful solutions.
          </p>
          <PrimaryBtn className="flex-none">Speak to Expert</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default WithVernoxy;
