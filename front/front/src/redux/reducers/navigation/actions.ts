import { PayloadAction } from '@reduxjs/toolkit';
import { NavState } from '.';

export const setActiveSubPath = (
  state: NavState,
  { payload }: PayloadAction<string>,
) => {
  state.activeSubPath = payload;
};

export const setActivePath = (
  state: NavState,
  { payload }: PayloadAction<string>,
) => {
  state.activePath = payload;
};

export const setActiveId = (
  state: NavState,
  { payload }: PayloadAction<number | undefined>,
) => {
  state.activeId = payload;
};
