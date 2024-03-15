import { contactsSliceReducer } from './contactsSlice/contactsSlice';
import { filterSliceReducer } from './filterSlice/filterSlice';

export const reducer = {
  contacts: contactsSliceReducer,
  filter: filterSliceReducer,
};
