import { Component } from 'react';
import { nanoid } from 'nanoid';
//import Notiflix from 'notiflix';


import  phonebook  from './data/phonebook.json';
import  ContactForm  from './ContactForm/ContactForm';
import  ContactList  from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [...phonebook],
      filter: '',
      name: '',
      number: '',
  };

  handleAddContact = (name, number) => {
    const newContact = {
      id: nanoid(),
        name,
       number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
    };
    
    handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

    render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
            <ContactList contacts={this.state.contacts} />
            <h2>Contacts</h2>
        <input
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={this.handleFilterChange}
        />

        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;