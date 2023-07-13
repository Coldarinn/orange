import Image from 'next/image';
import Link from 'next/link';
import Heart from '@/assets/images/icons/heart.svg';
import Star from '@/assets/images/icons/star.svg';
import Cart from 'assets/images/icons/cart.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

export interface IProduct {
  internal_id: string,
  name: string,
  price: number,
  old_price?: null | number,
  count: number,
  manufacturer: string,
  categories: string[],
  description: string,
  pictures: string[],
  buy_count: number,
  show: boolean,
  liked: boolean,
  stars: number,
  feedbacks_count: number,
}

interface IProductCard {
  showRating?: boolean,
  product: IProduct,
}

// function ProductCard({ showRating = false, sale, isFavorite = false }: IProductCard) {
function ProductCard({ showRating = false, product }: IProductCard) {
  return (
    <>
      <div className="product-card mb-[12px] relative">
        <button
          type="button"
          className="w-[36px] h-[36px] flex justify-center items-center rounded-full bg-white absolute right-[-8px] cursor-pointer z-[2]"
        >
          <Heart
            className={`stroke-text-500 transition duration-300 hover:stroke-red${product?.liked ? ' fill-red !stroke-red' : ''}`}
          />
        </button>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, el: '.product-card-pagination' }}
        >
          {product?.pictures.map((picture) => (
            <SwiperSlide
              key={picture}
              className="pt-[100%]"
            >
              <Link
                href={`/catalog/${1}`}
                className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Image
                  unoptimized
                  src={`data:image/jpeg;base64,${picture}`}
                  alt="Изображение товара"
                  width={0}
                  height={0}
                  className="w-full object-contain"
                />
              </Link>
            </SwiperSlide>
          ))}
          <div className="product-card-pagination" />
        </Swiper>
      </div>
      <div className="flex items-center mb-[8px]">
        {product?.old_price ? (
          <>
            <span className="font-bold text-xl mr-[8px]">
              {product?.price}
              {' '}
              ₽
            </span>
            <span className="text-sm text-text-400 line-through mr-[13px] pt-[5px]">
              {product?.old_price}
              {' '}
              ₽
            </span>
            <span className="text-sm text-text-700 px-[8px] py-[3px] rounded-[20px] bg-brand-350">
              {`${Math.round(((product.old_price - product.price) / product.old_price) * 100)}%`}
            </span>
          </>
        ) : (
          <span className="font-bold text-xl">
            {product?.price}
            {' '}
            ₽
          </span>
        )}
      </div>
      <Link
        href={`/catalog/${product?.internal_id}`}
        className="ease-in duration-200 hover:text-brand-700 inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {product?.name}
      </Link>
      {showRating && (
        <>
          <div className="flex items-center mt-[10px]">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={`${idx + 1 <= product.stars ? 'stroke-stars fill-stars' : 'stroke-text-700'} ${idx > 0 && 'ml-[6px]'}`}
              />
            ))}
            <span className="text-sm text-text-600 ml-[12px] pt-[4px]">
              {product.feedbacks_count}
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
