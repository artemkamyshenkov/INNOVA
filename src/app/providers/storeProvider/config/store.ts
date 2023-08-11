import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };
  const reducerManager = createReducerManager(rootReducers);
  const store = configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}
