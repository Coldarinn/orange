export interface ICartItem {
  id: number,
  count: number,
  price: number,
  totalPrice: number,
  isSelected: boolean,
  src: string
}

const cartItems: ICartItem[] = [
  {
    id: 1,
    count: 1,
    price: 1000,
    totalPrice: 1000,
    isSelected: true,
    src: '/assets/images/products/1.png',
  },
  {
    id: 2,
    count: 1,
    price: 1000,
    totalPrice: 1000,
    isSelected: true,
    src: '/assets/images/products/1.png',
  },
  {
    id: 3,
    count: 1,
    price: 1000,
    totalPrice: 1000,
    isSelected: true,
    src: '/assets/images/products/1.png',
  },
];

export default cartItems;
