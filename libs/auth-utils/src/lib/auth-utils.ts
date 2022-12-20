import * as CryptoJS from 'crypto-js';

import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

import type { SetTokenParams } from './auth-utils.types';

export class AuthUtils {
  private readonly cryptoJs: typeof CryptoJS.AES;

  constructor() {
    this.cryptoJs = CryptoJS.AES;
  }

  setToken({ token, privateKey }: SetTokenParams) {
    const encryptedToken = CryptoJS.AES.encrypt(token, privateKey).toString();

    setCookie('token', encryptedToken);
  }

  getToken(privateKey: string) {
    const token = (getCookie('token') as string) ?? '';
    const bytes = CryptoJS.AES.decrypt(token, privateKey);

    return bytes.toString(CryptoJS.enc.Utf8);
  }

  checkToken() {
    return typeof getCookie('token') === 'string';
  }

  removeToken() {
    removeCookie('token');
  }
}
