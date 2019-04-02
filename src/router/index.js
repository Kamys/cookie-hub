const PAGE_URL = {
  main: '/',
  login: '/page/login/',
};

const goTo = url => {
  location = `${location.origin}/src${url}`;
};

const goBack = () => {
  window.history.back();
};

export default { goTo, goBack, PAGE_URL };
