import React from "react";
import "../bannerBoxV2/style.css";
import { Link } from "react-router-dom";

const BannerBoxV2 = (props) => {
  return (
    <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative shadow-md">
      <img
        src={props.image}
        className="w-full transition-all duration-150 group-hover:scale-105 "
      />
      <div
        className={`info absolute p-5 top-0 ${
          props.info === "left" ? "left-0" : "right-0"
        } 
      w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2
        ${props.info === "left" ? "" : "pl-15"}
      `}
      >
        <h2 className="text-[20px] font-[600] text-[#0a7fec]">
          MAQUINA DE COSER SILVER
        </h2>
        <span className="text-[25px] font-[600] w-full">$369.00</span>

        <div className="w-full">
          <Link to="/" className="text-[16px] font-[600] link text-[#556f8d]">
            COMPRAR AHORA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
