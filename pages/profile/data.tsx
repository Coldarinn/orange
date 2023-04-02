import Layout from '@/components/Profile/Layout';
import Head from 'next/head';
import Form from '@/components/Profile/Form';
import Breadcrumbs from '@/components/Common/Breadcrumbs';

const list = [
  {
    id: 1,
    title: 'Профиль ',
    link: '/profile',
  },
  {
    id: 2,
    title: 'Личные данные ',
    link: '/profile/data',
  },
];

function Data() {
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
      <div className="container pt-[200px]">
        <Breadcrumbs list={list} />
        <div className="text-[32px] ubuntu text-text-900 mb-[32px]">
          Личные данные
        </div>
      </div>
      <Layout>
        <Form />
      </Layout>
    </>
  );
}

export default Data;
