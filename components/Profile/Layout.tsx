/* eslint-disable max-len */
import Link from 'next/link';
import ProductCards from '@/components/common/Products/ProductCards';
import Discounts from '@/components/common/Subscribe/Discounts';
import Button from '@/components/common/UI/Button';
import profileMenu from '@/constants/profile';
import { useRouter } from 'next/router';

interface ILayout {
  children: JSX.Element;
}

function Layout({ children }: ILayout) {
  const { pathname } = useRouter();
  return (
    <div className="pb-[60px] border-b border-text-100 mb-[60px] md:mb-[32px]">
      <div className="pb-[120px] md:pb-[72px] border-b border-text-100">
        <div className="container">
          <div className="flex items-start md:block">
            <div className="w-full basis-[288px] shrink-0 bg-white border border-stroke-dark rounded-[20px] md:hidden">
              {profileMenu.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center px-[24px] py-[16px] border-b border-stroke-dark"
                >
                  <Link
                    href={item.link}
                    className={`transition duration-300 hover:text-brand-700 ${
                      pathname === item.link
                        ? 'text-brand-700 pointer-events-none'
                        : 'text-text-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {/* {!!item.notifs && (
                    <div className="flex items-center justify-center basis-[20px] shrink-0 h-[20px] bg-brand-700 rounded-full text-white text-sm">
                      {item.notifs}
                    </div>
                  )} */}
                </div>
              ))}
            </div>
            <div className="ml-[32px] flex-1 md:m-0">{children}</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="md:px-[24px]">
          <div className="flex justify-between items-center mt-[64px] md:mt-[32px] mb-[38px] md:mb-[24px]">
            <div className="text-2xl text-text-900 ubuntu">
              Вы недавно смотрели
            </div>
            <Button
              type="black"
              text="Посмотреть ещё"
              customStyles="md:hidden"
            />
          </div>
          <ProductCards id="seventh" />
          <Button
            type="black"
            text="Посмотреть ещё"
            customStyles="!hidden md:!flex !w-full mt-[20px]"
          />
        </div>
        <div className="mt-[90px] md:mt-[40px]">
          <Discounts />
        </div>
      </div>
    </div>
  );
}

export default Layout;
