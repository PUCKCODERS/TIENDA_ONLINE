import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaWindowClose } from "react-icons/fa";

import CategoryCollapse from "../../CategoryCollapse";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
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

      <CategoryCollapse />
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
