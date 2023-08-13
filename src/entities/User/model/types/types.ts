export interface AuthData {
  id: string;
  email: string;
}

export interface CurrentUser {
  email: string;
  firstName: string;
  lastName?: string;
  about?: string;
  avatar?: string;
}
export interface UserSchema {
  authData?: AuthData;
  user?: CurrentUser;
}
