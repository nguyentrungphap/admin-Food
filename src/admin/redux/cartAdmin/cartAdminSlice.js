import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const CartAdminSlice = createSlice({
  name: "cartAdmin",
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setCarts } = CartAdminSlice.actions;

export default CartAdminSlice.reducer;
