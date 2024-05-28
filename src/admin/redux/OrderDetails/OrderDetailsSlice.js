import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const OrderDetailsSlice = createSlice({
  name: "OrderDetails",
  initialState,
  reducers: {
    setOrderDetails: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setOrderDetails } = OrderDetailsSlice.actions;

export default OrderDetailsSlice.reducer;
