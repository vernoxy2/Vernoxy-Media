import React from 'react'
import PrimaryHero from '../../../Components/PrimaryHead'
import AIRevolution from '../../../Components/AIRevolution'
import PrimaryBanner from '../../../Components/PrimaryBanner'
import BannerImg from '../../../assets/ServicePageImg/BannerImg/CRM.webp'
import FatureKey from '../../../Components/FatureKey'
import keyBanner from "../../../assets/ServicePageImg/FatureKey/CRM.webp";
import ServiceSlider from '../../../Components/ServiceSlider'
import PrimaryProcess from '../../../Components/PrimaryProcess/PrimaryProcess'
import Icon from "../../../assets/ServicePageImg/Process/CRM/Plan1.svg";
import Icon2 from "../../../assets/ServicePageImg/Process/CRM/Plan2.svg";
import Icon3 from "../../../assets/ServicePageImg/Process/CRM/Plan3.svg";
import Icon4 from "../../../assets/ServicePageImg/Process/CRM/Plan4.svg";
import Img from "../../../assets/ServicePageImg/Process/CRM/Plan1.webp";
import Img2 from "../../../assets/ServicePageImg/Process/CRM/Plan2.webp";
import Img3 from "../../../assets/ServicePageImg/Process/CRM/Plan3.webp";
import Img4 from "../../../assets/ServicePageImg/Process/CRM/Plan4.webp";

const KeyItems = [
  "Customize features as per business needs.",
  "Streamline tasks and save time.",
  "Grows with your business.",
  "Track and analyze customer data.",
  "Connect with existing tools & platforms.",
  "Easy navigation and real-time updates.",
];

const stepData = [
  { icon: Icon, title: "Analyze", text: "Analyze business needs, optimize CRM strategy." },
  { icon: Img },
  { icon: Img2 },
  { icon: Icon2, title: "Design ", text: "Design intuitive interfaces for seamless user experience." },
  { icon: Icon3, title: "Develop", text: "Develop robust solutions for business efficiency." },
  { icon: Img3 },
  { icon: Img4 },
  { icon: Icon4, title: "Implement", text: "Implement solutions effectively to achieve goals." },
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

const VideoEditing = () => {
  return (
    <div className='overflow-hidden'>
      <PrimaryHero title={"Service"} subtitle={"Coustomer CRM "} />
      <ServiceSlider/>
      <PrimaryBanner boldText={"Personalized CRM"} normalText={"Solutions that Fit You"} bannerImg={BannerImg} description={"A customized CRM solution designed to fit your unique business needs. It streamlines workflows, enhances customer management, and boosts team productivity. With flexible features and tailored modules, it adapts to your goals and drives long-term growth. Empower your business with a CRM that works the way you do, ensuring efficiency, scalability, and stronger customer relationships."}/>
      <FatureKey boldText={"Key Feature of "} normalText={"Coustomer CRM"} Keybanner={keyBanner} KeyList={KeyItems}/>
      <PrimaryProcess Planning={Planning}/>
      <AIRevolution/>
    </div>
  )
}

export default VideoEditing
