import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginFormData } from '@/features/LoginForm';
import { authService } from '@/shared/api';
import { RegisterFormData } from '@/features/RegisterForm';
import { User } from '../types/types';
import { CURRENT_USER_SESSION } from '@/shared/constants';

export const loginByUsername = createAsyncThunk<User, LoginFormData>(
  'auth/loginByUsername',
  async ({ email, password }, thunkAPI) => {
    try {
      const { user } = await authService.login({ email, password });
      localStorage.setItem(
        CURRENT_USER_SESSION,
        JSON.stringify({ id: user.uid, email: user.email }),
      );
      return { id: user.uid, email: user.email };
    } catch (error) {
      const errorCode = error.code;
      return thunkAPI.rejectWithValue(errorCode);
    }
  },
);

export const registerUser = createAsyncThunk<User, RegisterFormData>(
  'auth/registerUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const { user } = await authService.register({ email, password });
      localStorage.setItem(
        CURRENT_USER_SESSION,
        JSON.stringify({ id: user.uid, email: user.email }),
      );
      return { id: user.uid, email: user.email };
    } catch (error) {
      const errorCode = error.code;
      return thunkAPI.rejectWithValue(errorCode);
    }
  },
);
