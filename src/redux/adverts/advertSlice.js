import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllAdverts, getAllOfAdverts } from './adverts.operations';

const initialState = {
  adverts: [],
  allAdverts: [],
  favoriteAdverts: [],
  filteredAdverts: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  // Ім'я слайсу
  name: 'adverts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    addToFavorites: (state, { payload }) => {
      state.isLoading = false;
      state.favoriteAdverts.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.isLoading = false;
      state.favoriteAdverts = state.favoriteAdverts.filter(
        advert => advert.id !== payload.id
      );
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = payload;
      })
      .addCase(getAllOfAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allAdverts = payload;
      })

      .addMatcher(isAnyOf(getAllAdverts.pending), state => {
        state.isLoading = true;
      })

      .addMatcher(isAnyOf(getAllAdverts.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

// Генератори екшн-креаторс
export const advertsReducer = advertsSlice.reducer;
export const {
  addToFavorites,
  removeFromFavorites,
  filterAdverts,
  clearFilterAdverts,
} = advertsSlice.actions;
