export const selectIsLoading = state => state.adverts.isLoading;
export const selectAdverts = state => state.advertStore.adverts;
export const selectAllAdverts = state => state.advertStore.allAdverts;
export const selectFilterAdverts = state => state.advertStore.filteredAdverts;
// export const selectFilterAdverts = (state, advertMake) =>
//   state.advertsStore.adverts.find(advert => advert.make === advertMake);

export const selectAdvertById = (state, advertId) =>
  state.adverts.adverts.find(advert => advert._id === advertId);
export const selectFavoriteAdverts = state => state.advertStore.favoriteAdverts;
