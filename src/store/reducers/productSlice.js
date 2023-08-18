import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

import {
  getProductListService,
  getProductByIdService,
} from "../services/productServices";

const SLICE_NAME = "product";

const initialState = {
  productList: null,
  product: null,
  isLoading: false,
};

export const getProductList = createAsyncThunk(
  `${SLICE_NAME}/getProductList`,
  async () => await getProductListService()
);

export const getProduct = createAsyncThunk(
  `${SLICE_NAME}/getProduct`,
  async (id) => await getProductByIdService(id)
);

export const productSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    resetProduct: (state) => {
      state.product = initialState.product;
      state.isLoading = initialState.isLoading;
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending(getProduct), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isFulfilled(getProductList), (state, action) => {
      state.productList = action.payload;
    });
    builder.addMatcher(isFulfilled(getProduct), (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addMatcher(isRejected(getProduct), (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(isRejected(getProductList), (state) => {
      state.product = [];
    });
  },
});

export const { resetProduct, reset } = productSlice.actions;

export const selectProduct = (state) => state.product;
export default productSlice.reducer;
