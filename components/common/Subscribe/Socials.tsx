import Vk from '@/assets/images/icons/vk.svg';
import Tg from '@/assets/images/icons/tg.svg';
import Whatsapp from '@/assets/images/icons/whatsapp.svg';
import Fruit from '@/assets/images/about/fruit.png';
import Image from 'next/image';
import Button from '../UI/Button';

function Socials() {
  return (
    <div className="flex gap-[40px]">
      <div className="w-[632px] basis-[632px] p-[40px] rounded-[40px] bg-brand-350">
        <div className="text-[32px] ubuntu mb-[24px]">
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
      <div className="relative grow p-[40px] pb-[30px] rounded-[40px] bg-brand-300">
        <div className="text-[32px] mb-[24px] ubuntu">
          Следите за нами социальных сетях
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
              className="flex items-center justify-center rounded-full bg-white w-[52px] h-[52px] transition duration-300 hover:opacity-60"
            >
              <Whatsapp />
            </a>
          </li>
          <li className="mr-[16px]">
            <a
              href="https://www.youtube.com/"
              target="blank"
              className="flex items-center justify-center rounded-full bg-white w-[52px] h-[52px] transition duration-300 hover:opacity-60"
            >
              <Vk />
            </a>
          </li>
          <li className="mr-[16px]">
            <a
              href="https://www.youtube.com/"
              target="blank"
              className="flex items-center justify-center rounded-full bg-white w-[52px] h-[52px] transition duration-300 hover:opacity-60"
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
