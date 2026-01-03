import React from "react";
import LeftTop from "../../../assets/ContactPageImg/LeftTop.svg";
import LeftBottom from "../../../assets/ContactPageImg/RightBottom.svg";
import src from "../../../assets/Obj2.svg";
import PrimaryObject from "../../../Components/PrimaryObject";

const Map = () => {
  return (
    <section className="container relative z-10">
      <div className="  mx-auto flex flex-col lg:flex-row space-y-0 relative z-0">
        {/* <img src={LeftTop} alt="" className="absolute top-0 left-0 " />
        <img src={LeftBottom} alt="" className="absolute bottom-0 right-0 " /> */}
        {/* Left background/placeholder */}
        <div className="w-full z-0 p-5 md:p-9 lg:w-5/12 h-[320px] lg:h-auto bg-[#464646]/50 flex flex-col justify-center items-start text-start">
          <h1 className="uppercase font-bold text-4xl md:text-5xl lg:text-6xl font-Bai_Jamjuree">
            Find Your Way To Us
          </h1>
          <p className="w-[80%] mt-4 text-gray-200">
            Visit our location for professional services and trusted customer
            support.
          </p>
        </div>

        {/* Right map */}
        <div className="w-full lg:w-7/12 h-[420px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5020.302882976141!2d72.948264952216!3d20.592281561748607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e0e7ad4c92a2e85%3A0x6053f5b9d2a3fab0!2sVernoxy%20Media!5e1!3m2!1sen!2sin!4v1767352109912!5m2!1sen!2sin"
            title="Kalaji Business Center Map"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
        </div>
        <PrimaryObject src={src} className="-top-80 -left-20" />
      </div>
    </section>
  );
};

export default Map;
