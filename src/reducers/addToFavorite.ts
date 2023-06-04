/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Shows } from '../types/Shows';

interface FavoriteType {
  favoriteShow: Shows[]
}

const initialState: FavoriteType = {
  favoriteShow: [],
};

export const favoriteShows = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Shows>) => {
      const toAddShow = action.payload;

      if (!state.favoriteShow.find(show => show.show.id === toAddShow.show.id)) {
        state.favoriteShow.push(toAddShow);
      }
    },
    deleteFromFavorite: (state, action: PayloadAction<Shows>) => {
      const showToDelete = action.payload;

      state.favoriteShow = state.favoriteShow.filter(show => show.show.id !== showToDelete.show.id);
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = favoriteShows.actions;

export default favoriteShows.reducer;
