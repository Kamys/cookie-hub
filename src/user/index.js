import api from '../api/index.js';

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

export default {initUser, logout };
