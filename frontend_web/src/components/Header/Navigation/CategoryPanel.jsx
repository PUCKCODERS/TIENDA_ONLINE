import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaWindowClose } from "react-icons/fa";
import { Button } from "@mui/material";
import { TbCopyPlusFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbCopyMinusFilled } from "react-icons/tb";
import { GiSewingMachine } from "react-icons/gi";
import { GiSewingString } from "react-icons/gi";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[13px] font-[500] flex items-center justify-between">
        COMPRAR POR CATEGORÍAS
        <FaWindowClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[15px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[#556f8d]">
                MAQUINAS
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <TbCopyMinusFilled
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <TbCopyPlusFilled
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="inner_submenu w-full bg-[#f5f5f5] pl-3 ">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[#556f8d]">
                      MAQUINAS
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 0 ? (
                    <TbCopyMinusFilled
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <TbCopyPlusFilled
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="submenu w-full pl-3 ">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 transition  text-[14px] !bg-[#a09f9f] !text-[white] hover:!text-[#3c536d] shadow-[4px_3px_2px_#3c536d] rounded-[5px]"
                        >
                          Overlock Industrial
                        </Link>
                        <GiSewingMachine className="absolute top-[5px] right-[30px] text-[20px]" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 transition  text-[14px] !bg-[#a09f9f] !text-[white] hover:!text-[#3c536d] shadow-[4px_3px_2px_#3c536d] rounded-[5px]"
                        >
                          MAQUINAS
                        </Link>
                        <GiSewingString className="absolute top-[5px] right-[30px] text-[20px]" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 transition  text-[14px] !bg-[#a09f9f] !text-[white] hover:!text-[#3c536d] shadow-[4px_3px_2px_#3c536d] rounded-[5px]"
                        >
                          MAQUINAS
                        </Link>
                        <GiSewingMachine className="absolute top-[5px] right-[30px] text-[20px]" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 transition  text-[14px] !bg-[#a09f9f] !text-[white] hover:!text-[#3c536d] shadow-[4px_3px_2px_#3c536d] rounded-[5px]"
                        >
                          MAQUINAS
                        </Link>
                        <GiSewingString className="absolute top-[5px] right-[30px] text-[20px]" />
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[#556f8d]">
                MAQUINAS
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <TbCopyMinusFilled
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <TbCopyPlusFilled
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="inner_submenu w-full bg-[#f5f5f5] pl-3 ">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[#556f8d]">
                      MAQUINAS
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 1 ? (
                    <TbCopyMinusFilled
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <TbCopyPlusFilled
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {innerSubmenuIndex === 1 && (
                    <ul className="submenu w-full pl-3 ">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 transition  text-[14px] !bg-[#a09f9f] !text-[white] hover:!text-[#3c536d] shadow-[4px_3px_2px_#3c536d] rounded-[5px]"
                        >
                          Overlock Industrial
                        </Link>
                        <GiSewingMachine className="absolute top-[5px] right-[30px] text-[20px]" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 transition  text-[14px] !bg-[#a09f9f] !text-[white] hover:!text-[#3c536d] shadow-[4px_3px_2px_#3c536d] rounded-[5px]"
                        >
                          MAQUINAS
                        </Link>
                        <GiSewingString className="absolute top-[5px] right-[30px] text-[20px]" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 transition  text-[14px] !bg-[#a09f9f] !text-[white] hover:!text-[#3c536d] shadow-[4px_3px_2px_#3c536d] rounded-[5px]"
                        >
                          MAQUINAS
                        </Link>
                        <GiSewingMachine className="absolute top-[5px] right-[30px] text-[20px]" />
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="w-full !text-left !justify-start !px-3 transition  text-[14px] !bg-[#a09f9f] !text-[white] hover:!text-[#3c536d] shadow-[4px_3px_2px_#3c536d] rounded-[5px]"
                        >
                          MAQUINAS
                        </Link>
                        <GiSewingString className="absolute top-[5px] right-[30px] text-[20px]" />
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
