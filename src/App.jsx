import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from './hooks/useLocalStorage';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
  const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useLocalStorage('contacts', initialState);
  const [filter, setFilter] = useState('');

  const handleSubmit = (name, number) => {
    checkContactIsExist(name)
      ? alert(`${name} is already in contacts`)
      : setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const checkContactIsExist = name => {
    return contacts.find(
      contact => toLowerCaseFunction(contact.name) === toLowerCaseFunction(name)
    );
  };

  const handleFilterContact = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = value => {
    return contacts.filter(contact =>
      toLowerCaseFunction(contact.name).includes(toLowerCaseFunction(value))
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const toLowerCaseFunction = value => {
    return value.toLowerCase();
  };

  return (
    <div className="Container Main">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <div className="Container ContactsListSection ">
        <h2 className="ContactsHeader">Contacts</h2>
        {contacts.length !== 0 && (
          <Filter filterValue={filter} onChange={handleFilterContact} />
        )}
        {contacts.length === 0 && (
          <p>There are no contacts in the phone book!</p>
        )}
        <ContactList
          contacts={filteredContacts(filter)}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
};

export default App;
