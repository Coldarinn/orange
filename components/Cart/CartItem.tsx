import Image from 'next/image';
import Plus from '@/assets/images/icons/plus.svg';
import Minus from '@/assets/images/icons/minus.svg';
import Trash from '@/assets/images/icons/trash.svg';
import Accept from '@/assets/images/icons/accept.svg';
// import { ICartItem } from '@/constants/cart';
import Link from 'next/link';
import { ICartItem } from '@/pages/cart';

function CartItem({
  item, changeCount, changeStatus, deleteItem,
}: {
  item: ICartItem,
  changeCount: (id:string, newValue:number) => void,
  changeStatus: (id:string) => void,
  deleteItem: (id:string) => void,
}) {
  return (
    <div className="flex p-[24px] md:pt-[16px] border-b border-stroke-dark last:border-0">
      <div className="cart-checkbox">
        <label
          className="checkbox"
          htmlFor={`cart-item-${item.product.internal_id}`}
        >
          <input
            type="checkbox"
            className="hidden"
            id={`cart-item-${item.product.internal_id}`}
            checked={item.product.isSelected}
            onChange={() => changeStatus(item.product.internal_id)}
          />
          <span />
          <Accept className="fill-white" />
        </label>
      </div>
      <Link
        href={`/catalog/${item.product.internal_id}`}
        className="basis-[140px] md:basis-[110px] h-[140px] md:h-[110px] shrink-0 mx-[32px] md:mx-[20px] relative"
      >
        {/* <Image
          src={Product}
          alt="Картинка продукта"
          fill
        /> */}
        <Image
          unoptimized
          src={`data:image/jpeg;base64,${item.product.pictures[0]}`}
          alt="Изображение товара"
          width={0}
          height={0}
          className="w-full object-contain"
        />
      </Link>
      <div className="basis-[396px] md:basis-auto">
        <div className="mb-[12px] md:mb-[16px]">
          {item.product.name}
        </div>
        <div className="text-sm text-text-500 mb-[24px] md:hidden">
          {item.product.description}
        </div>
        <div className="hidden md:flex justify-between items-center mb-[20px]">
          <div className="text-2xl font-bold ubuntu">
            {item.product.price * item.count}
            {' '}
            ₽
          </div>
          <div className="text-text-500">
            {item.product.price}
            {' '}
            ₽ за 1 шт.
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="relative w-fit">
            <input
              type="number"
              className="w-[139px] h-[48px] px-[48px] text-xl text-center bg-brand-200 border border-stroke-dark rounded-[24px]"
              min={1}
              value={item.count}
              onChange={(e) => changeCount(item.product.internal_id, +e.target.value)}
            />
            <button
              type="button"
              className="absolute top-0 left-0 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white border border-stroke-dark text-brand-700"
              onClick={() => item.count - 1 > 0
                && changeCount(item.product.internal_id, item.count - 1)}
            >
              <Minus />
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white border border-stroke-dark text-brand-700"
              onClick={() => changeCount(item.product.internal_id, item.count + 1)}
            >
              <Plus />
            </button>
          </div>
          <button
            type="button"
            className="w-[48px] h-[48px] md:flex hidden items-center justify-center rounded-full bg-white border border-stroke-dark text-brand-700"
            onClick={() => deleteItem(item.product.internal_id)}
          >
            <Trash className="fill-text-700" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end ml-auto md:hidden">
        <div>
          <div className="text-[32px] font-bold ubuntu mb-[8px]">
            {item.product.price * item.count}
            {' '}
            ₽
          </div>
          <div className="text-text-500">
            {item.product.price}
            {' '}
            ₽ за 1 шт.
          </div>
        </div>
        <button
          type="button"
          className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white border border-stroke-dark text-brand-700 md:hidden"
          onClick={() => deleteItem(item.product.internal_id)}
        >
          <Trash className="fill-text-700" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
