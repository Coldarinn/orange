import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setUser } from '@/store/slicers/authSlice';
import { setWidth } from '@/store/slicers/scrollbarSlice';
import nookies from 'nookies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Alerts from '../Alerts/Alerts';

interface ILayout {
  children: JSX.Element;
}

export default function Layout({ children }: ILayout) {
  const divRef = useRef<HTMLDivElement>(null);
  const { width } = useAppSelector((state) => state.scrollbar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = nookies.get().accessToken || '';
    const refreshToken = nookies.get().refreshToken || '';
    const fingerKey = nookies.get().fingerKey || '';
    const roles = JSON.parse(nookies.get().roles || '[]');
    console.log('user: ', {
      accessToken, refreshToken, fingerKey, roles,
    });

    dispatch(setUser({
      accessToken, refreshToken, fingerKey, roles,
    }));
  }, []);

  useEffect(() => {
    if (divRef.current !== null) {
      if (width) {
        divRef.current?.remove();
      } else {
        dispatch(setWidth(divRef.current.offsetWidth - divRef.current.clientWidth));
      }
    }
  }, [width]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Alerts />
      <div
        className="w-[50px] h-[50px] overflow-scroll"
        ref={divRef}
      />
    </>
  );
}
