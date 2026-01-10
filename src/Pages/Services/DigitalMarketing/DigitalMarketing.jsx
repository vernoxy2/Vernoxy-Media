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
import Img from "../../../assets/ServicePageImg/Process/Digital/Plan1.jpg";
import Img2 from "../../../assets/ServicePageImg/Process/Digital/Plan2.png";
import Img3 from "../../../assets/ServicePageImg/Process/Digital/Plan3.webp";
import Img4 from "../../../assets/ServicePageImg/Process/Digital/Plan4.webp";
import { useMetaTags } from "../../../hooks/useMetaTags"; 

const KeyItems = [
  "Content Marketing That Tells Your Brand's Story",
  "Personalized Email Marketing To Nurture Leads",
  "Social Media Marketing That Engages And Converts",
  "Comprehensive SEO Services For Visibility",
  "Performance Analytics & Reporting",
  "Conversion Rate Optimization To Boost Sales",
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
// const description1 = [{text: "abc"}]

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
  useMetaTags({
    title: "Digital Marketing & Branding - Vernoxy Media",
    description: "Discover Vernoxy Media's comprehensive services: AI-powered digital marketing, web development, SEO, social media management, branding, and custom ERP solutions.",
    keywords: "digital marketing services, AI marketing, web development, SEO services, social media marketing, branding, ERP solutions, Vernoxy services",
    image: "../../../public/favicon.svg",
    url: "https://vernoxy.com/services/digital_marketing", 
    type: "website",
  });
  return (
    <div className="overflow-hidden">
       {/* SEO Meta Tags */}
      <title>Our Services - Digital Marketing & AI Solutions | Vernoxy Media</title>
      <meta name="description" content="Explore Vernoxy Media's comprehensive services: AI-powered digital marketing, web development, SEO, social media management, branding, and custom ERP solutions." />
      <meta name="keywords" content="digital marketing services, AI marketing, web development, SEO services, social media marketing, branding, ERP solutions, Vernoxy services" />
      
      <PrimaryHead
        title={"Digital marketing & Branding"}
        subtitle={"Building brands that resonate and endure"}
      />
      <ServiceSlider />
      <PrimaryBanner
        boldText={"Driving Growth Through"}
        normalText={"Data-Driven Marketing Solutions"}
        bannerImg={bannerImg}
      />
      <FatureKey
        boldText={"Key Feature of "}
        normalText={"Digital Marketing"}
        Keybanner={keyBanner}
        KeyList={KeyItems}
      />

      <PrimaryProcess Planning={Planning}  description={"Our digital marketing process begins with discovery and research to understand your goals. We then develop a tailored strategy and implement campaigns across various channels. Continuous monitoring and optimization ensure effectiveness, followed by regular reporting to track performance. Finally, we refine and scale efforts for sustained growth and success."}  boldText={"Our process of"} normalText={"Digital Marketing"} />
      <AIRevolution />
    </div>
  );
};

export default DigitalMarketing;
