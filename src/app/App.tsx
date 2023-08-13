import cn from 'classnames';
import { Layout } from 'antd';
import { useEffect } from 'react';
import { useTheme } from '@/app/providers/themeProvider';
import AppRouter from '@/app/providers/router/ui/AppRouter';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar';
import './styles/index.scss';
import { useAuth } from '@/shared/hooks/useAuth';
import { useAppDispatch } from '@/shared/hooks/redux';
import { userActions } from '@/entities/User';

export const App = () => {
  const dispatch = useAppDispatch();
  const { theme } = useTheme();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    dispatch(userActions.initialUser());
  }, [dispatch]);
  return (
    <Layout className={cn('app', theme)}>
      <Layout.Content className="content">
        {isLoggedIn && <Sidebar />}
        <AppRouter isLoggedIn={isLoggedIn} />
      </Layout.Content>
    </Layout>
  );
};
