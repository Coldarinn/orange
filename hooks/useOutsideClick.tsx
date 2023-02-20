import { RefObject, useEffect } from 'react';

function useOutsideClick<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
  handler: () => void,
  attached: Boolean = true,
) {
  useEffect(() => {
    if (!attached) return undefined;

    const handleClick = (event: any) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(event.target as HTMLElement)) {
        handler();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [elementRef, handler, attached]);
}

export default useOutsideClick;
