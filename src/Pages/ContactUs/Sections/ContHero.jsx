import React from 'react'
import PrimaryBg from '../../../Components/PrimaryBg'

const ContHero = () => {
  return (
    <section className="relative z-10 space-y-6 py-40">
      <PrimaryBg className="-top-48 "/>

      {/* Main Heading */}
      <div className="w-full flex flex-col justify-center items-start container relative z-10">
        <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold text-stroke text-center">
          Contacts
        </h1>
        <h2 className="font-Bai_Jamjuree text-3xl sm:text-4xl md:text-6xl uppercase font-semibold text-start">
          Get in Touch <br /> with Us
        </h2>
      </div>
    </section>
  )
}

export default ContHero
