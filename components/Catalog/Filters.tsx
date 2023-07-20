import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/store';
import Checkbox from '@/components/common/UI/Checkbox';
import Arrow from '@/assets/images/icons/arrow.svg';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import CrossIcon from '@/assets/images/icons/cross.svg';
import Button from '../common/UI/Button';

interface IFilters {
  manufacturers: string[],
  sexes: string[],
  countries: string[],
  isOpen: boolean,
  closeFilters: () => void,
  getProducts: (queryParams?: any) => void
}

function Filters({
  manufacturers, sexes, countries, isOpen, closeFilters, getProducts,
}: IFilters) {
  const { categories, currentSubcategory } = useAppSelector((state) => state.categories);

  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(true);
  const [isManufacturersOpen, setIsManufacturersOpen] = useState<boolean>(true);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(true);
  const [isSexesOpen, setIsSexesOpen] = useState<boolean>(true);
  const [isCountryOpen, setIsCountryOpen] = useState<boolean>(true);

  const [value, setValue] = useState<number[]>([0, 100000]);

  const [brand, setBrand] = useState<string[]>([]);
  const [theme, setTheme] = useState<string[]>(currentSubcategory ? [currentSubcategory] : []);

  const [male, setMale] = useState<string[]>([]);
  const [country, setCountry] = useState<string[]>([]);

  const changeHandler = (checkBoxName: string, title: string, val: boolean) => {
    if (checkBoxName === 'manufacturers') {
      if (val) {
        setBrand([...brand, title]);
      } else {
        setBrand(brand.filter((item) => item !== title));
      }
    } else if (checkBoxName === 'category') {
      if (val) {
        setTheme([...theme, title]);
      } else {
        setTheme(theme.filter((item) => item !== title));
      }
    } else if (checkBoxName === 'sexes') {
      if (val) {
        setMale([...male, title]);
      } else {
        setMale(male.filter((item) => item !== title));
      }
    } else if (val) {
      setCountry([...country, title]);
    } else {
      setCountry(country.filter((item) => item !== title));
    }
  };

  useEffect(() => {
    setTheme(currentSubcategory ? [currentSubcategory] : []);
  }, [currentSubcategory]);

  const applyFilters = () => {
    getProducts({
      min_price: value[0],
      max_price: value[1],
      manufacturers: brand,
      category: theme,
      sexes: male,
      countries: country,
    });
  };

  return (
    <div className={`catalog-filters${isOpen ? ' is-open' : ''}`}>
      <div className="catalog-filters__header">
        <div className="catalog-filters__title">
          Фильтры
        </div>
        <button
          type="button"
          onClick={closeFilters}
        >
          <CrossIcon className="catalog-filters__cross" />
        </button>
      </div>
      <div className="catalog-filters__item item-catalog-filters">
        <button
          type="button"
          className="item-catalog-filters__header"
          onClick={() => setIsPriceOpen((prev) => !prev)}
        >
          <div className="item-catalog-filters__title">Цена, ₽</div>
          <Arrow
            className={`item-catalog-filters__arrow ${
              isPriceOpen && 'is-open'
            }`}
          />
        </button>
        <div className={`item-catalog-filters__body${!isPriceOpen ? ' hidden' : ''}`}>
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
              className="flex items-center w-[106px] h-[35px] px-[12px] border border-text-400 rounded-[40px]"
              value={value[0]}
              onChange={(e) => setValue((prev) => [+e.target.value, prev[1]])}
            />
            <input
              type="number"
              className="flex items-center w-[106px] h-[35px] px-[12px] border border-text-400 rounded-[40px]"
              value={value[1]}
              onChange={(e) => setValue((prev) => [prev[0], +e.target.value])}
            />
          </div>
        </div>
      </div>
      <div className="catalog-filters__item item-catalog-filters">
        <button
          type="button"
          className="item-catalog-filters__header"
          onClick={() => setIsManufacturersOpen((prev) => !prev)}
        >
          <div className="item-catalog-filters__title">Бренд</div>
          <Arrow
            className={`item-catalog-filters__arrow ${
              isManufacturersOpen && 'is-open'
            }`}
          />
        </button>
        <div className={`item-catalog-filters__body${!isManufacturersOpen ? ' hidden' : ''}`}>
          {manufacturers.map((manufacturer) => (
            <div
              key={manufacturer}
              className="flex items-center justify-between mb-[16px]"
            >
              <Checkbox
                id={manufacturer}
                title={manufacturer}
                changeHandler={(val) => changeHandler('manufacturers', manufacturer, val)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="catalog-filters__item item-catalog-filters">
        <button
          type="button"
          className="item-catalog-filters__header"
          onClick={() => setIsCategoriesOpen((prev) => !prev)}
        >
          <div className="item-catalog-filters__title">Тематика</div>
          <Arrow
            className={`item-catalog-filters__arrow ${
              isCategoriesOpen && 'is-open'
            }`}
          />
        </button>
        <div className={`item-catalog-filters__body${!isCategoriesOpen ? ' hidden' : ''}`}>
          {categories.map((category, idx) => (
            <div key={category.name + idx}>
              {category.subcategories.map((subcategory, subidx) => (
                <div
                  key={subcategory + subidx}
                  className="flex items-center justify-between mb-[16px]"
                >
                  <Checkbox
                    id={subcategory + subidx}
                    title={subcategory}
                    checked={!!theme.find((item) => item === subcategory)}
                    changeHandler={(val) => changeHandler('category', subcategory, val)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="catalog-filters__item item-catalog-filters">
        <button
          type="button"
          className="item-catalog-filters__header"
          onClick={() => setIsSexesOpen((prev) => !prev)}
        >
          <div className="item-catalog-filters__title">Пол</div>
          <Arrow
            className={`item-catalog-filters__arrow ${
              isSexesOpen && 'is-open'
            }`}
          />
        </button>
        <div className={`item-catalog-filters__body${!isSexesOpen ? ' hidden' : ''}`}>
          {sexes.map((sex) => (
            <div
              key={sex}
              className="flex items-center justify-between mb-[16px]"
            >
              <Checkbox
                id={sex}
                title={sex}
                changeHandler={(val) => changeHandler('sexes', sex, val)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="catalog-filters__item item-catalog-filters">
        <button
          type="button"
          className="item-catalog-filters__header"
          onClick={() => setIsCountryOpen((prev) => !prev)}
        >
          <div className="item-catalog-filters__title">Страна производства</div>
          <Arrow
            className={`item-catalog-filters__arrow ${
              isCountryOpen && 'is-open'
            }`}
          />
        </button>
        <div className={`item-catalog-filters__body${!isCountryOpen ? ' hidden' : ''}`}>
          {countries.map((countryItem) => (
            <div
              key={countryItem}
              className="flex items-center justify-between mb-[16px]"
            >
              <Checkbox
                id={countryItem}
                title={countryItem}
                changeHandler={(val) => changeHandler('countries', countryItem, val)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-[32px] py-[20px]">
        <Button
          type="orange"
          text="применить"
          onClick={applyFilters}
          customStyles="w-full h-[32px]"
        />
      </div>
    </div>
  );
}

export default Filters;
