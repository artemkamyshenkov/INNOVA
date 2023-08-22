import { Navigate } from 'react-router-dom';
import { AboutPage } from '@/screens/AboutPage';
import { LoginPage } from '@/screens/LoginPage';
import { NotFoundPage } from '@/screens/NotFoundPage';
import { ProfilePage } from '@/screens/ProfilePage';
import { RegisterPage } from '@/screens/RegisterPage';
import { MessagesPage } from '@/screens/MessagesPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  LOGIN = 'login',
  REGISTER = 'register',
  MESSAGES = 'messages',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.MESSAGES]: '/messages',
  [AppRoutes.NOT_FOUND]: '*',
};

export const getRoutes = (isLoggedIn: boolean) => ({
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: !isLoggedIn ? <LoginPage /> : <Navigate to="/" />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: !isLoggedIn ? <RegisterPage /> : <Navigate to="/" />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: isLoggedIn ? <AboutPage /> : <Navigate to="/login" />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.MESSAGES]: {
    path: RoutePath.messages,
    element: <MessagesPage />,
  },
});
