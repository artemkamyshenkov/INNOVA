export const CURRENT_USER_SESSION = 'current_user_session';

export const ERROR_DICT: Record<string, string> = {
  EMAIL_NOT_FOUND: 'Неверное имя пользователя или пароль',
  INVALID_PASSWORD: 'Неверное имя пользователя или пароль',
  'WEAK_PASSWORD : Password should be at least 6 characters':
    'Пароль должен содержать минимум 6 символов',
  EMAIL_EXISTS: 'Пользователь с такой почтой уже зарегистрирован',
};
