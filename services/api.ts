import Router from 'next/router';
import axios from 'axios';
import nookies from 'nookies';
import { store } from '@/store';
import { addAlert } from '@/store/slicers/alertsSlice';
import { setUser } from '@/store/slicers/authSlice';
import EndpointNames from '@/config/api';

const $api = axios.create({
  baseURL: '/api',
  withCredentials: true,
  proxy: {
    host: process.env.NEXT_PUBLIC_API_HOST ?? '',
    port: +(process.env.NEXT_PUBLIC_API_PORT ?? ''),
  },
});

$api.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.AccessToken = nookies.get().accessToken;
  // eslint-disable-next-line no-param-reassign
  config.headers.FingerKey = nookies.get().fingerKey;
  return config;
});

$api.interceptors.response.use((config) => config, async (error) => {
  const originalRequest = error.config;
  if (originalRequest && !originalRequest.isRetry && (error.response?.data.description === 'wrong token' || error.response?.data.description === 'user not found')) {
    originalRequest.isRetry = true;
    try {
      const response = await axios.post(
        `/api${EndpointNames.REFRESH}`,
        null,
        {
          proxy: {
            host: process.env.NEXT_PUBLIC_API_HOST ?? '',
            port: +(process.env.NEXT_PUBLIC_API_PORT ?? ''),
          },
          headers: {
            FingerKey: nookies.get().fingerKey || '',
            RefreshToken: nookies.get().refreshToken || '',
          },
        },
      );
      store.dispatch(setUser({
        accessToken: response.data.result.access_token,
        refreshToken: response.data.result.refresh_token,
        fingerKey: response.data.result.finger_key,
        roles: store.getState().auth.roles,
      }));
      nookies.set(null, 'accessToken', response.data.result.access_token);
      nookies.set(null, 'refreshToken', response.data.result.refresh_token);
      nookies.set(null, 'fingerKey', response.data.result.finger_key);
    } catch {
      nookies.destroy(null, 'accessToken');
      nookies.destroy(null, 'roles');
      nookies.destroy(null, 'refreshToken');
      nookies.destroy(null, 'fingerKey');
      store.dispatch(setUser({
        accessToken: '', refreshToken: '', fingerKey: '', roles: [],
      }));
      Router.push('/');
      return await $api.request(originalRequest);
    }
  } else if (originalRequest.isRetry) {
    nookies.destroy(null, 'accessToken');
    nookies.destroy(null, 'roles');
    nookies.destroy(null, 'refreshToken');
    nookies.destroy(null, 'fingerKey');
    if (error.response?.data.description) {
      store.dispatch(addAlert({ id: Date.now(), type: 'error', text: error.response.data?.description ?? 'Возникла непредвиденная ошибка ошибка' }));
    }
    Router.push('/');
  }
  throw error;
});

export default $api;
