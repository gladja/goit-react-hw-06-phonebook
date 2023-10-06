import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice';
// import { reducerContacts } from './reducer_old';

export const store = configureStore({ reducer: {
    phonebook: contactsReducer,
  } });
