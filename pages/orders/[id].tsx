import Head from 'next/head';
import ProductCards from '@/components/common/Products/ProductCards';
import Discounts from '@/components/common/Subscribe/Discounts';
import Button from '@/components/common/UI/Button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import ProductImage from '@/assets/images/products/1.png';
import Cross from '@/assets/images/icons/cross.svg';

export default function Order() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Весёлый апельсин | Заказ №
          {router.query.id}
        </title>
        <meta
          name="description"
          content={`Весёлый апельсин Заказ ${router.query.id}`}
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
      <div className="pt-[200px] md:pt-[230px] pb-[60px] border-b border-text-100 mb-[60px] md:mb-[32px]">
        <div className="pb-[120px] md:pb-[72px] border-b border-text-100">
          <div className="container">
            <div className="text-[32px] text-text-900 mb-[32px] md:mb-[24px] ubuntu md:px-[24px]">
              Заказ №
              {' '}
              {router.query.id}
              {' '}
              оформлен
            </div>
            <div className="md:px-[24px]">
              <div className="bg-white border border-stroke-dark rounded-[40px] md:rounded-[20px] py-[32px] md:py-[24px] mb-[32px]">
                <div className="flex md:block items-center justify-between px-[32px] md:px-[24px] pb-[24px] md:pb-[16px] mb-[24px] border-b border-stroke-dark">
                  <div className="text-xl font-bold ubuntu text-brand-700">
                    Ожидает подтверждения
                  </div>
                  <div className="text-sm text-text-500">
                    Свяжемся с вами для уточнения деталей
                  </div>
                </div>
                <div className="flex flex-row-reverse md:block items-start justify-between px-[32px] md:px-0">
                  <div className="flex md:block md:pb-[24px] md:mb-[24px] md:border-b md:border-stroke-dark md:px-[24px]">
                    <div className="flex items-center md:mb-[20px]">
                      <div className="w-[156px] h-[156px] relative border border-stroke-dark rounded-[16px] mr-[20px]">
                        <Link
                          href="/catalog/1"
                          className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]"
                        >
                          <Image
                            src={ProductImage}
                            alt="Картинка товара"
                            fill
                          />
                        </Link>
                      </div>
                      <div className="w-[156px] h-[156px] relative border border-stroke-dark rounded-[16px] mr-[12px]">
                        <Link
                          href="/catalog/1"
                          className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]"
                        >
                          <Image
                            src={ProductImage}
                            alt="Картинка товара"
                            fill
                          />
                        </Link>
                      </div>
                      <Link
                        href="/"
                        className="flex items-center justify-center w-[48px] h-[48px] bg-white border border-stroke-dark rounded-[24px] text-text-600"
                      >
                        +4
                      </Link>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse justify-between md:items-center min-h-full ml-[57px] md:ml-0">
                      <span className="text-[32px] ubuntu font-bold text-right">
                        2398 ₽
                      </span>
                      <Button
                        type="thick"
                        text="Отменить заказ"
                        icon={<Cross />}
                        customStyles="!w-[187px] !h-[48px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col mr-[15px] md:px-[24px]">
                    <span className="text-xl font-medium mb-[24px]">
                      Курьерская доставка
                    </span>
                    <div className="text-text-600">
                      <div className="flex items-center mb-[16px]">
                        <span className="basis-[132px] shrink-0 font-medium">
                          Статус оплаты:
                        </span>
                        <span>Оплачено</span>
                      </div>
                      <div className="flex items-center mb-[16px]">
                        <span className="basis-[132px] shrink-0 font-medium">
                          Адрес:
                        </span>
                        <span>г. Одинцово, ул. Союзная, д. 2</span>
                      </div>
                      <div className="flex items-center mb-[16px]">
                        <span className="basis-[132px] shrink-0 font-medium">
                          Дата:
                        </span>
                        <span>13 марта 2023</span>
                      </div>
                      <div className="flex items-center">
                        <span className="basis-[132px] shrink-0 font-medium">
                          Время:
                        </span>
                        <span>12:00-15:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:justify-between md:px-[24px]">
              <Button
                type="orange"
                text="Мои заказы"
                customStyles="!w-[200px] !h-[43px] mr-[24px] md:mr-0"
                onClick={() => router.push('/')}
              />
              <Button
                type="thick"
                text="На главную"
                customStyles="!w-[200px] !h-[43px]"
                onClick={() => router.push('/')}
              />
            </div>
          </div>
        </div>
        <div className="container">
          {/* <div className="md:px-[24px]">
            <div className="flex justify-between items-center mt-[64px] md:mt-[32px] mb-[38px] md:mb-[24px]">
              <div className="text-2xl text-text-900 ubuntu">
                Вам может понравиться
              </div>
              <Button
                type="black"
                text="Посмотреть ещё"
                customStyles="md:hidden"
              />
            </div>
            <ProductCards id="fivth" />
            <Button
              type="black"
              text="Посмотреть ещё"
              customStyles="!hidden md:!flex !w-full mt-[20px]"
            />
          </div> */}
          <div className="mt-[90px] md:mt-[40px]">
            <Discounts />
          </div>
        </div>
      </div>
    </>
  );
}
