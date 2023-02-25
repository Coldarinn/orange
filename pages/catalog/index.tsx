import Head from 'next/head';
import Link from 'next/link';
import ProductCards from '@/components/Common/Swiper/ProductCards';
import Breadcrumbs from '@/components/Common/Breadcrumbs';
import Filters from '@/components/Catalog/Filters';
import Products from '@/components/Catalog/Products';
import Discounts from '@/components/Common/Discounts';

const list = [
  {
    id: 1,
    title: 'Конструкторы ',
    link: '/',
  },
  {
    id: 2,
    title: 'LEGO ',
    link: '/',
  },
];

export default function Catalog() {
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
      <div className="pt-[200px] pb-[60px] border-b border-solid border-text-100 mb-[60px]">
        <div className="container">
          <Breadcrumbs list={list} />
          <div className="flex items-center mb-[32px]">
            <span className="text-[32px] text-text-900 mr-[24px] ubuntu">
              LEGO
            </span>
            <span className="text-text-600 pt-[5px]">
              328 товаров
            </span>
          </div>
          <div className="flex items-start">
            <Filters />
            <Products />
          </div>
        </div>
      </div>
      <div className="mb-[57px]">
        <div className="container">
          <div className="flex justify-between items-center mb-[33px]">
            <div className="text-2xl text-text-900 ubuntu">
              Вы недавно смотрели
            </div>
            <Link
              href="/asd"
              className="py-[10px] px-[16px] text-text-900 border border-solid border-text-800 rounded-[61px]"
            >
              Посмотреть ещё
            </Link>
          </div>
          <ProductCards id="third" />
          <div className="mt-[90px]">
            <Discounts />
          </div>
        </div>
      </div>
    </>
  );
}
