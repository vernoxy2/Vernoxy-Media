import React from "react";
import Heading from "../../../Components/Heading";
import PrimaryBtn from "../../../Components/PrimartyBtn";
import AvatarsImg from "../../../assets/HomePageImgs/Avatars.png";

const avatars = [
  { id: 1, src: AvatarsImg, alt: "Customer 1" },
  { id: 2, src: AvatarsImg, alt: "Customer 2" },
  { id: 3, src: AvatarsImg, alt: "Customer 3" },
  { id: 4, src: AvatarsImg, alt: "Customer 3" },
];

const AIRevolution = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-7">
        {/* Left column */}
        <div className="flex flex-col items-start space-y-4">
          <Heading
            boldText={"join the"}
            normalText={"AI Revolution"}
            className="text-start"
          />
          <p className="text-start max-w-xl">
            Step into the AI era. Let’s connect today and explore how our
            solutions can help you harness the true power of AI to drive your
            business forward.
          </p>
          <PrimaryBtn>Learn More</PrimaryBtn>
        </div>

        {/* Right column */}
        <div className="text-right space-y-4">
          {/* Avatars */}
          <div className="flex justify-end -space-x-6">
            {avatars.map((avatar) => (
              <img
                key={avatar.id}
                className="w-16 h-16 rounded-full border-2 border-black"
                src={avatar.src}
                alt={avatar.alt}
              />
            ))}
            <span className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-600 text-white text-sm border-2 border-black">
              +99
            </span>
          </div>

          {/* Stats */}
          <div className="text-right uppercase">
            <p className="text-3xl">3.5k+</p>
            <p>Happy Customers and counting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRevolution;
