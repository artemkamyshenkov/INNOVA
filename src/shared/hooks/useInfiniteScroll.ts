import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}
export function useInfiniteScroll({
  callback,
  wrapperRef,
  triggerRef,
}: UseInfiniteScrollProps) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const triggerElement = triggerRef.current;
    if (callback) {
      const options = {
        root: null as null,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.current.observe(triggerElement);
    }

    return () => {
      if (observer.current && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerElement);
      }
    };
  }, [wrapperRef, triggerRef, callback]);
}
