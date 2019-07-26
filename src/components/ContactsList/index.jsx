import React from 'react';
import { Row } from 'reactstrap';
import Contact from '../Contact';

const ContactsList = ({ contacts }) => {
  return (
    <Row>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </Row>
  );
};

export default ContactsList;
