import { Box, Link, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import BasicTabs from "./TabPanel";
import Package from "./Package";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { StyledContainer, StyledContainer2 } from "./StyledComponents";

function Medium(props) {
  //For small screens, useState is used for package box visibility showing the user's selections.
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          paddingTop: "80px",
          background: "rgb(249, 245, 242)",
        }}
      >
        <Container
          sx={{
            display: "flex",
            padding: { xs: "100px 0px 70px 0", md: "152px 25px 85px 25px" },
          }}
        >
          <Box
            sx={{
              width: "50%",
              "@media (max-width: 900px)": {
                width: "100%",
                padding: "0 20px",
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  direction: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Gordita-Medium",
                    fontSize: 26,
                  }}
                >
                  Kendi Paketini Oluştur
                </Typography>

                <Link
                  sx={{
                    position: "absolute",
                    right: 0,
                    textDecoration: "none",
                    fontFamily: "Gordita-Regular",
                    color: "black",
                    fontSize: 18,
                    fontWeight: 400,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Nasıl Çalışır?
                </Link>
              </Box>
              <Typography
                sx={{
                  marginTop: "20px",
                  fontFamily: "Gordita-Regular",
                  fontSize: "17px",
                }}
              >
                Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
                miktarlardan, sana özel bir paket oluşturalım.
              </Typography>
            </Box>
            <Box sx={{ marginTop: "60px" }}>
              <BasicTabs />
            </Box>
            <Button
              sx={{
                width: "100%",
                margin: "30px 0",
                padding: "12px 22px 10px",
                textTransform: "none",
                fontFamily: "Gordita-Medium",
                fontSize: "1rem;",
                bgcolor: "rgb(52,49,49)",
                color: "white",
                borderRadius: "64px",
                ":hover": {
                  bgcolor: "black",
                },
                "@media (min-width: 901px)": {
                  display: "none",
                },
              }}
              onClick={handleOpen}
            >
              Paketini Gör
            </Button>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              position: "absolute",
              overflow: "scroll",
              height: "100%",
              display: "block",
            }}
          >
            <StyledContainer2>
              <Package />
            </StyledContainer2>
          </Modal>

          <StyledContainer>
            <Package />
          </StyledContainer>
        </Container>
      </Box>
    </>
  );
}
export default Medium;
