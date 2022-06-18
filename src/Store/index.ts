import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducers/RootReducers';
import RootSagas from './Redux-Saga/Root.Sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['header']
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware
const sagaMiddleware = createSagaMiddleware();
export const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(middleware)
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(RootSagas);

export default store;
