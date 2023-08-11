import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  label?: Path<T>;
  id: string;
  register: UseFormRegister<T>;
  required: boolean;
  displayLabel?: string;
}

export const Input = <T extends unknown>({
  label,
  id,
  register,
  required = false,
  displayLabel,
  ...props
}: InputProps<T>) => (
  <>
    <label htmlFor={id}>{displayLabel}</label>
    <input
      {...register(label, { required })}
      id={id}
      className={styles.input}
      {...props}
    />
  </>
);
