import { Container } from 'react-grid-system';
import { RegisterForm } from '@/features/RegisterForm';
import { Page } from '@/widgets/Page';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => (
  <Page>
    <Container className={styles.formContainer}>
      <RegisterForm />
    </Container>
  </Page>
);

export default RegisterPage;
