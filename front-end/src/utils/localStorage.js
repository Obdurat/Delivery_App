export const saveOnLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};

export const saveUser = (user) => {
  saveOnLocalStorage('user', user);
};

export const getUser = () => getFromLocalStorage('user');

export const removeUser = () => localStorage.removeItem('user');
