import Arrow from '@/assets/images/icons/arrow.svg';
import { memo, useState } from 'react';

export interface IOption {
  id: number,
  title: string
}

interface ISelect {
  title: string,
  options: IOption[],
  select: (select: IOption) => void,
}

function Select({ title, options, select }:ISelect) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectHandler = (item: IOption) => {
    setIsOpen(false);
    select(item);
  };

  return (
    <div
      className={`select ${isOpen && 'is-open'}`}
    >
      <button
        type="button"
        className="select__head"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="select__title">
          {title}
        </div>
        <Arrow className="select__arrow" />
      </button>
      <div className="select__body">
        {options.map((item) => (
          <button
            className="select__item"
            key={item.id}
            type="button"
            onClick={() => selectHandler(item)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(Select);
