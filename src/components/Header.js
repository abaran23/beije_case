import { AppBar, Toolbar, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import LogoImg from "../assets/images/logo.png";
import Logo from "./Logo";
import NavBarLink from "./NavBarLink";
import DrawerComp from "./DrawerComp";
import { IconicButton } from "./StyledComponents";

function Header(props) {
  return (
    <>
      <AppBar
        sx={{
          background: "#F5F5F5",
          height: "80px",
          justifyContent: "center",
        }}
        position="fixed"
        elevation={0}
      >
        <Container>
          <Toolbar>
            <Grid container alignItems="center" justifyContent="flex-start">
              <Grid item xs={1.5} lg={2}>
                <Logo logo={LogoImg} alt="logo" />
              </Grid>

              <Grid
                item
                xs={7.5}
                lg={7}
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-around",
                }}
              >
                <NavBarLink path="/products" title="Ürünler" />

                <NavBarLink path="/about-us" title="Biz Kimiz" />

                <NavBarLink path="/donation-culture" title="Bağış Kültürü" />

                <NavBarLink path="/blog" title="Blog" />

                <NavBarLink
                  path="/build-package"
                  title="Kendi Paketini Oluştur!"
                />
              </Grid>

              <Grid
                item
                sx={{ display: "flex", justifyContent: "flex-end" }}
                xs={10.5}
                md={2.3}
                lg={3}
              >
                <IconicButton>
                  <FiShoppingCart />
                </IconicButton>
                <IconicButton>
                  <FiUser />
                </IconicButton>
                <DrawerComp />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
