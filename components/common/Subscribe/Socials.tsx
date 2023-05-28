import Vk from '@/assets/images/icons/vk.svg';
import Tg from '@/assets/images/icons/tg.svg';
import Whatsapp from '@/assets/images/icons/whatsapp.svg';
import Fruit from '@/assets/images/about/fruit.png';
import Image from 'next/image';
import Button from '../UI/Button';

function Socials() {
  return (
    <div className="flex md:flex-col gap-[40px] md:gap-[20px] md:px-[24px] ">
      <div className="w-[632px] md:w-full basis-[632px] md:basis-auto p-[40px] md:p-[32px] rounded-[40px] bg-brand-350 md:bg-white">
        <div className="text-[32px] md:text-[24px] ubuntu mb-[24px]">
          Узнавайте о скидках первыми!
        </div>
        <div className="text-text-600 mb-[32px]">
          Подпишитесь на наши новости, чтобы всегда быть в курсе выгодных предложений
        </div>
        <div className="flex gap-[16px]">
          <input
            className="grow py-[16px] px-[20px] bg-brand-100 rounded-[26px] border border-stroke-brand text-text-1000"
            placeholder="Электронная почта"
          />
          <Button
            type="orange"
            text="Подписаться"
            customStyles="w-[160px] h-[52px]"
          />
        </div>
      </div>
      <div className="relative grow p-[40px] pb-[30px] md:p-[32px] rounded-[40px] bg-brand-300 md:bg-white">
        <div className="text-[32px] md:text-[24px] mb-[24px] ubuntu">
          Следите за нами в социальных сетях
        </div>
        <p className="leading-5 text-text-600 mb-[32px] max-w-[460px]">
          Подпишитесь на наши социальные сети, чтобы видеть
          новости, выгодные предложений и отзывы других клиентов
        </p>
        <ul className="flex">
          <li className="mr-[16px]">
            <a
              href="https://www.youtube.com/"
              target="blank"
              className="flex items-center justify-center rounded-full bg-white w-[52px] h-[52px] transition duration-300 hover:opacity-60 md:border md:border-stroke-dark"
            >
              <Whatsapp />
            </a>
          </li>
          <li className="mr-[16px]">
            <a
              href="https://www.youtube.com/"
              target="blank"
              className="flex items-center justify-center rounded-full bg-white w-[52px] h-[52px] transition duration-300 hover:opacity-60 md:border md:border-stroke-dark"
            >
              <Vk />
            </a>
          </li>
          <li className="mr-[16px]">
            <a
              href="https://www.youtube.com/"
              target="blank"
              className="flex items-center justify-center rounded-full bg-white w-[52px] h-[52px] transition duration-300 hover:opacity-60 md:border md:border-stroke-dark"
            >
              <Tg />
            </a>
          </li>
        </ul>
        <div className="w-[177px] h-[174px] absolute right-0 bottom-0 z-0">
          <Image
            src={Fruit}
            alt="Фоновая картинка"
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default Socials;
