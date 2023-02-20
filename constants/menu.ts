interface ISubMenu {
  id: Number,
  title: String,
}

interface IMenuItems {
  id: Number,
  title: String,
  subMenu: ISubMenu[]
}

const menuItems: IMenuItems[] = [
  {
    id: 1,
    title: 'Конструкторы',
    subMenu: [
      {
        id: 2,
        title: 'Верхняя одежда',
      },
      {
        id: 3,
        title: 'Обувь',
      },
      {
        id: 4,
        title: 'Футболки',
      },
      {
        id: 5,
        title: 'Шорты',
      },
    ],
  },
  {
    id: 6,
    title: 'Детская одежда',
    subMenu: [
      {
        id: 7,
        title: 'Верхняя одежда',
      },
      {
        id: 8,
        title: 'Обувь',
      },
      {
        id: 9,
        title: 'Футболки',
      },
      {
        id: 10,
        title: 'Шорты',
      },
    ],
  },
  {
    id: 11,
    title: 'Игрушки',
    subMenu: [
      {
        id: 12,
        title: 'Верхняя одежда',
      },
      {
        id: 13,
        title: 'Обувь',
      },
      {
        id: 14,
        title: 'Футболки',
      },
      {
        id: 15,
        title: 'Шорты',
      },
    ],
  },
  {
    id: 16,
    title: 'Настольные игры',
    subMenu: [
      {
        id: 16,
        title: 'Верхняя одежда',
      },
      {
        id: 18,
        title: 'Обувь',
      },
      {
        id: 19,
        title: 'Футболки',
      },
      {
        id: 20,
        title: 'Шорты',
      },
    ],
  },
];

export default menuItems;
