import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertsReducer } from './adverts/advertSlice';
import { modalReducer } from './modal/modalSlice';
// import { filterReducer } from './filter/filterSlice';

const advertsConfig = {
  key: 'adverts',
  storage,
  // whitelist: ['favorites', 'cars'],
};

export const store = configureStore({
  reducer: {
    advertStore: persistReducer(advertsConfig, advertsReducer),
    modal: modalReducer,
    // filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
