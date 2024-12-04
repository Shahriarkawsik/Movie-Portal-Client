import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BannerItems, responsive } from "./bannerItems";
import { Link } from "react-router-dom";
const Banner = () => {
  const bannerItems = BannerItems();
  return (
    <div>
      <Carousel autoPlay autoPlaySpeed={3000} infinite responsive={responsive}>
        {bannerItems.map((bannerItem, id) => (
          <div
            key={id}
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{
              backgroundImage: `url(${bannerItem?.image})`,
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            className="w-full h-[300px] lg:h-[730px] flex flex-col gap-2 lg:gap-5 justify-center items-center "
          >
            <h2
              // data-aos="fade-up"
              // data-aos-duration="1000"
              className="z-20 text-xl sm:text-4xl lg:text-6xl leading-10 font-extrabold sm:font-normal hover:text-color3 text-white py-2 sm:py-5  lg:py-7 rounded-lg Nothing"
            >
              {bannerItem?.adventureTitle}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="z-20 text-xl sm:text-2xl text-center font-bold text-white hover:text-color3 backdrop-blur-sm  p-3 rounded-lg Rubik"
            >
              {bannerItem?.shortDescription}
            </p>

            <button
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="btn backdrop-blur-sm px-8 text-white hover:text-color3 bg-teal-400 border-none Rubik"
            >
              Explore Now
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
