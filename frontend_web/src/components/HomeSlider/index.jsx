import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          spaceBetween={20}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden shadow-[9px_8px_6px_#556f8d] ">
              <img
                src="/src/images/slider/slider1.png"
                alt="Banner slide"
                className="w-full left-0 top-0 h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden shadow-[9px_8px_6px_#556f8d]">
              <img
                src="/src/images/logo.jpg"
                alt="Banner slide"
                className="w-full left-0 top-0 h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden shadow-[9px_8px_6px_#556f8d]">
              <img
                src="/src/images/slider/slider1.png"
                alt="Banner slide"
                className="w-full left-0 top-0 h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden shadow-[9px_8px_6px_#556f8d]">
              <img
                src="/src/images/logo.jpg"
                alt="Banner slide"
                className="w-full left-0 top-0 h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden shadow-[9px_8px_6px_#556f8d]">
              <img
                src="/src/images/slider/slider1.png"
                alt="Banner slide"
                className="w-full left-0 top-0 h-[400px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden shadow-[9px_8px_6px_#556f8d]">
              <img
                src="/src/images/logo.jpg"
                alt="Banner slide"
                className="w-full left-0 top-0 h-[400px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
