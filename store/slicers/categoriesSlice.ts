import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICategorie {
  name: string,
  subcategories: string[]
}

interface ICategoriesState {
  categories: ICategorie[],
  currentCategory: ICategorie,
  currentSubcategory: string,
}

const initialState: ICategoriesState = {
  categories: [],
  currentCategory: { name: '', subcategories: [] },
  currentSubcategory: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategorie[]>) => {
      state.categories = action.payload;
    },
    setCurrentCategory: (state, action: PayloadAction<{
      category: ICategorie, subcategory: string
    }>) => {
      state.currentCategory = action.payload.category;
      state.currentSubcategory = action.payload.subcategory;
    },
  },
});

export const { setCategories, setCurrentCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
