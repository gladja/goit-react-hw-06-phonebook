import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './ContactForm/ContactForm.styled';

export const App = () => {
  return (
    <>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
