import Head from 'next/head';
import { useEffect, useState } from 'react';
import $api from '@/services/api';
// import EndpointNames from '@/config/api';
// import { useAppDispatch } from '@/hooks/store';
import Layout from '@/components/Profile/Layout';
import Breadcrumbs from '@/components/common/UI/Breadcrumbs';
import Products from '@/components/Catalog/Products';
import { IProduct } from '@/components/common/Products/ProductCard';

const list = [
  {
    id: 1,
    title: 'Профиль ',
    link: '/profile',
  },
  {
    id: 2,
    title: 'Избранное ',
    link: '/profile/favorites',
  },
];

const defaultParams = {
  limit: 4,
  offset: 0,
  like: true,
  sort: 'popularity_desc',
};

function Favorites() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [query, setQuery] = useState(defaultParams);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProducts = async (queryParams?: any) => {
    setIsLoading(true);
    const newQuery = { ...query, ...queryParams };
    setQuery(newQuery);
    const { Products: productsListResp, Count } = await $api.get<{
      result: { Products: IProduct[], Count: number }
    }>('/product', { params: newQuery })
      .then((response) => response.data.result ?? [])
      .finally(() => setIsLoading(false));
    setProducts(productsListResp);
    setTotalCount(Count);
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
      <div className="container pt-[200px] md:pt-[230px]">
        <Breadcrumbs list={list} />
        <div className="flex items-center mb-[32px] md:px-[24px]">
          <div className="text-[32px] ubuntu text-text-900">Избранное</div>
          <div className="ml-[16px] mt-[8px] text-text-600">16 товаров</div>
        </div>
      </div>
      <Layout>
        <Products
          products={products}
          totalCount={totalCount}
          getProducts={getProducts}
          isLoading={isLoading}
        />
      </Layout>
    </>
  );
}

export default Favorites;
