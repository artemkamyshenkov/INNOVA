import React, { MutableRefObject, ReactNode, useRef } from 'react';
import cn from 'classnames';
import styles from './Page.module.scss';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}
export const Page: React.FC<PageProps> = ({
  className,
  children,
  onScrollEnd,
}) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });
  return (
    <section ref={wrapperRef} className={cn(styles.page, className)}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
