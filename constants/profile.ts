interface IProfileMenu {
  id: number,
  name: string,
  link: string,
  notifs: number,
}

const profileMenu: IProfileMenu[] = [
  {
    id: 0,
    name: 'Профиль',
    link: '/profile',
    notifs: 0,
  },
  {
    id: 1,
    name: 'Мои заказы',
    link: '/profile/orders',
    notifs: 4,
  },
  {
    id: 2,
    name: 'Личные данные',
    link: '/profile/data',
    notifs: 0,
  },
  {
    id: 3,
    name: 'Купленное',
    link: '/profile/bought',
    notifs: 0,
  },
  {
    id: 4,
    name: 'Избранное',
    link: '/profile/favorites',
    notifs: 0,
  },
  // {
  //   id: 5,
  //   name: 'Настройки',
  //   link: '/profile/settings',
  //   notifs: 0,
  // },
];

export default profileMenu;
