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
          className="sliderHome"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col !border-1 !border-[#b1cdee] mb-4">
                <img
                  src="https://polipapel.vteximg.com.br/arquivos/ids/174453-1000-1000/O76237.png?v=638191796905070000"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  CASERA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col !border-1 !border-[#b1cdee] mb-4">
                <img
                  src="https://sivencasinger.com.ve/wp-content/uploads/sin-titulo-2.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  INDUSTRIAL
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col !border-1 !border-[#b1cdee] mb-4">
                <img
                  src="https://singermultimaquinas.com/wp-content/uploads/2024/02/1-300x300.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  CORTE
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col !border-1 !border-[#b1cdee] mb-4">
                <img
                  src="https://polipapel.vteximg.com.br/arquivos/ids/174453-1000-1000/O76237.png?v=638191796905070000"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  CASERA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col !border-1 !border-[#b1cdee] mb-4">
                <img
                  src="https://sivencasinger.com.ve/wp-content/uploads/sin-titulo-2.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  INDUSTRIAL
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col !border-1 !border-[#b1cdee] mb-4">
                <img
                  src="https://singermultimaquinas.com/wp-content/uploads/2024/02/1-300x300.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  CORTE
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col !border-1 !border-[#b1cdee] mb-4">
                <img
                  src="https://polipapel.vteximg.com.br/arquivos/ids/174453-1000-1000/O76237.png?v=638191796905070000"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  CASERA
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-[#fff] shadow-[5px_4px_7px_#556f8d] rounded-sm text-center flex items-center justify-center flex-col !border-1 !border-[#b1cdee] mb-4">
                <img
                  src="https://sivencasinger.com.ve/wp-content/uploads/sin-titulo-2.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[600] text-[#556f8d] mt-3">
                  INDUSTRIAL
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
