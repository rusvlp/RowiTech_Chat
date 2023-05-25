import { PayloadAction } from '@reduxjs/toolkit';
import { UsersState } from '.';

export const onSetCategory = (
  state: UsersState,
  { payload }: PayloadAction<string>,
) => {
  state.category = payload;
};