import React from "react";
import PrimaryHead from "../../../Components/PrimaryHead";
import AIRevolution from "../../../Components/AIRevolution";
import PrimaryBanner from "../../../Components/PrimaryBanner";
import bannerImg from "../../../assets/ServicePageImg/BannerImg/DM.webp"
import FatureKey from "../../../Components/FatureKey";

const DigitalMarketing = () => {
  return (
    <section>
      <PrimaryHead
        title={"Service"}
        subtitle={"Dedital marketing & Branding"}
      />
      <PrimaryBanner boldText={"Driving Growth Through"} normalText={"Data-Driven Marketing Solutions"} bannerImg={bannerImg} description={"Our digital marketing services are designed to elevate your brand and reach your target audience effectively. We develop customized strategies that include SEO, PPC advertising, social media marketing, content marketing, and email campaigns. By leveraging data-driven insights and the latest trends, we maximize engagement, drive traffic, and boost conversions, ensuring a measurable return on your investment. Let us help you grow your digital presence and achieve your business goals."} />
      <FatureKey />
      <AIRevolution />
    </section>
  );
};

export default DigitalMarketing;
