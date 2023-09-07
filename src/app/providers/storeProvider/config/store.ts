import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { StateSchema } from './StateSchema';

import { authApi } from '@/shared/api/authService';
import { mediaApi, unsplashApi } from '@/shared/api/mediaService';
import { friendsApi } from '@/shared/api/friendsServise';

const rootReducers = {
  user: userReducer,
  [authApi.reducerPath]: authApi.reducer,
  [mediaApi.reducerPath]: mediaApi.reducer,
  [unsplashApi.reducerPath]: unsplashApi.reducer,
  [friendsApi.reducerPath]: friendsApi.reducer,
};
const store = configureStore<StateSchema>({
  reducer: rootReducers,
  devTools: __IS_DEV__,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      mediaApi.middleware,
      unsplashApi.middleware,
      friendsApi.middleware,
    ) as any,
});

export function createReduxStore() {
  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface ThunkApiState {
  state: RootState;
}
