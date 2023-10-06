import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {

    createContacts: (state, { type, payload }) => {
      state.contacts &&
        state.contacts.push({
          id: nanoid(),
          ...payload,
        })
        // :
        // (state.contacts = [
        //   {
        //     ...payload,
        //     id: nanoid(),
        //   },
        // ])
    },

    deleteContacts: (state, {payload}) => {
      const filteredItems = state.contacts.filter(el => el.id !== payload)
      state.contacts = [...filteredItems];
    },

    filterContacts: (state, {payload}) => {
      state.filter = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContacts, deleteContacts, filterContacts, contactsFilterResult } = contactsSlice.actions;
