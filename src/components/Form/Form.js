import React from 'react';

import useForm from '../../hooks/useForm';
import useHttp from '../../hooks/useHttp';
import { formConfig } from '../../utils/formConfig';

import styles from './Form.module.css';

const Form = props => {
  const { getValuesFromForm, renderFormInputs, isFormValid, reset } = useForm(formConfig);

  const {
    isLoading,
    error,
    sendRequest: postRequest,
  } = useHttp();

  const createNewItem = (item, data) => {
    const generatedId = data.name;
    const newItem = { id: generatedId, ...item };
    props.addItemToList(newItem);
  };


  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    const formObject = getValuesFromForm();
    postRequest({
      url:
        'https://art-collection-ba95c-default-rtdb.europe-west1.firebasedatabase.app/artwork.json',
      method: 'POST',
      body: formObject,
      headers: {
      'Content-Type': 'application/json'
      }
    }, createNewItem.bind(null, formObject));
    
    reset();
  };

  return (
    <form className={styles.form} onSubmit={formSubmissionHandler}>
      <h2>Add new artwork</h2>
      {renderFormInputs()}
      <p>* field is required</p>
      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
};

export default Form;
