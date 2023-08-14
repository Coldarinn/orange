// import { useState } from 'react';
import Cart from 'assets/images/icons/cart.svg';
import Heart from 'assets/images/icons/heart.svg';
import Location from 'assets/images/icons/duble-location.svg';
import Delivery from 'assets/images/icons/delivery.svg';
import { IProductInfo } from '@/store/slicers/userSlice';
// import Arrow from 'assets/images/icons/arrow.svg';

interface IProductPrice {
  myProduct: IProductInfo,
  clickHeart: () => void,
  clickCart: () => void,
}

function ProductPrice({ myProduct, clickHeart, clickCart }: IProductPrice) {
  // const [isOpen, setIsOpen] = useState<boolean>(true);
  // const [selectedSize, setSelectedSize] = useState<number>(0);
  return (
    <div className="bg-white rounded-lg md:rounded-[30px] border border-stroke-dark pt-[24px] pb-[32px] md:py-[24px]">
      <div className="flex items-center justify-between pb-[24px] mb-[24px] border-b border-stroke-dark px-[32px] md:px-[24px]">
        {myProduct?.old_price ? (
          <div>
            <span className="font-bold text-xl mr-[8px]">
              {myProduct.price}
              {' '}
              ₽
            </span>
            <span className="text-sm text-text-400 line-through mr-[13px] pt-[5px]">
              {myProduct.old_price}
              {' '}
              ₽
            </span>
          </div>
        ) : (
          <span className="text-[32px] text-text-900 ubuntu">
            {myProduct.price}
            {' '}
            ₽
          </span>
        )}
        <div className="flex items-center">
          <button
            type="button"
            className={`w-[182px] h-[60px] flex justify-center items-center gap-[10px] border rounded-[30px] 
              ${myProduct.in_basket ? 'bg-white border-brand-700 text-brand-700 fill-brand-700' : 'bg-brand-700 border-stroke-dark text-white fill-white'}`}
            onClick={clickCart}
          >
            <Cart className="fill-inherit" />
            <span className="text-inherit font-bold text-xl">{myProduct.in_basket ? 'В корзине' : 'В корзину'}</span>
          </button>
          <button
            type="button"
            className="w-[60px] h-[60px] flex items-center justify-center rounded-full border border-stroke-dark ml-[16px]"
            onClick={clickHeart}
          >
            <Heart
              className={`stroke-text-500 transition duration-300 hover:stroke-red${myProduct.liked ? ' fill-red !stroke-red' : ''}`}
            />
          </button>
        </div>
      </div>
      <div className="px-[32px] md:px-[24px]">
        {/* <button
          type="button"
          className="flex items-center justify-between w-full bg-white border border-text-700 rounded-[20px] px-[24px] py-[14px] mb-[8px]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Выберите размер
          <Arrow className={`stroke-text-800 ${isOpen && 'rotate-180'}`} />
        </button>
        <div className={`rounded-[20px] bg-white border border-stroke-dark text-sm text-text-700 pt-[16px] pb-[8px] mb-[24px] ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center pb-[16px] mb-[8px] border-b border-stroke-dark">
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
        </div> */}
        <div className="flex md:justify-between">
          <div className="flex items-center md:justify-center md:w-[213px] px-[24px] md:px-0 py-[21px] md:py-[12px] bg-brand-200 rounded-[30px] border border-stroke-brand mr-[20px] md:mr-[16px]">
            <Location className="shrink-0" />
            <div className="flex flex-col ml-[15px] md:whitespace-nowrap">
              <span className="font-bold mb-[4px]">
                Пункты выдачи
              </span>
              <span className="text-text-700 md:text-sm">
                Завтра -
                {' '}
                <span className="text-brand-700">бесплатно</span>
              </span>
            </div>
          </div>
          <div className="flex items-center md:justify-center md:w-[155px] px-[24px] md:px-0 py-[21px] md:py-[12px] bg-brand-200 rounded-[30px] border border-stroke-brand">
            <Delivery />
            <div className="flex flex-col ml-[15px] md:whitespace-nowrap">
              <span className="font-bold mb-[4px]">
                Доставка
              </span>
              <span className="text-text-700 md:text-sm">
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
