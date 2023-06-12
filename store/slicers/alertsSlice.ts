import { createSlice, Dispatch } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type IAlert = {
  id: number,
  type: 'success' | 'error' | 'info',
  text: string,
};

interface IAlertsState {
  alerts: IAlert[],
}

const initialState: IAlertsState = {
  alerts: [],
};

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlerts: (state, action: PayloadAction<IAlert>) => {
      state.alerts = [...state.alerts, action.payload];
    },
    removeAlert: (state, action: PayloadAction<number>) => {
      state.alerts = state.alerts.filter((alert) => alert.id !== action.payload);
    },
  },
});

export const { setAlerts, removeAlert } = alertsSlice.actions;

export const addAlert = (alert: IAlert) => async (dispatch: Dispatch) => {
  dispatch(setAlerts(alert));
  setTimeout(() => {
    dispatch(removeAlert(alert.id));
  }, 5000);
};

export default alertsSlice.reducer;
