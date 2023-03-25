import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      //   item:{id,catId,price,title,amount}

      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          catId: newItem.catId,
          name: newItem.title,
          price: newItem.price,
          amount: newItem.amount,
          totalPrice: newItem.price * newItem.amount,
        });
      } else {
        if (newItem.amount === 0) {
          state.items = state.items.filter((item) => item.id !== newItem.id);
        }
        existingItem.amount = newItem.amount;
        existingItem.totalPrice = newItem.price * newItem.amount;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.catId !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
