import Image from 'next/image';
import Product from '@/assets/images/products/1.png';
import Plus from '@/assets/images/icons/plus.svg';
import Minus from '@/assets/images/icons/minus.svg';
import Trash from '@/assets/images/icons/trash.svg';
import Accept from '@/assets/images/icons/accept.svg';

import { ICartItem } from '@/constants/cart';

function CartItem({
  item, changeCount, changeStatus, deleteItem,
}: {
  item: ICartItem,
  changeCount: (id:number, newValue:number) => void,
  changeStatus: (id:number) => void,
  deleteItem: (id:number) => void,
}) {
  return (
    <div className="flex p-[24px] border-b border-stroke-dark last:border-0">
      <div className="cart-checkbox">
        <label
          className="checkbox"
          htmlFor={`cart-item-${item.id}`}
        >
          <input
            type="checkbox"
            className="hidden"
            id={`cart-item-${item.id}`}
            checked={item.isSelected}
            onChange={() => changeStatus(item.id)}
          />
          <span />
          <Accept className="fill-white" />
        </label>
      </div>
      <div className="basis-[140px] h-[140px] mx-[32px] relative">
        <Image
          src={Product}
          alt="Картинка продукта"
          fill
        />
      </div>
      <div className="basis-[396px]">
        <div className="mb-[12px]">
          Конструктор LEGO City Арена для шоу каскадёров 60295
        </div>
        <div className="text-sm text-text-500 mb-[24px]">
          В основе яркого конструктора – сюжет сериала «LEGO City».
          Водите монстр-траки и крушащие машины...
        </div>
        <div className="relative w-fit">
          <input
            type="number"
            className="w-[139px] h-[48px] px-[48px] text-xl text-center bg-brand-200 border border-stroke-dark rounded-[24px]"
            min={1}
            value={item.count}
            onChange={(e) => changeCount(item.id, +e.target.value)}
          />
          <button
            type="button"
            className="absolute top-0 left-0 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white border border-stroke-dark text-brand-700"
            onClick={() => item.count - 1 > 0 && changeCount(item.id, item.count - 1)}
          >
            <Minus />
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white border border-stroke-dark text-brand-700"
            onClick={() => changeCount(item.id, item.count + 1)}
          >
            <Plus />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end ml-auto">
        <div className="text-[32px] font-bold ubuntu mb-[8px]">
          {item.totalPrice}
          {' '}
          ₽
        </div>
        <button
          type="button"
          className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white border border-stroke-dark text-brand-700"
          onClick={() => deleteItem(item.id)}
        >
          <Trash className="fill-text-700" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
