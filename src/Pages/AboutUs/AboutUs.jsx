import React from "react";
import AboutHero from "./Sections/AboutHero";
import Clinets from "./Sections/Clinets";
import Expertise from "./Sections/Expertise";
import Future from "./Sections/Future";
import People from "./Sections/People";
import WithVernoxy from "./Sections/WithVernoxy";
import PrimaryHero from "../../Components/PrimaryHead";

const AboutUs = () => {
  return (
    <div className="overflow-hidden">
      <div className="pb-0">
      <PrimaryHero title={"About"} subtitle={"Our Journey & purpose"} />
      </div>
      <Clinets />
      <Expertise />  
      <div className="bg-gradient-to-r from-vernoxy via-primary/50 to-vernoxy text-white h-[1px] -mt-5"></div>
      <Future />
      {/* <People /> */}
      <WithVernoxy/>
    </div>
  );
};

export default AboutUs;
