export interface AuthData {
  id: string;
  email: string;
}

export interface UserSchema {
  authData?: AuthData;
}
