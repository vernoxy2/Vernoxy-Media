import React from "react";
import Heading from "./Heading";
import BottomLine from "./BottomLine";
import icon from "../assets/ServicePageImg/KeyListIcon.svg";
import PrimaryBg from "./PrimaryBg";

const FatureKey = ({ boldText, normalText, KeyList, Keybanner }) => {
  return (
    <section className="relative z-0">
      <div className="container grid grid-cols-1 lg:grid-cols-2  gap-y-14">
        <PrimaryBg className="right-96 translate-x-60 -top-5" />
        {/* Left Content */}
        <div>
          <Heading
            boldText={boldText}
            normalText={normalText}
            className="text-center lg:text-start justify-center lg:justify-start"
          />
          <BottomLine className="mx-auto lg:mx-0" />

          <div className="mx-auto text-center lg:text-left">
            <ul className="mt-10 space-y-4 md:space-y-6">
              {KeyList?.map((item, index) => (
                <li
                  className="flex items-center justify-center lg:justify-start gap-3"
                  key={index}
                >
                  <img src={icon} alt="list-icon" className="" />
                  <p className="text-base md:text-2xl">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="mx-auto">
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
