import {
    Drawer,
    IconButton,
  } from "@mui/material";
  import { Fragment, useState } from "react";
  import { Menu} from "@mui/icons-material";
import AccordionData from "./AccordionData";
import LogoSvg from "../LogoSvg";

  
  const DrawerSide = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
      <Fragment>
        <Drawer
          PaperProps={{
            sx: {
              marginTop: "56px",
              width: "65%",
              textAlign: "center",
              background: "#222222",
              color: "white",
              paddingLeft: "2px",
            },
          }}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
  
        >
        <LogoSvg/>
        <AccordionData/>
  
        </Drawer>
  
        <IconButton
          sx={{ display: { sm: "block", md: "none", color: "black" } }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <Menu />
        </IconButton>
      </Fragment>
    );
  };
  
  export default DrawerSide;
  