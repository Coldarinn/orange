interface ISubMenu {
  id: Number,
  title: String,
  link: String,
  query: String,
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
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 3,
        title: 'Обувь',
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 4,
        title: 'Футболки',
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 5,
        title: 'Шорты',
        link: '/catalog',
        query: '?category=games&subcategory=game',
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
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 8,
        title: 'Обувь',
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 9,
        title: 'Футболки',
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 10,
        title: 'Шорты',
        link: '/catalog',
        query: '?category=games&subcategory=game',
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
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 13,
        title: 'Обувь',
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 14,
        title: 'Футболки',
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 15,
        title: 'Шорты',
        link: '/catalog',
        query: '?category=games&subcategory=game',
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
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 18,
        title: 'Обувь',
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 19,
        title: 'Футболки',
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
      {
        id: 20,
        title: 'Шорты',
        link: '/catalog',
        query: '?category=games&subcategory=game',
      },
    ],
  },
];

export default menuItems;
