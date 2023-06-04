/* eslint-disable import/no-named-as-default */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ShowsSlice from '../reducers/ShowList';
import OneShowSlice from '../reducers/GetOneShow';
import favoriteShows from '../reducers/addToFavorite';
import ButtonSelect from '../reducers/ButtonSelect';

const rootReducer = combineReducers({
  shows: ShowsSlice,
  show: OneShowSlice,
  favorite: favoriteShows,
  button: ButtonSelect,
});

const persistConfig = {
  key: 'shows',
  storage,
  blacklist: ['shows'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
