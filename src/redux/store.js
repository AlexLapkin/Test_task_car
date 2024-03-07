import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/advertSlice';
// import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    advertStore: advertsReducer,
    // filter: filterReducer,
  },
});
