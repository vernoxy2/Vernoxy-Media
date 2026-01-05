import React from "react";
import PrimaryBg from "../Components/PrimaryBg";
import Heading from "../Components/Heading";
import BgImg from ".././assets/GlobalPresence/BgImg.png";
import svg1 from ".././assets/GlobalPresence/svg1.svg";
import svg2 from ".././assets/GlobalPresence/svg2.svg";
import svg3 from ".././assets/GlobalPresence/svg3.svg";
import svg4 from ".././assets/GlobalPresence/svg4.svg";
import svg5 from ".././assets/GlobalPresence/svg5.svg";
import svg6 from ".././assets/GlobalPresence/svg6.svg";
import { NavLink, Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const PrimaryPresence = ({ boldText, normalText, description }) => {
  const CountryData = [
    {
      id: 1,
      image: svg1,
      contry: "India",
      Link: "/global-presence/india",
    },
    {
      id: 2,
      image: svg2,
      contry: "Canada",
      // Link:
    },
    {
      id: 3,
      image: svg3,
      contry: (
        <>
          New
          <br />
          Zealand
        </>
      ),
      // Link:
    },
    {
      id: 4,
      image: svg4,
      contry: "USA",
      // Link:
    },
    {
      id: 5,
      image: svg5,
      contry: "UAE",
      // Link:
    },
    {
      id: 6,
      image: svg6,
      contry: "Vietnam",
      // Link:
    },
  ];
  return (
    <section
      className="relative pb-0 bg-no-repeat bg-cover bg-center container "
      style={{
        backgroundImage: `url(${BgImg})`,
      }}
    >
      <div className="space-y-5">
        <Heading
          boldText={boldText}
          normalText={normalText}
          className="font-Bai_Jamjuree text-xl md:text-5xl capitalize text-center "
        />
        {/* Description */}
        <p className="mx-auto w-full leading-relaxed xl:w-[40%]">
          {description}
        </p>
      </div>

      {/* ProductsCard */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-7 ">
        {CountryData.map((country) => (
          <NavLink
            key={country.id}
            className="flex flex-col group relative items-center justify-center text-center gap-2 rounded-xl bg-[#464646]/60 py-12"
          >
            <img src={country.image} alt="image" className="w-16 h-16" />
            <p className="items-center text-3xl font-BaiJamjuree font-bold">
              {country.contry}
            </p>
            <GoArrowRight
              className={`p-2.5 absolute text-4xl top-3 right-3 rounded-full transition-all duration-500 ${
                window.location.pathname === country.Link
                  ? "bg-gradient-to-r from-primary to-white text-[#1168B5] -rotate-45"
                  : "bg-white/20 text-white group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-white group-hover:-rotate-45 group-hover:text-[#1168B5]"
              }`}
            />
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default PrimaryPresence;
