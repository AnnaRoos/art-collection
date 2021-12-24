import React from 'react';

import styles from './Input.module.css';

const InputField = (props) => {
  const {
    label,
    type,
    name,
    handleChange,
    handleBlur,
    errorMessage,
    isValid,
    value,
    list,
    options,
    required,
  } = props;

  let datalist;
  if (list) {
    datalist = <datalist id={list}>{options}</datalist>;
  }

  return (
    <div className="inputContainer">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        list={list}
      />
      {list ? datalist : null}
      {required ? '*' : null}
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </div>
  );
};

export default React.memo(InputField);
