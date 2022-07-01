import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface JWTState {
  currentUser: object;
}

const initialState: JWTState = {
  currentUser: {},
};

export const jwtSlice = createSlice({
  name: 'jwtAuth',
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<object>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { updateCurrentUser } = jwtSlice.actions;

export default jwtSlice.reducer;
