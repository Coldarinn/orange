import { useEffect, useState } from 'react';
import Button from '@/components/common/UI/Button';
import Arrow from '@/assets/images/icons/arrow.svg';

interface IPagination {
  perPage: number,
  total: number,
  changeHandler: (value: number) => void,
}

function Pagination({ perPage, total, changeHandler }: IPagination) {
  const [selected, setSelected] = useState<number>(1);
  const pages = Array.from({ length: Math.ceil(total / perPage) });
  const pagesLength = pages.length;

  const onChange = (value: number) => {
    changeHandler(value);
    setSelected(value);
  };

  if (perPage >= total) {
    return <span />;
  }

  return (
    <div className="flex justify-center mt-[35px] relative">
      {selected > 1 && (
        <Button
          type="white"
          text="предыдущая"
          icon={<Arrow className="stroke-brand-700 rotate-90" />}
          customStyles="absolute left-0 top-0 py-[9px] md:py-[14px] px-[16px] md:px-[11px]"
          onClick={() => onChange(selected - 1)}
          hideTextOnMobile
        />
      )}
      <div className="flex bg-white border border-stroke-dark rounded-[20px]">
        {selected > 2 && (
          <button
            type="button"
            className="text-text-900 px-[16px] py-[10px]"
            onClick={() => onChange(1)}
          >
            1
          </button>
        )}
        {selected > 3 && (
          <div className="text-text-900 px-[16px] py-[10px]">...</div>
        )}
        {(selected === pagesLength && pagesLength > 2) && (
          <button
            type="button"
            className="text-text-900 px-[16px] py-[10px]"
            onClick={() => onChange(pagesLength - 2)}
          >
            {pagesLength - 2}
          </button>
        )}
        {(selected > 1) && (
          <button
            type="button"
            className="text-text-900 px-[16px] py-[10px]"
            onClick={() => onChange(selected - 1)}
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
            onClick={() => onChange(selected + 1)}
          >
            {selected + 1}
          </button>
        )}
        {selected < pagesLength - 2 && (
          <div className="text-text-900 px-[16px] py-[10px]">...</div>
        )}
        {selected < pagesLength - 1 && (
          <button
            type="button"
            className="text-text-900 px-[16px] py-[10px]"
            onClick={() => onChange(pagesLength)}
          >
            {pagesLength}
          </button>
        )}
      </div>
      {selected < pagesLength && (
        <Button
          type="white"
          text="следующая"
          icon={<Arrow className="stroke-brand-700 -rotate-90" />}
          iconLeft={false}
          customStyles="absolute right-0 top-0 py-[9px] md:py-[14px] px-[16px] md:px-[11px]"
          onClick={() => onChange(selected + 1)}
          hideTextOnMobile
        />
      )}
    </div>
  );
}

export default Pagination;
