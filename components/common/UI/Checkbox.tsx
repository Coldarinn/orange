import Accept from '@/assets/images/icons/accept.svg';

interface ICheckbox {
  id: string,
  title: String,
}

function Checkbox({ id, title }: ICheckbox) {
  return (
    <label
      className="item-catalog-filters__checkbox"
      htmlFor={id}
    >
      <input
        type="checkbox"
        className="hidden"
        id={id}
      />
      <span>{title}</span>
      <Accept />
    </label>
  );
}

export default Checkbox;
