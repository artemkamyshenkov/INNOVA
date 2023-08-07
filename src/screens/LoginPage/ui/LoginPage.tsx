import React from 'react';
import { Container } from 'react-grid-system';
import { LoginForm } from '@/features/LoginForm';
import styles from './LoginPage.module.scss';

const LoginPage = () => (
  <Container className={styles.formContainer}>
    <LoginForm />
  </Container>
);

export default LoginPage;
