import React, { useState, useEffect } from "react";
import Heading from "../../../Components/Heading";
import PrimaryBtn from "../../../Components/PrimartyBtn";
import { Link } from "react-router-dom";

// Slider images
import img1 from "../../../assets/HomePageImgs/WhoImg.webp";
import img2 from "../../../assets/HomePageImgs/WhoImg2.webp";
import img3 from "../../../assets/HomePageImgs/WhoImg3.webp";

const images = [img1, img2, img3]; // add more if needed

const Who = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="container mx-auto relative overflow-hidden rounded-2xl">
        {/* Image Slider */}
        <div className="w-full h-[500px] relative">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Who We Are"
              className={`absolute top-0 left-0  h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Content */}
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-1 md:grid-cols-2 items-center text-white ">
          {/* Left column (empty for spacing) */}
          <div></div>

          {/* Right column */}
          <div className="space-y-4 md:space-y-5 text-left mb-auto">
            <Heading
              boldText="Who"
              normalText="We Are"
              className="text-left flex gap-4"
            />
            <p className="max-w-xl leading-tight text-gray-300">
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
