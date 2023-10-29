import { createSlice } from '@reduxjs/toolkit';

const activeIndexReducer = createSlice({
  name: 'activeIndex',
  initialState : {
    activeIndex: 0,
  },
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = activeIndexReducer.actions;
export default activeIndexReducer.reducer;