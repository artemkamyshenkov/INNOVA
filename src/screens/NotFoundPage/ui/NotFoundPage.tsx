import React from 'react';
import cn from 'classnames';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => (
  <div className={cn(styles.notFoundPage, className)}>NotFoundPage</div>
);
