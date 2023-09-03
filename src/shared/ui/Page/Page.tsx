import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
}
export const Page: React.FC<PageProps> = ({ className, children }) => (
  <section className={cn(styles.page, className)}>{children}</section>
);
