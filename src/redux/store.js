import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
  phonebook: contactsReducer,
});

const persistConfig = {
  key: 'phonebook',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);