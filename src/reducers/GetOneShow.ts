/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { OneShow } from '../types/OneShow';
import { showService } from '../service/showService';

export const receiveOneShow = createAsyncThunk<OneShow, string>(
  'OneShow/get', async (id: string) => {
    try {
      const response = await showService.getOneShow(id);

      return response;
    } catch (error) {
      console.error('Sorry, nothing found with this search');
      throw error;
    }
  },
);

interface ShowType {
  show: OneShow | null
  showError: string,
  showLoading: boolean,
}

const initialState: ShowType = {
  show: null,
  showError: '',
  showLoading: false,
};

export const OneShowSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(receiveOneShow.fulfilled, (state, action) => {
      state.show = action.payload;
      state.showLoading = false;
    });
    builder.addCase(receiveOneShow.pending, (state) => {
      state.showLoading = true;
    });
    builder.addCase(receiveOneShow.rejected, (state) => {
      state.showError = 'Sorry, nothing found with this search';
      state.showLoading = false;
    });
  },
});

export default OneShowSlice.reducer;
