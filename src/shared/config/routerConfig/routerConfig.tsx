import { RouteProps } from 'react-router-dom';
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

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: <RegisterPage />,
  },
};
