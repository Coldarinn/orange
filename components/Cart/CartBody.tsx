import { useEffect, useState } from 'react';
import Accept from '@/assets/images/icons/accept.svg';
import cartItems, { ICartItem } from '@/constants/cart';
import CartItem from './CartItem';

function CartBody() {
  const [items, setItems] = useState<ICartItem[]>(cartItems);
  const [totalPrice, setTotalPrice] = useState<number>(
    items.reduce((accumulator, currentValue) => (currentValue.isSelected
      ? accumulator + currentValue.totalPrice : accumulator), 0),
  );

  const changeCount = (id:number, newValue:number) => {
    setItems(items.map((item) => {
      if (item.id === id) {
        return { ...item, count: newValue, totalPrice: newValue * item.price };
      }
      return item;
    }));
  };

  const changeStatus = (id:number) => {
    setItems(items.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    }));
  };

  const changeAllStatus = (status:boolean) => {
    if (status) {
      setItems(items.map((item) => ({ ...item, isSelected: true })));
    } else {
      setItems(items.map((item) => ({ ...item, isSelected: false })));
    }
  };

  const deleteItem = (id:number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setTotalPrice(items.reduce((accumulator, currentValue) => (currentValue.isSelected
      ? accumulator + currentValue.totalPrice : accumulator), 0));
  }, [items]);

  return (
    <div className="flex items-start">
      <div className="basis-[848px] shrink-0 grow-0 mr-[48px]">
        <div className="bg-white border border-solid border-stroke-dark rounded-[20px] py-[24px]">
          <div className="px-[24px] pb-[24px] border-b border-solid border-stroke-dark">
            <label
              className="checkbox"
              htmlFor="cart-all"
            >
              <input
                type="checkbox"
                className="hidden"
                id="cart-all"
                checked={!items.find((item) => !item.isSelected)}
                onChange={(e) => changeAllStatus(e.target.checked)}
              />
              <span>Выбрасть все</span>
              <Accept className="fill-white" />
            </label>
          </div>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              changeCount={changeCount}
              changeStatus={changeStatus}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </div>
      <div className="flex-auto py-[32px] rounded-[20px] bg-white border border-solid border-stroke-dark">
        <div className="flex items-center justify-between font-bold ubuntu pb-[24px] px-[32px] border-b border-solid border-stroke-dark">
          <span className="text-2xl">
            Итого:
          </span>
          <span className="text-[32px] text-text-900">
            {totalPrice}
            {' '}
            ₽
          </span>
        </div>
        <div className="py-[20px] px-[32px] border-b border-solid border-stroke-dark text-text-600">
          <div className="flex items-center justify-between mb-[16px]">
            2 товара
            <div className="text-xl pt-sans">
              2198 ₽
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
          <button
            type="button"
            className="w-full h-[56px] flex justify-center items-center rounded-[30px] bg-brand-700 text-white font-bold text-xl mb-[16px]"
          >
            Перейти к оформлению
          </button>
          <div className="flex items-center">
            <Accept className="fill-brand-700 basis-[18px] shrink-0 grow-0" />
            <p className="ml-[18px] text-text-500">
              Согласен с условиями Правил пользования торговой площадкой и правилами возврата
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartBody;
