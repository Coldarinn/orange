import Footer from './common/Footer';
import Header from './common/Header';

interface ILayout {
  children: JSX.Element;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
