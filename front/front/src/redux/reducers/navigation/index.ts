import { createSlice } from '@reduxjs/toolkit';
import {
  setActiveSubPath,
  setActivePath,
  setActiveId,
} from './actions';

export interface NavState {
  activePath: string;
  activeSubPath: string;
  activeId?: number;
}

const initialState: NavState = {
  activePath: '/login',
  activeSubPath: '',
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveSubPath,
    setActivePath,
    setActiveId,
  },
});

export const {
  setActiveSubPath: setSubPathAction,
  setActivePath: setActivePathAction,
  setActiveId: setActiveIdAction,
} = navigationSlice.actions;

export default navigationSlice.reducer;
