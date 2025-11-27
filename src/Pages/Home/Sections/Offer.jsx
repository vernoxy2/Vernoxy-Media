import React from "react";
import Heading from "../../../Components/Heading";
import PrimaryObject from "../../../Components/PrimaryObject";
import src from "../../../assets/Obj1.svg";
import DigitalMarketing from "../../../assets/ServicePageImg/FatureKey/Key1.webp";
import Application from "../../../assets/ServicePageImg/FatureKey/AppDKey.webp";
import CRM from "../../../assets/ServicePageImg/FatureKey/CRM.webp";
import WebDevlope from "../../../assets/ServicePageImg/FatureKey/WebDKey.webp";




import { title } from "framer-motion/client";
import PrimaryBtn from "../../../Components/PrimartyBtn";

const data = [
  {
    id: 1,
    title: "Customized Application Development",
    sub: "Tailored, high-performance apps built around your business needs.",
    img: Application,
  },
  {
    id: 2,
    title: "Website Design & Development",
    sub: "Modern, responsive websites designed to engage and convert.",
    img: WebDevlope,
  },
  {
    id: 3,
    title: "Digital Marketing",
    sub: "Data-driven strategies to boost visibility, traffic, and sales.",
    img: DigitalMarketing,
  },
  {
    id: 4,
    title: "Customized CRM Solutions",
    sub: "Streamlined, automated CRM systems tailored to your workflows.",
    img: CRM,
  },
];

const Offer = () => {
  return (
    <section className="relative z-10 container">
      <Heading
        boldText={"What"}
        normalText={"We Offer"}
        className={"text-center flex gap-3 justify-center "}
      ></Heading>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
        {data.map((item) => (
          <div
            key={item.id}
            className="text-left space-y-4 bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy rounded-xl relative grid grid-cols-2"
          >
            <div><img src={item.img} alt="" /></div>
            <div className="space-y-6 p-4 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-lg">{item.sub}</p>
              <PrimaryBtn className="w-fit">Learn More</PrimaryBtn>
            </div>
          </div>
        ))}
      </div>
      <PrimaryObject src={src} className="top-0 " />
      <PrimaryObject src={src} className="bottom-0 -left-5 " />
    </section>
  );
};

export default Offer;
