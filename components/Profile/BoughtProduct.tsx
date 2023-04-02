import Image from 'next/image';
import Link from 'next/link';
import ProductImage from '@/assets/images/products/1.png';
import Heart from '@/assets/images/icons/heart.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

function BoughtProduct() {
  return (
    <div className="product-card relative">
      <Heart className="absolute right-0 stroke-text-500 cursor-pointer z-[2] transition duration-300 hover:stroke-red" />
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: '.product-card-pagination' }}
      >
        <SwiperSlide>
          <Link href={`/catalog/${1}`}>
            <Image
              src={ProductImage}
              alt="Изображение товара"
              style={{ width: '100%' }}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={`/catalog/${1}`}>
            <Image
              src={ProductImage}
              alt="Изображение товара"
              style={{ width: '100%' }}
            />
          </Link>
        </SwiperSlide>
        <div className="product-card-pagination" />
        <Link
          href={`/catalog/${1}`}
          className="mt-[12px] inline-block"
        >
          Конструктор для детей
        </Link>
      </Swiper>
    </div>
  );
}

export default BoughtProduct;
