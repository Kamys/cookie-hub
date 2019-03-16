import api from '../api/index.js';

const showLoginError = (errorNode, errerText = 'Ошибка входа') => {
  errorNode.textContent = errerText;
}

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

const loadMainPage = () => {
  const url = location.href.split('page/login/').join('');
  window.open( `${url}`,'_self');
}

const loadLoginPage = () => {
  const urlStart = location.href.split('src')[0];
  const urlEnd = 'src/page/login/index.html';
  window.open(`${urlStart}${urlEnd}`, '_self');
}

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

const logout = () => {
  localStorage.removeItem('token');
  loadLoginPage();
}

export default { initUser, logout, login };
