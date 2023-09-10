import { AbstractAuthData } from '@/shared/types/user';

export interface RegisterFormData extends AbstractAuthData {
  firstName?: string;
  confirmPassword?: string;
  lastName?: string;
  username?: string;
}
