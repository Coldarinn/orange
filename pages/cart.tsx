import Head from 'next/head';
import { useState, useEffect } from 'react';
// import ProductCards from '@/components/common/Products/ProductCards';
import Discounts from '@/components/common/Subscribe/Discounts';
import CartBody, { ICartItem } from '@/components/Cart/CartBody';
// import Button from '@/components/common/UI/Button';
import $api from '@/services/api';
import EndpointNames from '@/config/api';

export default function Cart() {
  const [products, setProducts] = useState<ICartItem[]>([]);

  const getproducts = async () => {
    await $api.get<{ result: { products: ICartItem[] } }>(EndpointNames.BASKET_GET)
      .then((response) => {
        console.log(response);
        response.data.result.products.forEach((item) => {
          item.product.isSelected = true;
        });
        setProducts(response.data.result.products);
      });
  };

  useEffect(() => {
    getproducts();
  }, []);
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
      <div className="pt-[200px] md:pt-[230px] pb-[60px] md:pb-[72px] border-b border-text-100 mb-[60px] md:mb-[32px]">
        <div className="container md:px-[24px]">
          <h2 className="text-[32px] font-bold mb-[32px] md:mb-[20px] ubuntu">Корзина</h2>
          <CartBody products={products} />
        </div>
      </div>
      <div className="mb-[57px]">
        <div className="container">
          {/* <div className="md:px-[24px]">
            <div className="flex justify-between items-center mb-[33px] md:mb-[24px]">
              <div className="text-2xl text-text-900 ubuntu">
                Вам может понравиться
              </div>
              <Button
                type="black"
                text="Посмотреть ещё"
                customStyles="md:hidden"
              />
            </div>
            <ProductCards id="sixth" />
            <Button
              type="black"
              text="Посмотреть ещё"
              customStyles="!hidden md:!flex !w-full mt-[20px]"
            />
          </div> */}
          <div className="mt-[90px] md:mt-[32px]">
            <Discounts />
          </div>
        </div>
      </div>
    </>
  );
}
