import { SerializedError } from '@reduxjs/toolkit';

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

export interface AuthError extends SerializedError {
  data?: {
    error: {
      code: number;
      message: string;
    };
  };
}
