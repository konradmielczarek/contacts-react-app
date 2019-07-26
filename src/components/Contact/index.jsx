import React from 'react';
import { Col } from 'reactstrap';

const Contact = ({ contact }) => {
  return (
    <Col sm={12}>
      <div className="contact p-2 d-flex align-items-center">
        <p className="m-0 mr-3">{contact.id}.</p>
        <div>
          <p className="m-0">{contact.firstName} {contact.lastName}</p>
          <small className="text-muted">{contact.company}</small>
        </div>
        <div className="dropdown ml-auto">
          <button type="button" className="contact-button">
            <i className="fas fa-ellipsis-v"/>
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button" role="menuitem">Edit</button>
            <button className="dropdown-item" type="button" role="menuitem">Remove</button>
          </div>
        </div>
      </div>
      <hr/>
    </Col>
  )
};

export default Contact;
