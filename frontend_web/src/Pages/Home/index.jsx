import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../components/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import HomeBannerV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/bannerBoxV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[60%] shadow-md rounded-md">
            <HomeBannerV2 />
          </div>
          <div className="part2 w-[40%] flex items-center gap-5 justify-between flex-col">
            <BannerBoxV2
              info="left"
              image={
                "https://www.superprof.mx/blog/wp-content/uploads/2018/01/maquina-coser.jpg"
              }
            />
            <BannerBoxV2
              info="right"
              image={
                "https://www.superprof.mx/blog/wp-content/uploads/2018/01/maquina-coser.jpg"
              }
            />
          </div>
        </div>
      </section>
      <HomeCatSlider />
      <section className="bg-white py-8 ">
        <div className="container ">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[22px] font-[600]">PRODUCTOS POPULARES</h2>
              <p className="text-[14px] font-[400]">
                NO TE PIERDAS LAS OFERTAS VIGENTES HASTA FINALES DE MARZO
              </p>
            </div>

            <div className="rightSec w-[60%] ">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="MAQUINAS" />
                <Tab label="CORTE" />
                <Tab label="PLANCHADO" />
                <Tab label="ACCESORIOS" />
                <Tab label="REPUESTOS" />
                <Tab label="MAQUINAS" />
                <Tab label="CORTE" />
                <Tab label="PLANCHADO" />
                <Tab label="ACCESORIOS" />
                <Tab label="REPUESTOS" />
                <Tab label="MAQUINAS" />
                <Tab label="CORTE" />
                <Tab label="PLANCHADO" />
                <Tab label="ACCESORIOS" />
                <Tab label="REPUESTOS" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>
      <section className="py-4 pt-0 bg-white">
        <div className="container">
          <div className="freeShipping w-[90%] m-auto py-4 p-4 border-3 border-[#556f8d] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[30px] font-[600]">ENVIO GRATIS</span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[600] uppercase">
                ENVIO GRATIS EN TU PRIMERA COMPRA Y SUPERIORES A $200
              </p>
            </div>

            <p className="font-bold text-[25px]">- SOLO $200*</p>
          </div>

          <AdsBannerSliderV2 items={4} />
        </div>
      </section>
      <section className="py-5 bg-white ">
        <div className="container ">
          <h2 className="text-[20px] font-[600]">NUEVOS PRODUCTOS</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">PRODUCTOS RECOMENDADOS</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="py-5 pb-8 pt-0 bg-white blogSection ">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">ARTICULOS DE INTERES</h2>
          <Swiper
            loop={true}
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
