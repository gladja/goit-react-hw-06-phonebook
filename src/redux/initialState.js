import data from '../data/data.json'

export const initialState = {
  contacts: [...data],
  filter: '',
};
