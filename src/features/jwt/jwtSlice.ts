import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface JWTState {
  access_token: string;
  isLoggedIn: boolean;
}

const initialState: JWTState = {
  access_token: '',
  isLoggedIn: false,
};

export const jwtSlice = createSlice({
  name: 'jwtAuth',
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    updateLoggedInStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { updateToken, updateLoggedInStatus } = jwtSlice.actions;

export default jwtSlice.reducer;
