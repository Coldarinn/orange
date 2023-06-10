import axios from 'axios';
import EndpointNames from '../config/api';

const $api = axios.create({
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use((config) => config, async (error) => {
  const originalRequest = error.config;
  if (error.response?.status === 401 && originalRequest && !originalRequest.isRetry) {
    originalRequest.isRetry = true;
    try {
      const url = EndpointNames.REFRESH;
      const response = await axios.get(url, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return await $api.request(originalRequest);
    } catch (e) {
      localStorage.removeItem('token');
    }
  }
  throw error;
});

export default $api;
