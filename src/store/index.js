import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import productReducer from "./slices/product";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})


export default store;
