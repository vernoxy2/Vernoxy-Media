import React from "react";
import Heading from "./Heading";
import BottomLine from "./BottomLine";
import icon from "../assets/ServicePageImg/KeyListIcon.svg";
import PrimaryBg from "./PrimaryBg";
import LazyImage from "./LazyImage";

const FatureKey = ({ boldText, normalText, KeyList, Keybanner }) => {
  return (
    <section className="">
      <div className="relative z-0 container grid grid-cols-1 lg:grid-cols-2  gap-y-14">
        <PrimaryBg className="right-80 translate-x-60 -top-5" />
        {/* Left Content */}
        <div>
          <Heading
            boldText={boldText}
            normalText={normalText}
            className="text-center lg:text-start justify-center lg:justify-start"
          />
          <BottomLine className="mx-auto lg:mx-0" />

          <div className="mx-auto text-left">
            <ul className="mt-10 space-y-4 md:space-y-6">
              {KeyList?.map((item, index) => (
                <li
                  className="flex items-center justify-start gap-3"
                  key={index}
                >
                  <LazyImage src={icon} alt="list-icon" className="" />
                  <p className="text-base md:text-2xl">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex items-center justify-center">
          <img
            src={Keybanner}
            alt="feature-banner"
            className="pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default FatureKey;
