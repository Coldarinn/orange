import Order from '@/components/Profile/Order';
import { IOrder } from '@/pages/profile/orders';

interface IOrdersList {
  orders: IOrder[],
}

function OrdersList({ orders }: IOrdersList) {
  return (
    <div className="md:px-[24px]">
      {orders.map((order) => (
        <Order
          key={order.internal_id}
          order={order}
        />
      ))}
    </div>
  );
}

export default OrdersList;
