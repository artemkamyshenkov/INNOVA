export interface AuthData {
  id: string;
  email: string;
  inited?: boolean;
}

export interface CurrentUser {
  email: string;
  firstName: string;
  lastName?: string;
  about?: string;
  avatarUrl?: string;
  username: string;
}
export interface UserSchema {
  authData?: AuthData;
  user?: CurrentUser;
  loading?: boolean;
  error?: string;
}
