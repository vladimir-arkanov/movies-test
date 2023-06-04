/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Shows } from '../types/Shows';
import { showService } from '../service/showService';

export const receiveShowList = createAsyncThunk<Shows[], string>(
  'ShowList/get', async (showName: string) => {
    try {
      const response = await showService.getShowsByName(showName);

      return response;
    } catch (error) {
      console.error('Sorry, nothing found with this search');
      throw error;
    }
  },
);

interface ShowType {
  shows: Shows[] | null | []
  showsError: string,
  showsLoading: boolean,
}

const initialState: ShowType = {
  shows: null,
  showsError: '',
  showsLoading: false,
};

export const ShowsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(receiveShowList.fulfilled, (state, action) => {
      state.shows = action.payload;
      state.showsLoading = false;
    });
    builder.addCase(receiveShowList.pending, (state) => {
      state.showsLoading = true;
    });
    builder.addCase(receiveShowList.rejected, (state) => {
      state.showsError = 'Sorry, nothing found with this search';
      state.showsLoading = false;
    });
  },
});

export default ShowsSlice.reducer;
