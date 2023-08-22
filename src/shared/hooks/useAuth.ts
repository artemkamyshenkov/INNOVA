import { useAppSelector } from './redux';

// TODO: через контекст
export const useAuth = () => {
  const { id, email } = useAppSelector(state => state.user.authData);

  return {
    isLoggedIn: !!id,
    id,
    email,
  };
};
