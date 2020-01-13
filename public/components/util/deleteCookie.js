const deleteCookie = (name) => {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  window.location.href = '../../index.html';
};

export default deleteCookie;
