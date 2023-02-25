import { useState } from 'react';
import Cart from 'assets/images/icons/cart.svg';
import Heart from 'assets/images/icons/heart.svg';
import Location from 'assets/images/icons/duble-location.svg';
import Delivery from 'assets/images/icons/delivery.svg';
import Arrow from 'assets/images/icons/arrow.svg';

function ProductPrice() {
  const [inBasket, setInBasket] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [selectedSize, setSelectedSize] = useState<number>(0);
  return (
    <div className="flex-auto bg-white rounded-lg border border-solid border-stroke-dark pt-[24px] pb-[32px]">
      <div className="flex items-center justify-between pb-[24px] mb-[24px] border-b border-solid border-stroke-dark px-[32px]">
        <span className="text-[32px] text-text-900 ubuntu">
          1299 ₽
        </span>
        <div className="flex items-center">
          <button
            type="button"
            className={`w-[182px] h-[60px] flex justify-center items-center gap-[10px] border border-solid rounded-[30px] 
              ${inBasket ? 'bg-white border-brand-700 text-brand-700 fill-brand-700' : 'bg-brand-700 border-stroke-dark text-white fill-white'}`}
            onClick={() => setInBasket((prev) => !prev)}
          >
            <Cart className="fill-inherit" />
            <span className="text-inherit font-bold text-xl">{inBasket ? 'В корзине' : 'В корзину'}</span>
          </button>
          <button
            type="button"
            className="w-[60px] h-[60px] flex items-center justify-center rounded-full border border-solid border-stroke-dark ml-[16px]"
          >
            <Heart className="stroke-text-500" />
          </button>
        </div>
      </div>
      <div className="px-[32px]">
        <button
          type="button"
          className="flex items-center justify-between w-full bg-white border border-solid border-text-700 rounded-[20px] px-[24px] py-[14px] mb-[8px]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Выберите размер
          <Arrow className={`stroke-text-800 ${isOpen && 'rotate-180'}`} />
        </button>
        <div className={`rounded-[20px] bg-white border border-solid border-stroke-dark text-sm text-text-700 pt-[16px] pb-[8px] mb-[24px] ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center pb-[16px] mb-[8px] border-b border-solid border-stroke-dark">
            <div className="basis-[33.333333%] pl-[16px] pr-[21px]">
              Российский размер
            </div>
            <div className="basis-[33.333333%] pl-[16px]">
              Размер производителя
            </div>
            <div className="basis-[33.333333%] pl-[16px]">
              Рост, см
            </div>
          </div>
          <button
            type="button"
            className={`w-full flex py-[8px] cursor-pointer transition duration-300 hover:bg-brand-200 ${selectedSize === 1 ? 'bg-brand-200' : 'bg-white'}`}
            onClick={() => setSelectedSize(1)}
          >
            <span className="basis-[33.333333%] text-left pl-[16px]">
              110
            </span>
            <span className="basis-[33.333333%] text-left pl-[16px]">
              4-5
            </span>
            <span className="basis-[33.333333%] text-left pl-[16px]">
              108
            </span>
          </button>
        </div>
        <div className="flex">
          <div className="flex items-center px-[24px] py-[21px] bg-brand-200 rounded-[30px] border border-solid border-stroke-brand mr-[20px]">
            <Location />
            <div className="flex flex-col ml-[15px]">
              <span className="font-bold mb-[4px]">
                Пункты выдачи
              </span>
              <span className="text-text-700">
                Завтра -
                {' '}
                <span className="text-brand-700">бесплатно</span>
              </span>
            </div>
          </div>
          <div className="flex items-center px-[24px] py-[21px] bg-brand-200 rounded-[30px] border border-solid border-stroke-brand">
            <Delivery />
            <div className="flex flex-col ml-[15px]">
              <span className="font-bold mb-[4px]">
                Доставка
              </span>
              <span className="text-text-700">
                от 2 часов
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPrice;
