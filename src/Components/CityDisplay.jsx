import React from "react";

const CityDisplay = ({ cityName, cityImage }) => {
  return (
    <section className="container text-start">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div>
          <img src={cityImage} alt="" className="h-full" />
        </div>
        <div className="space-y-5">
          <h1 className="font-Bai_Jamjuree text-xl md:text-5xl  font-semibold text-start w-full ">
            ERP Software <br /> Compnay in{" "}
            <span className="text-primary font-bold uppercase">{cityName}</span>{" "}
          </h1>
          <p>
            Industry-specific ERP software solution for {cityName} businesses.
            Do you wonder if such a feature-rich ERP manufacturer and Small
            Business is scarce to find? Not all manufacturers in India can have
            it, or it must be very expensive to buy. What are you thinking? If
            yes, then knock out all your worries. The reason is that we, at
            DataNote ERP, have developed the smartest ERP software for all kinds
            of businesses in {cityName}, Gujarat. If your business is primarily
            situated in India or a small business in any State of India, our
            cloud-based ERP software provides you with all kinds of features and
            benefits for your business.
          </p>
        </div>
      </div>
      <div className="space-y-5">
        <p className=" font-Bai_Jamjuree text-xl md:text-3xl  font-semibold text-start w-full ">
          Best <span className="text-primary/80">ERP Software</span> for
          Manufacturing Companies in{" "}
          <span className="text-primary font-bold uppercase">{cityName}</span>
        </p>
        <p>
          Industry-specific ERP software solution for {cityName} businesses. Do
          you wonder if such a feature-rich ERP manufacturer and Small Business
          is scarce to find? Not all manufacturers in India can have it, or it
          must be very expensive to buy. What are you thinking? If yes, then
          knock out all your worries. The reason is that we, at DataNote ERP,
          have developed the smartest ERP software for all kinds of businesses
          in {cityName}, Gujarat. If your business is primarily situated in
          India or a small business in any State of India, our cloud-based ERP
          software provides you with all kinds of features and benefits for your
          business.
        </p>
        <p>
          Industry-specific ERP software solution for {cityName} businesses. Do
          you wonder if such a feature-rich ERP manufacturer and Small Business
          is scarce to find? Not all manufacturers in India can have it, or it
          must be very expensive to buy. What are you thinking? If yes, then
          knock out all your worries. The reason is that we, at DataNote ERP,
          have developed the smartest ERP software for all kinds of businesses
          in {cityName}, Gujarat. If your business is primarily situated in
          India or a small business in any State of India, our cloud-based ERP
          software provides you with all kinds of features and benefits for your
          business.
        </p>
        <p>
          Industry-specific ERP software solution for {cityName} businesses. Do
          you wonder if such a feature-rich ERP manufacturer and Small Business
          is scarce to find? Not all manufacturers in India can have it, or it
          must be very expensive to buy. What are you thinking? If yes, then
          knock out all your worries. The reason is that we, at DataNote ERP,
          have developed the smartest ERP software for all kinds of businesses
          in {cityName}, Gujarat. .
        </p>
      </div>
    </section>
  );
};

export default CityDisplay;
