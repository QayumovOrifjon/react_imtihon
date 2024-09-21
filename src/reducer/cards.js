import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  modal: false,
  active: 0,
  carts: [],
  wishlist: [],
  warning: false,
  totalPrice: 0,
  isAuth: false,
  badgeCount: 0,
};

export const funcSlice = createSlice({
  name: "func",
  initialState,
  reducers: {
    handleActive: (state, action) => {
      state.active = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    handlePrice: (state) => {
      state.totalPrice = state.carts.reduce(
        (subtotal, item) => subtotal + item.amount * item.price,
        0
      );
    },
    setCarts: (state, action) => {
      const item = action.payload;
      const itemIndex = state.carts.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (itemIndex === -1) {
        state.carts = [...state.carts, { ...item, amount: 1 }];
        state.badgeCount += 1; // Increment badgeCount when a new item is added
      } else {
        state.warning = true;
      }
    },

    increment: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      if (itemIndex !== -1) {
        state.carts[itemIndex].amount += 1;
      }
    },

    
    decrement: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      if (itemIndex !== -1 && state.carts[itemIndex].amount > 1) {
        state.carts[itemIndex].amount -= 1;
      }
    },
    handleRemove: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      if (itemIndex !== -1) {
        state.carts.splice(itemIndex, 1);
        state.badgeCount -= 1; // Decrement badgeCount when an item is removed
      }
    },
  },
});

export const {
  handleActive,
  setItems,
  setCarts,
  handlePrice,
  increment,
  decrement,
  handleRemove,
} = funcSlice.actions;

export default funcSlice.reducer;
