import React from 'react'
import PrimaryHero from '../../../Components/PrimaryHead'
import AIRevolution from '../../../Components/AIRevolution'
import PrimaryBanner from '../../../Components/PrimaryBanner'
import BannereImg from '../../../assets/ServicePageImg/AD.webp'

const GraphicsDesign = () => {
  return (
    <section>
      <PrimaryHero title={"Service"} subtitle={"App Development"} />
      <PrimaryBanner boldText={"Designing the Future,"} normalText={"One App at a Time"} bannerImg={BannereImg} description={"We specialize in designing and developing applications that combine intuitive user experiences with powerful functionality. From initial planning to final deployment, we ensure each app is tailored to meet user needs, streamline workflows, and deliver measurable results."}/>
      <AIRevolution/>
    </section>
  )
}

export default GraphicsDesign
