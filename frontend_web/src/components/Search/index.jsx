import React from "react";
import "../Search/style.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2 shadow-[9px_8px_6px_#556f8d]">
      <input
        type="text"
        placeholder="BUSCAR PRODUCTO. . . . . "
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
      />
      <Button className="!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-[#556f8d]">
        <IoSearch className="text-[#556f8d] text-[22px]" />
      </Button>
    </div>
  );
};

export default Search;
