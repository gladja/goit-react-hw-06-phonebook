import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { createContacts } from './actions_old';


//immer
export const reducerContacts = createReducer( initialState, {
  [createContacts]: () => {

  }
})
