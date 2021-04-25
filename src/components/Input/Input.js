import React from 'react';

import styles from './Input.module.css';

function InputField(props) {
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
    select,
    required
  } = props;

  let datalist;
  if (list) {
    datalist = <datalist id={list}>{options}</datalist>;
  }

  let selectlist;
  if (select) {
    selectlist = (
      <select
        onChange={handleChange}
        onBlur={handleBlur}
        id={name}
        name={name}
        multiple
      >
        {options}
      </select>
    );
  }


  return (
    <div className="inputContainer">
      <label htmlFor={name}>{label}</label>
      {!select ?
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          list={list}
        /> : selectlist}
      {list ? datalist : null}
      {required ? '*' : null}
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </div>
  );
}

export default React.memo(InputField);
