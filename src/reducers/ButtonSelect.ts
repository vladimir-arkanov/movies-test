/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface ButtonType {
  isFavorite: boolean
}

const initialState: Record<string, ButtonType> = {};

export const ButtonSelect = createSlice({
  name: 'button',
  initialState,
  reducers: {
    buttonFavorite: (state, action) => {
      const { id, isFavorite } = action.payload;

      state[id] = {
        isFavorite,
      };
    },
    buttonDelete: (state, action) => {
      const { id, isFavorite } = action.payload;

      state[id] = {
        isFavorite,
      };
    },
  },
});

export const { buttonFavorite, buttonDelete } = ButtonSelect.actions;

export default ButtonSelect.reducer;
