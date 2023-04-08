import { IOption } from "@/components/common/Select";

interface ISortItems {
  id: number;
  title: string;
}

export const sortItems: ISortItems[] = [
  {
    id: 1,
    title: "по популярности",
  },
  {
    id: 2,
    title: "по рейтингу",
  },
  {
    id: 3,
    title: "по скидке",
  },
  {
    id: 4,
    title: "сначала новые",
  },
  {
    id: 5,
    title: "сначала дорогие",
  },
  {
    id: 6,
    title: "сначала дешевые",
  },
];

export const countOptions: IOption[] = [
  {
    id: 1,
    title: "4",
  },
  {
    id: 2,
    title: "8",
  },
  {
    id: 3,
    title: "12",
  },
  {
    id: 4,
    title: "16",
  },
];
