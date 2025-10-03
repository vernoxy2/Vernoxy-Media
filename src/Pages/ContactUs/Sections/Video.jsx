import React from "react";
import ContVideo from "../../../assets/ContactPageImg/ContVideo.mp4";
import PrimaryObject from "../../../Components/PrimaryObject";

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
    </section>
  );
};

export default Video;
