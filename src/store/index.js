import { configureStore } from "@reduxjs/toolkit";
import product from "./reducers/productSlice";
import color from "./reducers/colorSlice";
import basket from "./reducers/basketSlice";

export const store = configureStore({
  reducer: {
    product,
    color,
    basket
  },
});
