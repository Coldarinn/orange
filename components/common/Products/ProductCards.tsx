import Arrow from 'assets/images/icons/arrow.svg';
import { useAppSelector } from '@/hooks/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ProductCard from './ProductCard';
import 'swiper/css';

function ProductCards({ id }: { id: String }) {
  const { userInfo } = useAppSelector((store) => store.user);

  return (
    <div className="relative">
      <button
        className={`product-card-button-prev ${id}`}
        type="button"
      >
        <Arrow />
      </button>
      <button
        className={`product-card-button-next ${id}`}
        type="button"
      >
        <Arrow />
      </button>
      <Swiper
        className="mx-[-20px] px-[20px]"
        modules={[Navigation]}
        navigation={{ nextEl: `.product-card-button-next.${id}`, prevEl: `.product-card-button-prev.${id}` }}
        spaceBetween={21}
        slidesPerView="auto"
      >
        {userInfo.viewedProducts.map((item) => (
          <SwiperSlide
            key={item.internal_id}
            className="!w-auto"
          >
            <div className="w-[224px] md:w-[206px] p-[16px] bg-white border border-stroke-dark rounded-[24px]">
              <ProductCard product={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}

export default ProductCards;
