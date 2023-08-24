import React, { InputHTMLAttributes } from 'react';
import styles from './InputFile.module.scss';

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputFile: React.FC<InputFileProps> = ({
  accept = 'image/png, image/jpeg',
  onChange,
  label = 'Выберите файл',
}) => (
  <label className={styles.label}>
    {label}
    <input
      type="file"
      accept={accept}
      onChange={onChange}
      className={styles.input}
    />
  </label>
);
