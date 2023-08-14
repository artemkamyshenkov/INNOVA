import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { StateSchema } from './StateSchema';

import { authApi } from '@/shared/api/authService';

const rootReducers = {
  user: userReducer,
  [authApi.reducerPath]: authApi.reducer,
};
const store = configureStore<StateSchema>({
  reducer: rootReducers,
  devTools: __IS_DEV__,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware) as any,
});

export function createReduxStore() {
  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
