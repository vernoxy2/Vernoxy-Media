import React from "react";
import img from "../../../assets/HomePageImgs/WhoImg.webp";
import Heading from "../../../Components/Heading";
import PrimaryBtn from "../../../Components/PrimartyBtn";

const Who = () => {
  return (
    <section>
      <div className="container mx-auto relative">
        {/* Image */}
        <img src={img} alt="Who We Are" className="w-full" />

        {/* Overlay */}
        <div className="absolute  top-0 left-0 w-full h-full bg-black/0"></div>

        {/* Content over the overlay */}
        <div className="absolute  top-0 left-0 w-full h-full flex flex-col gap-6 items-start justify-top text-white md:px-24 px-4 ml-auto">
          <Heading
            boldText={"Who"}
            normalText={"We Are"}
            className={"text-left"}
          ></Heading>
          <p className="max-w-md text-start">
            At Vernoxy Media, we empower brands with data-driven creativity,
            transforming ideas into impactful strategies. Through design,
            analytics, and modern digital tools, we craft customized branding
            and marketing solutions that drive growth, engagement, and lasting
            success
          </p>
          <PrimaryBtn>Learn More</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Who;
