import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledList, StyledListItem } from './PhoneBook.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <>
    <h2>Contacts</h2>
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <StyledListItem key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <StyledButton type="button" onClick={() => onDeleteContact(id)}>
            Delete contact
          </StyledButton>
        </StyledListItem>
      ))}
    </StyledList>
  </>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
