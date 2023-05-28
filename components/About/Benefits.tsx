import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import benefits from '@/constants/benefits';

import Arrow from 'assets/images/icons/arrow.svg';

function Benefits() {
  return (
    <>
      <div className="text-[32px] ubuntu mb-[40px] md:mb-[24px]">
        Наши преимущества
      </div>
      <div className="relative">
        <button
          className="benefits-button-prev"
          type="button"
        >
          <Arrow />
        </button>
        <button
          className="benefits-button-next"
          type="button"
        >
          <Arrow />
        </button>
        <Swiper
          className="mx-[-20px] px-[20px]"
          modules={[Navigation]}
          navigation={{ nextEl: '.benefits-button-next', prevEl: '.benefits-button-prev' }}
          spaceBetween={32}
          slidesPerView="auto"
        >
          {benefits.map((item) => (
            <SwiperSlide
              key={item.id}
              className="!w-auto min-h-full !h-auto"
            >
              <div className="w-[460px] md:w-[320px] flex flex-col min-h-full rounded-[24px] overflow-hidden">
                <div
                  className="text-2xl md:text-xl text-white ubuntu pt-[32px] md:pt-[24px] px-[32px] md:px-[24px] pb-[32px] md:pb-[16px]"
                  style={{ backgroundColor: item.color }}
                >
                  {item.title}
                </div>
                <div className="flex-1 bg-white pt-[24px] md:pt-[16px] px-[32px] md:px-[24px] pb-[32px] md:pb-[24px] text-xl md:text-base pt-sans text-text-600 border border-stroke-dark border-t-0">
                  {item.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Benefits;
