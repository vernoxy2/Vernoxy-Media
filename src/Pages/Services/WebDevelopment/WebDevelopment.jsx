import React from 'react'
import PrimaryHero from '../../../Components/PrimaryHead'
import AIRevolution from '../../../Components/AIRevolution'
import PrimaryBanner from '../../../Components/PrimaryBanner'
import BannerImg from '../../../assets/ServicePageImg/DC.webp'

const WebDevelopment = () => {
  return (
    <section>
      <PrimaryHero title={"Service"} subtitle={"Web Design & Development"} />
      <PrimaryBanner boldText={"Designing Creativity,"} normalText={"Developing Excellence"} bannerImg={BannerImg} description={"At the heart of every project, we blend imaginative design with meticulous development. Our approach transforms innovative ideas into exceptional solutions, ensuring creativity drives every detail while excellence defines the outcome. From concept to execution, we deliver work that inspires, engages, and exceeds expectations"}/>
      <AIRevolution/>
    </section>
  )
}

export default WebDevelopment
