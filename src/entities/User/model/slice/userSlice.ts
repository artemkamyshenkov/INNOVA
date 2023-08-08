import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/interfaces';

const initialState: UserSchema = {
  authData: {
    id: null,
    email: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
