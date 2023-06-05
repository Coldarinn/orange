import Image from 'next/image';
import Button from '@/components/common/UI/Button';
import Lego from '@/assets/images/lego.png';
import LegoMovie from '@/assets/images/lego-movie.png';

function Discounts() {
  return (
    <div className="flex md:flex-col-reverse md:px-[24px] gap-[40px] md:gap-[20px]">
      <div className="w-[520px] md:w-full basis-[520px] md:basis-auto p-[40px] md:p-[32px] md:pr-[29px] rounded-[40px] bg-brand-300">
        <div className="text-2xl text-text-900 ubuntu mb-[24px] md:mb-[20px]">
          Узнавайте о скидках первыми!
        </div>
        <div className="text-text-600 mb-[32px] md:mb-[24px]">
          Подпишитесь на наши новости, чтобы всегда быть в курсе выгодных
          предложений
        </div>
        <div className="flex gap-[16px]">
          <input
            className="grow md:grow-0 md:shrink py-[16px] px-[20px] bg-brand-100 rounded-[26px] border border-stroke-brand text-text-1000 min-w-0"
            placeholder="Электронная почта"
          />
          <Button
            type="orange"
            text="Подписаться"
            customStyles="w-[160px] basis-[160px] md:shrink-0 h-[52px]"
          />
        </div>
      </div>
      <div className="grow p-[40px] md:px-[32px] pb-[30px] rounded-[40px] bg-brand-400">
        <div className="flex justify-between mb-[4px] md:mb-[20px]">
          <div className="text-2xl text-text-900 ubuntu">
            Скидка 10% на конструкторы LEGO
          </div>
          <div className="w-[50px] basis-[50px] shrink-0">
            <Image
              src={Lego}
              alt="Лего"
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div className="flex justify-between md:flex-col">
          <div>
            <div className="w-[255px] text-text-600 mb-[32px] md:mb-[20px]">
              Не пропустите скидки на все наборы LEGO в феврале
            </div>
            <Button
              type="white"
              text="Подробнее"
              customStyles="w-[148px] h-[52px] md:hidden"
            />
          </div>
          <div className="w-[339px] md:w-full md:mb-[10px]">
            <Image
              src={LegoMovie}
              alt="Лего"
              style={{ width: '100%' }}
            />
          </div>
          <Button
            type="white"
            text="Подробнее"
            customStyles="w-full h-[52px] hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
}

export default Discounts;
