import Head from 'next/head';
import Breadcrumbs from '@/components/Common/Breadcrumbs';
import Discounts from '@/components/Common/Discounts';
import Image from 'next/image';
import BgImage from '@/assets/images/about/bg.png';

const list = [
  {
    id: 1,
    title: 'Главная ',
    link: '/',
  },
  {
    id: 2,
    title: 'О Компании ',
    link: '/about',
  },
];

export default function Product() {
  return (
    <>
      <Head>
        <title>Весёлый апельсин | О нас</title>
        <meta
          name="description"
          content="Весёлый апельсин О нас"
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
      <div className="pt-[200px] pb-[60px] border-b border-text-100 mb-[60px]">
        <div className="container !max-w-[1331px]">
          <Breadcrumbs list={list} />
          <div className="text-[32px] mb-[40px] ubuntu">
            О компании
          </div>
          <div className="relative rounded-[40px] mr-[20px]">
            <div className="relative z-[1] max-w-[646px] mx-auto pt-[72px] pb-[94px]">
              <div className="text-2xl mb-[20px] ubuntu text-[24px]">
                <span className="text-text-700">Весёлый</span>
                {' '}
                <span className="text-brand-700">апельсин</span>
              </div>
              <p className="text-xl text-text-600">
                — это интернет-магазин детских игрушек, который заботится о качестве
                товаров и удовлетворении потребностей клиентов. Мы являемся молодой и перспективной
                компанией, которая стремится поддерживать отечественных производителей
                детской одежды и игрушек.
              </p>
            </div>
            <Image
              src={BgImage}
              alt="Фоновая картинка"
              fill
            />
          </div>
          <div className="mt-[90px]">
            <Discounts />
          </div>
        </div>
      </div>
    </>
  );
}
