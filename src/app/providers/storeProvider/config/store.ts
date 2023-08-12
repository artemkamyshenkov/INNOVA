import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { StateSchema } from './StateSchema';

import { authApi } from '@/shared/api/authService';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers = {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  };
  const store = configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(authApi.middleware) as any,
  });
  return store;
}
