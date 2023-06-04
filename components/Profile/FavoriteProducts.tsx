import { useCallback, useState } from 'react';
import { sortItems, countOptions } from '@/constants/catalog';
import Select, { IOption } from '../common/Select';
import ProductCard from '../common/Products/ProductCard';
import Pagination from '../common/Pagination';
import 'swiper/css';

const arr = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
  { id: '11' },
  { id: '12' },
  { id: '13' },
  { id: '14' },
];

function FavoriteProducts() {
  const [selected, setSelected] = useState<string>(sortItems[0].title);
  const [count, setCount] = useState<IOption>(countOptions[0]);

  return (
    <div className="flex-auto pt-[10px] md:px-[24px]">
      <div className="flex items-center justify-between md:justify-end gap-[12px] mb-[32px] md:mb-[24px]">
        <div className="flex md:hidden gap-[32px]">
          {sortItems.map((item) => (
            <button
              type="button"
              className={`text-text-600 transition duration-300 hover:text-brand-700 ${
                item.title === selected && '!text-brand-700 font-bold'
              }`}
              key={item.id}
              onClick={() => setSelected(item.title)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="hidden md:block">
          <Select
            title={selected}
            options={sortItems}
            select={useCallback((item) => setSelected(item.title), [])}
          />
        </div>
        <Select
          title={count.title}
          options={countOptions}
          select={useCallback((item) => setCount(item), [])}
        />
      </div>
      <div className="flex items-start flex-wrap gap-[28px] md:gap-[20px]">
        {arr.slice(0, +count.title).map((item) => (
          <div
            key={item.id.toString()}
            className="catalog-product w-[224px] md:w-[206px] p-[16px] bg-white border border-stroke-dark rounded-[24px]"
          >
            <ProductCard
              showRating
              sale="-50%"
              isFavorite
            />
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default FavoriteProducts;
