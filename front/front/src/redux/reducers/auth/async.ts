import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

export const logIn = createAsyncThunk(
  'auth/login',
  async (_, { getState }) => {
    const { auth } = getState() as RootState;
    const {
      email,
      password,
    } = auth;

    // const { data } = await axios.post('http://192.128.20.2/login', { email, password });
    // auth.password = '';
    //
    // return data;
    return;
  },
);