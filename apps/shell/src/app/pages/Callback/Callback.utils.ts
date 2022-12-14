import { AuthUtils } from '@spotify-app/auth-utils';

export const setTokenFromUrlParams = async (hash: string) => {
  const authUtils = new AuthUtils();
  const splitHash = hash.split('access_token=');
  const accessToken = splitHash[1].split('&');

  authUtils.setToken({
    token: accessToken[0],
    privateKey: process.env['NX_PRIVATE_KEY'] ?? '',
  });
};
