import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function PackageItem(props) {
  const dispatch = useDispatch();
  const title = props.products.map((el) => {
    return el["amount"] + " " + el["name"] + " ve ";
  });

  title[title.length - 1] = title[title.length - 1].slice(0, -4); //remove last 've' remains from mapping above

  //remove items with particular category Ids
  const removeHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.products[0]["catId"]));
  };

  return (
    <Box
      sx={{
        boxShadow: 1,
        borderRadius: "8px",
        padding: "12px 16px",
        margin: "30px 0",
      }}
    >
      <Typography sx={{ fontFamily: "Gordita-Medium", fontSize: 22 }}>
        Ped Paketleri
      </Typography>
      <Typography
        sx={{
          fontFamily: "Gordita-Regular",
          fontSize: 14,
          color: "rgba(0, 0, 0, 0.6)",
        }}
      >
        {title}
      </Typography>

      <Button
        sx={{
          fontFamily: "Gordita-Medium",
          padding: "10px 0",
          fontSize: 14,
          color: "rgb(52, 49, 49)",
          textTransform: "none",
          borderRadius: "64px",
        }}
        onClick={removeHandler}
      >
        Paketten Çıkar
      </Button>
    </Box>
  );
}

export default PackageItem;
