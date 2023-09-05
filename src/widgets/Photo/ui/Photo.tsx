import React from 'react';
import { Image } from 'antd';
import { PhotoCatTypes } from '../types';
import styles from './Photo.module.scss';

interface PhotoProps {
  photoData: PhotoCatTypes;
}

export const Photo: React.FC<PhotoProps> = ({ photoData }) => (
  <Image
    src={photoData?.url}
    width={500}
    height={500}
    className={styles.photoContainer}
    preview={false}
  />
);
