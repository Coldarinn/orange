import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './slicers/authSlice';
import scrollBarReducer from './slicers/scrollbarSlice';
import alertsReducer from './slicers/alertsSlice';
import categoriesReducer from './slicers/categoriesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    scrollbar: scrollBarReducer,
    alerts: alertsReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(() => store);
