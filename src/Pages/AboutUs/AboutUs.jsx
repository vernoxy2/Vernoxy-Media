import React from "react";
import AboutHero from "./Sections/AboutHero";
import Clinets from "./Sections/Clinets";
import Expertise from "./Sections/Expertise";
import Future from "./Sections/Future";
import People from "./Sections/People";
import WithVernoxy from "./Sections/WithVernoxy";
import PrimaryHero from "../../Components/PrimaryHead";
import { useMetaTags } from "../../hooks/useMetaTags";

const AboutUs = () => {
  useMetaTags({
    title: "About Us - Vernoxy Media",
    description: "Learn about Vernoxy Media's mission and how we help businesses grow online.",
    keywords: "vernoxymedia, social media management, digital marketing, web development, Valsad, ERP solutions ",
    image: "../../../public/favicon.svg",
    url: "https://vernoxymedia.com/about",
    type: "website",
  });
  return (
    <div className="overflow-hidden">
      
      <title>About Us - Vernoxy Media</title>
      <meta name="description" content="Learn about Vernoxy Media's mission..." />
      <link rel="canonical" href="https://vernoxymedia.com/about" />
      <div className="pb-0">
      <PrimaryHero title={"About"} subtitle={"Our Journey & purpose"} />
      </div>
      {/* <Clinets /> */}
      <Expertise />  
      <div className="bg-gradient-to-r from-vernoxy via-primary/50 to-vernoxy text-white h-[1px] -mt-5"></div>
      <Future />
      {/* <People /> */}
      <WithVernoxy/>
    </div>
  );
};

export default AboutUs;
