import ConfidentialityText from '@/components/Confidentiality/ConfidentialityText';
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
      <div className="pt-[200px] md:pt-[230px] pb-[120px] md:pb-[72px] border-b md:border-0 border-text-100 mb-[60px] md:mb-0">
        <div className="container">
          <h2 className="text-[32px] font-bold mb-[60px] md:mb-[24px] ubuntu md:px-[24px]">
            Политика конфиденциальности
          </h2>
          <ConfidentialityText />
        </div>
      </div>
    </>
  );
}
