import { Component } from 'react';
import { nanoid } from 'nanoid';
//import Notiflix from 'notiflix';


import  phonebook  from './data/phonebook.json';
import  AddContact  from './AddContact/AddContact';
import  ContactList  from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [...phonebook],
    name: ''
  };

  handleAddContact = (name) => {
    const newContact = {
      id: nanoid(),
      name,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContact onAddContact={this.handleAddContact} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;