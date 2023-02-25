import Accept from '@/assets/images/icons/accept.svg';

interface ICheckbox {
  id: string,
  title: String,
}

function Checkbox({ id, title }: ICheckbox) {
  return (
    <label
      className="checkbox"
      htmlFor={id}
    >
      <input
        type="checkbox"
        className="hidden"
        id={id}
      />
      <span>{title}</span>
      <Accept className="fill-white" />
    </label>
  );
}

export default Checkbox;
