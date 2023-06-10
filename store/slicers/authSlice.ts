import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  token: string,
  fingerKey: string,
}

const initialState: IAuthState = {
  token: '',
  fingerKey: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuthState>) => {
      state.token = action.payload.token;
      state.fingerKey = action.payload.fingerKey;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
