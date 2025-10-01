import React from "react";
import PrimaryHero from "../../../Components/PrimaryHead";
import AIRevolution from "../../../Components/AIRevolution";
import PrimaryBanner from "../../../Components/PrimaryBanner";
import BannerImg from "../../../assets/ServicePageImg/BannerImg/DC.webp";
import FatureKey from "../../../Components/FatureKey";
import keyBanner from "../../../assets/ServicePageImg/FatureKey/WebDKey.webp";
import ServiceSlider from "../../../Components/ServiceSlider";
import PrimaryProcess from "../../../Components/PrimaryProcess/PrimaryProcess";
import Icon from "../../../assets/ServicePageImg/Process/Digital/identity1.svg";
import Icon2 from "../../../assets/ServicePageImg/Process/Digital/Presence1.svg";
import Icon3 from "../../../assets/ServicePageImg/Process/Digital/Engagement2.svg";
import Icon4 from "../../../assets/ServicePageImg/Process/Digital/growth1.svg";
import Img from "../../../assets/ServicePageImg/Process/Digital/Plan2.webp";
import Img2 from "../../../assets/ServicePageImg/Process/Digital/Plan2.webp";
import Img3 from "../../../assets/ServicePageImg/Process/Digital/Plan3.webp";
import Img4 from "../../../assets/ServicePageImg/Process/Digital/Plan4.webp";

const KeyItems = [
  "Responsive and Mobile-Friendly Websites",
  "Customizable and Interactive User Interfaces",
  "Fast & Optimized Performance for Speedy Loading",
  "Optimized Search Engine Optimization (SEO)",
  "Dynamic and Interactive Web Applications",
  "Website Maintenance and Support",
];

const stepData = [
  { icon: Icon, title: "Identity", text: "Define identity through visuals, logo, design." },
  { icon: Img },
  { icon: Img2 },
  { icon: Icon2, title: "Presence", text: "Showcase brand via website, social media." },
  { icon: Icon3, title: "Engagement", text: "Engage audience with creative content, campaigns." },
  { icon: Img3 },
  { icon: Img4 },
  { icon: Icon4, title: "Growth ", text: "Track results, refine strategies, scale impact." },
];

let stepCount = 0;
const Planning = stepData.map((item) => {
  if (item.title && item.text) {
    stepCount += 1;
    return {
      ...item,
      Step: (
        <>
          <span className="text-white font-bold">step</span>
          <br />
          <span className="text-primary font-bold">{String(stepCount).padStart(2, "0")}</span>
        </>
      ),
    };
  }
  return item;
});

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
      <PrimaryProcess Planning={Planning}/>
      <AIRevolution />
    </div>
  );
};

export default WebDevelopment;
