import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heart from '@/assets/images/icons/heart.svg';
import Star from '@/assets/images/icons/star.svg';
import Cart from 'assets/images/icons/cart.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import $api from '@/services/api';
import EndpointNames from '@/config/api';

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
  in_basket: boolean,
  stars: number,
  feedbacks_count: number,
}

interface IProductCard {
  showRating?: boolean,
  product: IProduct,
}

function ProductCard({ showRating = false, product }: IProductCard) {
  const [myProduct, setmyProduct] = useState<IProduct>(product);

  const clickHeart = async () => {
    if (myProduct.liked) {
      await $api.put(EndpointNames.PRODUCT_UNLIKE(product.internal_id));
      setmyProduct((prev: IProduct) => ({ ...prev, liked: false }));
    } else {
      await $api.put(EndpointNames.PRODUCT_LIKE(product.internal_id));
      setmyProduct((prev: IProduct) => ({ ...prev, liked: true }));
    }
  };

  const clickCart = async () => {
    if (myProduct.in_basket) {
      await $api.put(EndpointNames.BASKET_DEC_COUNT, { product_id: product.internal_id, count: 1 });
      setmyProduct((prev: IProduct) => ({ ...prev, in_basket: false }));
    } else {
      await $api.post(EndpointNames.BASKET_ADD_PRODUCT, {
        product_id: product.internal_id,
        count: 1,
      });
      setmyProduct((prev: IProduct) => ({ ...prev, in_basket: true }));
    }
  };

  return (
    <>
      <div className="product-card mb-[12px] relative">
        <button
          type="button"
          className="w-[36px] h-[36px] flex justify-center items-center rounded-full bg-white absolute right-[-8px] cursor-pointer z-[2]"
          onClick={clickHeart}
        >
          <Heart
            className={`stroke-text-500 transition duration-300 hover:stroke-red${myProduct?.liked ? ' fill-red !stroke-red' : ''}`}
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
                href={`/catalog/${product.internal_id}`}
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
          <div className={`product-card-pagination${product?.pictures.length < 2 ? ' opacity-0 pointer-events-none' : ''}`} />
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
        href="/catalog/1"
        // href={`/catalog/${product?.internal_id}`}
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
            onClick={clickCart}
          >
            {product.in_basket ? (
              <>
                В корзине
              </>
            ) : (
              <>
                <Cart className="fill-white" />
                В корзину
              </>
            )}
          </button>
        </>
      )}
    </>
  );
}

export default ProductCard;
