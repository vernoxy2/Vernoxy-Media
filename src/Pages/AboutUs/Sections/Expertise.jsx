import React, { useEffect, useState, useRef } from "react";
import Heading from "../../../Components/Heading";
import VR_Man from "../../../assets/AboutPageImg/VR_man.webp";
import PrimaryBg from "../../../Components/PrimaryBg";
import Globally_Preferred from "../../../assets/AboutPageImg/Globally_Preferred.png";
import PrimaryObject from "../../../Components/PrimaryObject";
import src from "../../../assets/Obj2.svg";
import src1 from "../../../assets/Obj1.svg";

const data = [
  { id: 1, Count: 20, suffix: "+", text: "Industries Served Globally" },
  { id: 2, Count: 5, suffix: "+", text: "Years Serving Global Markets" },
  { id: 3, Count: 95, suffix: "%", text: "Client Retention" },
];

const Expertise = () => {
  const [counts, setCounts] = useState(data.map(() => 0));
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const duration = 2000; // animation duration in milliseconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // stop observing after first trigger
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animate) return;

    const start = performance.now();

    const animateCounts = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1); // 0 to 1

      setCounts(
        data.map((item) => Math.floor(item.Count * progress))
      );

      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      }
    };

    requestAnimationFrame(animateCounts);
  }, [animate]);

  return (
    <section ref={sectionRef} className="relative ">
        <PrimaryBg className="bottom-20 z-0" />
      <div className="container relative z-0">
        <Heading
          boldText={
            <>
              Over 100+ Clients Trust <br />
              <span className="font-normal">Our Expertise</span>
            </>
          }
          className="text-center flex justify-center"
        />
        <div className="w-full overflow-hidden pointer-events-none pt-9 absolute">
          <div className="flex gap-x-24 w-full animate-marquee">
            <img src={Globally_Preferred} alt="Globally Preferred" />
            <img src={Globally_Preferred} alt="Globally Preferred" />
            <img src={Globally_Preferred} alt="Globally Preferred" />
          </div>
        </div>

        <img
          src={VR_Man}
          alt="VR Man"
          className="mx-auto h-full -mb-20 z-10 relative animate-float pointer-events-none"
        />

        <div className="bg-gradient-to-b from-primary/30 to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 transform text-white rounded-lg py-12 container grid grid-cols-1 md:grid-cols-3 gap-7 font-Bai_Jamjuree backdrop-blur-sm bg-white/10">
          {data.map((item, index) => (
            <div key={item.id} className="text-center">
              <h2 className="text-5xl lg:text-6xl font-bold">
                {counts[index]}
                {item.suffix}
              </h2>
              <p className="text-2xl lg:text-3xl font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
        {/* <PrimaryObject src={src} className="bottom-24 -left-32 lg:left-0 " /> */}
        <PrimaryObject src={src1} className="-top-12 right-0 z-[-1]" />
      </div>
    </section>
  );
};

export default Expertise;
