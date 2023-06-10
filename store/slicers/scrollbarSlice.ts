import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IScrollbarState {
  width: number,
  isHide: boolean,
}

const initialState: IScrollbarState = {
  width: 0,
  isHide: true,
};

export const scrollbarSlice = createSlice({
  name: 'scrollbar',
  initialState,
  reducers: {
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setIsHide: (state, action: PayloadAction<boolean>) => {
      state.isHide = action.payload;
    },
  },
});

export const { setWidth, setIsHide } = scrollbarSlice.actions;

export default scrollbarSlice.reducer;
