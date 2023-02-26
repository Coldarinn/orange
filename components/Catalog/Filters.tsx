import { useState } from 'react';
import Checkbox from '@/components/Common/UI/Checkbox';
import Arrow from '@/assets/images/icons/arrow.svg';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Filters() {
  const [value, setValue] = useState<number | number[]>([0, 100000]);
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState<boolean>(false);
  const [isThemeOpen, setIsThemeOpen] = useState<boolean>(false);
  const [isGenderOpen, setIsGenderOpen] = useState<boolean>(false);
  const [isCountryOpen, setIsCountryOpen] = useState<boolean>(false);

  return (
    <div className="catalog-filters">
      <div className="catalog-filters__item item-catalog-filters">
        <button
          type="button"
          className="item-catalog-filters__header"
          onClick={() => setIsPriceOpen((prev) => !prev)}
        >
          <div className="item-catalog-filters__title">
            Цена, ₽
          </div>
          <Arrow className={`item-catalog-filters__arrow ${isPriceOpen && 'is-open'}`} />
        </button>
        {isPriceOpen && (
        <div className="item-catalog-filters__body">
          <Slider
            min={0}
            max={100000}
            range
            value={value}
            onChange={(val) => setValue(val)}
          />
          <div className="flex justify-between mt-[16px]">
            <input
              type="number"
              className="flex items-center w-[106px] h-[35px] px-[12px] border border-solid border-text-400 rounded-[40px]"
              // @ts-ignore
              value={value[0]}
              // @ts-ignore
              onChange={(e) => setValue((prev) => [+e.target.value, prev[1]])}
            />
            <input
              type="number"
              className="flex items-center w-[106px] h-[35px] px-[12px] border border-solid border-text-400 rounded-[40px]"
              // @ts-ignore
              value={value[1]}
              // @ts-ignore
              onChange={(e) => setValue((prev) => [prev[0], +e.target.value])}
            />
          </div>
        </div>
        )}
      </div>
      <div className="catalog-filters__item item-catalog-filters">
        <button
          type="button"
          className="item-catalog-filters__header"
          onClick={() => setIsBrandsOpen((prev) => !prev)}
        >
          <div className="item-catalog-filters__title">
            Бренд
          </div>
          <Arrow className={`item-catalog-filters__arrow ${isBrandsOpen && 'is-open'}`} />
        </button>
        {isBrandsOpen && (
        <div className="item-catalog-filters__body">
          <div className="flex items-center justify-between mb-[16px]">
            <Checkbox
              id="lego"
              title="LEGO"
            />
            <span className="text-text-400">
              210
            </span>
          </div>
          <div className="flex items-center justify-between mb-[16px]">
            <Checkbox
              id="MORK"
              title="MORK"
            />
            <span className="text-text-400">
              34
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Checkbox
              id="Reobrix"
              title="Reobrix"
            />
            <span className="text-text-400">
              26
            </span>
          </div>
        </div>
        )}
      </div>
      <div className="catalog-filters__item item-catalog-filters">
        <button
          type="button"
          className="item-catalog-filters__header"
          onClick={() => setIsThemeOpen((prev) => !prev)}
        >
          <div className="item-catalog-filters__title">
            Тематика
          </div>
          <Arrow className={`item-catalog-filters__arrow ${isThemeOpen && 'is-open'}`} />
        </button>
        {isThemeOpen && (
        <div className="item-catalog-filters__body">
          <div className="flex items-center justify-between mb-[16px]">
            <Checkbox
              id="theme1"
              title="Тематика 1"
            />
            <span className="text-text-400">
              210
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Checkbox
              id="theme2"
              title="Тематика 2"
            />
            <span className="text-text-400">
              34
            </span>
          </div>
        </div>
        )}
      </div>
      <div className="catalog-filters__item item-catalog-filters">
        <button
          type="button"
          className="item-catalog-filters__header"
          onClick={() => setIsGenderOpen((prev) => !prev)}
        >
          <div className="item-catalog-filters__title">
            Пол
          </div>
          <Arrow className={`item-catalog-filters__arrow ${isGenderOpen && 'is-open'}`} />
        </button>
        {isGenderOpen && (
        <div className="item-catalog-filters__body">
          <div className="flex items-center justify-between mb-[16px]">
            <Checkbox
              id="male"
              title="Мужской"
            />
            <span className="text-text-400">
              210
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Checkbox
              id="female"
              title="Женский"
            />
            <span className="text-text-400">
              34
            </span>
          </div>
        </div>
        )}
      </div>
      <div className="catalog-filters__item item-catalog-filters">
        <button
          type="button"
          className="item-catalog-filters__header"
          onClick={() => setIsCountryOpen((prev) => !prev)}
        >
          <div className="item-catalog-filters__title">
            Страна производства
          </div>
          <Arrow className={`item-catalog-filters__arrow ${isCountryOpen && 'is-open'}`} />
        </button>
        {isCountryOpen && (
        <div className="item-catalog-filters__body">
          <div className="flex items-center justify-between mb-[16px]">
            <Checkbox
              id="russia"
              title="Россия"
            />
            <span className="text-text-400">
              210
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Checkbox
              id="german"
              title="Германия"
            />
            <span className="text-text-400">
              34
            </span>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Filters;
