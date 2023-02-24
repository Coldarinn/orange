import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ProductCards from '@/components/Common/Swiper/ProductCards';
import Discounts from '@/components/Common/Discounts';
import Button from '@/components/Common/UI/Button';
import Lego from '@/assets/images/lego.png';
import LegoMovie from '@/assets/images/lego-movie.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Весёлый апельсин</title>
        <meta
          name="description"
          content="Весёлый апельсин"
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
      <div className="pt-[200px] pb-[60px] border-b border-solid border-text-100 mb-[60px]">
        <div className="container">
          <div className="flex gap-[40px] mb-[51px]">
            <div className="p-[40px] rounded-[40px] bg-brand-400">
              <div className="flex justify-between mb-[4px]">
                <div className="text-2xl text-text-900 ubuntu">
                  Скидка 10% на конструкторы LEGO
                </div>
                <div className="w-[50px]">
                  <Image
                    src={Lego}
                    alt="Лего"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <div className="text-text-600 mb-[32px]">
                Не пропустите скидки на все наборы LEGO в феврале
              </div>
              <Button
                type="white"
                text="Подробнее"
              />
              <div className="w-full mt-[29px]">
                <Image
                  src={LegoMovie}
                  alt="Лего"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div className="w-[520px] basis-[520px] flex flex-col justify-between gap-[40px]">
              <div className="p-[40px] rounded-[40px] bg-brand-300">
                <div className="mb-[24px] text-2xl text-text-900 ubuntu">
                  Скидка 20% на настольные игры
                </div>
                <div className="text-text-600 mb-[32px]">
                  Не пропустите скидки на все наборы настольных игр в феврале и марте
                </div>
                <Button
                  type="white"
                  text="Подробнее"
                />
              </div>
              <div className="p-[40px] rounded-[40px] bg-brand-300">
                <div className="mb-[24px] text-2xl text-text-900 ubuntu">
                  Скидка 15% на первую покупку
                </div>
                <div className="text-text-600 mb-[32px]">
                  Совершите свою первую покупку в нашем магазине по приятной цене
                </div>
                <Button
                  type="white"
                  text="Подробнее"
                />
              </div>
            </div>
          </div>
          <Discounts />
        </div>
      </div>
      <div className="container">
        <div className="mb-[64px]">
          <div className="flex justify-between items-center mb-[33px]">
            <div className="text-2xl text-text-900 ubuntu text-shadow">
              Вам может понравиться
            </div>
            <Link
              href="/asd"
              className="py-[10px] px-[16px] text-text-900 border border-solid border-text-800 rounded-[61px]"
            >
              Посмотреть ещё
            </Link>
          </div>
          <ProductCards id="fir" />
        </div>
        <div className="mb-[90px]">
          <div className="flex justify-between items-center mb-[33px]">
            <div className="text-2xl text-text-900 ubuntu text-shadow">
              Вы недавно смотрели
            </div>
            <Link
              href="/asd"
              className="py-[10px] px-[16px] text-text-900 border border-solid border-text-800 rounded-[61px]"
            >
              Посмотреть ещё
            </Link>
          </div>
          <ProductCards id="sec" />
        </div>
      </div>
    </>
  );
}
