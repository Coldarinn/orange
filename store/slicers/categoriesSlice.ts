import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICategorie {
  name: string,
  subcategories: string[]
}

interface ICategoriesState {
  categories: ICategorie[],
}

const initialState: ICategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategoriesState>) => {
      state.categories = action.payload.categories;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
