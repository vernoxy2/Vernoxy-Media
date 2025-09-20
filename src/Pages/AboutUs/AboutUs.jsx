import React from "react";
import AboutHero from "./Sections/AboutHero";
import Clinets from "./Sections/Clinets";
import Expertise from "./Sections/Expertise";
import Future from "./Sections/Future";
import People from "./Sections/People";
import WithVernoxy from "./Sections/WithVernoxy";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <div className="bg-gradient-to-r from-vernoxy via-primary/50 to-vernoxy text-white h-[1px] -mt-5"></div>
      <Clinets />
      <Expertise />  
      <div className="bg-gradient-to-r from-vernoxy via-primary/50 to-vernoxy text-white h-[1px] -mt-5"></div>
      <Future />
      <People />
      <WithVernoxy/>
    </div>
  );
};

export default AboutUs;
