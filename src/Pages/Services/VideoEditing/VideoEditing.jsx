import React from 'react'
import PrimaryHero from '../../../Components/PrimaryHead'
import AIRevolution from '../../../Components/AIRevolution'
import PrimaryBanner from '../../../Components/PrimaryBanner'
import BannerImg from '../../../assets/ServicePageImg/BannerImg/CRM.webp'

const VideoEditing = () => {
  return (
    <section>
      <PrimaryHero title={"Service"} subtitle={"Coustomer CRM "} />
      <PrimaryBanner boldText={"Personalized CRM"} normalText={"Solutions that Fit You"} bannerImg={BannerImg} description={"A customized CRM solution designed to fit your unique business needs. It streamlines workflows, enhances customer management, and boosts team productivity. With flexible features and tailored modules, it adapts to your goals and drives long-term growth. Empower your business with a CRM that works the way you do, ensuring efficiency, scalability, and stronger customer relationships."}/>
      <AIRevolution/>
    </section>
  )
}

export default VideoEditing
