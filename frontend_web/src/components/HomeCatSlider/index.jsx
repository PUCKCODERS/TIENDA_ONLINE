import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  MAQUINA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  MAQUINA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  MAQUINA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  MAQUINA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  MAQUINA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  MAQUINA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  MAQUINA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col mb-4">
                <img
                  src="https://www.brother.com.mx/-/media/brother/product-catalog-media/images/2023/06/06/09/21/bx3000.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  MAQUINA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
