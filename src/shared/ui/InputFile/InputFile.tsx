import React, { InputHTMLAttributes } from 'react';
import styles from './InputFile.module.scss';

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputFile: React.FC<InputFileProps> = ({
  accept = 'image/png, image/jpeg',
  onChange,
}) => (
  <label className={styles.label}>
    Выберите файл
    <input
      type="file"
      accept={accept}
      onChange={onChange}
      className={styles.input}
    />
  </label>
);
