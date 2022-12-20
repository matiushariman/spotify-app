import { AuthUtils } from '@spotify-app/auth-utils';
import { UsersApi } from '@spotify-app/api-client';

export const fetchProfile = async () => {
  const authUtils = new AuthUtils();
  const usersApi = new UsersApi({
    token: authUtils.getToken(process.env['NX_PRIVATE_KEY'] as string),
  });

  const { data } = await usersApi.getCurrentUserProfile();

  return data;
};
