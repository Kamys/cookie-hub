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
    for (const param of validationParams) {
      const [methodName, methodArg] = param;

      if (methodName === 'custom') {
        const isCustomValid = validationMethods.customCall(fieldValue, form, methodArg);
        if (!isCustomValid) {
          return false;
        }
        continue;
      }

      const validationMethod = validationMethods[methodName];
      const validationMethodArgs = [fieldValue, methodArg];
      const isMethodValid = validationMethod(...validationMethodArgs);
      if (validationMethod && !isMethodValid) {
        return false;
      }
    }
  }

  return true;
};

export default { isValid };
