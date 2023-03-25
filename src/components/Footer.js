import { Stack, Grid, Button, Typography, Box, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import LogoImg from "../assets/images/logo_white.png";
import Logo from "./Logo";
import CustomLink from "./CustomLink";
import { Box1, Box2 } from "./StyledComponents";

function Footer(props) {
  return (
    <Box
      sx={{
        background: "rgb(38, 38, 38)",

        padding: { xs: "80px 25px", md: "80px 144px" },
      }}
    >
      <Container disableGutters>
        <Box1
          sx={{
            display: "flex",
            direction: "column",
            alignItems: "flex-start",
            marginBottom: "100px",
            boxSizing: "border-box",
          }}
        >
          <Box2
            sx={{
              color: "rgba(255, 255, 255, 0.698)",
              width: "50%",
              boxSizing: "border-box",
              paddingRight: "5%",
            }}
          >
            <Logo logo={LogoImg} alt="logo" />
            <Typography
              sx={{ fontFamily: "Gordita-Medium", marginTop: "25px" }}
            >
              Arayı açmayalım!
            </Typography>
            <Typography
              sx={{
                fontFamily: "Gordita-Regular",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                direction: "column",
                alignItems: "center",
                position: "relative",
                boxSizing: "border-box",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                size="small"
                label="e-mail adresin"
                placeholder="halide.edip@adivar.com"
                variant="outlined"
                InputLabelProps={{
                  style: {
                    color: "rgba(255, 255, 255, 0.698)",
                  },
                }}
                sx={{
                  width: "70%",

                  input: { color: "rgba(255, 255, 255, 0.698)" },
                }}
              />
              <Button
                sx={{
                  fontFamily: "Gordita-Medium",
                  bgcolor: "white",
                  right: "10px",
                  fontWeight: 500,
                  fontSize: "13px",
                  marginLeft: "10%",
                  width: "100px",
                  height: "40px",
                  borderRadius: "64px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
                  color: "black",
                  ":hover": {
                    bgcolor: "rgb(38, 38, 38)",
                  },
                }}
              >
                Gönder
              </Button>
            </Box>
            <Typography
              sx={{
                fontFamily: "Gordita-Regular",
                marginTop: "20px",
                fontSize: "12px",
              }}
            >
              Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
              beije'den haber almayı onaylıyorum.
            </Typography>
          </Box2>
          <Box
            sx={{
              display: "flex",
              width: "50%",
              "@media (max-width: 900px)": {
                width: "100%",
                marginTop: "30px",
              },
            }}
          >
            <Grid
              container
              columns={8}
              sx={{
                width: "60%",
                marginRight: "auto",
              }}
            >
              <Grid item xs={4}>
                <CustomLink
                  path="packages"
                  style={{ color: "white" }}
                  title="Paketler"
                ></CustomLink>
              </Grid>
              <Grid item xs={4}>
                <CustomLink
                  path="blog"
                  style={{ color: "white" }}
                  title="Blog"
                ></CustomLink>
              </Grid>
              <Grid item xs={4}>
                <CustomLink
                  path="demo"
                  style={{ color: "white" }}
                  title="Deneme Paketi"
                ></CustomLink>
              </Grid>
              <Grid item xs={4}>
                <CustomLink
                  path="faq"
                  style={{ color: "white" }}
                  title="Sıkça Sorulan Sorular"
                ></CustomLink>
              </Grid>

              <Grid item xs={4}>
                <CustomLink
                  path="join-us"
                  style={{ color: "white" }}
                  title="Ekibimize Katıl"
                ></CustomLink>
              </Grid>
              <Grid item xs={4}>
                <CustomLink
                  path="about-us"
                  style={{ color: "white" }}
                  title="Biz Kimiz"
                ></CustomLink>
              </Grid>
            </Grid>
            <Stack spacing={2}>
              <CustomLink
                style={{ color: "white", marginLeft: "10px" }}
                title="Facebook"
              >
                <FaFacebookF />
              </CustomLink>

              <CustomLink
                style={{ color: "white", marginLeft: "10px" }}
                title="Instagram"
              >
                <FaInstagram />
              </CustomLink>

              <CustomLink
                style={{ color: "white", marginLeft: "10px" }}
                title="Twitter"
              >
                <FaTwitter />
              </CustomLink>

              <CustomLink
                style={{ color: "white", marginLeft: "10px" }}
                title="Linkedin"
              >
                <FaLinkedin />
              </CustomLink>

              <CustomLink
                style={{ color: "white", marginLeft: "10px" }}
                title="Spotify"
              >
                <FaSpotify />
              </CustomLink>
            </Stack>
          </Box>
        </Box1>
        <hr />

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            marginTop: "10px",
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.498)",
                fontFamily: "Gordita-Medium",
                fontSize: "15px",
                marginTop: "10px",
              }}
            >
              2023 beije. Tüm hakları saklıdır.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <CustomLink
              path="kvkk"
              style={{
                color: "rgba(255, 255, 255, 0.498)",
                marginTop: "10px",
              }}
              title="KVKK Aydınlatma Metni"
              fontStyle={{
                fontSize: "14px",
              }}
            ></CustomLink>
            <CustomLink
              path="membership-agreement"
              style={{ color: "rgba(255, 255, 255, 0.498)", marginTop: "10px" }}
              title="Üyelik Sözleşmesi"
              fontStyle={{
                fontSize: "14px",
              }}
            ></CustomLink>
            <CustomLink
              path="privacy-policy"
              style={{ color: "rgba(255, 255, 255, 0.498)", marginTop: "10px" }}
              title="Gizlilik Politikası"
              fontStyle={{
                fontSize: "14px",
              }}
            ></CustomLink>
            <CustomLink
              path="cookies"
              style={{
                color: "rgba(255, 255, 255, 0.498)",
                marginTop: "10px",
              }}
              title="Çerez Politikası"
              fontStyle={{
                fontSize: "14px",
              }}
            ></CustomLink>
            <CustomLink
              path="test-results"
              style={{ color: "rgba(255, 255, 255, 0.498)", marginTop: "10px" }}
              title="Test Sonuçları"
              fontStyle={{
                fontSize: "14px",
              }}
            ></CustomLink>
          </Grid>

          <Grid
            item
            sx={{ display: "flex", justifyContent: "flex-end" }}
            xs={12}
            md={2}
          >
            <CustomLink
              path="en"
              style={{
                textDecoration: "none",
                marginRight: "2px",
                color: "rgba(255, 255, 255, 0.498)",
                marginTop: "10px",
              }}
              title="EN"
            />
            <div
              style={{
                borderLeft: "0.5px solid rgba(255, 255, 255, 0.498)",
                height: "20px",
                marginTop: "10px",
              }}
            ></div>
            <CustomLink
              path="tr"
              style={{
                textDecoration: "none",
                marginLeft: "2px",
                color: "rgba(255, 255, 255, 0.498)",
                marginTop: "10px",
              }}
              title="TR"
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            boxSizing: "border-box",
            margin: "30px 0",
          }}
        >
          <Box
            component="img"
            alt="The house from the offer."
            src="https://beije.co/_next/static/media/Master.2bedc059.svg"
          />
          <Box
            component="img"
            alt="The house from the offer."
            src="https://beije.co/_next/static/media/Visa.9f651691.svg"
          />
        </Box>
      </Container>
    </Box>
  );
}
export default Footer;
