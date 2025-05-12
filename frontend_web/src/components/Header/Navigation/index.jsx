import Button from "@mui/material/Button";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { VscTriangleDown } from "react-icons/vsc";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";

import "../Navigation/style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-8 ">
          <div className="col_1 w-[30%]">
            <Button
              className="!text-[#556f8d] gap-1 !bg-[#e5e5e5] shadow-[5px_4px_2px_#556f8d] w-full"
              onClick={openCategoryPanel}
            >
              <HiMenuAlt1 className="text-[18px]" />
              COMPRAR POR CATEGORÍAS
              <VscTriangleDown className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>
          <div className="col_2 w-[65%]">
            <ul className="flex items-center gap-1 nav">
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[bold] !bg-[#fff] !text-[#556f8d] hover:!text-[#556f8d] !py-4 ">
                    INICIO
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[bold] !bg-[#fff] !text-[#556f8d] hover:!text-[#556f8d] ">
                    MAQUINAS
                  </Button>
                </Link>

                <div className="submenu absolute !top-[130%] left-[0%] min-w-[150px] bg-[#ebebeb] shadow-[5px_4px_2px_#556f8d] opacity-0 transition-all border-[1px] border-[#556f8d] rounded-[5px] z-10">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                          SINGER
                        </Button>

                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-[#ebebeb] shadow-[5px_4px_2px_#556f8d] opacity-0 transition-all border-[1px] border-[#556f8d] rounded-[5px] z-10">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                                  SINGER
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none">
                              <Link to="/" className="w-full">
                                <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                                  OVERLOCK
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none">
                              <Link to="/" className="w-full">
                                <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                                  SINGER
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none">
                              <Link to="/" className="w-full">
                                <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                                  OVERLOCK
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none">
                              <Link to="/" className="w-full">
                                <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                                  SINGER
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none">
                              <Link to="/" className="w-full">
                                <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                                  OVERLOCK
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/" className="w-full">
                        <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                          OVERLOCK
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/" className="w-full">
                        <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                          SINGER
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/" className="w-full">
                        <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                          OVERLOCK
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/" className="w-full">
                        <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                          SINGER
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/" className="w-full">
                        <Button className="!text-[#556f8d] !font-[bold] hover:!text-[white] hover:!bg-[#274a72] w-full !text-left !justify-start !rounded-none">
                          OVERLOCK
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[bold] !bg-[#fff] !text-[#556f8d] hover:!text-[#556f8d] !py-4">
                    CORTE
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[bold] !bg-[#fff] !text-[#556f8d] hover:!text-[#556f8d] !py-4">
                    PLANCHADO
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[bold] !bg-[#fff] !text-[#556f8d] hover:!text-[#556f8d] !py-4">
                    ACCESORIOS
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[bold] !bg-[#fff] !text-[#556f8d] hover:!text-[#556f8d] !py-4">
                    REPUESTOS
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[bold] !bg-[#fff] !text-[#556f8d] hover:!text-[#556f8d] !py-4">
                    NOSOTROS
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[bold] !bg-[#fff] !text-[#556f8d] hover:!text-[#556f8d] !py-4">
                    CONTACTO
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[13px] font-[500] text-[#556f8d]"
                >
                  <Button className="link transition !font-[bold] !bg-[#fff] !text-[#556f8d] hover:!text-[#556f8d] !py-4">
                    OFERTAS
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[15%]">
            <p className="!text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <TbTruckDelivery className="text-[20px]" />
              ENVIO GRATIS
            </p>
          </div>
        </div>
      </nav>
      {/*category panel component*/}
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
