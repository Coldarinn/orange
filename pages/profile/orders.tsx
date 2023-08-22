/* eslint-disable @typescript-eslint/no-unused-vars */
import Layout from '@/components/Profile/Layout';
import Head from 'next/head';
import OrdersList from '@/components/Profile/OrdersList';
import Breadcrumbs from '@/components/common/UI/Breadcrumbs';
import { useEffect, useState } from 'react';
import $api from '@/services/api';
import EndpointNames from '@/config/api';
import { IProduct } from '@/components/common/Products/ProductCard';

const list = [
  {
    id: 1,
    title: 'Профиль ',
    link: '/profile',
  },
  {
    id: 2,
    title: 'Мои заказы ',
    link: '/profile/orders',
  },
];

export interface IOrder {
  internal_id: string,
  user_id: number,
  cost: number,
  status: string,
  address: string,
  contact_data: string,
  create_time: string,
  update_time: string,
  complete_time: string,
  products: {
    internal_id: string,
    picture: string,
  }[],
  products_count: number,
}

function Orders() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getOrders = async () => {
    $api.get<{ result:{ count: number, orders: IOrder[] } }>(EndpointNames.ORDER_GET_ORDERS)
      .then((res) => {
        const updateOrdersPromises = res.data.result.orders.map(async (item) => {
          const resp = await $api.get(EndpointNames.ORDER_GET_PRODUCTS(item.internal_id));
          return {
            ...item,
            products: resp.data.result.Products.map((elem: IProduct) => ({
              internal_id: elem.internal_id,
              picture: elem.pictures[0],
            })),
          };
        });

        Promise.all(updateOrdersPromises)
          .then((updatedOrders) => {
            setOrders(updatedOrders);
            setTotalCount(res.data.result.count);
          });
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Head>
        <title>Весёлый апельсин | Профиль</title>
        <meta
          name="description"
          content="Весёлый апельсин | Профиль"
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
      <div className="container pt-[200px] md:pt-[230px] md:px-[24px]">
        <Breadcrumbs list={list} />
        <div className="text-[32px] ubuntu text-text-900 mb-[32px] md:mb-[24px]">
          Мои заказы
        </div>
      </div>
      <Layout>
        <OrdersList
          orders={orders}
        />
      </Layout>
    </>
  );
}

export default Orders;
