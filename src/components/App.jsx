import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContacts, deleteContacts, filterContacts, contactsFilterResult } from '../redux/slice';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './ContactForm/ContactForm.styled';


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter )

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const newContacts = {
      name: name.value,
      number: number.value,
    };
    if (name.value.trim() === '' || number.value.trim() === '') {
      return Notiflix.Notify.warning('Please write First name Last name and number');
    }
    const isDoubleName = contacts.find(el => el.name === name.value);
    if (isDoubleName) {
      return Notiflix.Notify.failure(`${name.value} is already in contacts`);
    }

    dispatch(createContacts(newContacts));
    e.currentTarget.reset();
  };

  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
  };

  const contactsFilter = (e) => {
    dispatch(filterContacts(e.target.value))
  };

  const contactsFilterResult = contacts.filter(el => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <div>
        <Title>Phonebook</Title>
        <ContactForm
          handleSubmit={handleSubmit}
        />
        <Title>Contacts</Title>
        <Filter
          contactsFilter={contactsFilter}
          filter={filter}
        />
        <ContactList
          contacts={contactsFilterResult}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

