import { useCallback, useState } from 'react';
import { countOptions } from '@/constants/catalog';
import Pagination from '../common/Pagination';
import BoughtProduct from './BoughtProduct';
import { IProduct } from '../common/Products/ProductCard';
import Select, { IOption } from '../common/Select';
import Loader from '../common/Loader';

interface IBoughtProducts {
  products: IProduct[],
  totalCount: number,
  getProducts: (limit: number, offset: number) => void,
  isLoading: boolean
}

function BoughtProducts({
  products, totalCount, getProducts, isLoading,
}: IBoughtProducts) {
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<IOption>(countOptions[0]);

  const limitHandler = (value: IOption) => {
    getProducts(+value.title, 0);
    setCount(value);
    setPage(1);
  };

  const paginationHandler = (value: number) => {
    getProducts(+count.title, +count.title * (value - 1));
    setPage(value);
  };

  return (
    <div className="flex-auto relative md:px-[24px]">
      {isLoading ? (
        <div className="flex justify-center w-full pt-[70px]">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex justify-end mb-[20px]">
            <Select
              title={count.title}
              options={countOptions}
              select={limitHandler}
            />
          </div>
          {products?.length > 0 ? (
            <>
              <div className="flex items-start flex-wrap gap-[28px] md:gap-[20px]">
                {products.map((item) => (
                  <div
                    key={item.internal_id}
                    className="catalog-product w-[224px] md:w-[206px] p-[16px] bg-white border border-stroke-dark rounded-[24px]"
                  >
                    <BoughtProduct />
                  </div>
                ))}
              </div>
              <Pagination
                page={page}
                perPage={+count.title}
                total={totalCount}
                changeHandler={(value) => paginationHandler(value)}
              />
            </>
          ) : (
            <div className="text-center text-[24px] font-bold">Товары не найдены</div>
          )}
        </>
      )}
    </div>
  );
}

export default BoughtProducts;
