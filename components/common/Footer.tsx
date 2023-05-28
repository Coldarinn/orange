import Link from 'next/link';
import WhatsApp from '@/assets/images/icons/whatsapp.svg';
import VK from '@/assets/images/icons/vk.svg';
import Tg from '@/assets/images/icons/tg.svg';
import Logo from '@/assets/images/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-brand-200 relative md:z-[2]">
      <div className="container">
        <div className="flex h-[240px] md:flex-wrap md:h-auto">
          <div className="basis-[248px] md:basis-1/2 h-full pt-[60px] md:pt-[24px] md:pl-[24px] md:pb-[20px] flex flex-col border-r md:border-r-0 md:border-b border-stroke-brand">
            <div className="font-bold mb-[20px] text-text-700">
              Интернет-магазин
            </div>
            <Link
              href="/delivery"
              className="text-text-600 mb-[12px] transition duration-300 hover:text-brand-700"
            >
              Доставка и оплата
            </Link>
            <Link
              href="/asd"
              className="text-text-600 mb-[12px] transition duration-300 hover:text-brand-700"
            >
              Обмен и возврат
            </Link>
            <Link
              href="/confidentiality"
              className="text-text-600 transition duration-300 hover:text-brand-700"
            >
              Конфиденциальность
            </Link>
          </div>
          <div className="basis-[248px] md:basis-1/2 h-full pt-[60px] md:pt-[24px] md:pl-[24px] md:pb-[20px] flex flex-col border-r md:border-r-0 md:border-b border-stroke-brand">
            <div className="font-bold mb-[20px] text-text-700">
              Компания
            </div>
            <Link
              href="/about"
              className="text-text-600 mb-[12px] transition duration-300 hover:text-brand-700"
            >
              О нас
            </Link>
            <Link
              href="/asd"
              className="text-text-600 mb-[12px] transition duration-300 hover:text-brand-700"
            >
              Обратная связь
            </Link>
            <Link
              href="/asd"
              className="text-text-600 transition duration-300 hover:text-brand-700"
            >
              Контакты
            </Link>
          </div>
          <div className="basis-[248px] md:basis-full h-full ml-[88px] md:ml-0 pt-[60px] md:pt-[20px] flex flex-col md:flex-row md:items-center border-r md:border-r-0 border-stroke-brand">
            <div className="flex flex-col md:basis-1/2 md:pl-[24px]">
              <a
                href="tel:88008453535"
                className="text-xl font-bold mb-[8px] transition duration-300 hover:text-brand-700"
              >
                8 800 845-35-35
              </a>
              <div className="text-sm text-text-700 mb-[14px]">
                Справочкая служба
                <br />
                (звонок по РФ бесплатный)
              </div>
            </div>
            <ul className="flex gap-[16px] md:gap-[12px] md:pl-[24px]">
              <li>
                <a
                  href="tel:88008453535"
                  className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full"
                >
                  <WhatsApp />
                </a>
              </li>
              <li>
                <a
                  href="tel:88008453535"
                  className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full"
                >
                  <VK />
                </a>
              </li>
              <li>
                <a
                  href="tel:88008453535"
                  className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full"
                >
                  <Tg />
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-[88px] flex items-center md:hidden">
            <Link href="/">
              <Logo />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
