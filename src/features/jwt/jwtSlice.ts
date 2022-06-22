import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface JWTState {
  currentUser: object;
  isLoggedIn: boolean;
}

const initialState: JWTState = {
  currentUser: {},
  isLoggedIn: false,
};

export const jwtSlice = createSlice({
  name: 'jwtAuth',
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<object>) => {
      state.currentUser = action.payload;
    },
    updateLoggedInStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { updateCurrentUser, updateLoggedInStatus } = jwtSlice.actions;

export default jwtSlice.reducer;
