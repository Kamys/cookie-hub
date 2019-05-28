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
  custom(value, fn, form) {
    return fn(value, form);
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

    for (const [ruleName, ruleArgs] of validationParams) {
      const validationMethod = validationMethods[ruleName];
      const validationMethodArgs = [fieldValue, ruleArgs, form];
      const isMethodValid = validationMethod(...validationMethodArgs);
      if (validationMethod && !isMethodValid) {
        return false;
      }
    }
  }

  return true;
};

export default { isValid };
