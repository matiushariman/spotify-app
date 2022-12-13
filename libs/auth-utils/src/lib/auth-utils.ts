import * as CryptoJS from 'crypto-js';

import { Cookies } from 'typescript-cookie';

import type { SetTokenParams } from './auth-utils.types';

export class AuthUtils {
  private readonly cryptoJs: typeof CryptoJS.AES;

  constructor() {
    this.cryptoJs = CryptoJS.AES;
  }

  setToken({ token, privateKey }: SetTokenParams) {
    const encryptedToken = CryptoJS.AES.encrypt(token, privateKey).toString();

    Cookies.set('token', encryptedToken);
  }

  getToken(privateKey: string) {
    const token = (Cookies.get('token') as string) ?? '';
    const bytes = CryptoJS.AES.decrypt(token, privateKey);

    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
