import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { AppContainer, Title, FormContainer } from './App.styled';
import phonebook from '../data/phonebook.json';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [...phonebook],
    filter: '',
  };

  handleAddContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };
  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <FormContainer>
          <ContactForm
            onAddContact={this.handleAddContact}
            contacts={contacts}
          />
        </FormContainer>
        <Title>Phonebook</Title>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </AppContainer>
    );
  }
}

export default App;
