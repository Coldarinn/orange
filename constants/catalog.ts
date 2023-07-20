import { IOption } from '@/components/common/Select';
import { TSorts } from '@/config/api';

interface ISortItems {
  id: number;
  title: string;
  value: TSorts;
}

export const sortItems: ISortItems[] = [
  {
    id: 1,
    title: 'по популярности',
    value: 'popularity_desc',
  },
  {
    id: 2,
    title: 'по рейтингу',
    value: 'popularity_asc',
  },
  {
    id: 3,
    title: 'по скидке',
    value: 'discount',
  },
  {
    id: 4,
    title: 'сначала новые',
    value: 'newest',
  },
  {
    id: 5,
    title: 'сначала дорогие',
    value: 'price_desc',
  },
  {
    id: 6,
    title: 'сначала дешевые',
    value: 'price_asc',
  },
];

export const countOptions: IOption[] = [
  {
    id: 1,
    title: '4',
  },
  {
    id: 2,
    title: '8',
  },
  {
    id: 3,
    title: '12',
  },
  {
    id: 4,
    title: '16',
  },
  {
    id: 5,
    title: '1',
  },
  {
    id: 6,
    title: '2',
  },
  {
    id: 7,
    title: '3',
  },
];
