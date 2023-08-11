import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { LoginFormData } from '@/features/LoginForm';
import { RegisterFormData } from '@/features/RegisterForm';

export const authService = {
  register: async ({ email, password }: RegisterFormData) => {
    const auth = getAuth();
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  },
  login: async ({ email, password }: LoginFormData) => {
    const auth = getAuth();
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  },
};
