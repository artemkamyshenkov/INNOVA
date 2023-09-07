import { Navigate, RouteProps } from 'react-router-dom';
import { AboutPage } from '@/screens/AboutPage';
import { LoginPage } from '@/screens/LoginPage';
import { NotFoundPage } from '@/screens/NotFoundPage';
import { ProfilePage } from '@/screens/ProfilePage';
import { RegisterPage } from '@/screens/RegisterPage';
import { MessagesPage } from '@/screens/MessagesPage';
import { MediaPage } from '@/screens/MediaPage';
import { RecommendUsers } from '@/screens/RecommendUsers';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  LOGIN = 'login',
  REGISTER = 'register',
  MESSAGES = 'messages',
  MEDIA = 'media',
  RECOMMENDED = 'recommended',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.MESSAGES]: '/messages',
  [AppRoutes.MEDIA]: '/media',
  [AppRoutes.RECOMMENDED]: '/recommended',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: <RegisterPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.MESSAGES]: {
    path: RoutePath.messages,
    element: <MessagesPage />,
    authOnly: true,
  },
  [AppRoutes.MEDIA]: {
    path: RoutePath.media,
    element: <MediaPage />,
    authOnly: true,
  },
  [AppRoutes.RECOMMENDED]: {
    path: RoutePath.recommended,
    element: <RecommendUsers />,
    authOnly: true,
  },
};
