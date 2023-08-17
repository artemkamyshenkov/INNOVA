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
import { userService } from '@/shared/api/userService';

export const App = () => {
  const { user, authData } = useAppSelector(state => state.user);
  const { theme } = useTheme();
  const { isLoggedIn } = useAuth();
  const dispatch = useAppDispatch();

  const getUser = async (userId: string) => {
    const currentUser = await userService.getCurrentUser(userId);
    dispatch(userActions.setCurrentUser(currentUser));
  };

  useEffect(() => {
    dispatch(userActions.initialUser());
  }, [dispatch]);

  useEffect(() => {
    if (!user?.username) {
      getUser(authData?.id);
    }
  }, [dispatch, authData?.id]);

  return (
    <Layout className={cn('app', theme)}>
      <Layout.Content className="content">
        {isLoggedIn && <Sidebar />}
        <AppRouter isLoggedIn={isLoggedIn} />
      </Layout.Content>
    </Layout>
  );
};
