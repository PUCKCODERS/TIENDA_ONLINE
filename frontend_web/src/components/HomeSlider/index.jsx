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
          loop={true}
          spaceBetween={15}
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
                src="https://valminortv.com/wp-content/uploads/2024/09/2024-09-26-maquina-coser-portada.jpg"
                alt="Banner slide"
                className="w-full left-0 top-0 h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden shadow-[9px_8px_6px_#556f8d] ">
              <img
                src="https://media.licdn.com/dms/image/v2/C4E1BAQFyV5_AZdsxNg/company-background_10000/company-background_10000/0/1650380947166/maquitex_industrial_cover?e=2147483647&v=beta&t=WakLijhn-vgfuYsfGNIc_A_yCPEr7OrufZI-1aineyQ"
                alt="Banner slide"
                className="w-full left-0 top-0 h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden shadow-[9px_8px_6px_#556f8d] ">
              <img
                src="https://valminortv.com/wp-content/uploads/2024/09/2024-09-26-maquina-coser-portada.jpg"
                alt="Banner slide"
                className="w-full left-0 top-0 h-[400px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden shadow-[9px_8px_6px_#556f8d] ">
              <img
                src="https://media.licdn.com/dms/image/v2/C4E1BAQFyV5_AZdsxNg/company-background_10000/company-background_10000/0/1650380947166/maquitex_industrial_cover?e=2147483647&v=beta&t=WakLijhn-vgfuYsfGNIc_A_yCPEr7OrufZI-1aineyQ"
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
