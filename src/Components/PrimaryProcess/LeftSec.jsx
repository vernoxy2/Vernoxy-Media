import React from "react";
import Heading from "../Heading";
import BottomLine from "../BottomLine";
import PrimaryObject from "../PrimaryObject";
import src from "../../assets/Obj2.svg";

const LeftSec = ({ planning }) => {
  return (
    <div className="space-y-24 ">
      {/* Heading Section */}
      <div className="text-start space-y-5">
        <Heading
          boldText={"Our process of"}
          normalText={"Customized CRM"}
          className={"text-start"}
        />
        <p className="w-[82%]">
          We follow a structured process to deliver customized CRM solutions.
          From understanding your business needs and designing tailored
          workflows to integrating features, testing, and providing ongoing
          support, our approach ensures a CRM that fits your goals and drives
          growth.
        </p>
        <BottomLine />
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 lg:pr-32 relative z-0">
        {planning.map((item, index) => {
          const isStep = item.Step;
          return (
            <div
              key={index}
              className="bg-[#464646]/30 backdrop-blur-md rounded-xl border border-primary/30 flex flex-col items-center text-center hover:scale-110 duration-500 hover:shadow-2xl shadow-primary"
            >
              {isStep ? (
                <div className=" p-3 md:p-7 h-full flex flex-col justify-between text-start">
                  <div className="flex justify-between">
                    <img
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
                  className="object-contain w-full rounded-xl"
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
