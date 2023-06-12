import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slicers/authSlice';
import scrollBarReducer from './slicers/scrollbarSlice';
import alertsReducer from './slicers/alertsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    scrollbar: scrollBarReducer,
    alerts: alertsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
