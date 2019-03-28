import api from '../api/index.js';

/**
 * Displays the error text in the html element.
 * @param {object} errorNode - Html element to display the error text.
 * @param {string} errorText - Error text.
 */
const showLoginError = (errorNode, errorText = 'Ошибка входа') => {
  errorNode.textContent = errorText;
}

/**
 * Authorize user.
 * @param {string} username - User name.
 * @param {string} password - Password.
 * @param {object} errorNode - Html element to display the error text.
 */
const login = (username, password, errorNode) => {
  api.user.login(username, password)
    .then(data => {
      if (data.error) {
        return showLoginError(errorNode);
      }
      localStorage.setItem('token', data.data.token);
      loadMainPage();
    });
}

/**
 * Loads the main page.
 */
const loadMainPage = () => {
  const url = location.href.split('page/login/').join('');
  window.open( `${url}`,'_self');
}

/**
 * Loads the login page.
 */
const loadLoginPage = () => {
  const urlStart = location.href.split('src')[0];
  const urlEnd = 'src/page/login/index.html';
  window.open(`${urlStart}${urlEnd}`, '_self');
}

/**
 * Initializes the user.
 * @returns {object} Object with user data.
 */
const initUser = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return loadLoginPage();
  }

  const userData = api.user.getUserData(token);

  if (userData.error) {
    logout();
  }

  return userData;
}

/**
 * The user logs out of his account.
 */
const logout = () => {
  localStorage.removeItem('token');
  loadLoginPage();
}

export default { initUser, logout, login };
