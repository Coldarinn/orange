import { memo } from 'react';
import Accept from '@/assets/images/icons/accept.svg';
import { useRouter } from 'next/router';
import Button from '../Common/UI/Button';

function getNoun(number:number, one:string, two:string, five:string) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

function CartTotal({ totalPrice, count }:{ totalPrice:number, count:number }) {
  const router = useRouter();
  return (
    <div className="flex-auto py-[32px] rounded-[20px] bg-white border border-stroke-dark">
      <div className="flex items-center justify-between font-bold ubuntu pb-[24px] px-[32px] border-b border-stroke-dark">
        <span className="text-2xl">
          Итого:
        </span>
        <span className="text-[32px] text-text-900">
          {totalPrice + 199}
          {' '}
          ₽
        </span>
      </div>
      <div className="py-[20px] px-[32px] border-b border-stroke-dark text-text-600">
        <div className="flex items-center justify-between mb-[16px]">
          {count}
          {' '}
          {getNoun(count, 'товар', 'товара', 'товаров')}
          <div className="text-xl pt-sans">
            {totalPrice}
            {' '}
            ₽
          </div>
        </div>
        <div className="flex items-center justify-between">
          Доставка
          <div className="text-xl pt-sans">
            199 ₽
          </div>
        </div>
      </div>
      <div className="px-[32px] pt-[24px]">
        <Button
          type="orange"
          text="Перейти к оформлению"
          customStyles="w-full h-[56px] mb-[16px] text-xl"
          onClick={() => router.push(`orders/${1}`)}
        />
        <div className="flex items-center">
          <Accept className="fill-brand-700 basis-[18px] shrink-0 grow-0" />
          <p className="ml-[18px] text-text-500">
            Согласен с условиями Правил пользования торговой площадкой и правилами возврата
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(CartTotal);
