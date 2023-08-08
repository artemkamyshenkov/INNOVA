import { redirect, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/shared/hooks/redux';

const MainPage = () => {
  const { authData } = useAppSelector(state => state.user);
  const navigane = useNavigate();
  if (authData?.id) {
    return <div>Main</div>; // Возвращаем JSX-элемент
  }
  redirect('/login');
  return null;

  // return authData?.id ? <div>Main</div> : redirect('/login');
};

export default MainPage;
