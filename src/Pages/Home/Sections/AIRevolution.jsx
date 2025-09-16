import React from "react";
import Heading from "../../../Components/Heading";
import PrimaryBtn from "../../../Components/PrimartyBtn";

const AIRevolution = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex flex-col items-start space-y-4">
  <Heading
    boldText={"join the"}
    normalText={"AI Revolution"}
    className="text-start"
  />
  <p className="text-start max-w-lg">
    Step into the AI era. Let’s connect today and explore how our
    solutions can help you harness the true power of AI to drive your
    business forward.
  </p>
  <PrimaryBtn>Learn More</PrimaryBtn>
</div>

      </div>
    </section>
  );
};

export default AIRevolution;
