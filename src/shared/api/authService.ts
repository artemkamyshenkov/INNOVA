import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginFormData } from '@/features/LoginForm';
import { RegisterFormData } from '@/features/RegisterForm';
import {
  RegisterFirebaseRsDto,
  LoginFirebaseRsDto,
} from '@/shared/types/firebase';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://identitytoolkit.googleapis.com/v1/accounts',
  }),
  endpoints: builder => ({
    registerUser: builder.mutation<RegisterFirebaseRsDto, RegisterFormData>({
      query: body => ({
        url: `:signUp?key=${process.env.REACT_APP_API_KEY}`,
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation<LoginFirebaseRsDto, LoginFormData>({
      query: body => ({
        url: `:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
