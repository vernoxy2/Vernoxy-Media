import React from "react";
import PrimaryHero from "../../../Components/PrimaryHead";
import AIRevolution from "../../../Components/AIRevolution";
import PrimaryBanner from "../../../Components/PrimaryBanner";
import BannerImg from "../../../assets/ServicePageImg/BannerImg/DC.webp";
import FatureKey from "../../../Components/FatureKey";
import keyBanner from "../../../assets/ServicePageImg/FatureKey/WebDKey.webp";
import ServiceSlider from "../../../Components/ServiceSlider";
const KeyItems = [
  "Responsive and Mobile-Friendly Websites",
  "Customizable and Interactive User Interfaces",
  "Fast & Optimized Performance for Speedy Loading",
  "Optimized Search Engine Optimization (SEO)",
  "Dynamic and Interactive Web Applications",
  "Website Maintenance and Support",
];

const WebDevelopment = () => {
  return (
    <div>
      <PrimaryHero title={"Service"} subtitle={"Web Design & Development"} />
      <ServiceSlider/>
      <PrimaryBanner
        boldText={"Designing Creativity,"}
        normalText={"Developing Excellence"}
        bannerImg={BannerImg}
        description={
          "At the heart of every project, we blend imaginative design with meticulous development. Our approach transforms innovative ideas into exceptional solutions, ensuring creativity drives every detail while excellence defines the outcome. From concept to execution, we deliver work that inspires, engages, and exceeds expectations"
        }
      />
      <FatureKey
        boldText={"Key Feature of "}
        normalText={"Web Design & Development"}
        Keybanner={keyBanner}
        KeyList={KeyItems}
      />
      <AIRevolution />
    </div>
  );
};

export default WebDevelopment;
