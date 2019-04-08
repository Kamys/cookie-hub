import api from '../api/index.js';
import router from '../router/index.js';

/**
 * Authorize user.
 * @param {string} username - User name.
 * @param {string} password - Password.
 * @param {function} error - Callback function to handle the error.
 */
const login = (username, password, error) => {
  api.user.login(username, password)
    .then(data => {
      if (data.error) {
        error(data.error);
        return;
      }

      localStorage.setItem('token', data.data.token);
      router.goTo(router.PAGE_URL.main);
    });
}

/**
 * Initializes the user.
 * @returns {object} Object with user data.
 */
const initUser = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return router.goTo(router.PAGE_URL.login);
  }

  api.user.getUserData(token)
    .then(data => {
      if (data.error) {
        logout();
        return;
      }

      return data;
    });
};

/**
 * The user logs out of his account.
 */
const logout = () => {
  localStorage.removeItem('token');
  router.goTo(router.PAGE_URL.login);
}

export default { initUser, logout, login };
