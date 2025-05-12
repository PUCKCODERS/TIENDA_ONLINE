import React, { useContext } from "react";
import { FcShipped } from "react-icons/fc";
import { FaCcVisa } from "react-icons/fa6";
import { GiLaptop } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdChatboxes } from "react-icons/io";
import Button from "@mui/material/Button";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

import { IoCloseSharp } from "react-icons/io5";
import Drawer from "@mui/material/Drawer";
import CartPanel from "../CartPanel";
import { MyContext } from "../../App";

const Footer = () => {
  const context = useContext(MyContext);

  return (
    <>
      <footer className="py-6 bg-[#eef0f3] border border-[#fff] shadow-[0_-4px_6px_-1px_#b1cdee,0_4px_6px_-1px_#b1cdee]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 py-8 pb-8">
            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <FcShipped className="text-[50px] text-[#38597e] transition-all duration-300 group-hover:text-[#0a7fec] group-hover:-translate-y-1" />
              <h3 className="text-[13px] font-[900] text-[#556f8d] mt-3">
                ENVIO GRATIS
              </h3>
              <p className="!text-[10px] font-[500] text-[#6c8199]">
                COMPRAS SUPERIORES A $100
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <GiLaptop className="text-[50px] text-[#5b5b5c] transition-all duration-300 group-hover:text-[#000] group-hover:-translate-y-1" />
              <h3 className="text-[13px] font-[900] text-[#556f8d] mt-3">
                COMPRA EN LINEA
              </h3>
              <p className="!text-[10px] font-[500] text-[#6c8199]">
                RAPIDO, FACIL Y DESDE CUALQUIER LUGAR
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <FaCcVisa className="text-[50px] text-[#38597e] transition-all duration-300 group-hover:text-[#0a7fec] group-hover:-translate-y-1" />
              <h3 className="text-[13px] font-[900] text-[#556f8d] mt-3">
                COMPRA CON TARJETA
              </h3>
              <p className="!text-[9.5px] font-[500] text-[#6c8199]">
                ACEPTAMOS CUALQUIER TARJETA DE CREDITO
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <FcMoneyTransfer className="text-[50px] text-[#38597e] transition-all duration-300 group-hover:text-[#0a7fec] group-hover:-translate-y-1" />
              <h3 className="text-[13px] font-[900] text-[#556f8d] mt-3">
                PAGO EFECTIVO Y TRANSFERECIA
              </h3>
              <p className="!text-[10px] font-[500] text-[#6c8199]">
                OPCIONES SEGURAS PARA TU COMODIDAD
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <MdCurrencyExchange className="text-[50px] text-[#5b5b5c] transition-all duration-300 group-hover:text-[#000] group-hover:-translate-y-1" />
              <h3 className="text-[12px] font-[900] text-[#556f8d] mt-3">
                GARANTIA Y DEVOLUCIONES
              </h3>
              <p className="!text-[10px] font-[500] text-[#6c8199]">
                PROTECCION TOTAL EN TUS COMPRAS
              </p>
            </div>
          </div>

          <hr />

          <div className="footer flex py-8">
            <div className="part1 w-[25%] border-r border-[#d3d7dd]">
              <h2 className="text-[20px] font-[bold] text-[#38597e] mb-4">
                CONTACTANOS
              </h2>
              <p className="text-[14px] font-[bold] text-[#6c8199] pb-4">
                TURUBAMBA ALTO - CALLE MORO MORO
                <br />Y ALBERTO SPENCER CASA S26-182 QUITO
              </p>

              <Link
                className="link text-[17px] font-[400] text-[#38597e]"
                to="mailto:someone@example.com"
              >
                someone@example.com
              </Link>
              <span className="text-[22px] font-[bold] block w-full mt-3 mb-5 text-[#38597e]">
                (+593) 0968873896
              </span>

              <div className="flex items-center gap-3">
                <IoMdChatboxes className="text-[40px] text-[#38597e]" />
                <span className="text-[17px] font-[600] text-[#38597e]">
                  CHAT EN LÍNEA <br />
                  OBTENGA AYUDA
                </span>
              </div>
            </div>

            <div className="part1 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[20px] font-[bold] text-[#38597e] mb-4">
                  PRODUCTOS
                </h2>
                <ul className="list">
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      NUEVOS PRODUCTOS
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      PRODUCTOS RECOMENDADOS
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      ARTICULOS DE INTERES
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      BLOGS
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      REPUESTOS
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      CONTACTANOS
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      SOPORTE TECNICO
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className="text-[20px] font-[bold] text-[#38597e] mb-4">
                  NUESTRA TIENDA
                </h2>
                <ul className="list">
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      ENVIOS A DOMICILIO
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      ULTIMAS NOTICIAS
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      TERMINOS Y CONDICIONES
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      ACERCA DE NOSOTROS
                    </Link>
                  </li>

                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      PAGO SEGURO
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-[#6c8199] w-full mb-2">
                    <Link to="/" className="link">
                      REGISTRARSE
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part1 w-[35%] flex pl-8 flex-col pr-10">
              <h2 className="text-[18px] font-[bold] text-[#38597e] mb-4">
                SUSCRIBETE
              </h2>
              <p className="text-[13px] text-[#6c8199]">
                ¡SUSCRÍBETE PARA RECIBIR OFERTAS EXCLUSIVAS, NOVEDADES Y MUCHO
                MÁS!
              </p>

              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border border-[#38597e] outline-none pl-4 pr-4 rounded-sm mb-4  focus:border-[#38597e]"
                  placeholder="TU CORREO"
                  style={{ boxShadow: "4px 4px 7px #38597e" }}
                />
                <Button className="btn-org">SUSCRIBETE</Button>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Acepta terminos y condiciones"
                  className="mt-3"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[0_-4px_6px_-1px_#b1cdee] py-3 bg-[#eef0f3]">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-3">
            <li className="list-none">
              <Link
                to="/"
                target="_black"
                classname="w-[35px] h-[35px] rounded-full border
                 border-[#38597e] flex items-center justify-center group 
                 hover:bg-[#38597e] transition-all "
              >
                <FaSquareFacebook className="text-[35px] text-[#0372f0] group-hover:text-[#38597e]" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_black"
                classname="w-[35px] h-[35px] rounded-full border
                 border-[#38597e] flex items-center justify-center group 
                 hover:bg-[#38597e] transition-all "
              >
                <FaYoutube className="text-[35px] text-[#f71f1f] group-hover:text-[#38597e]" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_black"
                classname="w-[35px] h-[35px] rounded-full border
                 border-[#38597e] flex items-center justify-center group 
                 hover:bg-[#38597e] transition-all "
              >
                <FaInstagramSquare className="text-[35px] text-[#e77446] group-hover:text-[#38597e]" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_black"
                classname="w-[35px] h-[35px] rounded-full border
                 border-[#38597e] flex items-center justify-center group 
                 hover:bg-[#38597e] transition-all "
              >
                <FaSquareXTwitter className="text-[35px] text-[#38597e] group-hover:text-[#38597e]" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_black"
                classname="w-[35px] h-[35px] rounded-full border
                 border-[#38597e] flex items-center justify-center group 
                 hover:bg-[#38597e] transition-all "
              >
                <AiFillTikTok className="text-[35px] text-[#000] group-hover:text-[#38597e]" />
              </Link>
            </li>
          </ul>
          <p className="text-[13px] text-[#38597e] text-center mb-0">
            © 2025 - PUCKCODERS - Todos los derechos reservados
          </p>

          <div className="flex items-center gap-1">
            <img
              src="https://w7.pngwing.com/pngs/424/169/png-transparent-credit-card-visa-electron-mastercard-credit-card-text-logo-banner.png"
              alt="image"
              className="w-[50px] h-[35px] object-cover"
            />

            <img
              src="https://w1.pngwing.com/pngs/191/339/png-transparent-visa-mastercard-logo-credit-card-yellow-text-line-area-circle.png"
              alt="image"
              className="w-[50px] h-[35px] object-cover"
            />

            <img
              src="https://springsummer.imgix.net/uploads/cardAmexGold.png?auto=compress%2Cformat&fit=clip&q=35&w=2600"
              alt="image"
              className="w-[50px] h-[35px] object-cover"
            />

            <img
              src="https://dce-documents.s3.amazonaws.com/s3fs-public/styles/max_650x650/public/2023-04/diners-club-miles-tarjeta_0.png.webp?itok=MkzjitVA"
              alt="image"
              className="w-[50px] h-[35px] object-cover"
            />

            <img
              src="https://periodismopublicoec.com/wp-content/uploads/2021/10/banco-pichincha.jpg"
              alt="image"
              className="w-[50px] h-[35px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* PANEL DEL CARRITO */}
      <Drawer
        open={context.openCartPanel}
        onClose={context.toggleCartPanel(false)}
        anchor={"right"}
        className="cartPanel"
      >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[#d1d1d1] overflow-hidden">
          <h4 className="text-[#274a72] font-[bold] font-bold">
            CARRITO DE COMPRA (1)
          </h4>
          <IoCloseSharp
            className="!w-[20px] !h-[20px] !min-w-[20px] cursor-pointer !rounded-full !text-[#fff] !absolute top-[15px] right-[15px] !bg-[#274a72] !shadow-[0px_0px_0px_3px_#7994b1]"
            onClick={context.toggleCartPanel(false)}
          />
        </div>

        <CartPanel />
      </Drawer>
    </>
  );
};

export default Footer;
