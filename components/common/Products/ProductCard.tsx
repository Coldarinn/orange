import Image from 'next/image';
import Link from 'next/link';
import Product from '@/assets/images/products/1.png';
import Heart from '@/assets/images/icons/heart.svg';
import Star from '@/assets/images/icons/star.svg';
import Cart from 'assets/images/icons/cart.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

interface IProductCard {
  showRating?: boolean,
  sale?: string,
  isFavorite?:boolean,
}

function ProductCard({ showRating = false, sale, isFavorite = false }: IProductCard) {
  return (
    <>
      <div className="product-card mb-[12px] relative">
        <Heart
          className={`absolute right-0 stroke-text-500 cursor-pointer z-[2] transition duration-300 hover:stroke-red${isFavorite ? ' fill-red stroke-red' : ''}`}
        />
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, el: '.product-card-pagination' }}
        >
          <SwiperSlide>
            <Link href={`/catalog/${1}`}>
              <Image
                src={Product}
                alt="Изображение товара"
                style={{ width: '100%' }}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={`/catalog/${1}`}>
              <Image
                src={Product}
                alt="Изображение товара"
                style={{ width: '100%' }}
              />
            </Link>
          </SwiperSlide>
          <div className="product-card-pagination" />
        </Swiper>
      </div>
      <div className="flex items-center mb-[8px]">
        {sale ? (
          <>
            <span className="font-bold text-xl mr-[8px]">
              299 ₽
            </span>
            <span className="text-sm text-text-400 line-through mr-[13px] pt-[5px]">
              499 ₽
            </span>
            <span className="text-sm text-text-700 px-[8px] py-[3px] rounded-[20px] bg-brand-350">
              {sale}
            </span>
          </>
        ) : (
          <span className="font-bold text-xl">
            499 ₽
          </span>
        )}
      </div>
      <Link
        href={`/catalog/${1}`}
        className="ease-in duration-200 hover:text-brand-700"
      >
        Конструктор для детей
      </Link>
      {showRating && (
        <>
          <div className="flex items-center mt-[10px]">
            <Star className="stroke-stars fill-stars" />
            <Star className="stroke-stars fill-stars ml-[6px]" />
            <Star className="stroke-stars fill-stars ml-[6px]" />
            <Star className="stroke-stars fill-stars ml-[6px]" />
            <Star className="stroke-text-700 ml-[6px]" />
            <span className="text-sm text-text-600 ml-[12px] pt-[4px]">
              12
            </span>
          </div>
          <button
            type="button"
            className="product-card__button"
          >
            <Cart className="fill-white" />
            В корзину
          </button>
        </>
      )}
    </>
  );
}

export default ProductCard;
