import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthData, CurrentUser, UserSchema } from '../types/types';
import { CURRENT_USER_SESSION } from '@/shared/constants';

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
    avatar: null,
    username: null,
  },
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
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
