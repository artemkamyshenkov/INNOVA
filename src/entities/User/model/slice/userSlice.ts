import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/types';
import { loginByUsername, registerUser } from '../actions/actions';

const initialState: UserSchema = {
  authData: {
    id: null,
    email: null,
  },
  error: undefined,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    logOut: state => {
      state.authData.id = null;
      state.authData.email = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUsername.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        loginByUsername.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.isLoading = false;
          state.authData.id = action.payload.id;
          state.authData.email = action.payload.email;
        },
      )
      .addCase(
        loginByUsername.rejected,
        (state, action: PayloadAction<unknown, string>) => {
          state.isLoading = false;
          state.error = action.payload as string;
        },
      )
      .addCase(registerUser.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.authData.id = action.payload.id;
        state.authData.email = action.payload.email;
      })
      .addCase(
        registerUser.rejected,
        (state, action: PayloadAction<unknown, string>) => {
          state.isLoading = false;
          state.error = action.payload as string;
        },
      );
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
