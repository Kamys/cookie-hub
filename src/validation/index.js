const form = {
    login: 'Vasa',
    password: '13edewd',
    password2: '13edewd',
}

const schemaValidation = {
    login: {
        required: true,
        minLength: 4,
        maxLength: 10,
        regex: '123123',
    },
    password: {
        required: true,
        minLength: 4,
        maxLength: 10,
        custom: (value, form) => {
            return value === form.password2;
        }
    }
}

/**
 * Check valid data in form.
 * @param form Data of form.
 * @param schemaValidation
 * @return true - is all data in form valid.
 */
const isValid = (form, schemaValidation) => {
    return true;
}

export default { isValid }
