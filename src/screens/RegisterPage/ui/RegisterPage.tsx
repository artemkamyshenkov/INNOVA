import { Container } from 'react-grid-system';
import { RegisterForm } from '@/features/RegisterForm';
import styles from './RegisterPage.module.scss';
import { Page } from '@/shared/ui/Page';

const RegisterPage = () => (
  <Page>
    <Container className={styles.formContainer}>
      <RegisterForm />
    </Container>
  </Page>
);

export default RegisterPage;
