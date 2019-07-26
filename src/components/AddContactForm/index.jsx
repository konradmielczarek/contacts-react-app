import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';
// import Debug from './Debug';
import * as Yup from 'yup';
import { addContact } from '../../store/actions/contacts/addContact';
import { getContacts } from '../../store/actions/contacts/getContacts';

const AddContactForm = ({ addContact, getContacts, currentLimit, ADD_CONTACT_PENDING, ADD_CONTACT_ERROR }) => {
  const initialContact = {
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    isFavorite: false
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too short')
      .max(25, 'Too long')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too short')
      .max(25, 'Too long')
      .required('Required'),
    phone: Yup.string()
      .min(8, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    company: Yup.string()
      .max(40, 'Too long')
  });

  return (
    <Formik
      initialValues={initialContact}
      validationSchema={validationSchema}
      validateOnChange={false}
      onSubmit={ async (values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
      render={({ values, errors, handleChange, handleSubmit }) => (
        <>
          <Form onSubmit={handleSubmit} className="border p-3" autoComplete="off">
            <FormGroup>
              <Label htmlFor="firstName">
                First name
                <span className="text-danger"> *</span>
              </Label>
              <Input onChange={handleChange} value={values.firstName} type="text" name="firstName" id="firstName" placeholder="first name"/>
              {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">
                Last name
                <span className="text-danger"> *</span>
              </Label>
              <Input onChange={handleChange} value={values.lastName} type="text" name="lastName" id="lastName" placeholder="last name"/>
              {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">
                Phone
                <span className="text-danger"> *</span>
              </Label>
              <Input onChange={handleChange} value={values.phone} type="text" name="phone" id="phone" placeholder="phone"/>
              {errors.phone && <small className="text-danger">{errors.phone}</small>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="company">Company</Label>
              <Input onChange={handleChange} value={values.company} type="text" name="company" id="company" placeholder="company"/>
              {errors.company && <small className="text-danger">{errors.company}</small>}
            </FormGroup>
            <FormGroup check>
              <Label check className="mb-2">
                <Input onChange={handleChange} checked={values.isFavorite} type="checkbox" name="isFavorite" id="isFavorite" />
                Add to favorites
              </Label>
            </FormGroup>
            <Button className="btn-warning btn-block" type="submit" disabled={ADD_CONTACT_PENDING}>
              {ADD_CONTACT_PENDING && <i className="fas fa-spinner fa-spin mr-2"></i>}
              Add contact
            </Button>
          </Form>
          {/*<Debug/>*/}
        </>
      )}
    />
  )
};

const mapStateToProps = state => ({
  ...state.addContact, ...state.getContacts
});
const mapDispatchToProps = dispatch => ({
  addContact: (contact) => dispatch(addContact(contact)),
  getContacts: (limit) => dispatch(getContacts(limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
