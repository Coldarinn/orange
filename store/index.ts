import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slicers/authSlice';
import scrollBarReducer from './slicers/scrollbarSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    scrollbar: scrollBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
