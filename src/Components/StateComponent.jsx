import React from "react";
import PrimaryHero from "./PrimaryHead";
import Heading from "./Heading";
import Gujarat from "../assets/StateComponent/India/Gujarat.webp";
import { useNavigate } from "react-router-dom";
import LeftTop from "../assets/ContactPageImg/LeftTop.svg";

const StateComponent = () => {
  const navigate = useNavigate();
  const handleCityClick = (city) => {
    navigate(`/city/${city}`);
  };
  const stateData = [
    {
      id: 1,
      name: "Gujarat",
      text: "Strategic regional presence across Gujarat's key industrial and tech hubs.",
      image: Gujarat,
      cities: [
        "Ahmedabad",
        "Surat",
        "Vapi",
        "Vadodara",
        "Gandhinagar",
        "Anand",
        "Sachin",
        "Dahej",
        "Valsad",
        "Sarigam",
        "Silvassa",
        "Umabergaon",
      ],
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
      <div className="relative z-10">
        <img
          src={LeftTop}
          alt=""
          className="absolute md:left-[-24px] md:top-[-24px] object-contain -z-10 "
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-24 bg-[#464646]/50">
          {/* stateData */}
          <div className="order-2 xl:order-1 m-10">
            {stateData.map((state) => (
              <div className="space-y-6 " key={state.id}>
                <h2 className="text-5xl font-bold text-start flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
                  {state.name}
                </h2>
                <p className=" text-start xl:w-[70%]">{state.text}</p>

                <div className="w-full xl:w-5/6 item-start text-start flex flex-wrap gap-4">
                  {state.cities.map((city, index) => (
                    <button
                      key={index}
                      className="border px-3  py-1 text-center hover:bg-primary rounded-lg border-primary"
                      onClick={() => handleCityClick(city)}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 xl:order-2 w-full">
            <img src={Gujarat} alt="Gujarat" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateComponent;
