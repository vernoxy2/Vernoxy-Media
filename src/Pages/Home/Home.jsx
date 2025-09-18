import React from "react";
import Video from "../../assets/HomePageImgs/HeroV.mp4";
import BottomLine from "../../Components/BottomLine";
import HomeHero from "./Sections/HomeHero";
import Who from "./Sections/Who";
import Offer from "./Sections/Offer";
import Action from "./Sections/Action";
import Review from "./Sections/Review";
import Industries from "./Sections/Industries";
import AIRevolution from "./Sections/AIRevolution";
import Work from "./Sections/Work";

const Home = () => {
  return (
    <>
      <HomeHero />
      <div className="bg-gradient-to-r from-vernoxy via-primary/50 to-vernoxy text-white h-[1px]"></div>
      <Who />
      <Offer />
      <Work/>
      <Action/>
      <Review/>
      <Industries/>
      <AIRevolution/>
    </>
  );
};

export default Home;
