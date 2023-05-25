import { createSlice } from '@reduxjs/toolkit';
import {
  onLogOut,
  onLoginUser,
  onEmailUser,
  onPasswordUser,
  setValidateErrorInNull,
  getValidationDataLogIn,
} from './actions';
import * as asyncActs from './async';

export interface AuthState {
  isLogged: boolean;
  loadingState: 'loading' | 'failed' | 'success';
  authKey: string;
  userStatus: number;
  login: string;
  email: string;
  password: string;
  validationError: string;
  error?: string;
}

const initialState: AuthState = {
  isLogged: false,
  loadingState: 'success',
  authKey: '',
  userStatus: 0,
  login: '',
  email: '',
  password: '',
  validationError: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogOut,
    onLoginUser,
    onEmailUser,
    onPasswordUser,
    setValidateErrorInNull,
    getValidationDataLogIn,
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncActs.logIn.pending, (state) => {
        state.loadingState = 'loading';
      })
      .addCase(asyncActs.logIn.rejected, (state, { error }) => {
        state.loadingState = 'failed';
        state.error = error.code;
        state.validationError = `На сервере произошла ошибка, попробуйте позднее. Код ошибки: ${error.code}`;
        state.isLogged = false;
      })
      .addCase(asyncActs.logIn.fulfilled, (state, { payload }) => {
        state.loadingState = 'success';
        state.isLogged = true;
      });
  },
});

export const {
  onLogOut: onLogOutAction,
  onLoginUser: onLoginUserAction,
  onEmailUser: onEmailUserAction,
  onPasswordUser: onPasswordUserAction,
  setValidateErrorInNull: setValidateErrorInNullAction,
  getValidationDataLogIn: getValidationDataLogInAction,
} = authSlice.actions;

export default authSlice.reducer;
