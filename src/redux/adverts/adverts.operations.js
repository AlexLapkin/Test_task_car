import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e7810d53d564627a8eef18.mockapi.io';

export const getAllAdverts = createAsyncThunk(
  'adverts/getAll',
  async ({ limit, page }, thunkAPI) => {
    const searchParams = {
      params: {
        limit,
        page,
      },
    };
    try {
      const { data } = await axios.get('/adverts', searchParams);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
