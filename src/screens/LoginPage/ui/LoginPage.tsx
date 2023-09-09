import { LoginForm } from '@/features/LoginForm';
import { Page } from '@/widgets/Page';
import { Container } from 'react-grid-system';
import styles from './LoginPage.module.scss';

const LoginPage = () => (
  <Page>
    <Container className={styles.formContainer}>
      <LoginForm />
    </Container>
  </Page>
);

export default LoginPage;
