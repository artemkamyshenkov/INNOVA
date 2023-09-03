import { Container } from 'react-grid-system';
import { LoginForm } from '@/features/LoginForm';
import styles from './LoginPage.module.scss';
import { Page } from '@/shared/ui/Page';

const LoginPage = () => (
  <Page>
    <Container className={styles.formContainer}>
      <LoginForm />
    </Container>
  </Page>
);

export default LoginPage;
