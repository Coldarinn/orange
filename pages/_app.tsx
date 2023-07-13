import Layout from '@/components/Layout/Layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '@/store';
import { setUser } from '@/store/slicers/authSlice';
import { setCategories, ICategorie } from '@/store/slicers/categoriesSlice';
import nookies from 'nookies';
import { useEffect } from 'react';
import $api from '@/services/api';
import EndpointNames from '@/config/api';
import '@/assets/styles/main.scss';

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  const getCategories = async () => {
    await $api.get<{ result: ICategorie[] }>(
      EndpointNames.PRODUCT_GET_CATEGORIES,
      {
        proxy: {
          host: process.env.NEXT_PUBLIC_API_HOST ?? '158.160.13.142',
          port: +(process.env.NEXT_PUBLIC_API_PORT ?? '7732'),
        },
      },
    ).then((response) => {
      store.dispatch(setCategories({ categories: response.data.result }));
    });
  };

  useEffect(() => {
    const accessToken = nookies.get().accessToken ?? '';
    const refreshToken = nookies.get().refreshToken ?? '';
    const fingerKey = nookies.get().fingerKey ?? '';
    const roles = JSON.parse(nookies.get().roles ?? JSON.stringify(''));

    store.dispatch(setUser({
      accessToken, refreshToken, fingerKey, roles,
    }));

    getCategories();
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
