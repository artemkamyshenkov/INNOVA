export interface RegisterFormData {
  name?: string;
  email: string;
  password: string;
  returnSecureToken?: boolean;
  confirmPassword?: string;
}