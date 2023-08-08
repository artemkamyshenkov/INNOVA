import React from 'react';
import { Container } from 'react-grid-system';
import { RegisterForm } from '@/features/RegisterForm';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => (
  <Container className={styles.formContainer}>
    <RegisterForm />
  </Container>
);

export default RegisterPage;
