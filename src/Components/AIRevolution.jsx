import React from "react";
import Heading from "./Heading";
import PrimaryBtn from "./PrimartyBtn";
import AvatarsImg1 from "../assets/HomePageImgs/Avatar1.svg";
import AvatarsImg2 from "../assets/HomePageImgs/Avatar2.svg";
import AvatarsImg3 from "../assets/HomePageImgs/Avatar3.svg";
import AvatarsImg4 from "../assets/HomePageImgs/Avatar5.svg";
import AvatarsImg5 from "../assets/HomePageImgs/Avatar5.svg";
import Earth from "../assets/HomePageImgs/Earth.svg";
import Right from "../assets/HomePageImgs/Right.svg";
import Left from "../assets/HomePageImgs/Left.svg";
import PrimaryBg from "./PrimaryBg";
import Ttusted_Globally from "../assets/HomePageImgs/Ttusted_Globally.png";
import { Link } from "react-router-dom";

const avatars = [
  { id: 1, src: AvatarsImg1, alt: "Customer 1" },
  { id: 2, src: AvatarsImg2, alt: "Customer 2" },
  { id: 3, src: AvatarsImg3, alt: "Customer 3" },
  { id: 4, src: AvatarsImg4, alt: "Customer 3" },
];

const AIRevolution = () => {
  return (
    <section className="-space-y-3 md:-space-y-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-7 relative z-20">
        {/* Left column */}
        <div className="flex flex-col items-start space-y-4 ">
          <Heading
            boldText={"Empower Your "}
            normalText={"Digital Future"}
            className="text-start"
          />
          <p className="text-start max-w-xl">
            Unlock the full potential of your business with cutting-edge Website design, Custom Applications, Digital marketing, and CRM solutions tailored to your growth.
          </p>
          <div>
            <Link to="/contact-us">
              <PrimaryBtn className="flex-none">Get a Consultation</PrimaryBtn>
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div className="md:text-right space-y-4">
          {/* Avatars */}
          <div className="flex md:justify-end -space-x-6">
            {avatars.map((avatar) => (
              <img
                key={avatar.id}
                className="w-14 h-14 rounded-full border-2 border-black pointer-events-none"
                src={avatar.src}
                alt={avatar.alt}
              />
            ))}
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-600 text-white text-sm border-2 border-black">
              +99
            </span>
          </div>

          {/* Stats */}
          <div className="text-start md:text-right uppercase font-Bai_Jamjuree">
            <p className="text-3xl">3.5k </p>
            <p>Happy Customers and counting</p>
          </div>
        </div>
      </div>
      {/* Orbit */}
      <div className="relative container z-10 pointer-events-none">
        {/* Earth Image */}
        <img src={Earth} alt="Earth" className="mx-auto pointer-events-none" />

        {/* Orbit Images */}
        <div className="mx-auto absolute top-20 md:top-16 right-1/2 translate-x-1/2 pointer-events-none w-[85%] md:w-[70%] lg:w-auto">
          <img src={Right} alt="Right Orbit" className="animate-Efloat" />
          <img
            src={Left}
            alt="Left Orbit"
            className="absolute top-0 animate-Efloat pointer-events-none"
          />
        </div>

        {/* Primary Background */}
        <PrimaryBg className="-top-16 pointer-events-none" />

        {/* Trusted Globally (centered in background) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none -z-10 container px-0 overflow-hidden  ">
          <div className="flex gap-x-24 animate-marquee justify-center">
            <img src={Ttusted_Globally} alt="Trusted Globally pointer-events-none" />
            <img src={Ttusted_Globally} alt="Trusted Globally pointer-events-none" />
            <img src={Ttusted_Globally} alt="Trusted Globally pointer-events-none" />
            <img src={Ttusted_Globally} alt="Trusted Globally pointer-events-none" />
            <img src={Ttusted_Globally} alt="Trusted Globally pointer-events-none" />
            <img src={Ttusted_Globally} alt="Trusted Globally pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRevolution;
