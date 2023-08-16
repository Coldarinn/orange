import {
  useEffect, useState,
} from 'react';
import Accept from '@/assets/images/icons/accept.svg';
// import cartItems, { ICartItem } from '@/constants/cart';
import { IProductInfo } from '@/store/slicers/userSlice';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

export interface ICartItem {
  count: number,
  product: IProductInfo
}

export interface ICartBody {
  products: ICartItem[]
}

function CartBody({ products }: ICartBody) {
  console.log('products: ', products);

  const [items, setItems] = useState<ICartItem[]>(products);
  const [count, setCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(
    items.reduce((accumulator, currentValue) => (currentValue.product.isSelected
      ? accumulator + currentValue.product.price * currentValue.count : accumulator), 0),
  );

  const changeCount = (id:string, newValue:number) => {
    setItems(items.map((item) => {
      if (item.product.internal_id === id) {
        return { ...item, count: newValue, totalPrice: newValue * item.product.price };
      }
      return item;
    }));
  };

  const changeStatus = (id:string) => {
    setItems(items.map((item) => {
      if (item.product.internal_id === id) {
        return { ...item, isSelected: !item.product.isSelected };
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

  const deleteItem = (id:string) => {
    setItems(items.filter((item) => item.product.internal_id !== id));
  };

  useEffect(() => {
    let newPrice = 0;
    let newCount = 0;
    items.forEach((item) => {
      if (item.product.isSelected) {
        newPrice += item.product.price * item.count;
        newCount += item.count;
      }
    });
    setTotalPrice(newPrice);
    setCount(newCount);
  }, [items]);

  useEffect(() => {
    setItems(products);
  }, [products]);

  return (
    <div className="flex items-start md:block">
      <div className="basis-[848px] shrink-0 grow-0 mr-[48px] md:mr-0 md:mb-[24px]">
        <div className="bg-white border border-stroke-dark rounded-[20px] pt-[24px]">
          <div className="px-[24px] pb-[24px] border-b border-stroke-dark">
            <label
              className="checkbox"
              htmlFor="cart-all"
            >
              <input
                type="checkbox"
                className="hidden"
                id="cart-all"
                checked={!items.find((item) => !item.product.isSelected)}
                onChange={(e) => changeAllStatus(e.target.checked)}
              />
              <span>Выбрасть все</span>
              <Accept className="fill-white" />
            </label>
          </div>
          {items.map((item) => (
            <CartItem
              key={item.product.internal_id}
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
