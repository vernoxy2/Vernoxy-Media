import React from "react";
import PrimaryHead from "../../../Components/PrimaryHead";
import AIRevolution from "../../../Components/AIRevolution";
import PrimaryBanner from "../../../Components/PrimaryBanner";
import bannerImg from "../../../assets/ServicePageImg/BannerImg/DM.webp";
import FatureKey from "../../../Components/FatureKey";
import keyBanner from "../../../assets/ServicePageImg/FatureKey/Key1.webp";
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
  "Content Marketing That Tells Your Brand's Story",
  "Personalized Email Marketing To Nurture Leads",
  "Social Media Marketing That Engages And Converts",
  "Comprehensive SEO Services For Visibility",
  "Performance Analytics & Reporting",
  "Performance Analytics & Reporting",
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

const DigitalMarketing = () => {
  return (
    <div className="overflow-hidden">
      <PrimaryHead
        title={"Service"}
        subtitle={"Dedital marketing & Branding"}
      />
      <ServiceSlider />
      <PrimaryBanner
        boldText={"Driving Growth Through"}
        normalText={"Data-Driven Marketing Solutions"}
        bannerImg={bannerImg}
        description={
          "Our digital marketing services are designed to elevate your brand and reach your target audience effectively. We develop customized strategies that include SEO, PPC advertising, social media marketing, content marketing, and email campaigns. By leveraging data-driven insights and the latest trends, we maximize engagement, drive traffic, and boost conversions, ensuring a measurable return on your investment. Let us help you grow your digital presence and achieve your business goals."
        }
      />
      <FatureKey
        boldText={"Key Feature of "}
        normalText={"Digital Marketing"}
        Keybanner={keyBanner}
        KeyList={KeyItems}
      />
      <PrimaryProcess Planning={Planning} />
      <AIRevolution />
    </div>
  );
};

export default DigitalMarketing;
