import Head from 'next/head';
import ProductCards from '@/components/Common/Swiper/ProductCards';
import Breadcrumbs from '@/components/Common/Breadcrumbs';
import Discounts from '@/components/Common/Discounts';
import ProductSLider from '@/components/Catalog/ProductSLider';
import ProductPrice from '@/components/Catalog/ProductPrice';
import Star from '@/assets/images/icons/star.svg';
import Reviews from '@/components/Catalog/Reviews';
import About from '@/components/Catalog/About';
import Button from '@/components/Common/UI/Button';

const list = [
  {
    id: 1,
    title: 'Конструкторы ',
    link: '/',
  },
  {
    id: 2,
    title: 'Детские конструкторы ',
    link: '/',
  },
  {
    id: 3,
    title: 'LEGO ',
    link: '/',
  },
];

export default function Product() {
  return (
    <>
      <Head>
        <title>Весёлый апельсин | Карточка товара</title>
        <meta
          name="description"
          content="Весёлый апельсин Карточка товара"
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
      <div className="pt-[200px] pb-[60px] border-b border-text-100 mb-[60px]">
        <div className="container !max-w-[1331px]">
          <Breadcrumbs list={list} />
          <div className="text-[32px] text-text-900 mb-[18px] ubuntu">
            Конструктор LEGO City Арена для шоу каскадёров 60295
          </div>
          <div className="flex items-center mb-[38px]">
            <Star className="stroke-stars fill-stars" />
            <Star className="stroke-stars fill-stars ml-[6px]" />
            <Star className="stroke-stars fill-stars ml-[6px]" />
            <Star className="stroke-stars fill-stars ml-[6px]" />
            <Star className="stroke-stars fill-stars ml-[6px]" />
            <span className="text-sm text-text-600 ml-[12px] pt-[4px]">
              12 отзывов
            </span>
          </div>
          <div className="flex items-start">
            <div className="max-w-[780px] basis-[780px] mr-[46px]">
              <ProductSLider />
              <About />
              <Reviews />
            </div>
            <ProductPrice />
          </div>
        </div>
      </div>
      <div className="mb-[57px]">
        <div className="container">
          <div className="flex justify-between items-center mb-[38px]">
            <div className="text-2xl text-text-900 ubuntu">
              С этим товаром покупают
            </div>
            <Button
              type="black"
              text="Посмотреть ещё"
            />
          </div>
          <ProductCards id="third" />
          <div className="flex justify-between items-center mt-[64px] mb-[38px]">
            <div className="text-2xl text-text-900 ubuntu">
              Вы недавно смотрели
            </div>
            <Button
              type="black"
              text="Посмотреть ещё"
            />
          </div>
          <ProductCards id="fourth" />
          <div className="mt-[90px]">
            <Discounts />
          </div>
        </div>
      </div>
    </>
  );
}
