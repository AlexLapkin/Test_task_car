import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/advertSlice';
import { modalReducer } from './modal/modalSlice';
// import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    advertStore: advertsReducer,
    modal: modalReducer,
    // filter: filterReducer,
  },
});
