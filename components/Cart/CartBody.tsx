import {
  useEffect, useState,
} from 'react';
import Accept from '@/assets/images/icons/accept.svg';
import cartItems, { ICartItem } from '@/constants/cart';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

function CartBody() {
  const [items, setItems] = useState<ICartItem[]>(cartItems);
  const [count, setCount] = useState<number>(0);
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
    let newPrice = 0;
    let newCount = 0;
    items.forEach((item) => {
      if (item.isSelected) {
        newPrice += item.totalPrice;
        newCount += item.count;
      }
    });
    setTotalPrice(newPrice);
    setCount(newCount);
  }, [items]);

  return (
    <div className="flex items-start">
      <div className="basis-[848px] shrink-0 grow-0 mr-[48px]">
        <div className="bg-white border border-stroke-dark rounded-[20px] py-[24px]">
          <div className="px-[24px] pb-[24px] border-b border-stroke-dark">
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
      <CartTotal
        totalPrice={totalPrice}
        count={count}
      />
    </div>
  );
}

export default CartBody;
