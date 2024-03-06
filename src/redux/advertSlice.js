import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllAdverts,
  getAdvertById,
  getFavoriteAll,
  addToFavorites,
  removeFromFavorites,
} from './operations';

const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  // Ім'я слайсу
  name: 'adverts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = payload;
      })
      .addCase(getAdvertById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = payload;
      })
      .addCase(getFavoriteAll.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = payload;
      })
      .addCase(addToFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = [...state.contacts, payload];
      })
      .addCase(removeFromFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = state.adverts.filter(
          advert => advert.id !== payload.id
        );
      })

      .addMatcher(
        isAnyOf(
          getAllAdverts.pending,
          getAdvertById.pending,
          getFavoriteAll.pending,
          addToFavorites.pending,
          removeFromFavorites.pending
        ),
        state => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          getAllAdverts.rejected,
          getAdvertById.rejected,
          getFavoriteAll.rejected,
          addToFavorites.rejected,
          removeFromFavorites.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

// Генератори екшн-креаторс
export const advertsReducer = advertsSlice.reducer;
