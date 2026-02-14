import React from "react";
import Heading from "../Heading";
import BottomLine from "../BottomLine";
import PrimaryObject from "../PrimaryObject";
import src from "../../assets/Obj2.svg";
import LazyImage from "../LazyImage";

const LeftSec = ({ planning, description, boldText, normalText }) => {
  return (
    <div className="space-y-24 ">
      {/* Heading Section */}
      <div className="text-start space-y-5">
        <Heading
          boldText={boldText}
          normalText={normalText}
          className={"text-start"}
        />
        <p className="xl:w-[82%]">
          {description}
        </p>
        <BottomLine />
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 xl:pr-32 relative z-0">
        {planning.map((item, index) => {
          const isStep = item.Step;
          return (
            <div
              key={index}
              className="bg-[#464646]/30 backdrop-blur-md rounded-xl border border-primary/30 flex flex-col items-center text-center hover:scale-105 duration-300 hover:shadow-[0_0_12px_3px] hover:shadow-primary/70"
            >
              {isStep ? (
                <div className=" p-3 md:p-7 h-full flex flex-col justify-between text-start">
                  <div className="flex justify-between">
                    <LazyImage
                      src={item.icon}
                      alt={item.title || `Step ${index + 1}`}
                      className="md:max-h-16 max-h-10 object-contain"
                    />
                    <h3 className="font-bold mb-2 text-center uppercase font-Bai_Jamjuree md:text-3xl text-primary">
                      {item.Step}
                    </h3>
                  </div>
                  <div>
                    <h4 className="md:text-3xl font-semibold mb-2 font-Bai_Jamjuree">
                      {item.title}
                    </h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={item.icon}
                  alt={`Image ${index + 1}`}
                  className="object-cover h-full w-full rounded-xl"
                />
              )}
            </div>
          );
        })}
      <PrimaryObject src={src} className="-left-20 -top-20  " />
      </div>
    </div>
  );
};

export default LeftSec;
