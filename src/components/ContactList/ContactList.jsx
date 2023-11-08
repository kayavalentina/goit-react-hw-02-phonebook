import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  ContactInfo,
  Name,
  PhoneNumber,
  DeleteButton,
} from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactInfo>
            <Name>{contact.name}</Name>
            <PhoneNumber>{contact.number}</PhoneNumber>
          </ContactInfo>
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
