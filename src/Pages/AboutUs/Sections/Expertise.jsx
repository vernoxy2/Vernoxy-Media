import React from "react";
import Heading from "../../../Components/Heading";
import VR_Man from "../../../assets/AboutPageImg/VR_man.webp";
import PrimaryBg from "../../../Components/PrimaryBg";
import Globally_Preferred from "../../../assets/AboutPageImg/Globally_Preferred.png";

const data = [
  {
    id: 1,
    Count: "15+",
    text: "Industries Served Globally",
  },
  {
    id: 2,
    Count: "100tb",
    text: "Data Processed Daily",
  },
  {
    id: 3,
    Count: "300+",
    text: "Average ROI for Our Clients",
  },
];

const Expertise = () => {
  return (
    <section className="relative">
      <div className="container relative z-0">
        <Heading
          boldText={
            <>
              Over 15+ Clients Trust <br />
              <span className="font-normal">Our Expertise</span>
            </>
          }
          className="text-center flex justify-center"
        />
        <div className=" w-full overflow-hidden pointer-events-none pt-9 absolute">
          <div className="flex gap-x-24 animate-marquee">
            <img
              src={Globally_Preferred}
              alt="Globally Preferred"
              className=""
            />
            <img
              src={Globally_Preferred}
              alt="Globally Preferred"
              className=""
            />
            <img
              src={Globally_Preferred}
              alt="Globally Preferred"
              className=""
            />
          </div>
        </div>

        <img
          src={VR_Man}
          alt="VR Man"
          className="mx-auto h-full -mb-20 z-20 relative animate-float pointer-events-none"
        />

        <div className=" bg-gradient-to-b from-primary/30 to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white rounded-lg py-12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 font-Bai_Jamjuree backdrop-blur-sm bg-white/10">
          {data.map((item) => (
            <div key={item.id} className="text-center">
              <h2 className="text-6xl font-bold">{item.Count}</h2>
              <p className="text-3xl font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
        <PrimaryBg className="bottom-20 " />
      </div>
      <PrimaryBg className="top-20" />
      {/* Background Image */}
      {/* <img
        src={bg}
        alt="Background Blur"
        className="absolute top-28 left-1/2 transform -translate-x-1/2  z-0"
      /> */}
    </section>
  );
};

export default Expertise;
