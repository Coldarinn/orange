import Head from 'next/head';

export default function Confidentiality() {
  return (
    <>
      <Head>
        <title>Весёлый апельсин | Политика конфиденциальности</title>
        <meta
          name="description"
          content="Весёлый апельсин Политика конфиденциальности"
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
      <div className="pt-[200px] pb-[120px] border-b border-text-100 mb-[60px]">
        <div className="container">
          <h2 className="text-[32px] font-bold mb-[60px] ubuntu">
            Политика конфиденциальности
          </h2>
        </div>
      </div>
    </>
  );
}
