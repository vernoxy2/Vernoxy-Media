import React from "react";
import BottomLine from "../../../Components/BottomLine";
import { MdAddCall, MdEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../../Components/PrimartyBtn";
import LeftBottom from "../../../assets/ContactPageImg/LeftBottom.svg";
import RightTop from "../../../assets/ContactPageImg/RightTop.svg";
import RightBottom from "../../../assets/ContactPageImg//RightBottom.svg";
import LeftTop from "../../../assets/ContactPageImg/LeftTop.svg";
import PrimaryBg from "../../../Components/PrimaryBg";

const Soical = [
  {
    id: 1,
    icon: <FaFacebookF />,
    Link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: <RiTwitterXFill />,
    Link: "https://twitter.com/",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    Link: "https://www.whatsapp.com/",
  },
  {
    id: 4,
    icon: <TiSocialInstagram />,
    Link: "https://www.instagram.com/",
  },
  {
    id: 5,
    icon: <FaLinkedinIn />,
    Link: "https://www.linkedin.com/",
  },
];

const Form = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-12 relative z-0">
        <PrimaryBg className="pr-[40rem] -top-52"/>
        <PrimaryBg className="-left-52 -bottom-48"/>
        {/* Contact Details */}
        <div className="text-start md:w-[86%] lg:w-[75%] space-y-6">
          <p>
            Have questions or want to elevate your brand’s digital presence? Our
            team at [Vernoxy Media] is here to help. Whether it’s creative
            design, strategic marketing, or innovative digital solutions, we’re
            ready to listen and craft a plan tailored to your goals.
          </p>
          <BottomLine />
          {/* icons and text */}
          <div className=" py-5 space-y-6">
            {/* Call */}
            <div className=" flex gap-4  items-center">
              {/* Icon */}
              <div className="">
                <MdAddCall className="border-2 border-primary rounded-full p-4 text-7xl" />
              </div>
              {/* text */}
              <div>
                <p>GIVE US A CALL</p>
                <h1 className="text-2xl md:text-3xl font-Bai_Jamjuree font-extrabold">
                  + 91 96241 50967
                </h1>
              </div>
            </div>
            {/* Email */}
            <div className=" flex gap-4  items-center">
              {/* Icon */}
              <div className="">
                <MdEmail className="border-2 border-primary rounded-full p-4 text-7xl" />
              </div>
              {/* text */}
              <div>
                <p>SEND US A MESSAGE</p>
                <h1 className="text-2xl md:text-3xl font-Bai_Jamjuree font-extrabold">
                  vernoxy2@gmail.com
                </h1>
              </div>
            </div>
          </div>
          {/* Soical Network */}
          <div>
            <p className="font-bold mb-3">SOCIAL NETWORK</p>
            <div className="flex gap-6">
              {Soical.map((item) => (
                <Link
                  to={item.Link}
                  key={item.id}
                  className="text-3xl text-primary hover:text-white duration-300  text-start transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="p-6 md:p-12 relative ">
          <img
            src={LeftTop}
            alt=""
            className="absolute left-0 top-0 object-contain"
          />
          <img
            src={LeftBottom}
            alt=""
            className="absolute left-0 bottom-0 object-contain"
          />
          <img
            src={RightTop}
            alt=""
            className="absolute right-0 top-0 object-contain"
          />
          <img
            src={RightBottom}
            alt=""
            className="absolute right-0 bottom-0 object-contain"
          />
          <div className="h-full bg-[#464646]/50 p-5 md:p-10 rounded-sm relative backdrop-blur-md">
            <p className="absolute -top-5 left-1/2 -translate-x-1/2 font-Bai_Jamjuree text-2xl md:text-3xl">
              Contact Form
            </p>
            <form action="submit" className="flex flex-col gap-5 pt-5">
              <input
                type="text"
                placeholder="Name"
                className="input-style"
              ></input>
              <input
                type="email"
                placeholder="Email"
                className="input-style"
              ></input>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
                className="input-style"
              ></textarea>
              <PrimaryBtn>Send Message</PrimaryBtn>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
