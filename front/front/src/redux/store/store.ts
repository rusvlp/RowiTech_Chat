import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  auth,
  navigation,
  users,
} from '../reducers';

// Сюда импортим и вставляем на редусер
const rootReducer = combineReducers({
  auth,
  navigation,
  users,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'navigation', 'users'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defMiddleware) => defMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistedStore = persistStore(store);

// На это забей - это помощь для обращения к стейту
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
