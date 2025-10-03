import React from "react";
import Heading from "../../../Components/Heading";
import PeopleImg from "../../../assets/AboutPageImg/People.webp";
import src from "../../../assets/Obj2.svg";
import PrimaryObject from "../../../Components/PrimaryObject";
import PrimaryBg from "../../../Components/PrimaryBg";

const PeopleData = [
  {
    id: 1,
    img: PeopleImg,
    name: "John Doe",
    title: "CEO, Vernoxy",
  },
  {
    id: 2,
    img: PeopleImg,
    name: "John Doe",
    title: "CEO, Vernoxy",
  },
  {
    id: 3,
    img: PeopleImg,
    name: "John Doe",
    title: "CEO, Vernoxy",
  },
  {
    id: 4,
    img: PeopleImg,
    name: "John Doe",
    title: "CEO, Vernoxy",
  },
  {
    id: 5,
    img: PeopleImg,
    name: "John Doe",
    title: "CEO, Vernoxy",
  },
  {
    id: 6,
    img: PeopleImg,
    name: "John Doe",
    title: "CEO, Vernoxy",
  },
];

const People = () => {
  return (
    <section className="relative z-0 container">
      <div className="container">
        <Heading
          boldText={"Fueling the Future "}
          normalText={"with People"}
          className={"text-start flex justify-start"}
        ></Heading>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {PeopleData.map((item) => (
          <div
            key={item.id}
            className="text-left space-y-4 bg-[#D9D9D9] rounded-xl relative"    
          >
            <img src={item.img} alt="" className="mx-auto pt-8 h-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full bg-primary/50 py-4 text-center text-white font-Bai_Jamjuree rounded-b-xl">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-lg">{item.title}</p>
            </div>  
          </div>
        ))}
      </div>
      <PrimaryObject src={src} className="left-0 -bottom-10  " />
      <PrimaryBg className="-top-32 -left-40" />
      <PrimaryBg className="-bottom-44 " />
    </section>
  );
};

export default People;
