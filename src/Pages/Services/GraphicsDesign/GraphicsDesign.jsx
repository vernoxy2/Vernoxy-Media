import React from 'react'
import PrimaryHero from '../../../Components/PrimaryHead'
import AIRevolution from '../../../Components/AIRevolution'
import PrimaryBanner from '../../../Components/PrimaryBanner'
import BannereImg from '../../../assets/ServicePageImg/BannerImg/AD.webp'
import FatureKey from '../../../Components/FatureKey'
import keyBanner from "../../../assets/ServicePageImg/FatureKey/AppDKey.webp";
import ServiceSlider from '../../../Components/ServiceSlider'

const KeyItems = [
  "User-Friendly Interfaces",
  "Fast Performance ",
  "Strong Security ",
  "Cross-Platform Support ",
  "Scalable & Flexible Architecture ",
  "Push Notifications & Messaging",
];

const GraphicsDesign = () => {
  return (
    <div>
      <PrimaryHero title={"Service"} subtitle={"App Development"} />
      <ServiceSlider/>
      <PrimaryBanner boldText={"Designing the Future,"} normalText={"One App at a Time"} bannerImg={BannereImg} description={"We specialize in designing and developing applications that combine intuitive user experiences with powerful functionality. From initial planning to final deployment, we ensure each app is tailored to meet user needs, streamline workflows, and deliver measurable results."}/>
      <FatureKey boldText={"Key Feature of "} normalText={"App Development"} Keybanner={keyBanner} KeyList={KeyItems}/>
      <AIRevolution/>
    </div>
  )
}

export default GraphicsDesign
