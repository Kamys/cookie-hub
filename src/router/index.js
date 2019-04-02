const PAGE_URL = {
  main: '/',
  login: '/page/login/',
};

/**
 * Goes by url.
 * @param {String} url - The path to the page.
 */
const goTo = url => {
  location = `${location.origin}/src${url}`;
};

/**
 * Returns to the previous page.
 */
const goBack = () => {
  window.history.back();
};

export default { goTo, goBack, PAGE_URL };
