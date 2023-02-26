import Layout from '@/components/Layout';
import '@/assets/styles/main.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout><Component {...pageProps} /></Layout>;
}