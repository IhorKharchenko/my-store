import React, { Component } from 'react';
import { Box } from 'components/Box';
export class App extends Component {
  state = {
    filter: '',
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <Box as="main" p="4" width="620px" ml="auto" mr="auto" bg="secondaryText">
        <h1>Phonebook</h1>
      </Box>
    );
  }
}
