import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BottomLine from "../../../Components/BottomLine";
import Men from "../../../assets/HomePageImgs/Review/Men.png";
import Women from "../../../assets/HomePageImgs/Review/Women.png";
import BlenkStar from "../../../assets/HomePageImgs/Review/BlenkStar.svg";
import FillStar from "../../../assets/HomePageImgs/Review/FillStar.svg";

const ReviewData = [
  {
    id: 1,
    img: Women,
    name: "John Doe",
    title: "CEO of ABC Company",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
    stars: [FillStar, FillStar, FillStar, FillStar, BlenkStar],
  },
  {
    id: 2,
    img: Men,
    name: "John Doe",
    title: "CEO of ABC Company",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
    stars: [FillStar, FillStar, FillStar, FillStar, FillStar],
  },
  {
    id: 3,
    img: Men,
    name: "John Doe",
    title: "CEO of ABC Company",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
    stars: [FillStar, FillStar, FillStar, FillStar, FillStar],
  },
  {
    id: 4,
    img: Women,
    name: "Jane Doe",
    title: "Manager at XYZ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
    stars: [FillStar, FillStar, FillStar, BlenkStar, BlenkStar],
  },
];

const ReviewCard = ({ item }) => {
  return (
    <div className="flex flex-col items-start space-y-6 border border-primary rounded-xl px-6 py-10 text-start">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-white ">
        <img
          src={item.img}
          alt={`${item.name} photo`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-row gap-2">
        {item.stars.map((star, index) => (
          <img src={star} alt="star" key={index} />
        ))}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold">
        <span className="block">{item.name}</span>
        <span className="block font-normal text-lg">{item.title}</span>
      </h1>
      <p>{item.text}</p>
    </div>
  );
};

const Review = () => {
  return (
    <section>
      <div className="container pr-0 py-10 flex gap-12 items-center">
        {/* Left column */}
        <div className="md:w-4/12 space-y-6 mb-8">
          <div className="flex flex-row items-center gap-2 max-w-sm">
            <p className="text-xl text-start">Our Clients Review</p>
            <BottomLine />
          </div>

          <h1 className="text-start text-5xl">
            <span className="font-bold">What Our </span>Clients Are Saying
          </h1>
          <p className="text-start 2xl:pr-8">
            We build intelligent AI agents that automate tasks, streamline
            workflows, and think like your best employee - only faster.
          </p>
        </div>
        {/* Right column Carousel  */}
        <div className="md:w-8/12 relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2.5}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "custom",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-16"
          >
            {ReviewData.map((item) => (
              <SwiperSlide key={item.id}>
                <ReviewCard item={item} />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Review;
