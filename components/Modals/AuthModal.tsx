import { useState } from 'react';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import $api from '@/services/api';
import EndpointNames from '@/config/api';
import { setUser } from '@/store/slicers/authSlice';
import { useAppDispatch } from '@/hooks/store';
import { addAlert } from '@/store/slicers/alertsSlice';
import Modal from '../common/UI/Modal';
import Button from '../common/UI/Button';

interface IAuthResponse {
  finger_key: string,
  access_token: string,
  refresh_token: string,
  role: string[]
}

interface IAuthModal {
  isVisible: boolean,
  onClose: () => void,
}

function AuthModal({ isVisible, onClose }: IAuthModal) {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const authIsSuccess = (data: IAuthResponse) => {
    dispatch(setUser({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      fingerKey: data.finger_key,
      roles: data.role,
    }));
    nookies.set(null, 'accessToken', data.access_token);
    nookies.set(null, 'refreshToken', data.refresh_token);
    nookies.set(null, 'roles', JSON.stringify(data.role));
    nookies.set(null, 'fingerKey', data.finger_key);
    setLogin('');
    setPassword('');
    onClose();
    dispatch(addAlert({ id: Date.now(), type: 'success', text: `Вы успешно${isLogin ? '' : ' зарегистрировались и '}вошли в аккаунт` }));
    router.push('/profile');
  };

  const submitHandler = (e:React.FormEvent) => {
    e.preventDefault();
    if (login && password) {
      if (isLogin) {
        $api.post(EndpointNames.SIGN_IN, { login, password })
          .then((res) => authIsSuccess(res.data.result));
      } else {
        $api.post(EndpointNames.SIGN_UP, { login, password })
          .then((res) => authIsSuccess(res.data.result));
      }
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
    >
      <form
        className="w-[452px] p-[32px] rounded-[20px] border border-stroke-dark bg-white"
        onSubmit={submitHandler}
      >
        <div className="text-2xl font-bold ubuntu text-text-900 mb-[32px] text-center">
          {isLogin ? 'Вход' : 'Регистрация'}
        </div>
        <div className="mb-[24px] relative">
          <input
            className={`w-full py-[16px] px-[28px] bg-brand-200 border border-stroke-dark rounded-[26px]${!login ? ' border-red' : ''}`}
            type="text"
            placeholder="Логин"
            value={login}
            autoComplete="on"
            onInput={(event) => setLogin((event.target as HTMLInputElement).value)}
          />
          {!login && <div className="absolute left-[28px] bottom-[-16px] text-xs text-red">Введите логин</div>}
        </div>
        <div className="mb-[24px] relative">
          <input
            className={`w-full py-[16px] px-[28px] bg-brand-200 border border-stroke-dark rounded-[26px]${!password ? ' border-red' : ''}`}
            type="password"
            placeholder="Пароль"
            value={password}
            autoComplete="on"
            onInput={(event) => setPassword((event.target as HTMLInputElement).value)}
          />
          {!password && <div className="absolute left-[28px] bottom-[-16px] text-xs text-red">Введите пароль</div>}
        </div>
        <Button
          buttonType="submit"
          type="orange"
          text={isLogin ? 'Войти' : 'Зарегистрироваться'}
          customStyles="w-full h-[50px] mb-[24px]"
        />
        {isLogin ? (
          <div className="flex items-center justify-center gap-[5px]">
            Еще нет аккаунта?
            <button
              type="button"
              className="transition duration-300 hover:text-brand-700"
              onClick={() => setIsLogin(false)}
            >
              Зарегистрируйтесь
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-[5px]">
            Уже есть аккаунт?
            <button
              type="button"
              className="transition duration-300 hover:text-brand-700"
              onClick={() => setIsLogin(true)}
            >
              Войти
            </button>
          </div>
        )}
      </form>
    </Modal>
  );
}

export default AuthModal;
