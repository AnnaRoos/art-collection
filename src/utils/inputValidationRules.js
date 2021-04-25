/**
 * creates and returns a validation rule object that
 * is used by useForm hook to validate the form inputs
 *
 * @param {string} ruleName - name of the validation rule
 * @param {string} errorMessage - message to display
 * @param {function} validateFunc - validation function
 */
function createValidationRule(ruleName, errorMessage, validateFunc) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc,
  };
}

export const requiredRule = (inputName) => {
  return createValidationRule(
    'required',
    `${inputName} is required`,
    (inputValue, formObj) => inputValue !== ''
  );
};

export const yearRule = (inputName) => {
  const currentYear = new Date().getFullYear()
  return createValidationRule(
    'yearRule',
    `${inputName} must be a valid year and no more than ${currentYear}`,
    (inputValue, formObj) => inputValue ? inputValue.length === 4 && inputValue <= currentYear : true
  );
};

export const minLengthRule = (inputName, minCharacters) => {
  return createValidationRule(
    'minLength',
    `${inputName} should contain at least ${minCharacters} characters`,
    (inputValue, formObj) => inputValue.length >= minCharacters
  );
};

export function maxLengthRule(inputName, maxCharacters) {
  return createValidationRule(
    'minLength',
    `${inputName} cannot contain more than ${maxCharacters} characters`,
    (inputValue, formObj) => inputValue.length <= maxCharacters
  );
}

export function passwordMatchRule() {
  return createValidationRule(
    'passwordMatch',
    `passwords do not match`,
    (inputValue, formObj) => inputValue === formObj.password.value
  );
}
