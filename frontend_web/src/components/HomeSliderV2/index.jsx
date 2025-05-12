import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@mui/material/Button";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const HomeBannerV2 = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="homeSliderV2"
    >
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://valminortv.com/wp-content/uploads/2024/09/2024-09-26-maquina-coser-portada.jpg" />

          <div
            className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 text-[#556f8d]
          flex items-center flex-col justify-center transition-all duration-700"
          >
            <h4 className="text-[20px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 text-[#0a7fec]">
              MAQUINAS EN GENERAL
            </h4>
            <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
              MAQUINAS CASERAS Y MAQUINAS INDUSTRIALES
            </h2>

            <h3 className="flex items-center gap-3 text-[20px] font-[500] w-full text-left mt-3 mb-3 text-[#0a7fec] relative -right-[100%] opacity-0">
              MAQUINAS CASERAS
              <span className="text-[#000] text-[35px] font-[700]">$99.00</span>
            </h3>

            <div className="w-full relative -bottom-[100%] opacity-0 btn_">
              <Button className="btn-org !bg-[#0a7fec] !shadow-[4px_4px_2px_#000] border !border-[transparent]">
                COMPRAR AHORA
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="https://valminortv.com/wp-content/uploads/2024/09/2024-09-26-maquina-coser-portada.jpg" />

          <div
            className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 text-[#556f8d]
          flex items-center flex-col justify-center transition-all duration-700"
          >
            <h4 className="text-[20px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 text-[#0a7fec]">
              MAQUINAS EN GENERAL
            </h4>
            <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
              MAQUINAS CASERAS Y MAQUINAS INDUSTRIALES
            </h2>

            <h3 className="flex items-center gap-3 text-[20px] font-[500] w-full text-left mt-3 mb-3 text-[#0a7fec] relative -right-[100%] opacity-0">
              MAQUINAS CASERAS
              <span className="text-[#000] text-[35px] font-[700]">$99.00</span>
            </h3>

            <div className="w-full relative -bottom-[100%] opacity-0 btn_">
              <Button className="btn-org !bg-[#0a7fec] !shadow-[4px_4px_2px_#000] border !border-[transparent]">
                COMPRAR AHORA
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBannerV2;
