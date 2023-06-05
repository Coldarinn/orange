import Image from 'next/image';
import Link from 'next/link';
import orderStatuses from '@/constants/orders';
import Cross from '@/assets/images/icons/cross.svg';
import Arrow from '@/assets/images/icons/arrow.svg';
import ProductImage from '@/assets/images/products/1.png';
import { useState } from 'react';
import Button from '../common/UI/Button';

interface IOrder {
  order: {
    id: number;
    title: string;
    number: string;
    status: number;
    summ: string;
    payStatus: string;
    address: string;
    deliveryDate: string;
    schedule: string;
  };
}

const generateStatus = (status: number) => {
  switch (status) {
    case 1:
      return orderStatuses[0];
    case 2:
      return orderStatuses[1];
    case 3:
      return orderStatuses[2];
    case 4:
      return orderStatuses[3];
    case 5:
      return orderStatuses[4];
    default:
      return orderStatuses[0];
  }
};

function Order({ order }: IOrder) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const status = generateStatus(order.status);

  return (
    <div className="w-full bg-white rounded-[20px] border border-stroke-dark py-[24px] mb-[28px] md:mb-[24px]">
      <div className="flex justify-between items-center md:block px-[24px] pb-[16px]">
        <div className="flex items-center text-xl md:mb-[15px]">
          <div className="ubuntu">{order.title}</div>
          <div className="text-text-700 pt-sans ml-[32px] md:ml-auto">{order.number}</div>
        </div>
        <div>
          <div
            className={`text-xl text-right md:text-left ubuntu${
              order.status < 5 ? ' text-brand-700' : ' text-success'
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
        <div className="flex items-center relative md:mb-[20px]">
          <div className="w-[156px] h-[156px] relative border border-white md:border-stroke-dark rounded-[8px] transition duration-300 hover:border-brand-700 mr-[12px]">
            <Link
              href={`/catalog/${1}`}
              className="absolute left-[8px] top-[8px] bottom-[8px] right-[8px]"
            >
              <Image
                src={ProductImage}
                alt="Изображение товара"
                fill
              />
            </Link>
          </div>
          <div className="w-[156px] h-[156px] relative border border-white md:border-stroke-dark rounded-[8px] transition duration-300 hover:border-brand-700 mr-[12px]">
            <Link
              href={`/catalog/${1}`}
              className="absolute left-[8px] top-[8px] bottom-[8px] right-[8px]"
            >
              <Image
                src={ProductImage}
                alt="Изображение товара"
                fill
              />
            </Link>
          </div>
          <Link
            href="/"
            className="flex justify-center items-center w-[48px] h-[48px] rounded-full border border-stroke-dark text-text-600 transition duration-300 hover:border-brand-700"
          >
            +4
          </Link>
        </div>
        <div className="flex flex-col md:flex-row-reverse min-h-full justify-between items-end md:items-center">
          <div className="text-[32px] ubuntu">
            {order.summ}
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
                    order.status > idx
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
                <span className={`hidden md:inline-block ml-[10px] ${order.status === idx + 1 ? 'text-text-700 font-medium' : 'text-text-500'}`}>
                  {item.mobileStep}
                </span>
                {idx !== 4 && (
                  <>
                    <div
                      className={`absolute top-[15px] w-1/4 h-[2px] z-[1] md:hidden ${
                        order.status > idx + 1 ? 'bg-success' : 'bg-text-200'
                      }`}
                      style={{ left: `calc(25%*${idx})` }}
                    />
                    <div
                      className={`hidden md:block absolute left-[15px]  w-[2px] h-[16px] z-[1] ${
                        order.status > idx + 1 ? 'bg-success' : 'bg-text-200'
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
                <div className="ml-[32px] md:ml-[16px]">{order.status}</div>
              </div>
              <div className="flex text-text-600">
                <div className="basis-[111px] md:basis-[132px] shrink-0 font-medium">Адрес:</div>
                <div className="ml-[32px] md:ml-[16px]">{order.address}</div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex text-text-600 mb-[16px]">
                <div className="basis-[122px] md:basis-[132px] shrink-0 font-medium">Срок доставки:</div>
                <div className="ml-[32px] md:ml-[16px]">{order.deliveryDate}</div>
              </div>
              <div className="flex text-text-600">
                <div className="basis-[122px] md:basis-[132px] shrink-0 font-medium">График работы:</div>
                <div className="ml-[32px] md:ml-[16px]">{order.schedule}</div>
              </div>
            </div>
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
