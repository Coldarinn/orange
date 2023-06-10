import Head from 'next/head';
import Breadcrumbs from '@/components/common/UI/Breadcrumbs';
import Image from 'next/image';
import BgImage from '@/assets/images/about/bg.png';
import Benefits from '@/components/About/Benefits';
import Socials from '@/components/common/Subscribe/Socials';
import BgMdImage from '@/assets/images/about/bg-md.png';

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

export default function About() {
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
      <div className="about-background" />
      <div className="pt-[200px] md:pt-[230px] pb-[60px] md:pb-0 border-b md:border-0 border-text-100 mb-[60px] relative md:z-[2]">
        <div className="pb-[120px] md:pb-[72px] border-b border-text-100 mb-[60px] md:mb-[32px] md:px-[24px]">
          <div className="container">
            <Breadcrumbs list={list} />
            <div className="text-[32px] mb-[40px] ubuntu md:hidden">О компании</div>
            <div className="relative rounded-[40px] mb-[80px] md:mb-[60px]">
              <div className="relative z-[1] max-w-[646px] mx-auto pt-[72px] md:pt-0 pb-[94px] md:pb-[24px]">
                <div className="mb-[24px] ubuntu text-[24px] md:text-[32px]">
                  <span className="text-text-700">Весёлый</span>
                  {' '}
                  <span className="text-brand-700">апельсин</span>
                </div>
                <p className="text-xl text-text-600 md:leading-[26px] pt-sans">
                  — это интернет-магазин детских игрушек, который заботится о
                  качестве товаров и удовлетворении потребностей клиентов. Мы
                  являемся молодой и перспективной компанией, которая стремится
                  поддерживать отечественных производителей детской одежды и
                  игрушек.
                </p>
              </div>
              <Image
                src={BgImage}
                alt="Фоновая картинка"
                fill
                className="md:hidden"
              />
              <div className="w-[323px] h-[184px] mx-auto relative hidden md:block">
                <Image
                  src={BgMdImage}
                  alt="Фоновая картинка"
                  fill
                />
              </div>
            </div>
            <Benefits />
          </div>
        </div>
        <div className="container">
          <Socials />
        </div>
      </div>
    </>
  );
}
