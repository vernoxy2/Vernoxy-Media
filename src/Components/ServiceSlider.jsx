import React from "react";
import Icon from "../assets/ServicePageImg/KeyListIcon.svg";

const Service = [
  "web design",
  "analytics & reporting",
  "custom branding",
  "digital marketing",
  "graphics design",
  "video editing",
  "web development",
  "strategy consulting",
];

const ServiceSlider = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden py-12 container px-0 mx-auto relative">
        <div
          className="flex gap-8 whitespace-nowrap animate-marquee"
          aria-hidden="true"
        >
          {[...Service, ...Service, ...Service].map((item, index) => (
            <div key={index} className="flex items-center gap-10 flex-shrink-0">
              <img src={Icon} alt="" className="" />
              <p className="text-lg tracking-wider font-semibold uppercase font-Bai_Jamjuree">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-vernoxy via-transparent to-vernoxy">

      </div>
    </div>
  );
};

export default ServiceSlider;
