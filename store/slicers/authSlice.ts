import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  accessToken: string,
  refreshToken: string,
  fingerKey: string,
  roles: string[],
}

const initialState: IAuthState = {
  accessToken: '',
  refreshToken: '',
  fingerKey: '',
  roles: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuthState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.fingerKey = action.payload.fingerKey;
      state.roles = action.payload.roles;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
