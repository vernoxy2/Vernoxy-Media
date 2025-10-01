import React from "react";
import img from "../../../assets/HomePageImgs/WhoImg.webp";
import Heading from "../../../Components/Heading";
import PrimaryBtn from "../../../Components/PrimartyBtn";
import { Link } from "react-router-dom";

const Who = () => {
  return (
    <section>
      <div className="container mx-auto relative">
        {/* Image */}
        <img src={img} alt="Who We Are" className="w-full" />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full md:bg-black/30"></div>

        {/* Content over the overlay */}
        <div className="md:absolute top-0 left-0 w-full h-full grid grid-cols-1 md:grid-cols-2 md:-mt-10 items-top text-white px-4 md:px-24">
          {/* Left column (empty) */}
          <div></div>

          {/* Right column (content) */}
          <div className="space-y-4 md:space-y-6 text-left">
            <Heading
              boldText="Who"
              normalText="We Are"
              className="text-left flex gap-4"
            />
            <p className="max-w-lg leading-relaxed text-gray-300">
              At Vernoxy Media, we empower brands with data-driven creativity,
              transforming ideas into impactful strategies. Through design,
              analytics, and modern digital tools, we craft customized branding
              and marketing solutions that drive growth, engagement, and lasting
              success.
            </p>
            <div>
              <Link to="/about-us">
                <PrimaryBtn className="flex-none">Learn More</PrimaryBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
