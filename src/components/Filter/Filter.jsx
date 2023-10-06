import { Label, Input } from '../ContactForm/ContactForm.styled';
import { Wrap } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/slice';

export const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(state => state.phonebook.filter )

const contactsFilter = (e) => {
  dispatch(filterContacts(e.target.value))
};

  return (
    <Wrap>
        <Label>
          Find contacts by name
          <Input
            onChange={contactsFilter}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title='Find contacts by name'
            placeholder='Write name'
            value={filter}
          />
        </Label>
    </Wrap>
  );
};
