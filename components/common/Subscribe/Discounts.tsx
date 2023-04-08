import Image from "next/image";
import Button from "@/components/common/UI/Button";
import Lego from "@/assets/images/lego.png";
import LegoMovie from "@/assets/images/lego-movie.png";

function Discounts() {
  return (
    <div className="flex gap-[40px]">
      <div className="w-[520px] basis-[520px] p-[40px] rounded-[40px] bg-brand-300">
        <div className="text-2xl text-text-900 ubuntu mb-[24px]">
          Узнавайте о скидках первыми!
        </div>
        <div className="text-text-600 mb-[32px]">
          Подпишитесь на наши новости, чтобы всегда быть в курсе выгодных
          предложений
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
      <div className="grow p-[40px] pb-[30px] rounded-[40px] bg-brand-400">
        <div className="flex justify-between mb-[4px]">
          <div className="text-2xl text-text-900 ubuntu">
            Скидка 10% на конструкторы LEGO
          </div>
          <div className="w-[50px]">
            <Image src={Lego} alt="Лего" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="w-[255px] text-text-600 mb-[32px]">
              Не пропустите скидки на все наборы LEGO в феврале
            </div>
            <Button
              type="white"
              text="Подробнее"
              customStyles="w-[148px] h-[52px]"
            />
          </div>
          <div className="w-[339px]">
            <Image src={LegoMovie} alt="Лего" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discounts;
