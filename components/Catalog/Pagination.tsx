import { useState } from 'react';
import Arrow from '@/assets/images/icons/arrow.svg';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const pagesLength = pages.length;

function Pagination() {
  const [selected, setSelected] = useState<number>(1);

  return (
    <div className="flex justify-center mt-[35px] relative">
      {selected > 1 && (
        <button
          type="button"
          className="absolute left-0 top-0 flex items-center bg-white py-[9px] px-[16px] border border-solid border-stroke-dark rounded-[20px]"
          onClick={() => setSelected((prev) => prev - 1)}
        >
          <Arrow className="stroke-brand-700 rotate-90 mr-[15px]" />
          предыдущая
        </button>
      )}
      <div className="flex bg-white border border-solid border-stroke-dark rounded-[20px]">
        {selected > 2 && (
          <button
            type="button"
            className="text-text-900 px-[16px] py-[10px]"
            onClick={() => setSelected(1)}
          >
            1
          </button>
        )}
        {selected > 3 && (
          <div
            className="text-text-900 px-[16px] py-[10px]"
          >
            ...
          </div>
        )}
        {selected === pagesLength && (
          <button
            type="button"
            className="text-text-900 px-[16px] py-[10px]"
            onClick={() => setSelected(pagesLength - 2)}
          >
            {pagesLength - 2}
          </button>
        )}
        {selected - 1 > 0 && (
          <button
            type="button"
            className="text-text-900 px-[16px] py-[10px]"
            onClick={() => setSelected(selected - 1)}
          >
            {selected - 1}
          </button>
        )}
        <button
          type="button"
          className="px-[16px] py-[10px] text-brand-700 font-bold"
        >
          {selected}
        </button>
        {selected < pagesLength && (
          <button
            type="button"
            className="text-text-900 px-[16px] py-[10px]"
            onClick={() => setSelected(selected + 1)}
          >
            {selected + 1}
          </button>
        )}
        {selected === 1 && (
          <button
            type="button"
            className="text-text-900 px-[16px] py-[10px]"
            onClick={() => setSelected(3)}
          >
            3
          </button>
        )}
        {selected < pagesLength - 2 && (
          <div
            className="text-text-900 px-[16px] py-[10px]"
          >
            ...
          </div>
        )}
        {selected < pagesLength - 1 && (
          <button
            type="button"
            className="text-text-900 px-[16px] py-[10px]"
            onClick={() => setSelected(pagesLength)}
          >
            {pagesLength}
          </button>
        )}
      </div>
      {selected < pagesLength && (
        <button
          type="button"
          className="absolute right-0 top-0 flex items-center bg-white py-[9px] px-[16px] border border-solid border-stroke-dark rounded-[20px]"
          onClick={() => setSelected((prev) => prev + 1)}
        >
          следующая
          <Arrow className="stroke-brand-700 -rotate-90 ml-[15px]" />
        </button>
      )}
    </div>
  );
}

export default Pagination;
