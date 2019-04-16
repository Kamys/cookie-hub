const PAGE_URL = {
  main: '/',
  login: '/page/login/',
};

/**
 * Goes by url.
 * @param {String} url - The path to the page.
 */
const goTo = url => {
  window.location = `${window.location.origin}${url}`;
};

/**
 * Returns to the previous page.
 */
const goBack = () => {
  window.history.back();
};

export default { goTo, goBack, PAGE_URL };
