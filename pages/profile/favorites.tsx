import Head from 'next/head';
import Layout from '@/components/Profile/Layout';
import Breadcrumbs from '@/components/common/UI/Breadcrumbs';
import FavoriteProducts from '@/components/Profile/FavoriteProducts';

const list = [
  {
    id: 1,
    title: 'Профиль ',
    link: '/profile',
  },
  {
    id: 2,
    title: 'Избранное ',
    link: '/profile/favorites',
  },
];

function Favorites() {
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
      <div className="container pt-[200px] md:pt-[230px]">
        <Breadcrumbs list={list} />
        <div className="flex items-center mb-[32px] md:px-[24px]">
          <div className="text-[32px] ubuntu text-text-900">Избранное</div>
          <div className="ml-[16px] mt-[8px] text-text-600">16 товаров</div>
        </div>
      </div>
      <Layout>
        <FavoriteProducts />
      </Layout>
    </>
  );
}

export default Favorites;
