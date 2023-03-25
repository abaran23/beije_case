import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";
import { Container } from "@mui/system";
export const IconicButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontSize: "22px",
  padding: "0",
  height: "32px",
  width: "32px",
}));

export const Box1 = styled(Box)(({ theme }) => ({
  display: "flex",
  direction: "column",
  alignItems: "flex-start",
  marginBottom: "100px",
  boxSizing: "border-box",
  "@media (max-width: 900px)": {
    display: "block",
  },
}));

export const Box2 = styled(Box)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.698)",
  width: "50%",
  boxSizing: "border-box",
  paddingRight: "5%",
  "@media (max-width: 900px)": {
    width: "100%",
    paddingRight: "0%",
  },
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  background: "white",
  marginLeft: "10%",
  width: "40%",
  borderRadius: "10px",
  padding: "20px",
  height: "100%",
  "@media (max-width: 900px)": {
    display: "none",
  },
}));

export const StyledContainer2 = styled(Container)(({ theme }) => ({
  background: "white",
  marginTop: "10%",
  borderRadius: "10px",
  padding: "20px",
  width: "300px",
  height: "auto",
}));
