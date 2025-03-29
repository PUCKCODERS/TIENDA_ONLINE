import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box BannerBox overflow-hidden rounded-lg group shadow-[7px_7px_7px_#b8b8b8] mb-5">
      <Link to="/">
        <img
          src={props.img}
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
          alt="banner"
        />
      </Link>
    </div>
  );
};

export default BannerBox;
