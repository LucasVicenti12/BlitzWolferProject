import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: 'product',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log(action)
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =  productReducer.actions;

export default productReducer.reducer;
