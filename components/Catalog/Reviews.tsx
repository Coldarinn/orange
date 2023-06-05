import Star from '@/assets/images/icons/star.svg';
import Like from '@/assets/images/icons/like.svg';

function Reviews() {
  return (
    <>
      <div className="bg-white py-[32px] md:py-[24px] rounded-[20px] border border-stroke-dark mb-[20px] md:mb-[12px]">
        <div className="mb-[25px] ubuntu text-2xl px-[32px]">
          Отзывы
        </div>
        <div className="flex items-center px-[32px] md:px-[24px] pb-[32px] border-b border-stroke-dark">
          <div className="basis-[182px] mr-[40px]">
            <div className="flex items-center mb-[14px] text-text-700">
              <span className="text-[40px] font-bold  mr-[16px]">
                4,8
              </span>
              <span className="text-sm">
                46 отзывов
              </span>
            </div>
            <button
              type="button"
              className="w-full h-[52px] flex items-center justify-center text-white font-bold gap-[10px] bg-brand-700 border border-stroke-dark rounded-[30px]"
            >
              Оставить отзыв
            </button>
          </div>
          <div className="flex-auto">
            <div className="flex items-center gap-[8px] mb-[15px]">
              <span className="text-text-700">
                5
              </span>
              <div className="flex-auto max-w-[451px] h-[10px] bg-brand-200 rounded-[5px] relative">
                <div className="absolute w-[75%] h-full bg-brand-700 rounded-[5px]" />
              </div>
              <span className="text-text-700">
                40
              </span>
            </div>
            <div className="flex items-center gap-[8px] mb-[15px]">
              <span className="text-text-700">
                4
              </span>
              <div className="flex-auto max-w-[451px] h-[10px] bg-brand-200 rounded-[5px] relative">
                <div className="absolute w-[10%] h-full bg-brand-700 rounded-[5px]" />
              </div>
              <span className="text-text-700">
                4
              </span>
            </div>
            <div className="flex items-center gap-[8px] mb-[15px]">
              <span className="text-text-700">
                3
              </span>
              <div className="flex-auto max-w-[451px] h-[10px] bg-brand-200 rounded-[5px] relative">
                <div className="absolute w-[3%] h-full bg-brand-700 rounded-[5px]" />
              </div>
              <span className="text-text-700">
                1
              </span>
            </div>
            <div className="flex items-center gap-[8px] mb-[15px]">
              <span className="text-text-700">
                2
              </span>
              <div className="flex-auto max-w-[451px] h-[10px] bg-brand-200 rounded-[5px] relative">
                <div className="absolute w-[0%] h-full bg-brand-700 rounded-[5px]" />
              </div>
              <span className="text-text-700">
                0
              </span>
            </div>
            <div className="flex items-center gap-[8px] mb-[15px]">
              <span className="text-text-700">
                1
              </span>
              <div className="flex-auto max-w-[451px] h-[10px] bg-brand-200 rounded-[5px] relative">
                <div className="absolute w-[3%] h-full bg-brand-700 rounded-[5px]" />
              </div>
              <span className="text-text-700">
                1
              </span>
            </div>
          </div>
        </div>
        <div className="px-[32px] md:px-[24px] py-[28px] border-b border-stroke-dark">
          <div className="flex items-center mb-[20px]">
            <Star className="stroke-stars fill-stars mr-[8px]" />
            <Star className="stroke-stars fill-stars mr-[8px]" />
            <Star className="stroke-stars fill-stars mr-[8px]" />
            <Star className="stroke-stars fill-stars mr-[8px]" />
            <Star className="stroke-stars" />
          </div>
          <p className="text-text-600 leading-[19px] mb-[15px]">
            Купили ребенку (9 лет) на 23е февраля, ему очень поравилось.
            Но для меня лично не понравилось: коробка большая, а по факту
            сооружение небольшое.. Т.е. такая цена за размер коробки
            и бренд.., вообще необосновано..
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold">
              Елена Синицина
            </span>
            <div className="flex items-center">
              <button
                type="button"
                className="flex items-center px-[12px] py-[8px] rounded-[24px] bg-[#35CC00] mr-[8px]"
              >
                <Like className="fill-white" />
                <span className="font-bold text-white ml-[8px]">
                  24
                </span>
              </button>
              <button
                type="button"
                className="flex items-center px-[12px] py-[8px] rounded-[24px] mr-[8px]"
              >
                <Like className="fill-text-100 rotate-180 scale-x-[-1]" />
                <span className="font-bold text-text-300 ml-[8px]">
                  24
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-[32px] md:px-[24px] py-[28px] border-b border-stroke-dark">
          <div className="flex items-center mb-[20px]">
            <Star className="stroke-stars fill-stars mr-[8px]" />
            <Star className="stroke-stars fill-stars mr-[8px]" />
            <Star className="stroke-stars fill-stars mr-[8px]" />
            <Star className="stroke-stars fill-stars mr-[8px]" />
            <Star className="stroke-stars fill-stars" />
          </div>
          <p className="text-text-600 leading-[19px] mb-[15px]">
            Купили ребенку (9 лет) на 23е февраля, ему очень поравилось.
            Но для меня лично не понравилось: коробка большая, а по факту
            сооружение небольшое.. Т.е. такая цена за размер коробки
            и бренд.., вообще необосновано..
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold">
              Елена Синицина
            </span>
            <div className="flex items-center">
              <button
                type="button"
                className="flex items-center px-[12px] py-[8px] rounded-[24px] mr-[8px]"
              >
                <Like className="fill-[#B4FF99]" />
                <span className="font-bold text-text-500 ml-[8px]">
                  4
                </span>
              </button>
              <button
                type="button"
                className="flex items-center px-[12px] py-[8px] rounded-[24px] mr-[8px]"
              >
                <Like className="fill-brand-300 rotate-180 scale-x-[-1]" />
                <span className="font-bold text-text-500 ml-[8px]">
                  14
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-[32px] md:px-[24px] pt-[28px]">
          <div className="flex items-center mb-[20px]">
            <Star className="stroke-stars fill-stars mr-[8px]" />
            <Star className="stroke-stars fill-stars mr-[8px]" />
            <Star className="stroke-stars mr-[8px]" />
            <Star className="stroke-stars mr-[8px]" />
            <Star className="stroke-stars" />
          </div>
          <p className="text-text-600 leading-[19px] mb-[15px]">
            Купили ребенку (9 лет) на 23е февраля, ему очень поравилось.
            Но для меня лично не понравилось: коробка большая, а по факту
            сооружение небольшое.. Т.е. такая цена за размер коробки
            и бренд.., вообще необосновано..
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold">
              Елена Синицина
            </span>
            <div className="flex items-center">
              <button
                type="button"
                className="flex items-center px-[12px] py-[8px] rounded-[24px] mr-[8px]"
              >
                <Like className="fill-text-100" />
                <span className="font-bold text-text-300 ml-[8px]">
                  4
                </span>
              </button>
              <button
                type="button"
                className="flex items-center px-[12px] py-[8px] rounded-[24px] bg-[#CC2500] mr-[8px]"
              >
                <Like className="fill-white rotate-180 scale-x-[-1]" />
                <span className="font-bold text-white ml-[8px]">
                  24
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="w-full h-[52px] flex items-center justify-center text-text-900 bg-white rounded-[62px] border border-stroke-dark cursor-pointer"
      >
        Смотреть все отзывы (46)
      </button>
    </>
  );
}

export default Reviews;
