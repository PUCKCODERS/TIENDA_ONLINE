import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBoxV2 from "../bannerBoxV2";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full ">
      <Swiper
        loop={true}
        slidesPerView={props.items}
        spaceBetween={12}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide className="mb-3 rounded-md">
          <BannerBoxV2
            info="left"
            image={
              "https://www.superprof.mx/blog/wp-content/uploads/2018/01/maquina-coser.jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide className="mb-3 rounded-md">
          <BannerBoxV2
            info="left"
            image={
              "https://www.superprof.mx/blog/wp-content/uploads/2018/01/maquina-coser.jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide className="mb-3 rounded-md">
          <BannerBoxV2
            info="left"
            image={
              "https://www.superprof.mx/blog/wp-content/uploads/2018/01/maquina-coser.jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide className="mb-3 rounded-md">
          <BannerBoxV2
            info="left"
            image={
              "https://www.superprof.mx/blog/wp-content/uploads/2018/01/maquina-coser.jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide className="mb-3 rounded-md">
          <BannerBoxV2
            info="left"
            image={
              "https://www.superprof.mx/blog/wp-content/uploads/2018/01/maquina-coser.jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide className="mb-3 rounded-md">
          <BannerBoxV2
            info="left"
            image={
              "https://www.superprof.mx/blog/wp-content/uploads/2018/01/maquina-coser.jpg"
            }
            link={"/"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
