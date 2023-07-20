import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import ProductCards from '@/components/common/Products/ProductCards';
import Breadcrumbs, { IBreadcrumbsItem } from '@/components/common/UI/Breadcrumbs';
import Filters from '@/components/Catalog/Filters';
import Products from '@/components/Catalog/Products';
import Discounts from '@/components/common/Subscribe/Discounts';
import Button from '@/components/common/UI/Button';
import $api from '@/services/api';
import EndpointNames from '@/config/api';
import { IProduct } from '@/components/common/Products/ProductCard';

export const getServerSideProps: GetServerSideProps = async () => {
  const manufacturersList = await $api.get<{ result: string[] }>(
    EndpointNames.PRODUCT_GET_MANUFACTURES,
    {
      proxy: {
        host: process.env.NEXT_PUBLIC_API_HOST ?? '158.160.13.142',
        port: +(process.env.NEXT_PUBLIC_API_PORT ?? '7732'),
      },
    },
  ).then((response) => response.data.result);

  const sexesList = await $api.get<{ result: string[] }>(
    EndpointNames.PRODUCT_GET_SEXES,
    {
      proxy: {
        host: process.env.NEXT_PUBLIC_API_HOST ?? '158.160.13.142',
        port: +(process.env.NEXT_PUBLIC_API_PORT ?? '7732'),
      },
    },
  ).then((response) => response.data.result);

  const countriesList = await $api.get<{ result: string[] }>(
    EndpointNames.PRODUCT_GET_COUNTRIES,
    {
      proxy: {
        host: process.env.NEXT_PUBLIC_API_HOST ?? '158.160.13.142',
        port: +(process.env.NEXT_PUBLIC_API_PORT ?? '7732'),
      },
    },
  ).then((response) => response.data.result);

  return {
    props: {
      manufacturersList, sexesList, countriesList,
    },
  };
};

const defaultParams = {
  min_price: 0,
  max_price: 100000,
  limit: 4,
  offset: 0,
  sort: 'popularity_desc',
};

interface ICatalog {
  manufacturersList: string[],
  sexesList:string[],
  countriesList:string[],
}

export default function Catalog({
  manufacturersList, sexesList, countriesList,
}: ICatalog) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [count, setCount] = useState<number>(0);
  const [query, setQuery] = useState(defaultParams);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const list: IBreadcrumbsItem[] = [];

  const openFilters = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };
  const closeFilters = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  const getProducts = async (queryParams?: any) => {
    setIsLoading(true);
    const newQuery = { ...query, ...queryParams };
    setQuery(newQuery);
    const { Products: productsListResp, Count } = await $api.get<{
      result: { Products: IProduct[], Count: number }
    }>(
      '/product',
      {
        proxy: {
          host: process.env.NEXT_PUBLIC_API_HOST ?? '158.160.13.142',
          port: +(process.env.NEXT_PUBLIC_API_PORT ?? '7732'),
        },
        params: newQuery,
      },
    ).then((response) => response.data.result ?? [])
      .finally(() => setIsLoading(false));
    setProducts(productsListResp);
    setCount(Count);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Весёлый апельсин | Каталог товаров</title>
        <meta
          name="description"
          content="Весёлый апельсин Каталог товаров"
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
      <div className={`catalog-filters-overlay${isOpen ? ' is-open' : ''}`} />
      <div className="pt-[200px] md:pt-[230px] md:px-[24px] pb-[60px] border-b border-text-100 mb-[60px] md:mb-[32px]">
        <div className="container">
          <Breadcrumbs list={list} />
          <div className="flex items-start">
            <Filters
              manufacturers={manufacturersList}
              sexes={sexesList}
              countries={countriesList}
              isOpen={isOpen}
              closeFilters={closeFilters}
              getProducts={getProducts}
            />
            <Products
              openFilters={openFilters}
              products={products}
              totalCount={count}
              getProducts={getProducts}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
      <div className="mb-[57px]">
        <div className="container">
          <div className="md:px-[24px]">
            <div className="flex justify-between items-center mb-[33px] md:mb-[24px]">
              <div className="text-2xl text-text-900 ubuntu">
                Вы недавно смотрели
              </div>
              <Button
                type="black"
                text="Посмотреть ещё"
                customStyles="md:hidden"
              />
            </div>
            <ProductCards id="third" />
            <Button
              type="black"
              text="Посмотреть ещё"
              customStyles="!hidden md:!flex !w-full mt-[20px]"
            />
          </div>
          <div className="mt-[90px] md:mt-[40px]">
            <Discounts />
          </div>
        </div>
      </div>
    </>
  );
}
