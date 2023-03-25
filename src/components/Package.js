import { Box, Button, Typography } from "@mui/material";

import { TfiLoop } from "react-icons/tfi";
import { useSelector } from "react-redux";
import PackageItem from "./PackageItem";
//group items by their category Id
const groupBy = (array, key) => {
  return array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
};

function Package(props) {
  const cart = useSelector((state) => state.cart);
  const groupedItems = groupBy(cart.items, "catId");
  const itemsList = Object.values(groupedItems);
  let sum = 0;
  itemsList.map((item) => item.map((el) => (sum += el["totalPrice"]))); //Calculate total price for 'add to cart' button label

  return (
    <>
      <Typography
        sx={{
          fontFamily: "Gordita-Medium",
          fontSize: 26,
        }}
      >
        Özel Paketin
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            boxShadow: 1,
            borderRadius: "8px",
            padding: "12px 16px",
            margin: "20px 0",
          }}
        >
          <TfiLoop />
          <Typography sx={{ marginLeft: "10px" }}>2 ayda 1 gönderim</Typography>
        </Box>
        <Box
          sx={{
            aspectRatio: "auto 402 / 201",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            alt="The house from the offer."
            src="https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpacket.c4ec1969.png&w=828&q=75"
          />
        </Box>
      </Box>
      {itemsList.map((item) => (
        <PackageItem key={item[0]["catId"]} products={item} />
      ))}
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
          ":disabled": {
            color: "rgba(0, 0, 0, 0.26)",
            bgcolor: "rgba(0, 0, 0, 0.12)",
          },
        }}
        disabled={itemsList.length === 0}
      >
        Sepete Ekle (₺{sum.toFixed(2)})
      </Button>
    </>
  );
}
export default Package;
