import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    advertStore: advertsReducer,
    filter: filterReducer,
  },
});
