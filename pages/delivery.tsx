import Head from 'next/head';
import ProductCards from '@/components/common/Products/ProductCards';
import Button from '@/components/common/UI/Button';
import { useState } from 'react';
import Location from '@/assets/images/icons/duble-location.svg';
import CarIcon from '@/assets/images/icons/delivery.svg';

export default function Delivery() {
  const [selected, setSelected] = useState<{ id: number; city: string }>({
    id: 0,
    city: 'Москва',
  });
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Весёлый апельсин | Доставка и оплата</title>
        <meta
          name="description"
          content="Весёлый апельсин Доставка и оплата"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className="pt-[200px] md:pt-[230px] pb-[120px] md:pb-[72px] border-b border-text-100 mb-[60px] md:mb-[32px]">
        <div className="container">
          <h2 className="text-[32px] font-bold mb-[32px] md:mb-[24px] ubuntu md:px-[24px]">
            <span className="text-text-900">Доставка и оплата: </span>
            <span className="text-brand-700">Москва и область</span>
          </h2>
          <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto gap-[16px] mb-[40px] md:px-[24px]">
            {Array.from({ length: showAll ? 85 : 9 }).map((_, idx) => (
              <button
                type="button"
                className={`px-[16px] py-[12px] hover:opacity-60 rounded-[22px] transition duration-300 ${
                  selected.id === idx
                    ? 'text-white bg-brand-700'
                    : 'text-text-700 bg-white'
                }`}
                onClick={() => setSelected({ id: idx, city: 'Москва' })}
              >
                Москва
              </button>
            ))}
            {!showAll && (
              <Button
                type="black"
                text="Показать все 85"
                customStyles="basis-[151px] shrink-0 w-[151px] h-[43px]"
                onClick={() => setShowAll(true)}
              />
            )}
          </div>
          <div className="flex items-start md:block md:px-[24px]">
            <div className="w-[636px] md:w-full basis-[636px] md:basis-full bg-white border border-stroke-dark rounded-[32px] md:rounded-[24px] p-[32px] md:p-[24px] mr-[36px] md:mr-0 md:mb-[24px]">
              <div className="mb-[24px] flex items-center">
                <Location />
                <span className="text-2xl ubuntu text-text-900 ml-[20px]">
                  Доставка в пункт выдачи
                </span>
              </div>
              <p className="text-text-700 mb-[24px]">
                Срок доставки, а также способ оплаты и условия хранения зависят
                от конкретного пункта выдачи
              </p>
              <div className="flex text-text-700 mb-[16px]">
                <div className="basis-[168px] md:basis-[180px] shrink-0 mr-[24px]">Способ оплаты:</div>
                <div className="mr-[24px] font-medium">картой на сайте</div>
              </div>
              <div className="flex text-text-700 mb-[16px]">
                <div className="basis-[168px] md:basis-[180px] shrink-0 mr-[24px]">Стоимость:</div>
                <div className="mr-[24px] font-medium">от 99 рублей</div>
              </div>
              <div className="flex text-text-700 mb-[16px]">
                <div className="basis-[168px] md:basis-[180px] shrink-0 mr-[24px]">
                  Бесплатная доставка:
                </div>
                <div className="mr-[24px] font-medium">
                  от 7000 рублей или 4 товаров от 3000 рублей
                </div>
              </div>
              <div className="flex text-text-700 mb-[16px]">
                <div className="basis-[168px] md:basis-[180px] shrink-0 mr-[24px]">
                  Минимальная сумма заказа:
                </div>
                <div className="mr-[24px] font-medium">500 рублей</div>
              </div>
            </div>
            <div className="flex-auto bg-white border border-stroke-dark rounded-[32px] p-[32px]">
              <div className="mb-[24px] flex items-center">
                <CarIcon />
                <span className="text-2xl ubuntu text-text-900 ml-[20px]">
                  Курьерская доставка
                </span>
              </div>
              <div className="flex text-text-700 mb-[16px]">
                <div className="basis-[168px] md:basis-[180px] shrink-0 mr-[24px]">Способ оплаты:</div>
                <div className="mr-[24px] font-medium">картой на сайте</div>
              </div>
              <div className="flex text-text-700 mb-[16px]">
                <div className="basis-[168px] md:basis-[180px] shrink-0 mr-[24px]">Срок доставки:</div>
                <div className="mr-[24px] font-medium">через 2 дня</div>
              </div>
              <div className="flex text-text-700 mb-[16px]">
                <div className="basis-[168px] md:basis-[180px] shrink-0 mr-[24px]">Стоимость:</div>
                <div className="mr-[24px] font-medium">от 500 рублей</div>
              </div>
              <div className="flex text-text-700 mb-[16px]">
                <div className="basis-[168px] md:basis-[180px] shrink-0 mr-[24px]">
                  Бесплатная доставка:
                </div>
                <div className="mr-[24px] font-medium">
                  от 7000 рублей или 4 товаров от 3000 рублей
                </div>
              </div>
              <div className="flex text-text-700 mb-[16px]">
                <div className="basis-[168px] md:basis-[180px] shrink-0 mr-[24px]">
                  Интервалы доставки:
                </div>
                <div className="mr-[24px] font-medium">
                  9:00-20:00, 10:00-14:00, 14:00-18:00, 18:00-22:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mb-[90px] md:px-[24px]">
          <div className="flex justify-between items-center mb-[33px]">
            <div className="text-2xl text-text-900 ubuntu">
              Вам может понравиться
            </div>
            <Button
              type="black"
              text="Посмотреть ещё"
            />
          </div>
          <ProductCards id="fir" />
          <div className="flex justify-between items-center mt-[64px] mb-[33px]">
            <div className="text-2xl text-text-900 ubuntu">
              Вы недавно смотрели
            </div>
            <Button
              type="black"
              text="Посмотреть ещё"
            />
          </div>
          <ProductCards id="sec" />
        </div>
      </div>
    </>
  );
}
