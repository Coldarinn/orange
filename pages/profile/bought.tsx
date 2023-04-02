import { useCallback, useState } from 'react';
import Head from 'next/head';
import BoughtProducts from '@/components/Profile/BoughtProducts';
import Layout from '@/components/Profile/Layout';
import Breadcrumbs from '@/components/Common/Breadcrumbs';
import { countOptions } from '@/constants/catalog';
import Select, { IOption } from '@/components/Common/Select';

const list = [
  {
    id: 1,
    title: 'Профиль ',
    link: '/profile',
  },
  {
    id: 2,
    title: 'Купленное ',
    link: '/profile/bought',
  },
];

function Bought() {
  const [count, setCount] = useState<IOption>(countOptions[0]);
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
        <div className="flex items-center justify-between mb-[32px]">
          <div className="flex items-center">
            <div className="text-[32px] ubuntu text-text-900">
              Купленное
            </div>
            <div className="ml-[16px] mt-[8px] text-text-600">
              16 товаров
            </div>
          </div>
          <Select
            title={count.title}
            options={countOptions}
            select={useCallback((item) => setCount(item), [])}
          />
        </div>
      </div>
      <Layout>
        <BoughtProducts count={+count.title} />
      </Layout>
    </>
  );
}

export default Bought;
