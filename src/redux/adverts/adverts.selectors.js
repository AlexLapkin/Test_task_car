// import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.adverts.isLoading;
// export const selectAllAdverts = state => state.adverts.allAdverts;
export const selectAllAdverts = state => state.advertStore.adverts;
// console.log(selectAllAdverts);
export const selectAdverts = state => state.adverts.adverts;
export const selectAdvertById = (state, advertId) =>
  state.adverts.adverts.find(advert => advert._id === advertId);
export const selectFavoriteDrinks = state => state.advert.favoriteAdverts;
// export const selectTotalDrinks = state => state.drinks.total;
// export const selectPage = state => state.drinks.page;
