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
 * @param form Data of form.
 * @param schemaValidation
 * @return true - is all data in form valid.
 */
const isValid = (form, schemaValidation) => {
  const fieldNames = Object.keys(schemaValidation);
  for (const fieldName of fieldNames) {
    const fieldValue = form[fieldName];
    const validationParams = Object.entries(schemaValidation[fieldName]);

    for (const param of validationParams) {
      if (param[0] === 'custom') {
        if (!param[1](fieldValue, form)) {
          return false;
        }
        continue;
      }

      if (!validationMethods[param[0]](fieldValue, param[1])) {
        return false;
      }
    }
  }

  return true;
};

export default { isValid };
