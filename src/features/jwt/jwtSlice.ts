import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface JWTState {
  access_token: string;
}

const initialState: JWTState = {
  access_token: '',
};

export const jwtSlice = createSlice({
  name: 'jwtAuth',
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
  },
});

export const { updateToken } = jwtSlice.actions;

export default jwtSlice.reducer;
