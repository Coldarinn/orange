import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IProductInfo {
  internal_id: string,
  name: string,
  price: number,
  old_price: number,
  count: number,
  manufacturer: string,
  categories: string[],
  description: string,
  pictures: string[],
  buy_count: number,
  show: boolean,
  stars: number,
  liked: boolean,
  in_basket: boolean,
  feedbacks_count: number,
  sex: string,
  country: string,
  subcategory: string,
  isSelected: boolean,
}

interface IUserState {
  userInfo: {
    internal_id: string | null,
    login: string | null,
    email: string | null,
    name:string | null,
    phone_number: string | null,
    birth_date: string | null,
    contact_data: string | null,
    viewedProducts: IProductInfo[]
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
    viewedProducts: [],
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
      state.userInfo.viewedProducts = [];
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
