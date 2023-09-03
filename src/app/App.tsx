import cn from 'classnames';
import { Layout } from 'antd';
import { useEffect } from 'react';
import { useTheme } from '@/app/providers/themeProvider';
import AppRouter from '@/app/providers/router/ui/AppRouter';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar';
import './styles/index.scss';
import { useAuth } from '@/shared/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { userActions } from '@/entities/User';
import { getCurrentUser } from '@/entities/User/model/actions/actions';

export const App = () => {
  const { user, authData } = useAppSelector(state => state.user);
  const { theme } = useTheme();
  const { isLoggedIn } = useAuth();
  const { inited } = useAppSelector(state => state.user.authData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initialUser());
  }, [dispatch]);

  useEffect(() => {
    if (!user?.username) {
      dispatch(getCurrentUser(authData?.id));
    }
  }, [dispatch, user?.username, authData?.id]);

  return (
    <Layout className={cn('app', theme)}>
      <Layout.Content className="content">
        {isLoggedIn && <Sidebar />}
        {inited && <AppRouter />}
      </Layout.Content>
    </Layout>
  );
};
