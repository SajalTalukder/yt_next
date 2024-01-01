import React from "react";
import HotelCard from "./Helper/HotelCard";

const Hotels = () => {
  return (
    <div className="pt-[5rem] bg-gray-200 pb-[4rem]">
      <h1 className="heading">Best Hotel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]">
        <div data-aos="fade-left">
          <HotelCard
            name="hotel nextjs"
            city="rajshahi"
            price="$123"
            reviewsNum="12"
            image="/images/h1.png"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <HotelCard
            name="hotel typescript"
            city="Dhaka"
            price="$173"
            reviewsNum="32"
            image="/images/h2.png"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="600">
          <HotelCard
            name="hotel reactive"
            city="Japan"
            price="$323"
            reviewsNum="22"
            image="/images/h3.png"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="900">
          <HotelCard
            name="hotel mongodb"
            city="England"
            price="$123"
            reviewsNum="112"
            image="/images/h4.png"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="1200">
          <HotelCard
            name="hotel tailwind"
            city="Thailand"
            price="$423"
            reviewsNum="912"
            image="/images/h5.png"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="1600">
          <HotelCard
            name="hotel Mern stack"
            city="Mern"
            price="$823"
            reviewsNum="712"
            image="/images/h7.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hotels;
