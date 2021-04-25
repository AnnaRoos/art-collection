
import { render } from '@testing-library/react';
import React from 'react';
import useForm from '../../hooks/useForm';
import { formConfig } from '../../utils/formConfig';

export default function SignupForm() {
  const { renderFormInputs, isFormValid, reset } = useForm(formConfig);


  const formSubmissionHandler = (event) => {
    event.preventDefault();
    reset();
  }


  return (
    <form className="signupForm" onSubmit={formSubmissionHandler}>
      <h1>Add new artwork</h1>
      {renderFormInputs()}
      <p>* field is required</p>
      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
}
