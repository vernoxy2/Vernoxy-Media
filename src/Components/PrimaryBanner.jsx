import React from "react";
import Heading from "./Heading";
import BottomLine from "./BottomLine";
import PrimaryBg from "./PrimaryBg";
import LazyImage from "./LazyImage";

const PrimaryBanner = ({ boldText, normalText, bannerImg, description }) => {
  return (
    <section className="py-10 md:py-16">
      <div className="container space-y-6 md:space-y-10 relative z-30">
        <PrimaryBg className="-top-44 rotate-180"/>
        
        {/* Heading */}
        <Heading
          boldText={boldText}
          normalText={normalText}
          className="text-start"
        />

        {/* Banner Image */}
        <div className="bg-primary/20 rounded-2xl overflow-hidden">
          <LazyImage
            src={bannerImg}
            alt={normalText || "Banner"}
            className="w-full object-cover mx-auto pointer-events-none"
          />
        </div>

        {/* Description */}
        <p className="mx-auto w-full md:w-[88%] leading-relaxed">
          {description}
        </p>

        {/* Bottom Line */}
        <BottomLine className="mx-auto" />
        
      </div>
    </section>
  );
};

export default PrimaryBanner;
