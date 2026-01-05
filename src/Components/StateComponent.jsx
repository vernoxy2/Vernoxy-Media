import React from "react";
import PrimaryHero from "./PrimaryHead";
import Heading from "./Heading";
import Gujarat from "../assets/StateComponent/India/Gujarat.png";

const StateComponent = () => {
  const stateData = [
    {
      id: 1,
      name: "Gujarat",
      text: "Strategic regional presence across Gujarat's key industrial and tech hubs.",
      image: Gujarat,
      cities: ["Ahmedabad", "Surat", "Vadodara", "Gandhinagar"],
    },
  ];

  return (
    <section className="container">
      <div>
        <Heading
          boldText="Our Presence"
          normalText="In India"
          className="font-Bai_Jamjuree text-xl md:text-5xl capitalize text-center "
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 ">
        {/* <div> */}
        {/* stateData */}
        {stateData.map((state) => (
          <div key={state.id}>
            <h2 className="text-5xl font-bold text-start">{state.name}</h2>
            <p className=" text-start">{state.text}</p>

            <div className="space-y-2">
              {state.cities.map((city, index) => (
                <p key={index} className="items-center gap-2">
                  <span>{city}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
        {/* </div> */}
        <div className="">
          <img src={Gujarat} alt="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default StateComponent;
