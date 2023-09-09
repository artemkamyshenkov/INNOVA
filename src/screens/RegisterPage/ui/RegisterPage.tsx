import { RegisterForm } from '@/features/RegisterForm';
import { Page } from '@/widgets/Page';
import { Container } from 'react-grid-system';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => (
  <Page>
    <Container className={styles.formContainer}>
      <RegisterForm />
    </Container>
  </Page>
);

export default RegisterPage;
