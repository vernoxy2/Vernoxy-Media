import React from "react";
import { motion } from "framer-motion";
import Heading from "../../../Components/Heading";
import WPro1 from "../../../assets/HomePageImgs/Work/Web/Pun.svg";
import WPro2 from "../../../assets/HomePageImgs/Work/Web/AN.svg";
import WPro3 from "../../../assets/HomePageImgs/Work/Web/KT.svg";
import WPro4 from "../../../assets/HomePageImgs/Work/Web/CS.svg";
import APro1 from "../../../assets/HomePageImgs/Work/App/Jalaram.svg";
import Vid1 from "../../../assets/HomePageImgs/Work/Video/V1.svg";
import Vid2 from "../../../assets/HomePageImgs/Work/Video/V2.svg";
import Vid3 from "../../../assets/HomePageImgs/Work/Video/V3.svg";
import Post1 from "../../../assets/HomePageImgs/Work/Post/AN.svg";
import Post2 from "../../../assets/HomePageImgs/Work/Post/TW.svg";
import Post3 from "../../../assets/HomePageImgs/Work/Post/E.svg";
import Post4 from "../../../assets/HomePageImgs/Work/Post/DB.svg";
import PrimaryBtn from "../../../Components/PrimartyBtn";
import PrimaryBg from "../../../Components/PrimaryBg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const WorkData = [
  {
    id: 1,
    img: [WPro1, WPro2, WPro3, WPro4],
    title: "Innovative Website Solutions",
    text: "Discover our creative website projects designed for innovation, growth, and success.",
    Link: "services/web_development",
  },
  {
    id: 2,
    img: [Post1, Post2, Post3, Post4],
    title: "Lead-Generating Digital Ad Campaign",
    text: "Discover our creative social media projects designed for innovation, growth, and success.",
    Link: "services/web_development",
  },
  {
    id: 3,
    img: [APro1, APro1],
    title: "Mobile App for Retail Automation",
    text: "Discover our creative application projects designed for innovation, growth, and success.",
    Link: "services/web_development",
  },
  {
    id: 4,
    img: [Vid2, Vid3],
    title: "Custom CRM for Streamlined Sales Flow",
    text: "Discover our creative video projects designed for innovation, growth, and success.",
    Link: "services/video_editing",
  },
];

const Work = () => {
  return (
    <section>
      <div className="container">
        <Heading
          boldText={"Our Work"}
          normalText={"in Action"}
          className="text-center flex justify-start w-full gap-4"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10">
          {WorkData.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = React.memo(({ item }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    item.img.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [item.img]);

  React.useEffect(() => {
    if (item.img.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % item.img.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [item.img.length]);

  return (
    <div className="relative z-0 overflow-hidden rounded-xl shadow-lg group">
      <PrimaryBg className="-top-28 -pr-40" />
      <div className="relative z-0 w-full bg-[#A4A7AC] h-80 md:h-96">
        {item.img.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={item.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
        ))}

        {/* Overlay Responsive Layout */}
        <div className=" text-start absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col lg:flex-row items-start lg:items-end justify-end lg:justify-between p-5 text-white font-Bai_Jamjuree gap-y-4">
        {/* sides */}
          <div className=" flex flex-col xl:flex-row gap-y-4">
            {/* LEFT SIDE — Title + Text */}
            <div className="w-fit gap-2">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">
                {item.title}
              </h2>

              <p className="text-sm md:text-base lg:text-lg mt-1 opacity-90">
                {item.text}
              </p>
            </div>

            {/* RIGHT SIDE — Button (moves bottom on mobile) */}
            <div className=" flex items-end xl:justify-end">
              <Link to={item.Link}>
                <PrimaryBtn className="items-center gap-2 flex ">
                  Learn More
                  <FaArrowRight className="" />
                </PrimaryBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Work;
