import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/cartSlice";

let store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
