import Footer from './Common/Footer';
import Header from './Common/Header';

interface Props {
  children: JSX.Element
}

export default function Layout({ children } : Props) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
