import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './slicers/authSlice';
import userReducer from './slicers/userSlice';
import scrollBarReducer from './slicers/scrollbarSlice';
import alertsReducer from './slicers/alertsSlice';
import categoriesReducer from './slicers/categoriesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    scrollbar: scrollBarReducer,
    alerts: alertsReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(() => store);
