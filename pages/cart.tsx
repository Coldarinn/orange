import Head from 'next/head';
import ProductCards from '@/components/Common/Swiper/ProductCards';
import Discounts from '@/components/Common/Discounts';
import CartBody from '@/components/Cart/CartBody';
import Button from '@/components/Common/UI/Button';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Весёлый апельсин | Корзина</title>
        <meta
          name="description"
          content="Весёлый апельсин Корзина"
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
          <h2 className="text-[32px] font-bold mb-[32px] ubuntu">
            Корзина
          </h2>
          <CartBody />
        </div>
      </div>
      <div className="mb-[57px]">
        <div className="container">
          <div className="flex justify-between items-center mb-[33px]">
            <div className="text-2xl text-text-900 ubuntu">
              Вам может понравиться
            </div>
            <Button
              type="black"
              text="Посмотреть ещё"
            />
          </div>
          <ProductCards id="sixth" />
          <div className="mt-[90px]">
            <Discounts />
          </div>
        </div>
      </div>
    </>
  );
}