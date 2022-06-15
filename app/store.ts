import { configureStore } from '@reduxjs/toolkit';
import jwtReducer from '../src/features/jwt/jwtSlice';

export const store = configureStore({
  reducer: {
    jwtAuth: jwtReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
