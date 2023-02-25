import { useState } from 'react';
import Link from 'next/link';
import menuItems from '@/constants/menu';
import Logo from 'assets/images/logo.svg';
import Location from 'assets/images/icons/location.svg';
import Search from 'assets/images/icons/search.svg';
import User from 'assets/images/icons/user.svg';
import Heart from 'assets/images/icons/heart.svg';
import Cart from 'assets/images/icons/cart.svg';

export default function Header() {
  const [selected, setSelected] = useState<Number>(0);

  return (
    <header className="fixed left-0 top-0 z-[3] w-full bg-white">
      <div className="container pt-[20px] pb-[55px] relative">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center ml-[84px]">
            <Location />
            <span className="ml-[12px] text-text-700 pt-sans">Москва</span>
          </div>
          <div className="flex items-center w-[312px] h-[48px] bg-brand-200 border border-stroke-brand rounded-[26px] px-[23px] ml-[53px]">
            <Search />
            <input
              className="w-full ml-[12px] text-text-500"
              placeholder="Поиск по сайту"
            />
          </div>
          <div className="flex ml-auto gap-[16px]">
            <Link
              href="/"
              className="flex items-center h-[48px] px-[24.5px] border-2 border-solid border-[#F2F2F2] rounded-[24px]"
            >
              <User className="fill-[#FF8700]" />
              <span className="ml-[10px] pt-sans">Профиль</span>
            </Link>
            <Link
              href="/"
              className="flex items-center h-[48px] px-[24.5px] border-2 border-solid border-[#F2F2F2] rounded-[24px]"
            >
              <Heart className="fill-[#FF8700]" />
              <span className="ml-[10px] pt-sans">Избранное</span>
            </Link>
            <Link
              href="/cart"
              className="flex items-center h-[48px] px-[24.5px] bg-[#FF8700] rounded-[24px]"
            >
              <Cart className="fill-white" />
              <span className="ml-[10px] text-white font-bold">Корзина</span>
            </Link>
          </div>
        </div>
        <div className="header-menu">
          {menuItems.map((menuItem) => (
            <div
              key={menuItem.id.toString()}
              className={`header-menu__item ${selected === menuItem.id ? 'active' : ''}`}
            >
              <button
                className="header-menu__title"
                type="button"
                onClick={() => setSelected(selected === menuItem.id ? 0 : menuItem.id)}
              >
                {menuItem.title}
              </button>
              <div className="header-submenu">
                {menuItem.subMenu.map((subMenuItem) => (
                  <Link
                    href={`${subMenuItem.link}${subMenuItem.query}`}
                    key={subMenuItem.id.toString()}
                    className="header-submenu__item"
                    onClick={() => setSelected(0)}
                  >
                    {subMenuItem.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
