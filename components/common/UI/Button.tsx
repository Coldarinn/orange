import { ReactNode } from 'react';

interface IButton {
  buttonType?: 'button' | 'submit',
  type: 'white' | 'orange' | 'black' | 'thick',
  text: string,
  icon?: ReactNode,
  iconLeft?: boolean,
  customStyles?: string,
  onClick?: () => void
}

function Button({
  buttonType = 'button', type, text, icon, iconLeft = true, customStyles, onClick,
}: IButton) {
  return (
    <button
      className={`button ${customStyles || ''} ${type} ${iconLeft ? '' : 'right'}`}
      type={buttonType}
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
