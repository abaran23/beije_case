import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { IconicButton } from "./StyledComponents";

function DrawerComp(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => {
          setOpenDrawer(false);
        }}
        open={openDrawer}
        sx={{
          marginTop: "80px",

          display: { xs: "block", md: "none" },
        }}
        PaperProps={{
          sx: {
            height: "auto",
            width: "100%",
            marginTop: "80px",
            backgroundColor: "#F5F5F5",
            boxShadow: "0px 10px 10px -10px #111",
          },
        }}
        hideBackdrop={true}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Ürünler</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Biz Kimiz</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Bağış Kültürü</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Blog</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Kendi Paketini Oluştur!</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconicButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        sx={{
          display: { sm: "block", md: "none" },
        }}
      >
        {openDrawer && <GrClose />}
        {!openDrawer && <FiMenu />}
      </IconicButton>
    </>
  );
}

export default DrawerComp;