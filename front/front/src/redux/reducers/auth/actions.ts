import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '.';
import { MASKS } from '../../../constants/masks';

export const onLogOut = (state: AuthState) => {
  state.isLogged = false;
  state.loadingState = 'success';
  state.authKey = '';
  state.userStatus = 0;
  state.login = '';
  state.email = '';
  state.password = '';
};

export const onLoginUser = (
  state: AuthState,
  { payload }: PayloadAction<string>,
) => {
  state.login = payload;
};

export const onEmailUser = (
  state: AuthState,
  { payload }: PayloadAction<string>,
) => {
  if (!MASKS.email.test(payload)) {
    state.validationError = 'Некорректный email';
  } else {
    state.validationError = '';
  }
  state.email = payload;
};

export const onPasswordUser = (
  state: AuthState,
  { payload }: PayloadAction<string>,
) => {
  if (!MASKS.password.test(payload)) {
    state.validationError = 'Некорректный пароль';
  } else if (payload.length < 6) {
    state.validationError = 'Пароль слишком короткий';
  } else {
    state.validationError = '';
  }
  state.password = payload;
};

export const setValidateErrorInNull = (
  state: AuthState,
) => {
  state.validationError = '';
};

export const getValidationDataLogIn = (
  state: AuthState,
) =>  {
  const {
    email,
    password,
  } = state;
  const isEmail = MASKS.email.test(email);
  const isPassword = MASKS.password.test(password);
  const isPasswordLength = password.length < 6;

  function setTextAfterValidation(text: string, isValid = false) {
    state.validationError = text;

    if (!isValid)  state.password = '';
  }

  if (!isEmail) {
    setTextAfterValidation('Некорректный email');
  } else if (isPasswordLength) {
    setTextAfterValidation('Пароль слишком короткий');
  } else if (!isPassword) {
    setTextAfterValidation('екорректный пароль');
  }

  if (isEmail && isPassword && isPasswordLength) setTextAfterValidation('', true);
};
