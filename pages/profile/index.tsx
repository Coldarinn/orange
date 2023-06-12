import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Profile/Layout';
import Button from '@/components/common/UI/Button';
import User from '@/assets/images/icons/profile-user.svg';
import Notif from '@/assets/images/icons/notif.svg';
import Mastercard from '@/assets/images/icons/mastercard.svg';
import Product from '@/assets/images/products/1.png';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setUser } from '@/store/slicers/authSlice';
import $api from '@/services/api';
import EndpointNames from '@/config/api';
import { addAlert } from '@/store/slicers/alertsSlice';

function Profile() {
  const dispatch = useAppDispatch();
  const { fingerKey, accessToken } = useAppSelector((state) => state.auth);

  const signOut = () => {
    $api.post(EndpointNames.SIGN_OUT, { finger_key: fingerKey }, {
      headers: {
        AccessToken: accessToken,
        FingerKey: fingerKey,
      },
    })
      .then(() => {
        addAlert({ id: Date.now(), type: 'success', text: 'Вы успешно вышли из аккаунта' });
        dispatch(setUser({ accessToken: '', fingerKey: '', roles: [] }));
        localStorage.removeItem('accessToken');
        localStorage.removeItem('fingerKey');
        localStorage.removeItem('roles');
        localStorage.removeItem('refreshToken');
      });
  };
  return (
    <>
      <Head>
        <title>Весёлый апельсин | Профиль</title>
        <meta
          name="description"
          content="Весёлый апельсин | Профиль"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className="pt-[200px] md:pt-[230px]">
        <Layout>
          <div className="flex md:block">
            <div className="w-full max-w-[480px] md:max-w-full md:mb-[24px] md:px-[24px]">
              <div className="p-[24px] bg-white rounded-[20px] mb-[24px] border border-stroke-dark">
                <div className="flex justify-between items-start mb-[24px] pb-[24px] border-b border-stroke-dark">
                  <div className="flex justify-between items-center">
                    <div className="w-[72px] h-[72px] flex items-center justify-center rounded-full border border-stroke-dark">
                      <User />
                    </div>
                    <div className="ml-[16px] text-2xl ubuntu">
                      Иванов Максим
                    </div>
                  </div>
                  <Notif />
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-text-600">
                    <div className="flex items-center mb-[8px]">
                      <div className="w-[67px] font-medium">Телефон</div>
                      <div className="ml-[24px]">+7 (952) 305-89-23</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-[67px] font-medium">Почта</div>
                      <div className="ml-[24px]">ivanovmax@mail.ru</div>
                    </div>
                  </div>
                  <Button
                    type="black"
                    text="Выйти"
                    customStyles="!w-[76px] !h-[39px]"
                    onClick={signOut}
                  />
                </div>
              </div>
              <div className="md:hidden p-[24px] bg-white border border-stroke-dark rounded-[20px]">
                <div className="flex justify-between items-center mb-[24px]">
                  <div className="text-2xl ubuntu">Иванов Максим</div>
                  <button
                    type="button"
                    className="font-bold text-brand-700"
                  >
                    Изменить
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-text-600">
                    553092******9831
                    <span className="ml-[16px] inline-block">04/28</span>
                  </div>
                  <Mastercard />
                </div>
              </div>
              <div className="hidden md:block w-full ml-0">
                <div className="flex gap-[20px]">
                  <div className="basis-1/2">
                    <div className="p-[24px] bg-white border border-stroke-dark rounded-[20px]">
                      <div className="text-2xl ubuntu mb-[24px]">Купленное</div>
                      <div className="relative h-[80px]">
                        <Link
                          href="/catalog/1"
                          className="absolute top-0 left-0 w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                        >
                          <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                            <Image
                              src={Product}
                              alt="Картинка продукта"
                              fill
                            />
                          </span>
                        </Link>
                        <Link
                          href="/catalog/1"
                          className="absolute top-0 left-[32px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                        >
                          <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                            <Image
                              src={Product}
                              alt="Картинка продукта"
                              fill
                            />
                          </span>
                        </Link>
                        <Link
                          href="/profile/bought"
                          className="absolute top-0 left-[64px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700 flex items-center justify-center text-xl pt-sans text-text-600"
                        >
                          +4
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2">
                    <div className="p-[24px] bg-white border border-stroke-dark rounded-[20px]">
                      <div className="text-2xl ubuntu mb-[24px]">Избранное</div>
                      <div className="relative h-[80px]">
                        <Link
                          href="/catalog/1"
                          className="absolute top-0 left-0 w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                        >
                          <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                            <Image
                              src={Product}
                              alt="Картинка продукта"
                              fill
                            />
                          </span>
                        </Link>
                        <Link
                          href="/catalog/1"
                          className="absolute top-0 left-[32px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                        >
                          <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                            <Image
                              src={Product}
                              alt="Картинка продукта"
                              fill
                            />
                          </span>
                        </Link>
                        <Link
                          href="/profile/bought"
                          className="absolute top-0 left-[64px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700 flex items-center justify-center text-xl pt-sans text-text-600"
                        >
                          +4
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden w-full max-w-[392px] ml-[24px]">
              <div className="p-[24px] bg-white border border-stroke-dark rounded-[20px] mb-[24px]">
                <div className="text-2xl ubuntu mb-[24px]">Купленное</div>
                <div className="relative h-[80px]">
                  <Link
                    href="/catalog/1"
                    className="absolute top-0 left-0 w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                  >
                    <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                      <Image
                        src={Product}
                        alt="Картинка продукта"
                        fill
                      />
                    </span>
                  </Link>
                  <Link
                    href="/catalog/1"
                    className="absolute top-0 left-[48px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                  >
                    <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                      <Image
                        src={Product}
                        alt="Картинка продукта"
                        fill
                      />
                    </span>
                  </Link>
                  <Link
                    href="/catalog/1"
                    className="absolute top-0 left-[96px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                  >
                    <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                      <Image
                        src={Product}
                        alt="Картинка продукта"
                        fill
                      />
                    </span>
                  </Link>
                  <Link
                    href="/catalog/1"
                    className="absolute top-0 left-[144px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                  >
                    <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                      <Image
                        src={Product}
                        alt="Картинка продукта"
                        fill
                      />
                    </span>
                  </Link>
                  <Link
                    href="/profile/bought"
                    className="absolute top-0 left-[192px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700 flex items-center justify-center text-xl pt-sans text-text-600"
                  >
                    +4
                  </Link>
                </div>
              </div>
              <div className="p-[24px] bg-white border border-stroke-dark rounded-[20px]">
                <div className="text-2xl ubuntu mb-[24px]">Избранное</div>
                <div className="relative h-[80px]">
                  <Link
                    href="/catalog/1"
                    className="absolute top-0 left-0 w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                  >
                    <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                      <Image
                        src={Product}
                        alt="Картинка продукта"
                        fill
                      />
                    </span>
                  </Link>
                  <Link
                    href="/catalog/1"
                    className="absolute top-0 left-[48px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                  >
                    <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                      <Image
                        src={Product}
                        alt="Картинка продукта"
                        fill
                      />
                    </span>
                  </Link>
                  <Link
                    href="/catalog/1"
                    className="absolute top-0 left-[96px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                  >
                    <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                      <Image
                        src={Product}
                        alt="Картинка продукта"
                        fill
                      />
                    </span>
                  </Link>
                  <Link
                    href="/catalog/1"
                    className="absolute top-0 left-[144px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700"
                  >
                    <span className="absolute left-[8px] top-[8px] right-[8px] bottom-[8px]">
                      <Image
                        src={Product}
                        alt="Картинка продукта"
                        fill
                      />
                    </span>
                  </Link>
                  <Link
                    href="/profile/favorites"
                    className="absolute top-0 left-[192px] w-[80px] h-full bg-white border border-stroke-dark rounded-[12px] transition duration-300 hover:border-brand-700 flex items-center justify-center text-xl pt-sans text-text-600"
                  >
                    +12
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block px-[24px]">
              <div className="p-[24px] bg-white border border-stroke-dark rounded-[20px]">
                <div className="flex justify-between items-center mb-[24px]">
                  <div className="text-2xl ubuntu">Иванов Максим</div>
                  <button
                    type="button"
                    className="font-bold text-brand-700"
                  >
                    Изменить
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-text-600">
                    553092******9831
                    <span className="ml-[16px] inline-block">04/28</span>
                  </div>
                  <Mastercard />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Profile;
