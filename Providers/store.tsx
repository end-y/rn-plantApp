import { configureStore } from '@reduxjs/toolkit';
import dimensionReducer from './Dimensions/actions';
import activeIndexReducer from './ActiveIndex/actions';

const store = configureStore({
  reducer: {
    dimension: dimensionReducer,
    activeIndex: activeIndexReducer,
  },
});

export { store };