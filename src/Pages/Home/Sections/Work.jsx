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

const WorkData = [
  {
    id: 1,
    img: [WPro1, WPro2, WPro3, WPro4],
    title: "Our Website Projects",
    text: "Discover our creative website projects designed for innovation, growth, and success.",
    Link: "services/web_development",
  },
  {
    id: 2,
    img: [Post1, Post2, Post3, Post4],
    title: "Social Media Post Projects",
    text: "Discover our creative social media projects designed for innovation, growth, and success.",
    Link: "services/web_development",
  },
  {
    id: 3,
    img: [APro1, APro1],
    title: "Our Application Projects",
    text: "Discover our creative application projects designed for innovation, growth, and success.",
    Link: "services/web_development",
  },
  {
    id: 4,
    img: [Vid1, Vid2, Vid3],
    title: "Our Video Projects",
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
          className="text-center flex justify-start"
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

  // Preload images
  React.useEffect(() => {
    item.img.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [item.img]);

  // Loop images every 3 seconds
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

      {/* Image Container */}
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

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black flex flex-row items-end justify-between p-6 text-white text-start font-Bai_Jamjuree group ">
          <div className="max-w-md ">
            <h2 className="text-3xl font-bold transform transition-all duration-500 group-hover:-translate-y-4">
              {item.title}
            </h2>
            <p className="text-xl mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
              {item.text}
            </p>
          </div>

          <div className="mt-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
            <Link to={item.Link}>
              {" "}
              <PrimaryBtn>Learn More</PrimaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Work;
