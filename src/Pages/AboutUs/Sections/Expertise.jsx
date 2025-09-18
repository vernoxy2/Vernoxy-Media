import React from "react";
import Heading from "../../../Components/Heading";
import VR_Man from "../../../assets/AboutPageImg/VR_man.webp";
import bg from "../../../assets/BlurBG.svg";

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
      <div className="container relative z-10">
        <Heading
          boldText={
            <>
              Over 15+ Clients Trust <br />
              <span className="font-normal">Our Expertise</span>
            </>
          }
          className="text-center flex justify-center"
        />
        <img src={VR_Man} alt="VR Man" className="mx-auto -mb-28" />
        <div className="bg-gradient-to-b from-primary/20 hover:from-primary/40  to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white rounded-lg py-12 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 font-Bai_Jamjuree">
          {data.map((item) => (
            <div key={item.id} className="text-center">
              <h2 className="text-6xl font-bold">{item.Count}</h2>
              <p className="text-3xl font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Background Image */}
      <img
        src={bg}
        alt="Background Blur"
        className="absolute top-32 left-1/2 transform -translate-x-1/2 scale-150 z-0"
      />
    </section>
  );
};

export default Expertise;
