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
  console.log('eror data: ', error.response?.data);
  if (originalRequest && !originalRequest.isRetry && error.response?.data.description === 'wrong token') {
    originalRequest.isRetry = true;
    try {
      console.log('send request');
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
      console.log('request response: ', response);
      store.dispatch(setUser({
        accessToken: response.data.result.access_token,
        refreshToken: response.data.result.refresh_token,
        fingerKey: response.data.result.finger_key,
        roles: store.getState().auth.roles,
      }));
      nookies.set(null, 'accessToken', response.data.result.access_token);
      nookies.set(null, 'refreshToken', response.data.result.refresh_token);
      nookies.set(null, 'fingerKey', response.data.result.finger_key);
      console.log('after set cookies');
    } catch {
      nookies.destroy(null, 'accessToken');
      nookies.destroy(null, 'roles');
      nookies.destroy(null, 'refreshToken');
      nookies.destroy(null, 'fingerKey');
      store.dispatch(setUser({
        accessToken: '', refreshToken: '', fingerKey: '', roles: [],
      }));
      console.log('after destroy cookies');
      Router.push('/');
      return await $api.request(originalRequest);
    }
  } else if (originalRequest.isRetry) {
    console.log('in else-if');
    nookies.destroy(null, 'accessToken');
    nookies.destroy(null, 'roles');
    nookies.destroy(null, 'refreshToken');
    nookies.destroy(null, 'fingerKey');
    if (error.response?.data.description) {
      console.log('in if: ', error.response?.data);
      store.dispatch(addAlert({ id: Date.now(), type: 'error', text: error.response.data?.description ?? 'Возникла непредвиденная ошибка ошибка' }));
    }
    Router.push('/');
  }
  throw error;
});

export default $api;
