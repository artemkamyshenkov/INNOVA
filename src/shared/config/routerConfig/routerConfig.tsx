import { Navigate, RouteProps } from 'react-router-dom';
import { MainPage } from '@/screens/MainPage';
import { AboutPage } from '@/screens/AboutPage';
import { NotFoundPage } from '@/screens/NotFoundPage';
import { LoginPage } from '@/screens/LoginPage';
import { RegisterPage } from '@/screens/RegisterPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  LOGIN = 'login',
  REGISTER = 'register',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
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
    element: isLoggedIn ? <MainPage /> : <Navigate to="/login" />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: isLoggedIn ? <AboutPage /> : <Navigate to="/login" />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
});
