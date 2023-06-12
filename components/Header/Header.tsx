import { useState } from 'react';
import Link from 'next/link';
import menuItems from '@/constants/menu';
import profileMenu from '@/constants/profile';
import Logo from 'assets/images/logo.svg';
import LogoMobile from 'assets/images/logo-mobile.svg';
import Location from 'assets/images/icons/location.svg';
import Search from 'assets/images/icons/search.svg';
import User from 'assets/images/icons/user.svg';
import Heart from 'assets/images/icons/heart.svg';
import Cart from 'assets/images/icons/cart.svg';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/store';
import AuthModal from '../Modals/AuthModal';

export default function Header() {
  const [selected, setSelected] = useState<number>(0);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const router = useRouter();

  const { width, isHide } = useAppSelector((state) => state.scrollbar);
  const { accessToken } = useAppSelector((state) => state.auth);

  const clickProfileButton = () => {
    if (accessToken) {
      router.push('profile');
    } else {
      setIsShowModal(true);
    }
  };

  const closeAuthModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <header
        className="fixed left-0 top-0 z-[3] w-full bg-white"
        style={{ paddingRight: `${isHide ? width : 0}px` }}
      >
        <div className="container pt-[20px] pb-[55px] md:pb-[42px] relative">
          <div className="flex items-center md:px-[24px] md:flex-wrap">
            <Link
              href="/"
              className="md:hidden"
            >
              <Logo />
            </Link>
            <Link
              href="/"
              className="hidden md:block"
            >
              <LogoMobile />
            </Link>
            <div className="flex items-center ml-[84px] md:ml-[40px]">
              <Location />
              <span className="ml-[12px] text-text-700 pt-sans">Москва</span>
            </div>
            <div className="md:order-4 md:w-full flex items-center w-[312px] h-[48px] bg-brand-200 border border-stroke-brand rounded-[26px] px-[23px] ml-[53px] md:ml-0 md:mt-[16px]">
              <Search />
              <input
                className="w-full ml-[12px] text-text-500"
                placeholder="Поиск по сайту"
              />
            </div>
            <div className="flex ml-auto gap-[16px] md:gap-[12px]">
              <button
                type="button"
                className="flex items-center md:justify-center h-[48px] md:w-[48px] px-[24.5px] md:px-0 border-2 border-[#F2F2F2] rounded-[24px]"
                onClick={clickProfileButton}
              >
                <User className="fill-[#FF8700]" />
                <span className="ml-[10px] pt-sans md:hidden">Профиль</span>
              </button>
              <Link
                href="/profile/favorites"
                className="flex items-center md:justify-center h-[48px] md:w-[48px] px-[24.5px] md:px-0 border-2 border-[#F2F2F2] rounded-[24px]"
              >
                <Heart className="fill-[#FF8700]" />
                <span className="ml-[10px] pt-sans md:hidden">Избранное</span>
              </Link>
              <Link
                href="/cart"
                className="flex items-center md:justify-center h-[48px] md:w-[48px] px-[24.5px] md:px-0 bg-[#FF8700] rounded-[24px]"
              >
                <Cart className="fill-white" />
                <span className="ml-[10px] text-white font-bold md:hidden">Корзина</span>
              </Link>
            </div>
          </div>
          {router.pathname.includes('profile')
            ? (
              <div className="header-menu">
                {profileMenu.map((profileItem) => {
                  const isActive = router.pathname === profileItem.link;
                  return !isActive && (
                  <div
                    key={profileItem.id}
                    className="header-menu__item"
                  >
                    <button
                      className="header-menu__title"
                      type="button"
                      onClick={() => router.push(profileItem.link)}
                    >
                      {profileItem.name}
                    </button>
                  </div>
                  );
                })}
              </div>
            )
            : (
              <div className="header-menu">
                {menuItems.map((menuItem) => (
                  <div
                    key={menuItem.id}
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
                          key={subMenuItem.id}
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
            )}
        </div>
      </header>
      <AuthModal
        isVisible={isShowModal}
        onClose={closeAuthModal}
      />
    </>
  );
}
