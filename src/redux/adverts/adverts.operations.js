import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://65e7810d53d564627a8eef18.mockapi.io';

export const getAllAdverts = createAsyncThunk(
  'adverts/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/adverts');
      // Це буде записано в action.payload ({ payload }) редюсера
      // console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getAdvertById = createAsyncThunk(
  'adverts/getById',
  async (advertId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts/${advertId}`);
      // Це буде записано в action.payload ({ payload }) редюсера
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getFavoriteAll = createAsyncThunk(
  'adverts/favorite',
  async ({ page, size }, thunkAPI) => {
    const searchParams = {
      params: {
        page,
        size,
      },
    };
    try {
      const { data } = await axios.get('/adverts/favorite', searchParams);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'adverts/addToFavorite',
  async (finalCars, thunkAPI) => {
    try {
      const { data } = await axios.post('/adverts/favorites/add', finalCars);
      // Це буде записано в action.payload ({ payload }) редюсера
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'adverts/deleteFromFavorites',
  async (advertId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/adverts/favorites/${advertId}`);
      // Повідомлення про видалення з книги контакту
      Notiflix.Notify.info(`Car ${data.name} is deleted!`, {
        position: 'right-center',
        timeout: 3000,
      });
      // Це буде записано в action.payload ({ payload }) редюсера
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
