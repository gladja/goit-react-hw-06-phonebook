import { BtnDel, Item, List, Row } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContacts } from '../../redux/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter )

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
  };

  const contactsFilterResult = contacts.filter(el => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <List>
      {contactsFilterResult && contactsFilterResult.map(({ id, name, number }) => (
        <Item key={id}>
          <Row>{name}</Row>
          <Row> {number}</Row>
          <BtnDel
            onClick={() => handleDelete(id)}
          >
            <IconContext.Provider value={{ color: 'grey', size: 25 }}>
            <AiFillDelete/>
            </IconContext.Provider>
          </BtnDel>
        </Item>
      ))}
    </List>
  );
};
