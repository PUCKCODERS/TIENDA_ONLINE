import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";

import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";

const MyListItems = (/*{props}*/) => {
  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[#d1d1d1]">
      <div className="img w-[15%] rounded-md shadow-md overflow-hidden">
        <Link to="/product/7845" className="group">
          <img
            src="https://dcdn-us.mitiendanube.com/stores/937/060/products/whatsapp-image-2024-05-08-at-16-49-38-e8501bf0a251c9748817152035761232-1024-1024.jpeg"
            className="w-full group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative ml-5">
        <RiDeleteBin5Fill className="absolute top-[0px] right-[0px] cursor-pointer text-[25px] text-[#d67070] hover:!text-[#ce0202]  link transition-all" />
        <span className="text-[13px]">MAQUINA SINGER</span>
        <h3 className="text-[15px] font-bold font-[bold]">
          <Link className="link">
            MÁQUINA DE COSER INDUSTRIAL DE COLUMNA ZOJE ZJ 9610SA-D3-M-3
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4 mt-2 mb-2">
          <span className="price text-[#0a7fec] text-[17px] font-[600]">
            $69.00
          </span>
          <span className="oldPrice line-through text-[#b8b8b8] text-[15px] font-[500]">
            $99.00
          </span>

          <span className="price text-[#ec370a] text-[17px] font-[600]">
            39% <span className="text-[10px]">DESCUENTO</span>
          </span>
        </div>

        <br />

        <Button className="btn-org btn-sm !text-[15px] !bg-[#449244] !border !border-[#449244] gap-2">
          AGREGAR <GiShoppingCart class="text-[25px] scale-x-[-1]" />
        </Button>
      </div>
    </div>
  );
};

export default MyListItems;
