import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name should be at least 2 characters long')
    .max(30, 'Name should not exceed 30 characters')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Phone number should contain only digits')
    .min(7, 'Phone number should have at least 7 digits')
    .max(15, 'Phone number should not exceed 15 digits')
    .required('Phone number is required'),
});

const ContactForm = ({ onAddContact, contacts }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const onSubmit = (values, { resetForm }) => {
  const { name } = values;
  if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
    Notiflix.Notify.failure(`${name} is already in contacts!`);
  } else {
    onAddContact(values.name, values.number);
    resetForm();
  }
};


  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="number">Phone Number</label>
          <Field type="text" name="number" id="number" placeholder="Phone Number" />
          <ErrorMessage name="number" component="div" className="error-message" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactForm;