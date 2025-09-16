import React from "react";
import BottomLine from "../../../Components/BottomLine";

const Review = () => {
  return (
    <section>
      <div className="md:flex gap-2 space-y-6 container">
        <div className="md:w-5/12 py-10 space-y-6">
          <div className="">
            <p className="text-xl text-start">Our Clients Review</p>
            {/* <BottomLine /> */}
          </div>
          <h1 className="text-start text-5xl"><span className="font-bold">What Our </span>Clients Are Saying</h1>
          <p className="text-start 2xl:pe-8">We build intelligent Al agents that automate tasks, streamline workflows, and think like your best employee - only faster.</p>
        </div>
        <div className="w-full border py-10"></div>
      </div>
    </section>
  );
};

export default Review;
