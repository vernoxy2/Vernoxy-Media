import React from "react";
import Heading from "../../../Components/Heading";
import Img1 from "../../../assets/AboutPageImg/Future.webp";
import Img2 from "../../../assets/AboutPageImg/Future.webp";
import Img3 from "../../../assets/AboutPageImg/Future.webp";
import BottomLine from "../../../Components/BottomLine";

const  InnovatingData = [
    {
        id:1,
        title:"Our Approach",
        text:"At Vernoxy, collaboration is at the heart of everything we do. We partner with our clients to deeply understand their challenges and ambitions, delivering solutions that are tailored to fit their vision and objectives.",
        img:Img1
    },
    {
        id:2,
        title:"Our Mission",
        text:"At Vernoxy, is to shape a smarter, connected future where technology and collaboration unlock limitless possibilities, empowering businesses and communities to thrive globally.",
        img:Img2
    },
    {
        id:3,
        title:"Our Vision",
        text:"At Vernoxy, is to shape a smarter, connected future where technology and collaboration unlock limitless possibilities, empowering businesses and communities to thrive globally.",
        img:Img3
    }
]

const Future = () => {
  return (
    <section>
      <Heading
        boldText={"Innovating the Future"}
        normalText={"With Vernoxy"}
        className={"container  flex justify-start"}
      ></Heading>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="py-0 p-6 space-y-6 ">
            {InnovatingData.map((item) => (
                <div key={item.id} className="text-left space-y-4">
                    <h2 className="text-3xl font-semibold">{item.title}</h2>
                    <BottomLine className=""/>
                    <p className="text-xl font-semibold">{item.text}</p>
                </div>
            ))}
        </div>
        <div className="py-10 border-2">
            
        </div>
      </div>
    </section>
  );
};

export default Future;
