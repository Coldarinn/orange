import Head from 'next/head';
import ProductCards from '@/components/common/Products/ProductCards';
import Breadcrumbs from '@/components/common/UI/Breadcrumbs';
import Filters from '@/components/Catalog/Filters';
import Products from '@/components/Catalog/Products';
import Discounts from '@/components/common/Subscribe/Discounts';
import Button from '@/components/common/UI/Button';
import { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openFilters = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };
  const closeFilters = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };
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
          <div className="flex items-center mb-[32px]">
            <span className="text-[32px] text-text-900 mr-[24px] ubuntu">
              LEGO
            </span>
            <span className="text-text-600 pt-[5px]">328 товаров</span>
          </div>
          <div className="flex items-start">
            <Filters
              isOpen={isOpen}
              closeFilters={closeFilters}
            />
            <Products openFilters={openFilters} />
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
