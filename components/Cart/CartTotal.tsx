import {
  memo, useEffect, useState,
} from 'react';
import Accept from '@/assets/images/icons/accept.svg';
import Button from '@/components/common/UI/Button';
import { addAlert } from '@/store/slicers/alertsSlice';
import { useAppDispatch } from '@/hooks/store';

function getNoun(number: number, one: string, two: string, five: string) {
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

interface ICartTotal {
  totalPrice: number;
  count: number;
  createdOrder: (address: string) => void,
}

const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const token = '28ab1f90a3121954c086c80640f7d95962762472';

function CartTotal({ totalPrice, count, createdOrder }: ICartTotal) {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>('');
  const [addresses, setAddresses] = useState<string[]>(['']);
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const [timeout, setMyTimeout] = useState<any>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getAddresses = (query: string) => {
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ query, count: 20 }),
    };

    fetch(url, options)
      .then((response) => response.text())
      .then((result) => setAddresses(JSON.parse(result)
        .suggestions.map((item) => item.unrestricted_value)));
  };

  const changeHandler = (val: string) => {
    setValue(val);
    clearTimeout(timeout);
    setMyTimeout(null);
    setMyTimeout(
      setTimeout(() => {
        getAddresses(val);
      }, 500),
    );
  };

  const selectAddress = (addr: string) => {
    if (selectedAddress === addr) {
      setSelectedAddress('');
    } else {
      setSelectedAddress(addr);
    }
    setValue(addr);
  };

  const clickHandler = () => {
    if (selectedAddress) {
      createdOrder(selectedAddress);
    } else {
      dispatch(addAlert({ id: Date.now(), type: 'error', text: 'Выберите адрес доставки' }));
    }
  };

  const listener = (event) => {
    if (!event.target.closest('#addressRef')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, []);

  return (
    <div className="flex-auto py-[32px] md:py-[24px] rounded-[20px] bg-white border border-stroke-dark sticky top-[125px]">
      <div className="flex items-center justify-between font-bold ubuntu pb-[24px] px-[32px] md:px-[24px] border-b border-stroke-dark">
        <span className="text-2xl">Итого:</span>
        <span className="text-[32px] text-text-900">
          {totalPrice + 199}
          {' '}
          ₽
        </span>
      </div>
      <div className="py-[20px] md:py-[16px] px-[32px] md:px-[24px] border-b border-stroke-dark text-text-600">
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
          <div className="text-xl pt-sans">199 ₽</div>
        </div>
      </div>
      <div
        id="addressRef"
        className="py-[20px] md:py-[16px] px-[32px] md:px-[24px] border-b border-stroke-dark relative"
      >
        <input
          type="text"
          className="w-full px-[16px] py-[10px] rounded-lg border-stroke-dark"
          placeholder="Введите адрес доставки"
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        {(isOpen && value) && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg max-h-[300px] overflow-auto">
            {addresses?.length > 0 ? (
              <>
                {addresses.map((item, idx) => (
                  <button
                    type="button"
                    key={idx}
                    className={`text-left w-full py-[10px] px-[16px] first:rounded-t-lg last:rounded-b-lg border-b border-stroke-dark
                    last:border-b-0 duration-200 hover:bg-stroke-dark${selectedAddress === item ? ' bg-stroke-dark' : ''}`}
                    onClick={() => selectAddress(item)}
                  >
                    {item}
                  </button>
                ))}
              </>
            ) : (
              <div className="text-center text-[20px]">
                Нету данных
              </div>
            )}
          </div>
        )}
      </div>
      <div className="px-[32px] md:px-[24px] pt-[24px] md:pt-[16px]">
        <Button
          type="orange"
          text="Заказать"
          customStyles="w-full h-[56px] mb-[16px] text-xl"
          onClick={clickHandler}
        />
        <div className="flex items-center">
          <Accept className="fill-brand-700 basis-[18px] shrink-0 grow-0" />
          <p className="ml-[18px] text-text-500">
            Согласен с условиями Правил пользования торговой площадкой и
            правилами возврата
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(CartTotal);
