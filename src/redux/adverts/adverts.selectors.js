export const selectIsLoading = state => state.adverts.isLoading;
export const selectAllAdverts = state => state.advertStore.adverts;
export const selectAdverts = state => state.adverts.adverts;
export const selectAdvertById = (state, advertId) =>
  state.adverts.adverts.find(advert => advert._id === advertId);
export const selectFavoriteAdverts = state => state.advertStore.favoriteAdverts;
