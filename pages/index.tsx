import Head from 'next/head';
import Image from 'next/image';
import ProductCards from '@/components/common/Products/ProductCards';
import Discounts from '@/components/common/Subscribe/Discounts';
import Button from '@/components/common/UI/Button';
import Lego from '@/assets/images/lego.png';
import LegoMovie from '@/assets/images/lego-movie.png';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/store';
// import { useEffect } from 'react';

export default function Home() {
  const { viewedProducts } = useAppSelector((store) => store.user.userInfo);
  
  const router = useRouter();
  // const getCity = () => fetch('https://api.db-ip.com/v2/free/self').then(async (res) => console.log('res: ', await res.json()));

  // useEffect(() => {
  //   getCity();
  // }, []);

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
      <div className="pt-[200px] md:pt-[230px] pb-[60px] md:pb-[72px] border-b border-text-100 mb-[60px] md:mb-[32px]">
        <div className="container">
          <div className="flex md:flex-col gap-[40px] md:gap-[20px] md:px-[24px] mb-[51px] md:mb-[20px]">
            <div className="p-[40px] md:p-[32px] rounded-[40px] bg-brand-400">
              <div className="flex justify-between mb-[4px] md:mb-[20px]">
                <div className="text-2xl text-text-900 ubuntu">
                  Скидка 10% на конструкторы LEGO
                </div>
                <div className="w-[50px] basis-[50px] shrink-0">
                  <Image
                    src={Lego}
                    alt="Лего"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <div className="text-text-600 mb-[32px] md:mb-[20px]">
                Не пропустите скидки на все наборы LEGO в феврале
              </div>
              <Button
                type="white"
                text="Подробнее"
                customStyles="w-[148px] h-[52px] md:hidden"
              />
              <div className="w-full mt-[29px]">
                <Image
                  src={LegoMovie}
                  alt="Лего"
                  style={{ width: '100%' }}
                />
              </div>
              <Button
                type="white"
                text="Подробнее"
                customStyles="w-full h-[52px] hidden md:block"
              />
            </div>
            <div className="w-[520px] md:w-full basis-[520px] flex flex-col justify-between gap-[40px] md:gap-[20px]">
              <div className="p-[40px] md:p-[32px] rounded-[40px] bg-brand-300">
                <div className="mb-[24px] md:mb-[20px] text-2xl text-text-900 ubuntu">
                  Скидка 20% на настольные игры
                </div>
                <div className="text-text-600 mb-[32px] md:mb-[24px]">
                  Не пропустите скидки на все наборы настольных игр в феврале и
                  марте
                </div>
                <Button
                  type="white"
                  text="Подробнее"
                  customStyles="w-[148px] h-[52px] md:ml-auto"
                />
              </div>
              <div className="p-[40px] md:p-[32px] rounded-[40px] bg-brand-300">
                <div className="mb-[24px] md:mb-[20px] text-2xl text-text-900 ubuntu">
                  Скидка 15% на первую покупку
                </div>
                <div className="text-text-600 mb-[32px] md:mb-[20px]">
                  Совершите свою первую покупку в нашем магазине по приятной
                  цене
                </div>
                <Button
                  type="white"
                  text="Подробнее"
                  customStyles="w-[148px] h-[52px] md:ml-auto"
                />
              </div>
            </div>
          </div>
          <Discounts />
        </div>
      </div>
      {viewedProducts?.length > 0 && (
        <div className="container md:px-[24px]">
          {/* <div className="mb-[64px] md:mb-[40px]">
            <div className="flex justify-between items-center mb-[33px] md:mb-[24px]">
              <div className="text-2xl text-text-900 ubuntu">
                Вам может понравиться
              </div>
              <Button
                type="black"
                text="Посмотреть ещё"
                customStyles="block md:hidden"
              />
            </div>
            <ProductCards id="fir" />
            <Button
              type="black"
              text="Посмотреть ещё"
              customStyles="!w-full mt-[20px] !hidden md:!flex"
            />
          </div> */}
          <div className="mb-[90px] md:mb-[40px]">
            <div className="flex justify-between items-center mb-[33px] md:mb-[24px]">
              <div className="text-2xl text-text-900 ubuntu">
                Вы недавно смотрели
              </div>
              <Button
                type="black"
                text="Посмотреть ещё"
                customStyles="block md:hidden"
                onClick={() => router.push('/catalog')}
              />
            </div>
            <ProductCards id="sec" />
            <Button
              type="black"
              text="Посмотреть ещё"
              customStyles="!w-full mt-[20px] !hidden md:!flex"
              onClick={() => router.push('/catalog')}
            />
          </div>
        </div>
      )}
    </>
  );
}
