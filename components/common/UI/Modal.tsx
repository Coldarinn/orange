import { useEffect, ReactNode } from 'react';
import CrossIcon from '@/assets/images/icons/cross.svg';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setIsHide } from '@/store/slicers/scrollbarSlice';

interface IModal {
  isVisible: boolean,
  onClose: () => void,
  children: ReactNode,
}

function Modal({ isVisible, onClose, children }: IModal) {
  const { width } = useAppSelector((state) => state.scrollbar);
  const dispatch = useAppDispatch();

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${width}px`;
      dispatch(setIsHide(true));
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
      dispatch(setIsHide(false));
    }
  }, [isVisible]);

  return (
    <div className={isVisible ? 'modal active' : 'modal'}>
      <div
        className="modal__container"
        role="button"
        tabIndex={0}
        onMouseDown={onClose}
        onKeyDown={keyDownHandler}
      >
        <div className="modal__body">
          <div
            className="modal__wrapper"
            role="button"
            tabIndex={-1}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={keyDownHandler}
          >
            <button
              type="button"
              className="modal__cross"
              onClick={onClose}
            >
              <CrossIcon />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
