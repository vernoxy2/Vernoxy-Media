import React from "react";
import Heading from "../../../Components/Heading";
import Img1 from "../../../assets/AboutPageImg/Future.webp";
import Img2 from "../../../assets/AboutPageImg/Future.webp";
import Img3 from "../../../assets/AboutPageImg/Future.webp";
import BottomLine from "../../../Components/BottomLine";
import PrimaryObject from "../../../Components/PrimaryObject";
import src from "../../../assets/Obj2.svg";
import PrimaryBg from "../../../Components/PrimaryBg";

const InnovatingData = [
    {
        id:1,
        title:"Our Approach",
       text:<><span className="text-primary font-black">At Vernoxy</span>, is to shape a smarter, connected future where technology and collaboration unlock limitless possibilities, empowering businesses and communities to thrive globally.</>,
        img:Img1
    },
    {
        id:2,
        title:"Our Mission",
        text:<><span className="text-primary font-black">At Vernoxy</span>, is to shape a smarter, connected future where technology and collaboration unlock limitless possibilities, empowering businesses and communities to thrive globally.</>,
        img:Img2
    },
    {
        id:3,
        title:"Our Vision",
        text:<><span className="text-primary font-black">At Vernoxy</span>, is to shape a smarter, connected future where technology and collaboration unlock limitless possibilities, empowering businesses and communities to thrive globally.</>,
        img:Img3
    }
]

const Future = () => {
  return (
    <section>
      <Heading
        boldText={"Innovating the Future"}
        normalText={"With Vernoxy"}
        className={"container gap-4 flex-row justify-start text-start"}
      ></Heading>
      <div className="container relative -z-0 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="py-0 p-3 md:p-6 space-y-3 md:space-y-6 ">
            {InnovatingData.map((item) => (
                <div key={item.id} className="text-left space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold">{item.title}</h2>
                    <BottomLine className=""/>
                    <p className=" md:text-xl font-semibold md:w-[92%]">{item.text}</p>
                </div>
            ))}
        </div>
        <div className="flex items-center justify-center">
            <img src={Img1} alt=""  className="mx-auto my-auto"/>
        </div>
        <PrimaryObject src={src} className="right-0 -bottom-40 md:-bottom-52 -z-[9999] " />
        <PrimaryBg className="-top-20"/>
      </div>
    </section>
  );
};

export default Future;
