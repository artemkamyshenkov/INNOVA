import { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import { Path, UseFormRegister, RegisterOptions } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: Path<T>;
  id: string;
  register: UseFormRegister<T>;
  label?: string;
  rules?: RegisterOptions;
  error?: string;
  isProfile?: boolean;
}

export const Input = <T extends unknown>({
  fieldName,
  id,
  register,
  rules = {},
  label,
  error,
  className,
  isProfile = false,
  ...props
}: InputProps<T>) => (
  <>
    <label htmlFor={id}>{label}</label>
    <div className={styles.inputContainer}>
      <input
        {...register(fieldName, { ...rules })}
        id={id}
        className={cn(styles.input, className)}
        {...props}
      />
      {error && (
        <p className={cn({ [styles.errorProfile]: isProfile }, styles.error)}>
          {error || 'Ошибка'}
        </p>
      )}
    </div>
  </>
);
