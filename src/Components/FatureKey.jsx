import React from "react";
import Heading from "./Heading";
import Keybanner from "../assets/ServicePageImg/FatureKey/Key1.webp"

const FatureKey = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
            <Heading
              boldText={"Fature Key"}
              normalText={"Features"}
              className={"text-center lg:text-start flex justify-center lg:justify-start"}
            ></Heading>
        </div>
        <div className="mx-auto">
          <img src={Keybanner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FatureKey;
