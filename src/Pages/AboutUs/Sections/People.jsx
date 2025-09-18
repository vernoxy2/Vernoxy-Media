import React from "react";
import Heading from "../../../Components/Heading";
import PeopleImg from "../../../assets/AboutPageImg/People.webp";

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
    <section>
      <div className="container">
        <Heading
          boldText={"Fueling the Future "}
          normalText={"with People"}
          className={"text-start flex justify-start"}
        ></Heading>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {PeopleData.map((item) => (
          <div
            key={item.id}
            className="text-left space-y-4 bg-[#D9D9D9] rounded-xl relative"
          >
            <img src={item.img} alt="" className="mx-auto pt-8 h-full" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-primary/50 py-4 w-full text-center font-Bai_Jamjuree rounded-b-xl">
              <h2 className="text-3xl font-semibold">{item.name}</h2>
              <p className="text-xl ">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default People;
