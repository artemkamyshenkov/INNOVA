import { useAppSelector } from './redux';

export const useAuth = () => {
  const { id, email } = useAppSelector(state => state.user.authData);

  return {
    isLoggedIn: !!id,
    id,
    email,
  };
};
