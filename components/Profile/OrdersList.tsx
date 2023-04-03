import Order from '@/components/Profile/Order';

const arr = [
  {
    id: 0,
    title: 'Заказ от 10 марта 2023',
    number: '№ 12032480',
    status: 5,
    summ: '2398',
    payStatus: 'Оплачено',
    address: 'г. Москва , ул. Пушкина , д. 2',
    deliveryDate: '13-14 марта 2023',
    schedule: '9:00-22:00',
  },
  {
    id: 1,
    title: 'Заказ от 11 марта 2023',
    number: '№ 12333380',
    status: 4,
    summ: '2398',
    payStatus: 'Оплачено',
    address: 'г. Москва , ул. Пушкина , д. 2',
    deliveryDate: '13-14 марта 2023',
    schedule: '9:00-22:00',
  },
  {
    id: 2,
    title: 'Заказ от 12 марта 2023',
    number: '№ 1203121',
    status: 2,
    summ: '2398',
    payStatus: 'Оплачено',
    address: 'г. Москва , ул. Пушкина , д. 2',
    deliveryDate: '13-14 марта 2023',
    schedule: '9:00-22:00',
  },
];

function OrdersList() {
  return (
    <>
      {arr.map((item) => (
        <Order
          key={item.id}
          order={item}
        />
      ))}
    </>
  );
}

export default OrdersList;
