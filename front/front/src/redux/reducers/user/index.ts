import { createSlice } from '@reduxjs/toolkit';
import {
  onSetCategory,
} from './actions';

export interface UsersState {
  loadingState: 'loading' | 'failed' | 'success';
  error?: string,
  category?: string,
}

const initialState: UsersState = {
  loadingState: 'success',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    onSetCategory,
  },
});

export const {
  onSetCategory: onSetCategoryAction,
} = usersSlice.actions;

export default usersSlice.reducer;
