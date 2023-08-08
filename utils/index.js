// ***This file contains all special functions needed in the app
import Cookies from 'js-cookie';

export const debounce = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 1500);
  };
};

export function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

export function containsLowerCase(str) {
  return /[a-z]/.test(str);
}

export function containsSpecial_Character(str) {
  return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
}

export function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

export function convertDate(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join("-");
}

export const getAccessToken = () => { 
  // const accessToken = localStorage.getItem("token")
  // return JSON.parse(accessToken);
  const accessToken = Cookies.get("token");
  return accessToken;
}

export const getRefreshToken = () => {
  const refreshToken = Cookies.get("refreshToken");
  return refreshToken;
}

export const getLocalStorage = (key) => {
  return localStorage.getItem(key)
}

export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
}