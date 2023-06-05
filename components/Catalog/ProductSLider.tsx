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

function ProductSLider() {
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
        <SwiperSlide>
          <div className="max-w-[480px] mx-auto">
            <Image
              src={ProductImage}
              alt="Картинка продукта"
              style={{ width: '100%' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[480px] mx-auto">
            <Image
              src={ProductImage}
              alt="Картинка продукта"
              style={{ width: '100%' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[480px] mx-auto">
            <Image
              src={ProductImage}
              alt="Картинка продукта"
              style={{ width: '100%' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[480px] mx-auto">
            <Image
              src={ProductImage}
              alt="Картинка продукта"
              style={{ width: '100%' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[480px] mx-auto">
            <Image
              src={ProductImage}
              alt="Картинка продукта"
              style={{ width: '100%' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[480px] mx-auto">
            <Image
              src={ProductImage}
              alt="Картинка продукта"
              style={{ width: '100%' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[480px] mx-auto">
            <Image
              src={ProductImage}
              alt="Картинка продукта"
              style={{ width: '100%' }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[480px] mx-auto">
            <Image
              src={ProductImage}
              alt="Картинка продукта"
              style={{ width: '100%' }}
            />
          </div>
        </SwiperSlide>
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
        <SwiperSlide>
          <Image
            src={ProductImage}
            alt="Картинка продукта"
            style={{ width: '100%' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ProductImage}
            alt="Картинка продукта"
            style={{ width: '100%' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ProductImage}
            alt="Картинка продукта"
            style={{ width: '100%' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ProductImage}
            alt="Картинка продукта"
            style={{ width: '100%' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ProductImage}
            alt="Картинка продукта"
            style={{ width: '100%' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ProductImage}
            alt="Картинка продукта"
            style={{ width: '100%' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ProductImage}
            alt="Картинка продукта"
            style={{ width: '100%' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={ProductImage}
            alt="Картинка продукта"
            style={{ width: '100%' }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductSLider;
