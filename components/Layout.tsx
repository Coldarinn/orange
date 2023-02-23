import Footer from './common/Footer';
import Header from './common/Header';

interface Props {
  children: JSX.Element
}

export default function Layout({ children } : Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
