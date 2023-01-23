import React from 'react'
import Cookie from 'js-cookie';
// import login from '../Login';  
import { cookieName, isProd } from '../../../Config/Config';

export const setCookie = (value, keepLoggedIn) => {
    if (keepLoggedIn) {
      Cookie.set(cookieName, value, { expires: 30, secure: isProd});
    } else {
      Cookie.set(cookieName, value, { expires: 1, secure: isProd});
    }
  };
