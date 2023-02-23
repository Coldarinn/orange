import Image from 'next/image';
import Link from 'next/link';
import Product from '@/assets/images/products/1.png';
import Heart from '@/assets/images/icons/heart.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

function ProductCard() {
  return (
    <>
      <div className="mb-[12px] relative">
        <Heart className="absolute right-0 stroke-text-500 cursor-pointer z-[2] transition duration-300 hover:stroke-red" />
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, el: '.product-card-pagination' }}
        >
          <SwiperSlide>
            <Link href="/asd">
              <Image src={Product} alt="Изображение товара" style={{ width: '100%' }} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/asd">
              <Image src={Product} alt="Изображение товара" style={{ width: '100%' }} />
            </Link>
          </SwiperSlide>
          <div className="product-card-pagination" />
        </Swiper>
      </div>
      <div className="mb-[8px] font-bold text-xl">
        499 ₽
      </div>
      <Link href="/asd" className="ease-in duration-200 hover:text-brand-700">
        Конструктор для детей
      </Link>
    </>
  );
}

export default ProductCard;
