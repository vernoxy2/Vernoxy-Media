import React from "react";
import Video from "../../assets/HomePageImgs/HeroV.mp4";
import BottomLine from "../../Components/BottomLine";
import HomeHero from "./Sections/HomeHero";
import Who from "./Sections/Who";
import Offer from "./Sections/Offer";
import Action from "./Sections/Action";
import Review from "./Sections/Review";
import Industries from "./Sections/Industries";
import AIRevolution from "../../Components/AIRevolution";
import Work from "./Sections/Work";
import PrimaryObject from "../../Components/PrimaryObject";
import { useMetaTags  } from "../../hooks/useMetaTags";

const Home = () => {
  useMetaTags({
    title: "Vernoxy | Home",
    description: "Vernoxy Media - Your Trusted Partner for Social Media Handling & Digital Services in Valsad",
    keywords: "vernoxymedia, social media management, digital marketing, web development, Valsad, ERP solutions ",
    image: "../../../public/favicon.svg",
    url: "https://vernoxymedia.com/",
  });
  return (
    <div className="overflow-hidden">
      {/* Page Content */}
      <HomeHero />
      <div className="bg-gradient-to-r from-vernoxy via-primary/50 to-vernoxy text-white h-[1px]"></div>
      <Who />
      <Offer />
      <Work />
      <Action />
      {/* <Review/>  */}
      <Industries />
      <AIRevolution />
    </div>
  );
};

export default Home;
