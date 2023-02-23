import Arrow from 'assets/images/icons/arrow.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ProductCard from './ProductCard';
import 'swiper/css';

const arr = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
];

function ProductCards({ id }: { id: String }) {
  return (
    <div className="relative">
      <button className={`product-card-button-prev ${id}`} type="button">
        <Arrow />
      </button>
      <button className={`product-card-button-next ${id}`} type="button">
        <Arrow />
      </button>
      <Swiper
        className="mx-[-20px] px-[20px]"
        modules={[Navigation]}
        navigation={{ nextEl: `.product-card-button-next.${id}`, prevEl: `.product-card-button-prev.${id}` }}
        spaceBetween={21}
        slidesPerView="auto"
      >
        {arr.map((item) => (
          <SwiperSlide key={item.id.toString()} className="!w-auto">
            <div className="w-[224px] p-[16px] bg-white border border-solid border-stroke-dark rounded-[24px]">
              <ProductCard />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}

export default ProductCards;
