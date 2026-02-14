import React from "react";
import Heading from "../../../Components/Heading";
import PrimaryBtn from "../../../Components/PrimartyBtn";
import Puxxle1 from "../../../assets/AboutPageImg/Puzzle1.svg";
import Puxxle2 from "../../../assets/AboutPageImg/Puzzle2.svg";
import Communicate from "../../../assets/AboutPageImg/Communicate.png"
import { Link } from "react-router-dom";
import LazyImage from "../../../Components/LazyImage";

const WithVernoxy = () => {
  return (
    <div>
      <div className="container pb-12">
        <LazyImage
          src={Puxxle2}
          alt=""
          className="mx-auto translate-x-20 pl-12 h-full animate-float -mb-16 pointer-events-none z-20 "
        />
        <LazyImage
          src={Puxxle1}
          alt=""
          className="mx-auto -mb-20 h-full pointer-events-none"
        />
        <div className=" bg-gradient-to-b from-primary/20  to-vernoxy border-[2px] border-vernoxy border-t-0 hover:border-primary/40 duration-500 transform text-white rounded-lg py-14 font-Bai_Jamjuree backdrop-blur-md bg-white/10 space-y-6">
          <Heading
            boldText="Innovate. Collaborate. Grow"
            normalText="With Vernoxy"
            className="text-center"
          />
          <p className="max-w-md mx-auto mb-3">
            Collaborate with Vernoxy to innovate, grow, and communicate
            effectively with experts driving impactful solutions.
          </p>
          <div className="flex justify-center relative container pb-10">
            <Link to="/contact-us">
              <PrimaryBtn className="flex-none">Speak to Expert</PrimaryBtn>
            </Link>
          <div className=""><LazyImage src={Communicate} alt="" className="absolute top-2.5 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none container" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithVernoxy;
