import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllAdverts, getAdvertById } from './adverts.operations';

const initialState = {
  adverts: [],
  favoriteAdverts: [],
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
    addToFavorites: (state, { payload }) => {
      state.isLoading = false;
      state.favoriteAdverts.push(payload);
      console.log(payload);
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
        // console.log(payload);
        // console.log(typeof payload);
      })
      .addCase(getAdvertById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = payload;
      })

      .addMatcher(
        isAnyOf(getAllAdverts.pending, getAdvertById.pending),
        state => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(getAllAdverts.rejected, getAdvertById.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

// Генератори екшн-креаторс
export const advertsReducer = advertsSlice.reducer;
export const { addToFavorites, removeFromFavorites } = advertsSlice.actions;
