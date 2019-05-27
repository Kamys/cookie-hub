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
  customCall(value, form, fn) {
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
      if (ruleName === 'custom') {
        const isCustomValid = validationMethods.customCall(fieldValue, form, ruleArgs);
        if (!isCustomValid) {
          return false;
        }
        continue;
      }

      const validationMethod = validationMethods[ruleName];
      const validationMethodArgs = [fieldValue, ruleArgs];
      const isMethodValid = validationMethod(...validationMethodArgs);
      if (validationMethod && !isMethodValid) {
        return false;
      }
    }
  }

  return true;
};

export default { isValid };
