import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "basket";

const initialState = {
  open: false,
  basket: JSON.parse(localStorage.getItem("basket")) ?? [],
};

export const basketSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    addBasket: (state, action) => {
      const { id, colorId } = action.payload;
      const basketItem = state.basket.find(
        (item) => item.id === id && item.colorId === colorId
      );
      if (basketItem) {
        basketItem.count += 1;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeBasket: (state, action) => {
      const { id, colorId } = action.payload;
      const basketItem = state.basket.find(
        (item) => item.id === id && item.colorId === colorId
      );
      if (basketItem) {
        if (basketItem.count > 1) {
          basketItem.count -= 1;
        } else {
          state.basket = state.basket.filter(
            (item) => item.id !== id || item.colorId !== colorId
          );
        }
        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
    reset: () => initialState,
  },
});

export const { setOpen, addBasket, removeBasket, reset } = basketSlice.actions;

export const selectBasket = (state) => state.basket;
export default basketSlice.reducer;
