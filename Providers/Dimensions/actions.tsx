import { createSlice } from '@reduxjs/toolkit';

const dimensionSlice = createSlice({
  name: 'dimension',
  initialState: {
    width: 0,
    height: 0,
  },
  reducers: {
    updateDimensions: (state, action) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export const { updateDimensions } = dimensionSlice.actions;
export default dimensionSlice.reducer;