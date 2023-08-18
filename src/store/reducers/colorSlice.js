import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

import { getColorListService } from "../services/colorServices";

const SLICE_NAME = "color";

const initialState = {
  colorList: [],
  isLoading: false,
};

export const getColorList = createAsyncThunk(
  `${SLICE_NAME}/getColorList`,
  async () => await getColorListService()
);

export const colorSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(isPending(getColorList), (state) => {
      state.isLoading = true;
    });

    builder.addMatcher(isFulfilled(getColorList), (state, action) => {
      state.isLoading = false;
      state.colorList = action.payload;
    });
    builder.addMatcher(isRejected(getColorList), (state) => {
      state.isLoading = false;
    });
  },
});

export const { reset } = colorSlice.actions;

export const selectColor = (state) => state.color;
export default colorSlice.reducer;
