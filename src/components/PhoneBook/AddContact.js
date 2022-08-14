import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel, StyledButton } from './PhoneBook.styled';

export class PhoneBook extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  };
  state = {
    id: '',
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      id: nanoid(),
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.stateReset();
  };

  stateReset = () => {
    this.setState({ id: '', name: '', number: '' });
  };
  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledLabel>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}
