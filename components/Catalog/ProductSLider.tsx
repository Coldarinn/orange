import { useState } from 'react';
import Image from 'next/image';
import Arrow from '@/assets/images/icons/arrow.svg';
import ProductImage from '@/assets/images/products/2.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export interface IProductSlider {
  images: string[]
}

function ProductSLider({ images }: IProductSlider) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        loop
        spaceBetween={10}
        navigation={{ nextEl: '.product-slider-button-next', prevEl: '.product-slider-button-prev' }}
        // @ts-ignore
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Navigation, Thumbs]}
        className="product-slider"
      >
        {images.length > 1 && (
          <>
            <button
              className="product-slider-button-prev"
              type="button"
            >
              <Arrow />
            </button>
            <button
              className="product-slider-button-next"
              type="button"
            >
              <Arrow />
            </button>
          </>
        )}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[480px] mx-auto">
              <Image
                src={`data:image/jpeg;base64,${image}`}
                alt="Изображение товара"
                width={0}
                height={0}
                className="w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            spaceBetween: 4,
            slidesPerView: 'auto',
          },
          // when window width is >= 768px
          768: {
            spaceBetween: 20,
            slidesPerView: 8,
          },
        }}
        className="product-thumbs-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              unoptimized
              src={`data:image/jpeg;base64,${image}`}
              alt="Изображение товара"
              width={0}
              height={0}
              className="w-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProductSLider;
