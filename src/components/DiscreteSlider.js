import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

function valuetext(value) {
  return `${value}`;
}
const marks_1 = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "",
  },

  {
    value: 20,
    label: "",
  },
  {
    value: 30,
    label: "",
  },
  {
    value: 40,
    label: "",
  },
  {
    value: 50,
    label: "",
  },

  {
    value: 60,
    label: "60",
  },
];

const marks_2 = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "",
  },

  {
    value: 20,
    label: "",
  },
  {
    value: 30,
    label: "",
  },
  {
    value: 40,
    label: "",
  },
  {
    value: 50,
    label: "",
  },

  {
    value: 60,
    label: "",
  },
  {
    value: 70,
    label: "",
  },
  {
    value: 80,
    label: "",
  },
  {
    value: 90,
    label: "",
  },

  {
    value: 100,
    label: "100",
  },
];
export default function DiscreteSlider(props) {
  const { id, catId, price, title } = props.item;

  const dispatch = useDispatch();

  // get stored items
  const cart = useSelector((state) => state.cart);

  // for each item in items array get amount of particular item's amount (quantity) if exists
  const amount = cart.items.filter((item) => item.id === id)[0]
    ? cart.items.filter((item) => item.id === id)[0].amount
    : 0;

  const [val, setValue] = useState(amount);

  const [initial, setInitial] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //Whem slider change value change so useEffect executes
  useEffect(() => {
    if (initial) {
      //this prevents adding of item at first rendering
      setInitial(false);
      return;
    }

    dispatch(
      cartActions.addItemToCart({
        id,
        catId,
        price,
        title,
        amount: val,
      })
    );
  }, [val]);

  return (
    <Box sx={{ marginTop: "10px" }}>
      <Typography sx={{ marginBottom: "10px" }}> {title}</Typography>
      <Slider
        aria-label="slider"
        defaultValue={0}
        value={amount || 0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        sx={{
          color: "rgb(52, 49, 49)",
        }}
        marks={props.maxVal === 100 ? marks_2 : marks_1}
        onChange={handleChange}
        min={0}
        max={props.maxVal || 60}
      />
    </Box>
  );
}
