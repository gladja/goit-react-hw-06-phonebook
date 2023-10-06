import Notiflix from 'notiflix';
import { Btn, Form, Input, Label } from './ContactForm.styled';
import { createContacts } from '../../redux/slice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);

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

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces.
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            placeholder='First name Last name'
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
            placeholder='123-45-67'
          />
        </Label>

        <Btn type='submit'>Add contact</Btn>
      </Form>
    </>
  );
};
