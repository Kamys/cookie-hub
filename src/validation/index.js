const validationMethods = {
  required(value) {
    return value !== '';
  },
  minLength(value, num) {
    return value.length >= num;
  },
  maxLength(value, num) {
    return value.length <= num;
  },
  regex(value, regex) {
    return regex.test(value);
  },
};

/**
 * Check valid data in form.
 * @param {Object} form - Data of form.
 * @param {Object} schemaValidation - The validation rules for form data.
 * @returns {Boolean}
 */
const isValid = (form, schemaValidation) => {
  const fieldNames = Object.keys(schemaValidation);
  for (const fieldName of fieldNames) {
    const fieldValue = form[fieldName];
    const validationParams = Object.entries(schemaValidation[fieldName]);

    for (const param of validationParams) {
      if (param[0] === 'custom') {
        if (param[1](fieldValue, form)) {
          continue;
        }
        return false;
      }

      const validationMethod = validationMethods[param[0]];
      const validationMethodArgs = [fieldValue, param[1]];
      if (validationMethod && !validationMethod(...validationMethodArgs)) {
        return false;
      }
    }
  }

  return true;
};

export default { isValid };
