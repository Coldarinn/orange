import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setUser } from '@/store/slicers/authSlice';
import { setWidth } from '@/store/slicers/scrollbarSlice';
import Header from './Header';
import Footer from './Footer';

interface ILayout {
  children: JSX.Element;
}

export default function Layout({ children }: ILayout) {
  const divRef = useRef<HTMLDivElement>(null);
  const { width } = useAppSelector((state) => state.scrollbar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    const fingerKey = localStorage.getItem('fingerKey') || '';
    dispatch(setUser({ token, fingerKey }));
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
      <div
        className="w-[50px] h-[50px] overflow-scroll"
        ref={divRef}
      />
    </>
  );
}
