import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      const users = action.payload;
      state.items = users;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
