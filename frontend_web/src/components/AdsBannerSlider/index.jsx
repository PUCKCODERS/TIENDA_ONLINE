import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        loop={true}
        slidesPerView={props.items}
        spaceBetween={12}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox
            img={
              "https://media.licdn.com/dms/image/v2/C4E1BAQFyV5_AZdsxNg/company-background_10000/company-background_10000/0/1650380947166/maquitex_industrial_cover?e=2147483647&v=beta&t=WakLijhn-vgfuYsfGNIc_A_yCPEr7OrufZI-1aineyQ"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://media.licdn.com/dms/image/v2/C4E1BAQFyV5_AZdsxNg/company-background_10000/company-background_10000/0/1650380947166/maquitex_industrial_cover?e=2147483647&v=beta&t=WakLijhn-vgfuYsfGNIc_A_yCPEr7OrufZI-1aineyQ"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://media.licdn.com/dms/image/v2/C4E1BAQFyV5_AZdsxNg/company-background_10000/company-background_10000/0/1650380947166/maquitex_industrial_cover?e=2147483647&v=beta&t=WakLijhn-vgfuYsfGNIc_A_yCPEr7OrufZI-1aineyQ"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://media.licdn.com/dms/image/v2/C4E1BAQFyV5_AZdsxNg/company-background_10000/company-background_10000/0/1650380947166/maquitex_industrial_cover?e=2147483647&v=beta&t=WakLijhn-vgfuYsfGNIc_A_yCPEr7OrufZI-1aineyQ"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://media.licdn.com/dms/image/v2/C4E1BAQFyV5_AZdsxNg/company-background_10000/company-background_10000/0/1650380947166/maquitex_industrial_cover?e=2147483647&v=beta&t=WakLijhn-vgfuYsfGNIc_A_yCPEr7OrufZI-1aineyQ"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://media.licdn.com/dms/image/v2/C4E1BAQFyV5_AZdsxNg/company-background_10000/company-background_10000/0/1650380947166/maquitex_industrial_cover?e=2147483647&v=beta&t=WakLijhn-vgfuYsfGNIc_A_yCPEr7OrufZI-1aineyQ"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://media.licdn.com/dms/image/v2/C4E1BAQFyV5_AZdsxNg/company-background_10000/company-background_10000/0/1650380947166/maquitex_industrial_cover?e=2147483647&v=beta&t=WakLijhn-vgfuYsfGNIc_A_yCPEr7OrufZI-1aineyQ"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://media.licdn.com/dms/image/v2/C4E1BAQFyV5_AZdsxNg/company-background_10000/company-background_10000/0/1650380947166/maquitex_industrial_cover?e=2147483647&v=beta&t=WakLijhn-vgfuYsfGNIc_A_yCPEr7OrufZI-1aineyQ"
            }
            link={"/"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
