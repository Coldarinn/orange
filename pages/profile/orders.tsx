import Layout from '@/components/Profile/Layout';
import Head from 'next/head';

function Orders() {
  return (
    <>
      <Head>
        <title>
          Весёлый апельсин | Профиль
        </title>
        <meta
          name="description"
          content="Весёлый апельсин | Профиль"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Layout>
        <div>
          orders
        </div>
      </Layout>
    </>
  );
}

export default Orders;
