import { ReactNode } from 'react';

interface IButton {
  type: 'white' | 'orange' | 'black' | 'thick',
  text: String,
  icon?: ReactNode,
  iconLeft?: boolean,
  customStyles?: string,
  onClick?: () => void
}

function Button({
  type, text, icon, iconLeft = true, customStyles, onClick,
}: IButton) {
  return (
    <button
      className={`button ${customStyles || ''} ${type} ${iconLeft ? '' : 'right'}`}
      type="button"
      onClick={() => onClick && onClick()}
    >
      {icon ? (
        <>
          {icon}
          <span className="ml-[10px]">
            {text}
          </span>
        </>
      ) : text}
    </button>
  );
}

export default Button;
