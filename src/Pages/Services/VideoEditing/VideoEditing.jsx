import React from 'react'
import PrimaryHero from '../../../Components/PrimaryHead'
import AIRevolution from '../../../Components/AIRevolution'
import PrimaryBanner from '../../../Components/PrimaryBanner'
import BannerImg from '../../../assets/ServicePageImg/BannerImg/CRM.webp'
import FatureKey from '../../../Components/FatureKey'
import keyBanner from "../../../assets/ServicePageImg/FatureKey/CRM.webp";
import ServiceSlider from '../../../Components/ServiceSlider'
import PrimaryProcess from '../../../Components/PrimaryProcess/PrimaryProcess'

const KeyItems = [
  "Customize features as per business needs.",
  "Streamline tasks and save time.",
  "Grows with your business.",
  "Track and analyze customer data.",
  "Connect with existing tools & platforms.",
  "Easy navigation and real-time updates.",
];


const VideoEditing = () => {
  return (
    <div>
      <PrimaryHero title={"Service"} subtitle={"Coustomer CRM "} />
      <ServiceSlider/>
      <PrimaryBanner boldText={"Personalized CRM"} normalText={"Solutions that Fit You"} bannerImg={BannerImg} description={"A customized CRM solution designed to fit your unique business needs. It streamlines workflows, enhances customer management, and boosts team productivity. With flexible features and tailored modules, it adapts to your goals and drives long-term growth. Empower your business with a CRM that works the way you do, ensuring efficiency, scalability, and stronger customer relationships."}/>
      <FatureKey boldText={"Key Feature of "} normalText={"Coustomer CRM"} Keybanner={keyBanner} KeyList={KeyItems}/>
      {/* <PrimaryProcess/> */}
      <AIRevolution/>
    </div>
  )
}

export default VideoEditing
