import user from '../../user/index.js';

const loginFormError = document.querySelector('.authorization__error');
const loginFormSubmit = document.querySelector('.authorization__submit');

const handleLoginSubmit = (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  loginFormError.textContent = '';

  user.login(username, password, loginFormError);
}

loginFormSubmit.addEventListener('click', handleLoginSubmit);
