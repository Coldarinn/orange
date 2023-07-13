import { useCallback, useEffect, useState } from 'react';
import { sortItems, countOptions } from '@/constants/catalog';
import FiltersIcon from '@/assets/images/icons/filters.svg';
import { TSorts } from '@/config/api';
import Select, { IOption } from '../common/Select';
import ProductCard, { IProduct } from '../common/Products/ProductCard';
import Pagination from '../common/Pagination';
import 'swiper/css';

interface IProducts {
  openFilters: () => void,
  products: IProduct[],
  totalCount: number,
  applyFilters: (params: any) => void
}

function Products({
  openFilters, products, totalCount, applyFilters,
}: IProducts) {
  const [selected, setSelected] = useState<TSorts>(sortItems[0].value);
  const [count, setCount] = useState<IOption>(countOptions[0]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    applyFilters({
      limit: count.title,
      offset: page * +count.title,
      sort: selected,
    });
  }, [selected, count, page]);

  return (
    <div className="flex-auto pt-[10px]">
      <div className="flex items-center justify-between gap-[10px] mb-[32px]">
        <div className="flex gap-[32px] md:hidden">
          {sortItems.map((item) => (
            <button
              type="button"
              className={`text-text-600 transition duration-300 hover:text-brand-700 ${
                item.value === selected && '!text-brand-700 font-bold'
              }`}
              key={item.id}
              onClick={() => setSelected(item.value)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="hidden md:flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full border border-stroke-dark"
          onClick={openFilters}
        >
          <FiltersIcon />
        </button>
        <div className="flex items-center gap-[12px]">
          <div className="hidden md:block">
            <Select
              title={selected}
              options={sortItems}
              select={useCallback((item) => setCount(item), [])}
            />
          </div>
          <Select
            title={count.title}
            options={countOptions}
            select={useCallback((item) => setCount(item), [])}
          />
        </div>
      </div>
      {products?.length > 0 ? (
        <div className="flex items-start flex-wrap gap-x-[32px] gap-y-[28px] md:gap-[20px]">
          {products.map((item) => (
            <div
              key={item.internal_id}
              className="catalog-product w-[224px] md:w-[206px] p-[16px] bg-white border border-stroke-dark rounded-[24px]"
            >
              <ProductCard
                showRating
                product={item}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>nothing</div>
      )}
      <Pagination
        perPage={+count.title}
        total={totalCount}
        changeHandler={(value) => setPage(value)}
      />
    </div>
  );
}

export default Products;
