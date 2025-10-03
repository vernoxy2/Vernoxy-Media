import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import PrimaryBtn from "../PrimartyBtn";
import questions from "../../assets/ServicePageImg/questions.svg";
import PrimaryBg from "../PrimaryBg";

const Category = [
  {
    id: 1,
    name: "Digital Marketing & Branding",
    link: "/services/digital_marketing",
  },
  {
    id: 2,
    name: "Website Design & Development",
    link: "/services/web_development",
  },
  {
    id: 3,
    name: "Application Development",
    link: "/services/graphics_design",
  },
  {
    id: 4,
    name: "Customise CRM System",
    link: "/services/video_editing",
  },
];

const RightSec = () => {
  return (
    <div className="relative z-10 ">
      {/* Services Category with Links */}
      <div className="my-20 rounded-3xl bg-[#464646]/30 backdrop-blur-md text-start">
        <div className="px-10 py-8">
          <h1 className="text-3xl font-bold font-Bai_Jamjuree">
            Services Category
          </h1>
        </div>
        <hr className="border border-[#464646]" />
        <div className="px-10 py-7 pb-14">
          <div>
            {Category.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b py-3 md:py-6 md:text-xl group last:border-0 ${
                    isActive
                      ? "text-primary border-primary"
                      : "text-white border-[#464646] hover:border-primary hover:text-primary duration-500"
                  }`
                }
              >
                <span>{item.name}</span>
                <GoArrowRight
                  className={`p-2.5 text-5xl mr-3 rounded-full transition-all duration-500 ${
                    window.location.pathname === item.link
                      ? "bg-gradient-to-r from-primary to-white text-[#1168B5] -rotate-45"
                      : "bg-white/20 text-white group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-white group-hover:-rotate-45 group-hover:text-[#1168B5]"
                  }`}
                />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      {/* Call for qustions */}
      <div className="rounded-3xl bg-[#464646]/30 backdrop-blur-md p-10 md:p-20 text-center flex flex-col items-center justify-center space-y-8">
        <img src={questions} alt="questions" className="w-1/3 mx-auto" />
        <h1 className="text-2xl lg:text-3xl font-Bai_Jamjuree font-black text-primary">
          You have a different question?
        </h1>
        <p className="font-Bai_Jamjuree">
          Our team will answer all your questions. We ensure a quick response.
        </p>
        <a href="tel:+919624150967">
          <PrimaryBtn>+91 96241 50967</PrimaryBtn>
        </a>
      </div>
      <PrimaryBg className="top-1/3 right-40 w-full" />
    </div>
  );
};

export default RightSec;
