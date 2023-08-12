export interface RegisterFirebaseRsDto {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export interface LoginFirebaseRsDto extends RegisterFirebaseRsDto {
  register: boolean;
}
