import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';

import { authApi } from '@/shared/api/authService';
import { mediaApi, unsplashApi } from '@/shared/api/mediaService';
import { friendsApi } from '@/shared/api/friendsServise';
import { uiReducer } from '@/entities/UI';

const rootReducers = {
  user: userReducer,
  ui: uiReducer,
  [authApi.reducerPath]: authApi.reducer,
  [mediaApi.reducerPath]: mediaApi.reducer,
  [unsplashApi.reducerPath]: unsplashApi.reducer,
  [friendsApi.reducerPath]: friendsApi.reducer,
};

const store = configureStore({
  reducer: rootReducers,
  devTools: __IS_DEV__,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      mediaApi.middleware,
      unsplashApi.middleware,
      friendsApi.middleware,
    ),
});

export function createReduxStore() {
  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface ThunkApiState {
  state: RootState;
}
