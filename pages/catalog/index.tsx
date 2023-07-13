import Head from 'next/head';
import ProductCards from '@/components/common/Products/ProductCards';
import Breadcrumbs, { IBreadcrumbsItem } from '@/components/common/UI/Breadcrumbs';
import Filters from '@/components/Catalog/Filters';
import Products from '@/components/Catalog/Products';
import Discounts from '@/components/common/Subscribe/Discounts';
import Button from '@/components/common/UI/Button';
import { useCallback, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import $api from '@/services/api';
import EndpointNames from '@/config/api';
import { IProduct } from '@/components/common/Products/ProductCard';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/store';

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

interface ICatalog {
  manufacturersList: string[],
  sexesList:string[],
  countriesList:string[],
}

export default function Catalog({
  manufacturersList, sexesList, countriesList,
}: ICatalog) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [count, setCount] = useState<number>(0);
  const [myTimeout, setMyTimeout] = useState<number>(0);
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [reqQuery, setReqQuery] = useState<any>(router.query);

  const { categories } = useAppSelector((state) => state.categories);

  const list: IBreadcrumbsItem[] = [
    {
      id: 1,
      title: router.query?.category ?? '',
      link: `/catalog?category=${router.query?.category ?? ''}`,
    },
  ];

  const openFilters = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };
  const closeFilters = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  const applyFilters = useCallback(async (params: any) => {
    clearTimeout(myTimeout);

    setReqQuery({ ...reqQuery, ...params });

    const newTimeout = setTimeout(async () => {
      const { Products: productsListResp, Count } = await $api.get<{
        Products: IProduct[], Count: number
      }>(
        '/product',
        {
          proxy: {
            host: process.env.NEXT_PUBLIC_API_HOST ?? '158.160.13.142',
            port: +(process.env.NEXT_PUBLIC_API_PORT ?? '7732'),
          },
          params: { ...reqQuery, ...params },
        },
      ).then((response) => response.data.result ?? []);
      setProducts(productsListResp);
      setCount(Count);
    }, 100);
    setMyTimeout(+newTimeout);
  }, [reqQuery]);

  useEffect(() => {
    setFilteredCategories(categories
      ?.find((category) => category.name === router.query?.category)?.subcategories ?? []);
    setReqQuery(router.query);
  }, [categories, router.query]);

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
              categories={filteredCategories}
              sexes={sexesList}
              countries={countriesList}
              isOpen={isOpen}
              closeFilters={closeFilters}
              applyFilters={applyFilters}
            />
            <Products
              openFilters={openFilters}
              products={products}
              totalCount={count}
              applyFilters={applyFilters}
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
