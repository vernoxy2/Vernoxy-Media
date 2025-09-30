import React from "react";
import ClinetsImg from "../../../assets/AboutPageImg/ClinetsImg.png";
import Heading from "../../../Components/Heading";
import BottomLine from "../../../Components/BottomLine";
import PrimaryBg from "../../../Components/PrimaryBg";

const Clinets = () => {
  return (
    <section>
      <div className="container space-y-8 md:space-y-14 relative z-10">
        <PrimaryBg className="-top-52 " />
        <Heading
          boldText={"Empowering Growth,"}
          normalText={"Streamlining Efficiency, Inspiring Innovation"}
          className={"text-start z-20"}
        />
        <img src={ClinetsImg} alt="" className="w-full pointer-events-none" />
        <div className="lg:flex items-center">
          <div className="lg:w-4/12 py-4">
            <Heading
              boldText={"Our"}
              normalText={"Clients"}
              className={"text-start"}
            />
            <BottomLine />
          </div>
          <div className="lg:w-8/12 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[150px] rounded-lg"></div>
            <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[150px] rounded-lg"></div>
            <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white h-[150px] rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinets;
