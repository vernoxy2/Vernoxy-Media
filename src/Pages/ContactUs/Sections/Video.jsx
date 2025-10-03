import React from "react";
import ContVideo from "../../../assets/ContactPageImg/ContVideo.mp4";
import PrimaryObject from "../../../Components/PrimaryObject";
import src from "../../../assets/Obj3.svg";

const Video = () => {
  return (
    <section className="container mx-auto my-8 relative z-0">
      <div className="h-[400px] bg-slate-50 rounded-3xl overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={ContVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Promotional video"
        />
      </div>
      <PrimaryObject src={src} className="-top-80 -left-20"/>
    </section>
  );
};

export default Video;
