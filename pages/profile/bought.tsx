import { useEffect, useState } from 'react';
import Head from 'next/head';
import BoughtProducts from '@/components/Profile/BoughtProducts';
import Layout from '@/components/Profile/Layout';
import Breadcrumbs from '@/components/common/UI/Breadcrumbs';
import $api from '@/services/api';
import getNoun from '@/utils/getNoun';
import { IProduct } from '@/components/common/Products/ProductCard';

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
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProducts = (limit = 4, offset = 0) => {
    setIsLoading(true);
    $api.get<{ result: { Products: IProduct[], Count: number } }>(
      '/product/bought',
      { params: { limit, offset } },
    )
      .then((res) => {
        setProducts(res.data.result.Products);
        setTotalCount(res.data.result.Count);
      })
      .finally(() => { setIsLoading(false); });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Весёлый апельсин | Профиль</title>
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
      <div className="container pt-[200px] md:pt-[230px] md:px-[24px]">
        <Breadcrumbs list={list} />
        <div className="flex items-center mb-[32px]">
          <div className="text-[32px] ubuntu text-text-900">Купленное</div>
          <div className="ml-[16px] mt-[8px] text-text-600">
            {totalCount}
            {' '}
            {getNoun(totalCount, 'товар', 'товара', 'товаров')}
          </div>
        </div>
      </div>
      <Layout>
        <BoughtProducts
          products={products}
          totalCount={totalCount}
          getProducts={getProducts}
          isLoading={isLoading}
        />
      </Layout>
    </>
  );
}

export default Bought;
