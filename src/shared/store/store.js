import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../modules/Product/reducer/productReducer";

const store = configureStore({
  reducer: {
    product: productReducer
  },
});

export default store;
