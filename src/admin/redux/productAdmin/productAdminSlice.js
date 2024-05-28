import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const ProductAdminSlice = createSlice({
  name: "productAdmin",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setProducts } = ProductAdminSlice.actions;

export default ProductAdminSlice.reducer;
