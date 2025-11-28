import React from "react";
import PrimaryHead from "../../../Components/PrimaryHead";
import AIRevolution from "../../../Components/AIRevolution";
import PrimaryBanner from "../../../Components/PrimaryBanner";
import bannerImg from "../../../assets/ServicePageImg/BannerImg/AD.webp";
import FatureKey from "../../../Components/FatureKey";
import keyBanner from "../../../assets/ServicePageImg/FatureKey/AppDKey.webp";
import ServiceSlider from "../../../Components/ServiceSlider";
import PrimaryProcess from "../../../Components/PrimaryProcess/PrimaryProcess";
import Icon from "../../../assets/ServicePageImg/Process/App/Plan1.svg";
import Icon2 from "../../../assets/ServicePageImg/Process/App/Plan2.svg";
import Icon3 from "../../../assets/ServicePageImg/Process/App/Plan3.svg";
import Icon4 from "../../../assets/ServicePageImg/Process/App/Plan4.svg";
import Img from "../../../assets/ServicePageImg/Process/App/Plan1.webp";
import Img2 from "../../../assets/ServicePageImg/Process/App/Plan2.webp";
import Img3 from "../../../assets/ServicePageImg/Process/App/Plan3.webp";
import Img4 from "../../../assets/ServicePageImg/Process/App/Plan4.webp";

const KeyItems = [
  "User-Friendly Interface",
  "Fast Performance",
  "Strong Security",
  "Cross-Platform Support",
  "Scalable & Flexible",
  "Push Notifications",
];

const stepData = [
  { icon: Icon, title: "Plan", text: "Strategize goals, features, and user flow." },
  { icon: Img },
  { icon: Img2 },
  { icon: Icon2, title: "Design ", text: "Create UI/UX, wireframes, and visual identity." },
  { icon: Icon3, title: "Develop", text: "Build the app, integrate backend & frontend." },
  { icon: Img3 },
  { icon: Img4 },
  { icon: Icon4, title: "Launch", text: "Test, deploy, and optimize for users." },
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
          <span className="text-primary font-bold">
            {String(stepCount).padStart(2, "0")}
          </span>
        </>
      ),
    };
  }
  return item;
});

const CustomizedApp = () => {
  return (
    <div className="overflow-hidden">
      <PrimaryHead
        title={"Customized App"}
        subtitle={"Your vision, precisely engineered"}
      />
      <ServiceSlider />
      <PrimaryBanner
        boldText={"Designing the Future,"}
        normalText={"One App at a Time"}
        bannerImg={bannerImg}
        description={"We specialize in designing and developing applications that combine intuitive user experiences with powerful functionality. From initial planning to final deployment, we ensure each app is tailored to meet user needs, streamline workflows, and deliver measurable results."}
       
      />
      <FatureKey
        boldText={"Key Feature of "}
        normalText={"App Development"}
        Keybanner={keyBanner}
        KeyList={KeyItems}
      />
      <PrimaryProcess Planning={Planning}  description={
          "We follow a structured approach to turn ideas into high-quality apps. From planning and design to development, testing, launch, and ongoing support, our process ensures a seamless, user-friendly, and reliable experience. Our team combines creativity, technical expertise, and attention to detail to deliver apps that delight users and drive results."
        } boldText={"Our process of"} normalText={"App Development"} />
      <AIRevolution />
    </div>
  );
};

export default CustomizedApp;
