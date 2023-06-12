import axios from 'axios';
import { store } from '@/store';
import { addAlert } from '@/store/slicers/alertsSlice';
import EndpointNames from '../config/api';

const $api = axios.create({
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
});

$api.interceptors.response.use((config) => config, async (error) => {
  const originalRequest = error.config;
  if (error.response?.status === 401 && originalRequest && !originalRequest.isRetry) {
    originalRequest.isRetry = true;
    try {
      const response = await axios.get(EndpointNames.REFRESH, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return await $api.request(originalRequest);
    } catch (e) {
      localStorage.removeItem('token');
    }
  } else {
    store.dispatch(addAlert({ id: Date.now(), type: 'error', text: error.response.data.description }));
  }
  throw error;
});

export default $api;
