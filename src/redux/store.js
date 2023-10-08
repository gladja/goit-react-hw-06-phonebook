import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, PERSIST, PURGE, REGISTER, PAUSE, REHYDRATE } from 'redux-persist';

const reducer = combineReducers({
  phonebook: contactsReducer,
});

const persistConfig = {
  key: 'phonebook',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
