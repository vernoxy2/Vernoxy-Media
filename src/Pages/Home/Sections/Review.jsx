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
    text: "Working with this team transformed our business their precision and dedication went beyond our expectations.",
    stars: [FillStar, FillStar, FillStar, FillStar, BlenkStar],
  },
  {
    id: 2,
    img: Men,
    name: "John Doe",
    title: "CEO of ABC Company",
    text: "Expert execution, exceeded all expectations brilliantly.",
    stars: [FillStar, FillStar, FillStar, FillStar, FillStar],
  },
  {
    id: 3,
    img: Men,
    name: "John Doe",
    title: "CEO of ABC Company",
    text: "Expert execution, exceeded all expectations brilliantly.",
    stars: [FillStar, FillStar, FillStar, FillStar, FillStar],
  },
  {
    id: 4,
    img: Women,
    name: "Jane Doe",
    title: "Manager at XYZ",
    text: "Working with this team transformed our business their precision and dedication went beyond our expectations.",
    stars: [FillStar, FillStar, FillStar, BlenkStar, BlenkStar],
  },
];

const ReviewCard = ({ item }) => {
  return (
    <div className="flex h-full flex-col items-start space-y-6 border border-primary hover:bg-primary/10 rounded-xl px-6 py-10 text-start ">
      <div className="w-10 h-10 md:w-24 md:h-24 rounded-full overflow-hidden bg-white ">
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
      <div className="container pr-0 py-10 lg:flex gap-12 items-center">
        {/* Left column */}
        <div className=" md:w-9/12 lg:w-4/12 w-full space-y-6 mb-8">
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
        <div className="lg:w-8/12 w-full h-full relative ">
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
            className="  flex flex-col h-full"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile: 1 card
              640: { slidesPerView: 2, spaceBetween: 15 }, // Tablet: 2 cards
              1280: { slidesPerView: 2.5, spaceBetween: 20 }, // Desktop: 2.5 cards (2 full, 3rd half)
            }}
          >
            {ReviewData.map((item) => (
              <SwiperSlide key={item.id} className="h-full ">
                <ReviewCard item={item} className="h-full " />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Review;
