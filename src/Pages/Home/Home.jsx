import React from "react";
import Video from "../../assets/HomePageImgs/HeroV.mp4";
import BottomLine from "../../Components/BottomLine";
import HomeHero from "./Sections/HomeHero";
import Who from "./Sections/Who";
import Offer from "./Sections/Offer";

const Home = () => {
  return (
    <>
      <HomeHero />
      <div className="bg-gradient-to-r from-vernoxy via-primary/50 to-vernoxy text-white h-[1px]"></div>
      <Who />
      <Offer />
    </>
  );
};

export default Home;
