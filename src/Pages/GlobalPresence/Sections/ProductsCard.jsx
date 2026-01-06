import React from "react";
import PrimaryHero from "../../../Components/PrimaryHead";
import PrimaryPresence from "../../../Components/PrimaryPresence";

const ProductsCard = () => {
  return (
      <div className="">
        <PrimaryHero title={"Global"} subtitle={"Presence"} />
        <PrimaryPresence
          boldText={"Our Global"} normalText={"Presence"}
          description={
            "Delivering trusted services across multiple countries with consistent global standards."
          }
        />
        
      </div>
  
  );
};

export default ProductsCard;
