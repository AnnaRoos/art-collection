import React from 'react';
import Input from '../components/Input/Input';

import {
  requiredRule,
  yearRule
} from './inputValidationRules';


function createFormFieldConfig(
  label,
  name,
  type,
  required = true,
  list = null,
  options = null,
  select = false,
  defaultValue = ''
) {
  return {
    renderInput: (handleChange, handleBlur, value, isValid, error, key) => {
      return (
        <Input
          key={key}
          name={name}
          id={name}
          type={type}
          label={label}
          required={required}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorMessage={error}
          list={list}
          options={options}
          select={select}
        />
      );
    },
    label,
    value: defaultValue,
    valid: !required,
    errorMessage: '',
    touched: false,
  };
}

const titleOptions = <option value="No title" />;
const artistOptions = <option value="Unknown" />;
const typeOptions = (
  <>
    <option value="Painting" />
    <option value="Sculpture" />
    <option value="Print" />
    <option value="Photo" />
    <option value="Textile" />
    <option value="Object" />
    <option value="Installation" />
    <option value="Digital" />
  </>
);
const materialOptions = (
  <>
    <option value="Canvas">Canvas</option>
    <option value="Paper">Paper</option>
    <option value="Ceramics">Ceramics</option>
    <option value="Glass">Glass</option>
    <option value="Glass">Plastic</option>
    <option value="Textile">Textile</option>
    <option value="Metal">Metal</option>
    <option value="Wood">Wood</option>
    <option value="Digital">Digital</option>
    <option value="Other">Other</option>
  </>
);
// object representation of signup form
export const formConfig = {
  title: {
    ...createFormFieldConfig(
      'Title: ',
      'title',
      'text',
      true,
      'titles',
      titleOptions
    ),
    validationRules: [requiredRule('Title')],
  },
  artist: {
    ...createFormFieldConfig(
      'Artist: ',
      'artist',
      'text',
      true,
      'artists',
      artistOptions
    ),
    validationRules: [requiredRule('Artist')],
  },
  year: {
    ...createFormFieldConfig('Year: ', 'year', 'number', false),
    validationRules: [yearRule('Year')],
  },
  yearPurchased: {
    ...createFormFieldConfig(
      'Year purchased: ',
      'yearPurchased',
      'number',
      false
    ),
    validationRules: [yearRule('Year purchased')],
  },
  price: {
    ...createFormFieldConfig('Price(SEK): ', 'price', 'number', false),
    validationRules: [],
  },
  type: {
    ...createFormFieldConfig(
      'Type: ',
      'type',
      'text',
      true,
      'types',
      typeOptions
    ),
    validationRules: [requiredRule('Type')],
  },
  material: {
    ...createFormFieldConfig(
      'Material: ',
      'material',
      'material',
      true,
      null,
      materialOptions,
      true,
      ''
    ),
    validationRules: [requiredRule('Material')],
  },
  height: {
    ...createFormFieldConfig('Height(cm): ', 'height', 'number', false),
    validationRules: null,
  },
  width: {
    ...createFormFieldConfig('Width(cm): ', 'width', 'number', false),
    validationRules: null,
  },
  depth: {
    ...createFormFieldConfig('Depth(cm): ', 'depth', 'number', false),
    validationRules: null,
  },
/*   image: {
    ...createFormFieldConfig('Select an image: ', 'image', 'file', false),
    validationRules: null,
  }, */
};
