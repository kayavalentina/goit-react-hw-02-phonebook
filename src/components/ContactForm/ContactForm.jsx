import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ContactForm extends Component {
  state = {
    name: '',
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleAddContact = () => {
    const { name } = this.state;
    if (name.trim() === '') {
      return;
    }
    this.props.onAddContact(name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleAddContact}>+Add contact</button>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;

