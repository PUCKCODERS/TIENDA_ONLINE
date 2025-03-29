import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="py-12 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-3 border-[#556f8d] flex items-center justify-between rounded-md mb-7">
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

          <AdsBannerSlider items={4} />
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};

export default Home;
