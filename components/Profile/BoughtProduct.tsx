import Image from 'next/image';
import Link from 'next/link';
import ProductImage from '@/assets/images/products/1.png';
import Heart from '@/assets/images/icons/heart.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

interface IBoughtProduct {
  id: string,
  name: string,
  pictures: string[]
}

function BoughtProduct({ id, name, pictures }: IBoughtProduct) {
  return (
    <div className="product-card relative">
      {/* <Heart className="absolute right-0 stroke-text-500 cursor-pointer z-[2] transition duration-300 hover:stroke-red" /> */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: '.product-card-pagination' }}
      >
        {pictures.map((picture) => (
          <SwiperSlide
            key={picture}
            className="pt-[100%]"
          >
            <Link
              href={`/catalog/${id}`}
              className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src={`data:image/jpeg;base64,${picture}`}
                alt="Изображение товара"
                width={0}
                height={0}
                className="w-full object-contain"
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className={`product-card-pagination${pictures.length < 2 ? ' opacity-0 pointer-events-none' : ''}`} />
        {/* <SwiperSlide>
          <Link href={`/catalog/${id}`}>
            <Image
              src={ProductImage}
              alt="Изображение товара"
              style={{ width: '100%' }}
            />
          </Link>
        </SwiperSlide>
        <div className="product-card-pagination" /> */}
        <Link
          href={`/catalog/${id}`}
          className="mt-[12px] inline-block"
        >
          {name}
        </Link>
      </Swiper>
    </div>
  );
}

export default BoughtProduct;
