import Footer from './Common/Footer';
import Header from './Common/Header';

interface ILayout {
  children: JSX.Element
}

export default function Layout({ children } : ILayout) {
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
