import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  userInfo: {
    internal_id: string | null,
    login: string | null,
    email: string | null,
    name:string | null,
    phone_number: string | null,
    birth_date: string | null,
    contact_data: string | null
  }
}

const initialState: IUserState = {
  userInfo: {
    internal_id: '',
    login: '',
    email: '',
    name: '',
    phone_number: '',
    birth_date: '',
    contact_data: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUserState>) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    clearUserInfo: (state) => {
      state.userInfo.internal_id = '';
      state.userInfo.login = '';
      state.userInfo.email = '';
      state.userInfo.name = '';
      state.userInfo.phone_number = '';
      state.userInfo.birth_date = '';
      state.userInfo.contact_data = '';
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
