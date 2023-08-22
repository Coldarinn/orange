import Image from 'next/image';
import Link from 'next/link';
import orderStatuses from '@/constants/orders';
import Cross from '@/assets/images/icons/cross.svg';
import Arrow from '@/assets/images/icons/arrow.svg';
import ProductImage from '@/assets/images/products/1.png';
import { useEffect, useState } from 'react';
// import { parseISO, format } from 'date-fns';
import Button from '../common/UI/Button';
import { IOrder } from '../../pages/profile/orders';

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('ru-RU', options);

  return `Заказ от ${formattedDate}`;
};

const generateStatus = (status: string) => {
  switch (status) {
    case 'CREATED':
      return orderStatuses[0];
    case 'PENDING':
      return orderStatuses[1];
    case 'SENDED':
      return orderStatuses[2];
    case 'DELIVERED':
      return orderStatuses[3];
    // case 'COMPLETED':
    //   return orderStatuses[4];
    default:
      return orderStatuses[4];
  }
};

interface IOrderComponent {
  order: IOrder,
}

function Order({ order }: IOrderComponent) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showCount, setShowCount] = useState<number>(4);
  const status = generateStatus(order.status);

  return (
    <div className="w-full bg-white rounded-[20px] border border-stroke-dark py-[24px] mb-[28px] md:mb-[24px]">
      <div className="flex justify-between items-center md:block px-[24px] pb-[16px]">
        <div className="flex items-center text-xl md:mb-[15px]">
          <div className="ubuntu">{formatDate(order.create_time)}</div>
          {/* <div className="text-text-700 pt-sans ml-[32px] md:ml-auto">{order.number}</div> */}
        </div>
        <div>
          <div
            className={`text-xl text-right md:text-left ubuntu${
              status.id < 5 ? ' text-brand-700' : ' text-success'
            }`}
          >
            {status.title}
          </div>
          {status.text && (
            <div className="text-text-500 text-sm mt-[8px]">{status.text}</div>
          )}
        </div>
      </div>
      <div className="flex justify-between md:block px-[24px] border-t border-stroke-dark py-[24px]">
        {order.products?.length > 0 && (
          <div className="flex items-center flex-wrap relative md:mb-[20px]">
            {order.products.slice(0, showCount).map((prod) => (
              <div
                key={prod.internal_id}
                className="w-[156px] h-[156px] relative border border-white md:border-stroke-dark rounded-[8px] transition duration-300 hover:border-brand-700 mr-[12px]"
              >
                <Link
                  href={`/catalog/${prod.internal_id}`}
                  target="_blank"
                  className="absolute left-[8px] top-[8px] bottom-[8px] right-[8px] flex items-center justify-center"
                >
                  <Image
                    src={`data:image/jpeg;base64,${prod.picture}`}
                    alt="Изображение товара"
                    width={0}
                    height={0}
                    className="w-full object-contain"
                  />
                </Link>
              </div>
            ))}
            {order.products?.length > 4 && (
              <button
                type="button"
                className="flex justify-center items-center w-[48px] h-[48px] rounded-full border border-stroke-dark text-text-600 transition duration-300 hover:border-brand-700"
                title="Показать все товары"
                onClick={() => (showCount < order.products?.length ? setShowCount(order.products.length) : setShowCount(4))}
              >
                {showCount < order.products?.length ? '+' : '-'}
                {' '}
                { order.products.length - 4 }
              </button>
            )}
          </div>
        )}
        <div className="flex flex-col md:flex-row-reverse min-h-full justify-between items-end md:items-center">
          <div className="text-[32px] ubuntu">
            {order.cost}
            {' '}
            ₽
          </div>
          <Button
            type="thick"
            text="Отменить заказ"
            icon={<Cross />}
            customStyles="!w-[187px] !h-[48px]"
          />
        </div>
      </div>
      {isOpen && (
        <div className="px-[24px] pb-[16px] pt-[24px] border-t border-stroke-dark">
          <div className="text-xl font-medium mb-[32px] md:mb-[28px]">Самовывоз</div>
          <div className="relative flex md:block items-center justify-between mb-[80px] md:mb-[32px]">
            {orderStatuses.map((item, idx) => (
              <div
                key={item.title}
                className="basis-[32px] md:basis-auto md:flex items-center md:mb-[16px]"
              >
                <span
                  className={`relative z-[2] mb-[10px] md:mb-0 flex items-center justify-center w-[32px] h-[32px] rounded-full font-bold ${
                    status.id > idx
                      ? 'bg-success text-white'
                      : 'bg-text-200 text-text-600'
                  }`}
                >
                  {idx + 1}
                  <span
                    className={`md:hidden absolute bottom-[-40px] text-text-800 font-normal whitespace-nowrap ${
                      idx === 0
                        ? 'left-0 text-left'
                        : idx === 4
                          ? 'right-0 text-right'
                          : 'left-1/2 -translate-x-1/2 text-center'
                    }`}
                    dangerouslySetInnerHTML={{ __html: item.step }}
                  />
                </span>
                <span className={`hidden md:inline-block ml-[10px] ${status.id === idx + 1 ? 'text-text-700 font-medium' : 'text-text-500'}`}>
                  {item.mobileStep}
                </span>
                {idx !== 4 && (
                  <>
                    <div
                      className={`absolute top-[15px] w-1/4 h-[2px] z-[1] md:hidden ${
                        status.id > idx + 1 ? 'bg-success' : 'bg-text-200'
                      }`}
                      style={{ left: `calc(25%*${idx})` }}
                    />
                    <div
                      className={`hidden md:block absolute left-[15px]  w-[2px] h-[16px] z-[1] ${
                        status.id > idx + 1 ? 'bg-success' : 'bg-text-200'
                      }`}
                      style={{ top: `calc(32px*${idx + 1} + 16px*${idx})` }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="flex md:block">
            <div className="basis-1/2 md:mb-[16px]">
              <div className="flex text-text-600 mb-[16px]">
                <div className="basis-[111px] md:basis-[132px] shrink-0 font-medium">Статус оплаты:</div>
                <div className="ml-[32px] md:ml-[16px]">{status.id}</div>
              </div>
              <div className="flex text-text-600">
                <div className="basis-[111px] md:basis-[132px] shrink-0 font-medium">Адрес:</div>
                <div className="ml-[32px] md:ml-[16px]">{order.address}</div>
              </div>
            </div>
            {/* <div className="basis-1/2">
              <div className="flex text-text-600 mb-[16px]">
                <div className="basis-[122px] md:basis-[132px] shrink-0 font-medium">Срок доставки:</div>
                <div className="ml-[32px] md:ml-[16px]">{order.deliveryDate}</div>
              </div>
              <div className="flex text-text-600">
                <div className="basis-[122px] md:basis-[132px] shrink-0 font-medium">График работы:</div>
                <div className="ml-[32px] md:ml-[16px]">{order.schedule}</div>
              </div>
            </div> */}
          </div>
        </div>
      )}
      <div className="px-[24px] mt-[16px]">
        <button
          type="button"
          className="flex items-center justify-center w-full h-[48px] bg-brand-200 rounded-[24px]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Arrow
            className={`mr-[12px] stroke-black ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
          Детали
        </button>
      </div>
    </div>
  );
}

export default Order;
