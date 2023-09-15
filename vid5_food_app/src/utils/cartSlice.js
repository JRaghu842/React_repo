import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export let { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
