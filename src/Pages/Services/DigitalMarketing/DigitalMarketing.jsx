import React from "react";
import PrimaryHead from "../../../Components/PrimaryHead";
import AIRevolution from "../../../Components/AIRevolution";
import PrimaryBanner from "../../../Components/PrimaryBanner";
import bannerImg from "../../../assets/ServicePageImg/BannerImg/DM.webp"
import FatureKey from "../../../Components/FatureKey";
import keyBanner from "../../../assets/ServicePageImg/FatureKey/Key1.webp"

const KeyItems = [
  "Content Marketing That Tells Your Brand's Story",
  "Personalized Email Marketing To Nurture Leads",
  "Social Media Marketing That Engages And Converts",
  "Comprehensive SEO Services For Visibility",
  "Performance Analytics & Reporting",
  "Performance Analytics & Reporting"
];

const DigitalMarketing = () => {
  return (
    <div>
      <PrimaryHead
        title={"Service"}
        subtitle={"Dedital marketing & Branding"}
      />
      <PrimaryBanner boldText={"Driving Growth Through"} normalText={"Data-Driven Marketing Solutions"} bannerImg={bannerImg} description={"Our digital marketing services are designed to elevate your brand and reach your target audience effectively. We develop customized strategies that include SEO, PPC advertising, social media marketing, content marketing, and email campaigns. By leveraging data-driven insights and the latest trends, we maximize engagement, drive traffic, and boost conversions, ensuring a measurable return on your investment. Let us help you grow your digital presence and achieve your business goals."} />
      <FatureKey boldText={"Key Feature of "} normalText={"Digital Marketing"} Keybanner={keyBanner} KeyList={KeyItems}/>
      <AIRevolution />
    </div>
  );
};

export default DigitalMarketing;
