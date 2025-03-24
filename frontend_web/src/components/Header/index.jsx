import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                OBTENGA HASTA UN 50 % DE DESCUENTO EN ESTILOS DE LA NUEVA
                TEMPORADA
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-4">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    CENTRO DE AYUDA{""}
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    PEDIDOS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-3">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/src/images/logo1.jpg" />
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[15px] font-[500]"
                >
                  ACCESO
                </Link>{" "}
                |{" "}
                <Link
                  to="/register"
                  className="link transition text-[15px] font-[500]"
                >
                  REGISTRARSE
                </Link>
              </li>
              <li>
                <Tooltip title="COMPARTIR" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoMdGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="ME GUSTA" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="CARRITO" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
