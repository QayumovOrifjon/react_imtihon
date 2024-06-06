import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Barberton Daisy', price: 238, quantity: 2 },
    { id: 2, name: 'Blushing Bromeliad', price: 834, quantity: 6 },
    { id: 3, name: 'Aluminum Plant', price: 1611, quantity: 9 },
  ],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;
    