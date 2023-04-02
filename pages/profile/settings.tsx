import Layout from '@/components/Profile/Layout';
import Head from 'next/head';

function Settings() {
  return (
    <>
      <Head>
        <title>
          Весёлый апельсин | Профиль
        </title>
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
      <Layout>
        <div>
          settings
        </div>
      </Layout>
    </>
  );
}

export default Settings;
