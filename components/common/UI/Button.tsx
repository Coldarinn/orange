import { ReactNode } from 'react';

interface IButton {
  buttonType?: 'button' | 'submit',
  type: 'white' | 'orange' | 'black' | 'thick',
  text: string,
  icon?: ReactNode,
  iconLeft?: boolean,
  customStyles?: string,
  hideTextOnMobile?: boolean,
  onClick?: () => void
}

function Button({
  buttonType = 'button', type, text, icon, iconLeft = true, customStyles, onClick, hideTextOnMobile = false,
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
          <span className={`ml-[10px]${hideTextOnMobile ? ' md:hidden' : ''}`}>
            {text}
          </span>
        </>
      ) : text}
    </button>
  );
}

export default Button;
