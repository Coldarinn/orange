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
    value: 'stars',
  },
  {
    id: 2,
    title: 'по рейтингу',
    value: 'popularity_asc',
  },
  {
    id: 3,
    title: 'по скидке',
    value: 'popularity_desc',
  },
  {
    id: 4,
    title: 'сначала дорогие',
    value: 'price_asc',
  },
  {
    id: 5,
    title: 'сначала дешевые',
    value: 'price_desc',
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
];
