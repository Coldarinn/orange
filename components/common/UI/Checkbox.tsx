import Accept from '@/assets/images/icons/accept.svg';
import { useState } from 'react';

interface ICheckbox {
  id: string,
  title: string,
  checked?: boolean,
  changeHandler?: (value: boolean) => void,
}

function Checkbox({
  id, title, checked = false, changeHandler,
}: ICheckbox) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const onChange = (value: boolean) => {
    setIsChecked(value);
    if (changeHandler) {
      changeHandler(value);
    }
  };

  return (
    <label
      className="checkbox"
      htmlFor={id}
    >
      <input
        type="checkbox"
        className="hidden"
        id={id}
        checked={isChecked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>{title}</span>
      <Accept className="fill-white" />
    </label>
  );
}

export default Checkbox;
