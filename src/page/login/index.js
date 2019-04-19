import user from '../../user/index.js';
import router from '../../router/index.js';
import validation from '../../validation/index.js';

if (user.isToken) {
  router.goTo(router.PAGE_URL.main);
}

const loginFormError = document.querySelector('.authorization__error');
const loginFormSubmit = document.querySelector('.authorization__submit');

const showLoginError = (errorText) => {
  loginFormError.textContent = errorText;
}

const showValidationError = (errorText) => {
  const defaultErrorText = 'Данные введены неверно!';
  loginFormError.textContent = errorText || defaultErrorText;
};

const schemaValidation = {
  login: {
    required: true,
    minLength: 4,
    maxLength: 10,
    regex: /^[a-z0-9_-]+$/i,
  },
  password: {
    required: true,
    minLength: 4,
    maxLength: 10,
  }
};

const handleLoginSubmit = (event) => {
  event.preventDefault();

  const formData = {
    login: document.querySelector('#username').value,
    password: document.querySelector('#password').value,
  };

  loginFormError.textContent = '';

  if (!validation.isValid(formData, schemaValidation)) {
    showValidationError();
    return;
  }

  user.login(formData.login, formData.password, showLoginError);
};

loginFormSubmit.addEventListener('click', handleLoginSubmit);
