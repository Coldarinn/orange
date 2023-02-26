import { ReactNode } from 'react';

interface IButton {
  type: 'white' | 'orange' | 'black',
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
      className={`button ${type} ${iconLeft ? '' : 'right'} ${customStyles}`}
      type="button"
      onClick={() => onClick && onClick()}
    >
      {icon ? (
        <>
          {icon}
          {text}
        </>
      ) : text}
    </button>
  );
}

export default Button;
