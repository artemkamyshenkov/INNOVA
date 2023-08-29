import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthData, CurrentUser, UserSchema } from '../types/types';
import { CURRENT_USER_SESSION } from '@/shared/constants';
import {
  getCurrentUser,
  updateUser,
  updateUserAvatar,
} from '../actions/actions';

const initialState: UserSchema = {
  authData: {
    id: null,
    email: null,
  },
  user: {
    email: null,
    firstName: null,
    lastName: null,
    about: null,
    avatarUrl: null,
    username: null,
  },
  loading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthData>) => {
      state.authData = action.payload;

      localStorage.setItem(
        CURRENT_USER_SESSION,
        JSON.stringify({ id: action.payload.id, email: action.payload.email }),
      );
    },
    logOut: state => {
      state.authData.id = null;
      state.authData.email = null;
      localStorage.removeItem(CURRENT_USER_SESSION);
    },
    initialUser: state => {
      const currentUser = JSON.parse(
        localStorage.getItem(CURRENT_USER_SESSION),
      );

      if (currentUser?.id) {
        state.authData.id = currentUser?.id;
        state.authData.email = currentUser?.email;
      }
    },
    setCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateUser.pending.type, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        updateUser.fulfilled.type,
        (state, action: PayloadAction<CurrentUser>) => {
          state.loading = false;
          state.user = action.payload;
          state.error = '';
        },
      )
      .addCase(updateUser.rejected.type, state => {
        state.loading = false;
        state.error = '';
      })
      .addCase(updateUserAvatar.pending.type, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        updateUserAvatar.fulfilled.type,
        (state, action: PayloadAction<CurrentUser>) => {
          state.loading = false;
          state.user = action.payload;
          state.error = '';
        },
      )
      .addCase(updateUserAvatar.rejected.type, state => {
        state.loading = false;
        state.error = '';
      })
      .addCase(getCurrentUser.pending.type, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        getCurrentUser.fulfilled.type,
        (state, action: PayloadAction<CurrentUser>) => {
          state.loading = false;
          state.user = action.payload;
          state.error = '';
        },
      )
      .addCase(getCurrentUser.rejected.type, state => {
        state.loading = false;
        state.error = '';
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
