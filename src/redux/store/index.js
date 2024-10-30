import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cart";
// import productReducer from './slices/productSlice';
// import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // product: productReducer,
    // user: userReducer,
  },
});

export default store;
